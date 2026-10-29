// Shows a profile icon (with Log out) in place of the login buttons when the user is logged in.
(async () => {
  const slot = document.getElementById("authSlot");
  if (!slot) return;
  try {
    const r = await (await fetch("/api/me")).json();
    if (!r.ok) return;
    const name = r.username;
    slot.innerHTML = `
      <div class="relative">
        <button id="pBtn" aria-label="Profile menu" aria-expanded="false"
          class="w-10 h-10 rounded-full font-bold flex items-center justify-center"
          style="background:linear-gradient(120deg,#06b6d4,#a78bfa);color:#06111f">${name[0].toUpperCase()}</button>
        <div id="pMenu" hidden class="absolute right-0 top-12 w-56 p-4 rounded-xl border border-slate-700 bg-slate-900 z-50 shadow-2xl">
          <p class="text-xs text-slate-500">Signed in as</p>
          <p class="font-semibold mb-3">${name}</p>
          <button id="outBtn" class="w-full text-left text-sm rounded-lg px-3 py-2 text-rose-300 hover:bg-slate-800">Log out</button>
        </div>
      </div>`;
    const menu = document.getElementById("pMenu"), btn = document.getElementById("pBtn");
    btn.onclick = e => { e.stopPropagation(); menu.hidden = !menu.hidden; btn.setAttribute("aria-expanded", !menu.hidden); };
    document.addEventListener("click", e => { if (!menu.contains(e.target)) menu.hidden = true; });
    document.getElementById("outBtn").onclick = async () => {
      await fetch("/api/logout", {method: "POST"});
      location.reload();
    };
  } catch (e) { /* server not running: keep default buttons */ }
})();