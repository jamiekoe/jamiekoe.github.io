const nav = document.querySelector("#site-nav");
const toggle = document.querySelector(".menu-toggle");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";

  toggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") {
    return;
  }

  toggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
});
