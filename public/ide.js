(function () {
  var host = document.querySelector(".code-window") || document.getElementById("ideMount");
  if (!host) return;

  var DEFAULT = 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, CodeGround!");\n    }\n}';
  var saved = "";
  try { saved = localStorage.getItem("cgHeroCode") || ""; } catch (e) {}

  var st = document.createElement("style");
  st.textContent = `
.ide{border:1px solid #2a3a50;background:rgba(9,15,27,.95);border-radius:18px;overflow:hidden;box-shadow:0 25px 70px rgba(0,0,0,.25);color:#cbd5e1}
.ide.max{position:fixed;inset:0;z-index:1000;border-radius:0;display:flex;flex-direction:column;background:#080d18}
.ide-top{display:flex;align-items:center;gap:6px;padding:11px 14px;border-bottom:1px solid #243248}
.ide-top i{width:10px;height:10px;border-radius:50%}
.ide-top span{font-size:12px;color:#94a3b8;margin-left:8px}
.ide-act{margin-left:auto;display:flex;gap:6px}
.ide button{font:inherit;font-size:12px;color:#cbd5e1;background:none;border:1px solid #334155;border-radius:8px;padding:5px 11px;cursor:pointer}
.ide button:hover{border-color:#22d3ee;color:#22d3ee}
.ide button.p{background:linear-gradient(120deg,#06b6d4,#3b82f6);color:#06111f;border:0;font-weight:800}
.ide button.hot{border-color:#fbbf24;color:#fbbf24;animation:pl 1.2s infinite}
@keyframes pl{50%{box-shadow:0 0 14px rgba(251,191,36,.5)}}
.ide-body{display:block}
.ide.max .ide-body{display:grid;grid-template-columns:1.4fr 1fr;flex:1;min-height:0}
.ide-ed{display:grid;grid-template-columns:auto 1fr;height:15rem;font:13px/1.65 Consolas,'Courier New',monospace}
.ide.max .ide-ed{height:auto;min-height:0}
.gut{margin:0;padding:12px 10px 12px 14px;text-align:right;color:#475569;overflow:hidden;font:inherit;border-right:1px solid #1e293b;user-select:none}
textarea.code{border:0;outline:0;resize:none;padding:12px 14px;background:transparent;color:#e2e8f0;font:inherit;white-space:pre;overflow:auto;tab-size:4}
.ide-side{border-top:1px solid #243248;padding:10px 14px;overflow:auto}
.ide.max .ide-side{border-top:0;border-left:1px solid #243248}
.ide-bar{display:flex;gap:8px;margin-bottom:8px}
.ide-side label{font-size:10px;letter-spacing:.1em;color:#64748b}
textarea.inp{display:block;width:100%;height:3.2rem;margin:4px 0 8px;padding:6px 8px;border:1px solid #243248;border-radius:8px;background:#0a111e;color:#e2e8f0;font:12px Consolas,monospace;resize:vertical}
.out{min-height:3.5rem;max-height:9rem;overflow:auto;padding:8px 10px;border:1px solid #243248;border-radius:8px;background:#0a111e;font:12px/1.6 Consolas,monospace;white-space:pre-wrap;color:#86efac}
.ide.max .out{max-height:40vh}
.out.bad,.bad{color:#fb7185}
.ai{margin-top:10px;padding:10px 12px;border:1px solid rgba(167,139,250,.5);border-radius:10px;background:rgba(167,139,250,.08);font:13px/1.7 system-ui,sans-serif;white-space:pre-wrap;color:#e2e8f0}
.ai pre{margin:6px 0;padding:8px;border-radius:8px;background:#0a111e;font:12px Consolas,monospace;overflow:auto;white-space:pre}
.ai code{background:#0a111e;padding:1px 5px;border-radius:4px;font-family:Consolas,monospace;color:#67e8f9}
`;
  document.head.appendChild(st);

  var ide = document.createElement("div");
  ide.className = "ide";
  ide.innerHTML = `
<div class="ide-top"><i style="background:#f87171"></i><i style="background:#fbbf24"></i><i style="background:#4ade80"></i><span>Main.java</span>
  <div class="ide-act"><button data-a="reset">Reset</button><button data-a="max">⛶ Maximize</button></div></div>
<div class="ide-body">
  <div class="ide-ed"><pre class="gut"></pre><textarea class="code" spellcheck="false" wrap="off"></textarea></div>
  <div class="ide-side">
    <div class="ide-bar"><button class="p" data-a="run">▶ Run</button><button data-a="ai">✨ Ask AI</button><span style="margin-left:auto;font-size:11px;color:#64748b;align-self:center">Ctrl+Enter = Run</span></div>
    <label>INPUT (optional)</label><textarea class="inp" spellcheck="false"></textarea>
    <div class="out">Output yahan dikhega. (Run ke liye login zaroori hai.)</div>
    <div class="ai" hidden></div>
  </div>
</div>`;
  host.replaceWith(ide);

  var $ = function (s) { return ide.querySelector(s); };
  var code = $("textarea.code"), gut = $(".gut"), inp = $(".inp"), out = $(".out"), ai = $(".ai"), askBtn = $('[data-a="ai"]'), maxBtn = $('[data-a="max"]');
  var lastOut = "", lastOk = true;
  code.value = saved || DEFAULT;

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function md(t) {
    t = esc(t);
    t = t.replace(/```(?:\w*)\n?([\s\S]*?)```/g, "<pre>$1</pre>");
    t = t.replace(/`([^`\n]+)`/g, "<code>$1</code>");
    return t.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  }
  function lines() {
    var n = code.value.split("\n").length, a = [];
    for (var i = 1; i <= n; i++) a.push(i);
    gut.textContent = a.join("\n");
  }
  lines();

  code.addEventListener("input", function () {
    lines();
    try { localStorage.setItem("cgHeroCode", code.value); } catch (e) {}
  });
  code.addEventListener("scroll", function () { gut.scrollTop = code.scrollTop; });
  code.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault();
      code.setRangeText("    ", code.selectionStart, code.selectionEnd, "end");
      code.dispatchEvent(new Event("input"));
    }
    if (e.key === "Enter" && e.ctrlKey) { e.preventDefault(); run(); }
  });

  async function post(url, data) {
    try { return await (await fetch(url, { method: "POST", body: new URLSearchParams(data) })).json(); }
    catch (e) { return { ok: false, out: "Server se connect nahi ho paya. Page ko http://localhost:8080 se kholo." }; }
  }

  async function run() {
    out.className = "out"; out.textContent = "Running...";
    var r = await post("/api/run", { code: code.value, input: inp.value });
    lastOk = r.ok; lastOut = r.out || "";
    out.className = "out" + (r.ok ? "" : " bad");
    out.textContent = (r.ok ? "" : "✗ ") + (lastOut || "(no output)");
    askBtn.classList.toggle("hot", !r.ok);          // error aaye to Ask AI button chamakta hai
  }

  async function ask() {
    ai.hidden = false; ai.textContent = "AI soch raha hai...";
    var r = await post("/api/explain", { code: code.value, error: lastOut });
    ai.innerHTML = r.ok ? md(r.out) : '<span class="bad">' + esc(r.out) + "</span>";
  }

  function toggleMax() {
    var m = ide.classList.toggle("max");
    document.body.style.overflow = m ? "hidden" : "";
    maxBtn.textContent = m ? "✕ Close" : "⛶ Maximize";
  }

  ide.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-a]");
    if (!b) return;
    var a = b.dataset.a;
    if (a === "run") run();
    else if (a === "ai") ask();
    else if (a === "max") toggleMax();
    else if (a === "reset") { code.value = DEFAULT; code.dispatchEvent(new Event("input")); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && ide.classList.contains("max")) toggleMax();
  });
})();