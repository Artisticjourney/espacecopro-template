(function () {
  "use strict";

  var body = document.body;
  var burger = document.getElementById("burger");
  var sidenav = document.getElementById("sidenav");

  burger.addEventListener("click", function () {
    var open = body.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", String(open));
  });

  sidenav.addEventListener("click", function (event) {
    if (event.target.closest(".sidenav__link") && body.classList.contains("nav-open")) {
      body.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-modal-open]");
    if (!trigger) return;
    event.preventDefault();
    document.getElementById("modal-demande").showModal();
  });
  var docTable = document.querySelector("[data-table-docs");
  var docSearch = document.querySelector(".input--search");
  if (docTable && docSearch) {
    docSearch.addEventListener("input", function () {
      var query = docSearch.value.trim().toLowerCase();
      docTable.querySelectorAll("tbody tr").forEach(function (row) {
        var haystack = (row.getAttribute("data-name") + " " + row.textContent).toLowerCase();
        row.hidden = query !== "" && haystack.indexOf(query) === -1;
      });
    });
  }
})();
