/* Ouvre le chantier visé par l'ancre de l'adresse (ex. projet.html#ch-06), depuis les tuiles de l'accueil. */
(function () {
  function ouvrir() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var el = document.getElementById(id);
    if (el && el.tagName === "DETAILS") {
      el.open = true;
      el.scrollIntoView({ block: "start" });
    }
  }
  window.addEventListener("hashchange", ouvrir);
  ouvrir();
})();
