/* Bouton clair / sombre.
   Par défaut, le site suit le réglage de l'ordinateur du visiteur.
   Un clic force l'autre mode, et le choix est retenu pour les visites suivantes. */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme-btn");
  if (!btn) return;

  function current() {
    var forced = root.getAttribute("data-theme");
    if (forced) return forced;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function label() {
    var dark = current() === "dark";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.querySelector(".label").textContent = dark ? "Sombre" : "Clair";
    btn.setAttribute("aria-label", dark ? "Passer en mode clair" : "Passer en mode sombre");
  }
  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", label);
  label();
})();
