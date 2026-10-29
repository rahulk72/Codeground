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


public class Server{
    static final int PORT = 8080;
    static final String BASE = "http://localhost:" + PORT;
    static final Path USERS = Path.of("users.txt");      // username|email|salt|hash
    static final Path SESS = Path.of("sessions.txt");    // sid|username
    static final Map<String, String> sessions = new HashMap<>();
    static final Map<String, Object[]> resets = new HashMap<>(); // token -> {username, expiry}
    static final SecureRandom RND = new SecureRandom();

    public static void main(String[] args) throws Exception {
        if (Files.exists(SESS))
            for (String l : Files.readAllLines(SESS)) {
                String[] p = l.split("\\|");
                if (p.length == 2) sessions.put(p[0], p[1]);
            }
        HttpServer s = HttpServer.create(new InetSocketAddress(PORT), 0);
        s.createContext("/", Server::handle);
        s.start();
        System.out.println("CodeGround running at " + BASE);
    }

    // static void handle(HttpExchange x) throws IOException {
    //     try {
    //         String p = x.getRequestURI().getPath();
    //         if (p.startsWith("/api/")) send(x, 200, "application/json", api(p, form(x), x));
    //         else file(x, p);
    //     } catch (Exception e) {
    //         e.printStackTrace();
    //         send(x, 500, "application/json", err("Server error."));
    //     }
    // }

    static void handle(HttpExchange x) throws IOException {
    try {
        String p = x.getRequestURI().getPath();

        // Coding Arena APIs receive JSON, not form data.
        if (p.equals("/api/arena/run")
                || p.equals("/api/arena/submit")) {

            if (!"POST".equalsIgnoreCase(x.getRequestMethod())) {
                x.getResponseHeaders().set("Allow", "POST");
                send(x, 405, "application/json",
                        "{\"success\":false,\"message\":\"POST required\"}");
                return;
            }

            String body = new String(
                    x.getRequestBody().readAllBytes(),
                    StandardCharsets.UTF_8
            );

            String result = arenaApi(p, body);

            send(x, 200, "application/json; charset=utf-8", result);
            return;
        }

        // Keep all existing APIs working as before.
        // if (p.startsWith("/api/")) {
        //     send(x, 200, "application/json", api(p, form(x), x));
        // } else {
        //     file(x, p);
        // }

                    if (p.equals("/api/run")) send(x, 200, "application/json", run(x, form(x)));
            else if (p.startsWith("/api/")) send(x, 200, "application/json", api(p, form(x), x));
            else file(x, p);

    } catch (Exception e) {
        e.printStackTrace();

        if (x.getResponseCode() == -1) {
            send(x, 500, "application/json",
                    "{\"success\":false,\"message\":\"Server error\"}");
        } else {
            x.close();
        }
    }
}

    static synchronized String api(String p, Map<String, String> f, HttpExchange x) throws Exception {
        String u = f.getOrDefault("username", "").trim();
        String pw = f.getOrDefault("password", "");
        String em = f.getOrDefault("email", "").trim();
        List<String[]> L = load();
        switch (p) {
            case "/api/signup": {
                if (!u.matches("[A-Za-z0-9_]{3,20}")) return err("Username: 3-20 letters, numbers or underscore.");
                if (!em.matches("[^@\\s]+@[^@\\s]+\\.[^@\\s]+")) return err("Enter a valid email.");
                if (pw.length() < 6) return err("Password must be at least 6 characters.");
                for (String[] r : L)
                    if (r[0].equalsIgnoreCase(u) || r[1].equalsIgnoreCase(em)) return err("Username or email already exists.");
                String salt = token();
                L.add(new String[]{u, em, salt, hash(pw, salt)});
                save(L);
                return login(x, u);
            }
            case "/api/login": {
                for (String[] r : L)
                    if ((r[0].equalsIgnoreCase(u) || r[1].equalsIgnoreCase(u)) && r[3].equals(hash(pw, r[2])))
                        return login(x, r[0]);
                return err("Wrong username or password.");
            }

            case "/api/roadmap": {
                String q = x.getRequestURI().getQuery();
                String lang = (q != null && q.contains("lang=hi")) ? "hi" : "en";
                return Files.readString(Path.of("data", "roadmap_" + lang + ".json"));
            }
            
            case "/api/me": {
                String name = sessions.get(cookie(x));
                return name == null ? "{\"ok\":false}" : "{\"ok\":true,\"username\":\"" + name + "\"}";
            }
            case "/api/logout": {
                sessions.remove(cookie(x));
                saveSessions();
                x.getResponseHeaders().add("Set-Cookie", "sid=; Path=/; Max-Age=0");
                return "{\"ok\":true}";
            }
            case "/api/forgot": {
                for (String[] r : L)
                    if (r[1].equalsIgnoreCase(em)) {
                        String t = token();
                        resets.put(t, new Object[]{r[0], System.currentTimeMillis() + 15 * 60000});
                        String link = BASE + "/login.html?reset=" + t;
                        try {
                            mail(r[1], "Reset your CodeGround password",
                                 "Hi " + r[0] + ",\r\n\r\nClick this link to set a new password (valid 15 minutes):\r\n" + link);
                        } catch (Exception e) {
                            System.out.println("[Email not sent: " + e.getMessage() + "]\nReset link for " + r[0] + ": " + link);
                        }
                    }
                return ok("If that email is registered, a reset link has been sent.");
            }
            case "/api/reset": {
                Object[] e = resets.get(f.getOrDefault("token", ""));
                if (e == null || (long) e[1] < System.currentTimeMillis()) return err("This reset link is invalid or expired.");
                if (pw.length() < 6) return err("Password must be at least 6 characters.");
                for (String[] r : L)
                    if (r[0].equals(e[0])) { r[2] = token(); r[3] = hash(pw, r[2]); }
                save(L);
                resets.remove(f.get("token"));
                return ok("Password updated. You can log in now.");
            }
        }
        return err("Unknown request.");
    }

        // ---------- run user's Java code (Coding Arena) ----------
    static String run(HttpExchange x, Map<String, String> f) throws Exception {
        if (!sessions.containsKey(cookie(x))) return out(false, "Please log in to run code.");
        String code = f.getOrDefault("code", ""), in = f.getOrDefault("input", "");
        if (code.length() > 20000) return out(false, "Code is too long.");
        Path d = Files.createTempDirectory("cg");
        try {
            Files.writeString(d.resolve("Main.java"), code);
            String bin = System.getProperty("java.home") + File.separator + "bin" + File.separator;
            Process c = new ProcessBuilder(bin + "javac", "Main.java").directory(d.toFile()).redirectErrorStream(true).start();
            if (!c.waitFor(20, TimeUnit.SECONDS)) { c.destroyForcibly(); return out(false, "Compilation timed out."); }
            if (c.exitValue() != 0) return out(false, "Compilation error:\n" + read(c));
            Process r = new ProcessBuilder(bin + "java", "-Xmx128m", "Main").directory(d.toFile()).redirectErrorStream(true).start();
            try (OutputStream os = r.getOutputStream()) { os.write(in.getBytes(StandardCharsets.UTF_8)); } catch (IOException ignore) {}
            if (!r.waitFor(5, TimeUnit.SECONDS)) { r.destroyForcibly(); return out(false, "Time limit exceeded (5 seconds)."); }
            String res = read(r);
            return r.exitValue() == 0 ? out(true, res) : out(false, "Runtime error:\n" + res);
        } finally {
            File[] fs = d.toFile().listFiles();
            if (fs != null) for (File fl : fs) fl.delete();
            d.toFile().delete();
        }
    }

    static String read(Process p) throws IOException {
        return new String(p.getInputStream().readNBytes(10000), StandardCharsets.UTF_8).trim();
    }

    static String out(boolean ok, String s) { return "{\"ok\":" + ok + ",\"out\":\"" + jesc(s) + "\"}"; }

    static String jesc(String s) {
        StringBuilder b = new StringBuilder();
        for (char ch : s.toCharArray()) {
            if (ch == '\\') b.append("\\\\");
            else if (ch == '"') b.append("\\\"");
            else if (ch == '\n') b.append("\\n");
            else if (ch == '\t') b.append("\\t");
            else if (ch >= 32) b.append(ch);
        }
        return b.toString();
    }

    // ---------- helpers ----------
    static String login(HttpExchange x, String user) throws IOException {
        String sid = token();
        sessions.put(sid, user);
        saveSessions();
        x.getResponseHeaders().add("Set-Cookie", "sid=" + sid + "; Path=/; Max-Age=2592000; HttpOnly; SameSite=Lax");
        return ok("Welcome, " + user + "!");
    }

    static String ok(String m) { return "{\"ok\":true,\"msg\":\"" + m + "\"}"; }
    static String err(String m) { return "{\"ok\":false,\"msg\":\"" + m + "\"}"; }

    static String token() {
        byte[] b = new byte[24];
        RND.nextBytes(b);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(b);
    }

    static String hash(String pw, String salt) throws Exception {
        PBEKeySpec spec = new PBEKeySpec(pw.toCharArray(), salt.getBytes(StandardCharsets.UTF_8), 65536, 256);
        return Base64.getEncoder().encodeToString(SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256").generateSecret(spec).getEncoded());
    }

    static List<String[]> load() throws IOException {
        List<String[]> L = new ArrayList<>();
        if (Files.exists(USERS))
            for (String l : Files.readAllLines(USERS)) {
                String[] p = l.split("\\|");
                if (p.length == 4) L.add(p);
            }
        return L;
    }

    static void save(List<String[]> L) throws IOException {
        List<String> out = new ArrayList<>();
        for (String[] r : L) out.add(String.join("|", r));
        Files.write(USERS, out);
    }

    static void saveSessions() throws IOException {
        List<String> out = new ArrayList<>();
        sessions.forEach((k, v) -> out.add(k + "|" + v));
        Files.write(SESS, out);
    }

    static String cookie(HttpExchange x) {
        String c = x.getRequestHeaders().getFirst("Cookie");
        if (c != null)
            for (String part : c.split(";"))
                if (part.trim().startsWith("sid=")) return part.trim().substring(4);
        return "";
    }

    static Map<String, String> form(HttpExchange x) throws IOException {
        Map<String, String> m = new HashMap<>();
        String body = new String(x.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
        for (String kv : body.split("&")) {
            String[] p = kv.split("=", 2);
            if (p.length == 2) m.put(URLDecoder.decode(p[0], StandardCharsets.UTF_8), URLDecoder.decode(p[1], StandardCharsets.UTF_8));
        }
        return m;
    }

    // Serves all frontend files from the project's public folder.
    static void file(HttpExchange x, String requestPath) throws IOException {
        String p = requestPath;
        if (p == null || p.isBlank() || p.equals("/")) p = "/index.html";

        // Optional friendly URL: /coding-arena -> /coding-arena.html
        if (p.equals("/coding-arena")) {
            x.getResponseHeaders().set("Location", "/coding-arena.html");
            x.sendResponseHeaders(302, -1);
            x.close();
            return;
        }

        // Remove the leading slash before resolving against public/.
        String relative = p.startsWith("/") ? p.substring(1) : p;
        Path publicRoot = Path.of("public").toAbsolutePath().normalize();
        Path f = publicRoot.resolve(relative).normalize();

        // Prevent path traversal and make sure the requested file exists.
        if (!f.startsWith(publicRoot) || !Files.isRegularFile(f)) {
            String message = "404 Not Found: " + p + "\nExpected file inside: " + publicRoot;
            send(x, 404, "text/plain; charset=utf-8", message);
            return;
        }

        String n = f.getFileName().toString().toLowerCase(Locale.ROOT);
        String t = "application/octet-stream";
        if (n.endsWith(".html")) t = "text/html; charset=utf-8";
        else if (n.endsWith(".js")) t = "text/javascript; charset=utf-8";
        else if (n.endsWith(".css")) t = "text/css; charset=utf-8";
        else if (n.endsWith(".json")) t = "application/json; charset=utf-8";
        else if (n.endsWith(".pdf")) t = "application/pdf";
        else if (n.endsWith(".png")) t = "image/png";
        else if (n.endsWith(".jpg") || n.endsWith(".jpeg")) t = "image/jpeg";
        send(x, 200, t, Files.readAllBytes(f));
    }

    // Temporary API response until a real isolated Java runner is connected.
    // This keeps Server.java compilable and clearly reports that execution is not enabled yet.
    static String arenaApi(String path, String body) {
        String msg = path.equals("/api/arena/run")
                ? "Java execution runner is not connected yet."
                : "Submission checker is not connected yet.";
        return "{\"success\":false,\"message\":\"" + msg + "\"}";
    }

    static void send(HttpExchange x, int code, String type, String body) throws IOException {
        send(x, code, type, body.getBytes(StandardCharsets.UTF_8));
    }

    static void send(HttpExchange x, int code, String type, byte[] b) throws IOException {
        x.getResponseHeaders().set("Content-Type", type);
        x.sendResponseHeaders(code, b.length);
        try (OutputStream o = x.getResponseBody()) { o.write(b); }
    }

    // ---------- email (Gmail SMTP over SSL, no libraries needed) ----------
    static void mail(String to, String subject, String body) throws Exception {
        String u = System.getenv("SMTP_USER"), pw = System.getenv("SMTP_PASS");
        if (u == null || pw == null) throw new Exception("SMTP_USER / SMTP_PASS not set");
        try (SSLSocket s = (SSLSocket) SSLSocketFactory.getDefault().createSocket("smtp.gmail.com", 465)) {
            BufferedReader r = new BufferedReader(new InputStreamReader(s.getInputStream()));
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
            smtp(r, w, "From: CodeGround <" + u + ">\r\nTo: " + to + "\r\nSubject: " + subject
                    + "\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n" + body + "\r\n.");
            smtp(r, w, "QUIT");
        }
    }

    static void smtp(BufferedReader r, Writer w, String cmd) throws IOException {
        if (cmd != null) { w.write(cmd + "\r\n"); w.flush(); }
        String l;
        do { l = r.readLine(); } while (l != null && l.length() > 3 && l.charAt(3) == '-');
        if (l == null || l.startsWith("4") || l.startsWith("5")) throw new IOException("SMTP error: " + l);
    }
}