/* Filtres de la file des tickets (page Compétences) */
(function () {
  var btns = document.querySelectorAll(".flt");
  var rows = document.querySelectorAll(".queue .row");
  var empty = document.querySelector(".queue-empty");
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      btns.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      var f = b.dataset.f, shown = 0;
      rows.forEach(function (r) {
        var ok = f === "all" || r.dataset[f.split(":")[0]] === f.split(":")[1];
        r.hidden = !ok; if (ok) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    });
  });
})();
