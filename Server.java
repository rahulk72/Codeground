import java.util.concurrent.TimeUnit;
import com.sun.net.httpserver.*;
import java.io.*;
import java.net.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.security.SecureRandom;
import java.util.*;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.util.concurrent.*;
import javax.net.ssl.*;
import java.net.http.*;
import java.time.Duration;

public class Server {

    static final int PORT = 8080;
    static final String BASE = "http://localhost:" + PORT;

    static final Path USERS = Path.of("users.txt");
    static final Path SESS = Path.of("sessions.txt");

    static final Map<String, String> sessions = new ConcurrentHashMap<>();
    static final Map<String, Object[]> resets = new ConcurrentHashMap<>();

    static final SecureRandom RND = new SecureRandom();

    public static void main(String[] args) throws Exception {

        if (Files.exists(SESS)) {
            for (String l : Files.readAllLines(SESS)) {
                String[] p = l.split("\\|");
                if (p.length == 2) sessions.put(p[0], p[1]);
            }
        }

        HttpServer s = HttpServer.create(new InetSocketAddress(PORT), 0);
        s.createContext("/", Server::handle);
        s.start();

        System.out.println("CodeGround running at " + BASE);
    }

    // ---------- MAIN REQUEST HANDLER ----------

    static void handle(HttpExchange x) throws IOException {

        try {

            String p = x.getRequestURI().getPath();

            // Coding Arena placeholder endpoints
            if (p.equals("/api/arena/run") || p.equals("/api/arena/submit")) {

                if (!"POST".equalsIgnoreCase(x.getRequestMethod())) {
                    x.getResponseHeaders().set("Allow", "POST");

                    send(x, 405, "application/json; charset=utf-8",
                            "{\"success\":false,\"message\":\"POST required\"}");

                    return;
                }

                String body = new String(
                        x.getRequestBody().readAllBytes(),
                        StandardCharsets.UTF_8
                );

                send(x, 200, "application/json; charset=utf-8", arenaApi(p, body));
                return;
            }

            if (p.startsWith("/api/")) {

                if (!"GET".equalsIgnoreCase(x.getRequestMethod())
                        && !"POST".equalsIgnoreCase(x.getRequestMethod())) {

                    x.getResponseHeaders().set("Allow", "GET, POST");

                    send(x, 405, "application/json; charset=utf-8",
                            "{\"ok\":false,\"msg\":\"Method not allowed\"}");

                    return;
                }

                Map<String, String> fields = form(x);

                if (p.equals("/api/ai/explain")) {

                    send(x, 200, "application/json; charset=utf-8",
                            explain(x, fields));

                } else if (p.equals("/api/run")) {

                    send(x, 200, "application/json; charset=utf-8",
                            run(x, fields));

                } else {

                    send(x, 200, "application/json; charset=utf-8",
                            api(p, fields, x));
                }

                return;
            }

            file(x, p);

        } catch (Exception e) {

            e.printStackTrace();

            if (x.getResponseCode() == -1) {

                send(x, 500, "application/json; charset=utf-8",
                        "{\"ok\":false,\"msg\":\"Server error. Check the terminal for details.\"}");

            } else {
                x.close();
            }
        }
    }

    // ---------- AI HELPER: GOOGLE GEMINI ----------

    static String explain(HttpExchange x, Map<String, String> f) throws Exception {

        if (!sessions.containsKey(cookie(x)))
            return out(false, "AI helper ke liye pehle login karo.");

        String key = System.getenv("GEMINI_API_KEY");

        if (key == null || key.isBlank())
            return out(false,
                    "AI abhi set up nahi hai. GEMINI_API_KEY set karke server dobara chalao.");

        String code = f.getOrDefault("code", "");
        String err = f.getOrDefault("error", "");
        String task = f.getOrDefault("task", "");
        String mode = f.getOrDefault("mode", "debug");

        if (code.length() > 8000 || err.length() > 4000 || task.length() > 3000)
            return out(false, "Input AI ke liye bahut lamba hai.");

        String model = System.getenv("GEMINI_MODEL");

        if (model == null || model.isBlank())
            model = "gemini-2.5-flash";

        String sys =
                "You are a friendly Java teacher for beginners. Reply in simple Hinglish (Hindi in English letters), "
                + "keeping technical words in English. The code is saved as Main.java so line numbers match. "
                + (mode.equals("hint")
                ? "The student is stuck on the task. Give ONE small hint and the idea of the approach. "
                  + "Do NOT give the full solution or full code. Max 120 words."
                : "Find the mistake. Format: 1) Kya galti hai (with line number), "
                  + "2) Kyun hui, 3) Kaise theek karein (short snippet only). "
                  + "If the code is correct, say so and give one improvement tip. "
                  + "Do not rewrite the whole program. Max 250 words.");

        String usr =
                "Task:\n" + task
                + "\n\nMy Java code:\n" + code
                + "\n\n"
                + (err.isBlank()
                ? "I have not run it yet."
                : "Result of running it (output or error):\n" + err);

        String body =
                "{\"systemInstruction\":{\"parts\":[{\"text\":\""
                + jesc(sys) + "\"}]},"
                + "\"contents\":[{\"role\":\"user\",\"parts\":[{\"text\":\""
                + jesc(usr) + "\"}]}],"
                + "\"generationConfig\":{\"maxOutputTokens\":2048}}";

        HttpRequest req = HttpRequest.newBuilder(
                URI.create(
                        "https://generativelanguage.googleapis.com/v1beta/models/"
                        + model + ":generateContent"
                ))
                .timeout(Duration.ofSeconds(40))
                .header("x-goog-api-key", key)
                .header("content-type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(body))
                .build();

        HttpResponse<String> response =
                HttpClient.newHttpClient().send(
                        req,
                        HttpResponse.BodyHandlers.ofString()
                );

        int status = response.statusCode();

        if (status == 429)
            return out(false, "Free limit poori ho gayi. Thodi der baad try karo.");

        if (status == 404)
            return out(false, "Model '" + model + "' nahi mila. GEMINI_MODEL setting check karo.");

        if (status == 400 || status == 403)
            return out(false, "API key ya request mein problem hai (status " + status + ").");

        if (status != 200)
            return out(false, "AI request fail hui (status " + status + ").");

        String answer = firstText(response.body());

        return answer == null
                ? out(false, "AI ne khali jawab diya. Dobara try karo.")
                : out(true, answer);
    }

    // ---------- GEMINI RESPONSE READER ----------

    static String firstText(String json) {

        int i = json.indexOf("\"text\"");

        if (i < 0) return null;

        i += 6;

        while (i < json.length()
                && (json.charAt(i) == ' '
                || json.charAt(i) == ':'
                || json.charAt(i) == '\n')) {
            i++;
        }

        if (i >= json.length() || json.charAt(i) != '"')
            return null;

        i++;

        StringBuilder b = new StringBuilder();

        while (i < json.length()) {

            char c = json.charAt(i++);

            if (c == '"') break;

            if (c == '\\') {

                if (i >= json.length()) return null;

                char n = json.charAt(i++);

                if (n == 'n') b.append('\n');
                else if (n == 'r') b.append('\r');
                else if (n == 't') b.append('\t');
                else if (n == 'b') b.append('\b');
                else if (n == 'f') b.append('\f');

                else if (n == 'u' && i + 4 <= json.length()) {

                    try {
                        b.append((char) Integer.parseInt(
                                json.substring(i, i + 4), 16
                        ));
                    } catch (NumberFormatException ex) {
                        return null;
                    }

                    i += 4;

                } else {
                    b.append(n);
                }

            } else {
                b.append(c);
            }
        }

        return b.toString();
    }

    // ---------- SIGNUP / LOGIN / USER API ----------

    static synchronized String api(
            String p,
            Map<String, String> f,
            HttpExchange x
    ) throws Exception {

        String u = f.getOrDefault("username", "").trim();
        String pw = f.getOrDefault("password", "");
        String em = f.getOrDefault("email", "").trim();

        List<String[]> users = load();

        switch (p) {

            case "/api/signup": {

                if (!u.matches("[A-Za-z0-9_]{3,20}"))
                    return err("Username: 3-20 letters, numbers or underscore.");

                if (!em.matches("[^@\\s]+@[^@\\s]+\\.[^@\\s]+"))
                    return err("Enter a valid email.");

                if (pw.length() < 6)
                    return err("Password must be at least 6 characters.");

                for (String[] row : users) {
                    if (row[0].equalsIgnoreCase(u)
                            || row[1].equalsIgnoreCase(em))
                        return err("Username or email already exists.");
                }

                String salt = token();

                users.add(new String[]{
                        u,
                        em,
                        salt,
                        hash(pw, salt)
                });

                save(users);

                return login(x, u);
            }

            case "/api/login": {

                for (String[] row : users) {

                    if ((row[0].equalsIgnoreCase(u)
                            || row[1].equalsIgnoreCase(u))
                            && row[3].equals(hash(pw, row[2]))) {

                        return login(x, row[0]);
                    }
                }

                return err("Wrong username or password.");
            }

            case "/api/roadmap": {

                String query = x.getRequestURI().getQuery();

                String lang =
                        (query != null && query.contains("lang=hi"))
                        ? "hi"
                        : "en";

                return Files.readString(
                        Path.of("data", "roadmap_" + lang + ".json")
                );
            }

            case "/api/me": {

                String name = sessions.get(cookie(x));

                return name == null
                        ? "{\"ok\":false}"
                        : "{\"ok\":true,\"username\":\"" + jesc(name) + "\"}";
            }

            case "/api/logout": {

                sessions.remove(cookie(x));
                saveSessions();

                x.getResponseHeaders().add(
                        "Set-Cookie",
                        "sid=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax"
                );

                return "{\"ok\":true}";
            }

            case "/api/forgot": {

                for (String[] row : users) {

                    if (row[1].equalsIgnoreCase(em)) {

                        String resetToken = token();

                        resets.put(
                                resetToken,
                                new Object[]{
                                        row[0],
                                        System.currentTimeMillis() + 15 * 60000
                                }
                        );

                        String link = BASE + "/login.html?reset=" + resetToken;

                        try {

                            mail(
                                    row[1],
                                    "Reset your CodeGround password",
                                    "Hi " + row[0]
                                    + ",\r\n\r\nClick this link to set a new password "
                                    + "(valid 15 minutes):\r\n" + link
                            );

                        } catch (Exception ex) {

                            System.out.println(
                                    "[Email not sent: " + ex.getMessage()
                                    + "]\nReset link for " + row[0] + ": " + link
                            );
                        }
                    }
                }

                return ok("If that email is registered, a reset link has been sent.");
            }

            case "/api/reset": {

                String resetToken = f.getOrDefault("token", "");

                Object[] entry = resets.get(resetToken);

                if (entry == null
                        || (long) entry[1] < System.currentTimeMillis()) {

                    return err("This reset link is invalid or expired.");
                }

                if (pw.length() < 6)
                    return err("Password must be at least 6 characters.");

                for (String[] row : users) {

                    if (row[0].equals(entry[0])) {
                        row[2] = token();
                        row[3] = hash(pw, row[2]);
                    }
                }

                save(users);
                resets.remove(resetToken);

                return ok("Password updated. You can log in now.");
            }
        }

        return err("Unknown request.");
    }

    // ---------- JAVA CODE RUNNER ----------

    static String run(HttpExchange x, Map<String, String> f) throws Exception {

        if (!sessions.containsKey(cookie(x)))
            return out(false, "Please log in to run code.");

        String code = f.getOrDefault("code", "");
        String input = f.getOrDefault("input", "");

        if (code.length() > 20000)
            return out(false, "Code is too long.");

        Path dir = Files.createTempDirectory("cg");

        try {

            Files.writeString(dir.resolve("Main.java"), code);

            String bin = System.getProperty("java.home")
                    + File.separator + "bin" + File.separator;

            Process compile = new ProcessBuilder(
                    bin + "javac",
                    "Main.java"
            )
                    .directory(dir.toFile())
                    .redirectErrorStream(true)
                    .start();

            if (!compile.waitFor(20, TimeUnit.SECONDS)) {
                compile.destroyForcibly();
                return out(false, "Compilation timed out.");
            }

            if (compile.exitValue() != 0)
                return out(false, "Compilation error:\n" + read(compile));

            Process execute = new ProcessBuilder(
                    bin + "java",
                    "-Xmx128m",
                    "Main"
            )
                    .directory(dir.toFile())
                    .redirectErrorStream(true)
                    .start();

            try (OutputStream os = execute.getOutputStream()) {
                os.write(input.getBytes(StandardCharsets.UTF_8));
            }

            if (!execute.waitFor(5, TimeUnit.SECONDS)) {
                execute.destroyForcibly();
                return out(false, "Time limit exceeded (5 seconds).");
            }

            String result = read(execute);

            return execute.exitValue() == 0
                    ? out(true, result)
                    : out(false, "Runtime error:\n" + result);

        } finally {

            File[] files = dir.toFile().listFiles();

            if (files != null) {
                for (File file : files) file.delete();
            }

            dir.toFile().delete();
        }
    }

    static String read(Process process) throws IOException {
        return new String(
                process.getInputStream().readNBytes(10000),
                StandardCharsets.UTF_8
        ).trim();
    }

    // ---------- JSON RESPONSE HELPERS ----------

    static String out(boolean success, String message) {
        return "{\"ok\":" + success
                + ",\"out\":\"" + jesc(message) + "\"}";
    }

    static String jesc(String value) {

        StringBuilder b = new StringBuilder();

        for (char ch : value.toCharArray()) {

            if (ch == '\\') b.append("\\\\");
            else if (ch == '"') b.append("\\\"");
            else if (ch == '\n') b.append("\\n");
            else if (ch == '\r') b.append("\\r");
            else if (ch == '\t') b.append("\\t");
            else if (ch == '\b') b.append("\\b");
            else if (ch == '\f') b.append("\\f");
            else if (ch >= 32) b.append(ch);
        }

        return b.toString();
    }

    // ---------- HELPERS ----------

    static String login(HttpExchange x, String user) throws IOException {

        String sid = token();

        sessions.put(sid, user);
        saveSessions();

        x.getResponseHeaders().add(
                "Set-Cookie",
                "sid=" + sid + "; Path=/; Max-Age=2592000; HttpOnly; SameSite=Lax"
        );

        return ok("Welcome, " + user + "!");
    }

    static String ok(String m) {
        return "{\"ok\":true,\"msg\":\"" + m + "\"}";
    }

    static String err(String m) {
        return "{\"ok\":false,\"msg\":\"" + m + "\"}";
    }

    static String token() {

        byte[] b = new byte[24];

        RND.nextBytes(b);

        return Base64.getUrlEncoder()
                .withoutPadding()
                .encodeToString(b);
    }

    static String hash(String pw, String salt) throws Exception {

        PBEKeySpec spec = new PBEKeySpec(
                pw.toCharArray(),
                salt.getBytes(StandardCharsets.UTF_8),
                65536,
                256
        );

        return Base64.getEncoder().encodeToString(
                SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256")
                        .generateSecret(spec)
                        .getEncoded()
        );
    }

    static List<String[]> load() throws IOException {

        List<String[]> L = new ArrayList<>();

        if (Files.exists(USERS)) {

            for (String l : Files.readAllLines(USERS)) {

                String[] p = l.split("\\|");

                if (p.length == 4) L.add(p);
            }
        }

        return L;
    }

    static void save(List<String[]> L) throws IOException {

        List<String> out = new ArrayList<>();

        for (String[] r : L)
            out.add(String.join("|", r));

        Files.write(USERS, out);
    }

    static void saveSessions() throws IOException {

        List<String> out = new ArrayList<>();

        sessions.forEach((k, v) ->
                out.add(k + "|" + v)
        );

        Files.write(SESS, out);
    }

    static String cookie(HttpExchange x) {

        String c = x.getRequestHeaders().getFirst("Cookie");

        if (c != null) {

            for (String part : c.split(";")) {

                if (part.trim().startsWith("sid="))
                    return part.trim().substring(4);
            }
        }

        return "";
    }

    static Map<String, String> form(HttpExchange x) throws IOException {

        Map<String, String> m = new HashMap<>();

        String body = new String(
                x.getRequestBody().readAllBytes(),
                StandardCharsets.UTF_8
        );

        for (String kv : body.split("&")) {

            String[] p = kv.split("=", 2);

            if (p.length == 2) {

                m.put(
                        URLDecoder.decode(p[0], StandardCharsets.UTF_8),
                        URLDecoder.decode(p[1], StandardCharsets.UTF_8)
                );
            }
        }

        return m;
    }

    // ---------- FRONTEND FILE SERVER ----------

    static void file(HttpExchange x, String requestPath) throws IOException {

        String p = requestPath;

        if (p == null || p.isBlank() || p.equals("/"))
            p = "/index.html";

        if (p.equals("/coding-arena")) {

            x.getResponseHeaders().set(
                    "Location",
                    "/coding-arena.html"
            );

            x.sendResponseHeaders(302, -1);
            x.close();

            return;
        }

        String relative = p.startsWith("/")
                ? p.substring(1)
                : p;

        Path publicRoot = Path.of("public")
                .toAbsolutePath()
                .normalize();

        Path f = publicRoot.resolve(relative).normalize();

        if (!f.startsWith(publicRoot) || !Files.isRegularFile(f)) {

            String message =
                    "404 Not Found: " + p
                    + "\nExpected file inside: " + publicRoot;

            send(x, 404, "text/plain; charset=utf-8", message);

            return;
        }

        String n = f.getFileName()
                .toString()
                .toLowerCase(Locale.ROOT);

        String t = "application/octet-stream";

        if (n.endsWith(".html"))
            t = "text/html; charset=utf-8";

        else if (n.endsWith(".js"))
            t = "text/javascript; charset=utf-8";

        else if (n.endsWith(".css"))
            t = "text/css; charset=utf-8";

        else if (n.endsWith(".json"))
            t = "application/json; charset=utf-8";

        else if (n.endsWith(".pdf"))
            t = "application/pdf";

        else if (n.endsWith(".png"))
            t = "image/png";

        else if (n.endsWith(".jpg") || n.endsWith(".jpeg"))
            t = "image/jpeg";

        send(x, 200, t, Files.readAllBytes(f));
    }

    // ---------- CODING ARENA PLACEHOLDER ----------

    static String arenaApi(String path, String body) {

        String msg = path.equals("/api/arena/run")
                ? "Java execution runner is not connected yet."
                : "Submission checker is not connected yet.";

        return "{\"success\":false,\"message\":\"" + msg + "\"}";
    }

    // ---------- HTTP RESPONSE HELPERS ----------

    static void send(
            HttpExchange x,
            int code,
            String type,
            String body
    ) throws IOException {

        send(
                x,
                code,
                type,
                body.getBytes(StandardCharsets.UTF_8)
        );
    }

    static void send(
            HttpExchange x,
            int code,
            String type,
            byte[] b
    ) throws IOException {

        x.getResponseHeaders().set("Content-Type", type);

        x.sendResponseHeaders(code, b.length);

        try (OutputStream o = x.getResponseBody()) {
            o.write(b);
        }
    }

    // ---------- EMAIL: GMAIL SMTP ----------

    static void mail(
            String to,
            String subject,
            String body
    ) throws Exception {

        String u = System.getenv("SMTP_USER");
        String pw = System.getenv("SMTP_PASS");

        if (u == null || pw == null)
            throw new Exception("SMTP_USER / SMTP_PASS not set");

        try (
                SSLSocket s = (SSLSocket)
                SSLSocketFactory.getDefault()
                        .createSocket("smtp.gmail.com", 465)
        ) {

            BufferedReader r = new BufferedReader(
                    new InputStreamReader(s.getInputStream())
            );

            Writer w = new OutputStreamWriter(s.getOutputStream());

            Base64.Encoder b = Base64.getEncoder();

            smtp(r, w, null);
            smtp(r, w, "EHLO localhost");
            smtp(r, w, "AUTH LOGIN");

            smtp(r, w, b.encodeToString(u.getBytes()));
            smtp(r, w, b.encodeToString(pw.getBytes()));

            smtp(r, w, "MAIL FROM:<" + u + ">");
            smtp(r, w, "RCPT TO:<" + to + ">");
            smtp(r, w, "DATA");

            smtp(
                    r,
                    w,
                    "From: CodeGround <" + u + ">\r\n"
                    + "To: " + to + "\r\n"
                    + "Subject: " + subject
                    + "\r\nContent-Type: text/plain; charset=UTF-8"
                    + "\r\n\r\n" + body + "\r\n."
            );

            smtp(r, w, "QUIT");
        }
    }

    static void smtp(
            BufferedReader r,
            Writer w,
            String cmd
    ) throws IOException {

        if (cmd != null) {
            w.write(cmd + "\r\n");
            w.flush();
        }

        String l;

        do {
            l = r.readLine();
        } while (
                l != null
                && l.length() > 3
                && l.charAt(3) == '-'
        );

        if (l == null || l.startsWith("4") || l.startsWith("5"))
            throw new IOException("SMTP error: " + l);
    }
}