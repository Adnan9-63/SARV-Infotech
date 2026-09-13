// ===== Isaac Newton tribute — small interactions =====

// 1) Ribbon nav: highlight the section currently in view
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".ribbon-nav a"));
  if (!links.length) return;

  var sections = links
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  function setActive() {
    var scrollPos = window.scrollY + window.innerHeight * 0.35;
    var current = sections[0];
    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) current = section;
    });
    links.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("is-active", isActive);
    });
  }

  window.addEventListener("scroll", setActive, { passive: true });
  window.addEventListener("resize", setActive);
  setActive();
})();

// 2) The apple: click it to watch it fall, then reveal the caption
(function () {
  var appleBtn = document.getElementById("apple-btn");
  var caption = document.getElementById("apple-caption");
  if (!appleBtn || !caption) return;

  appleBtn.addEventListener("click", function () {
    if (appleBtn.classList.contains("is-falling")) return;
    appleBtn.classList.add("is-falling");
    appleBtn.setAttribute("aria-disabled", "true");

    window.setTimeout(function () {
      caption.classList.add("is-visible");
    }, 750);

    window.setTimeout(function () {
      appleBtn.classList.remove("is-falling");
      appleBtn.removeAttribute("aria-disabled");
      caption.classList.remove("is-visible");
    }, 4200);
  });
})();
