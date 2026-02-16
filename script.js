const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const fakeSendBtn = document.getElementById("fakeSendBtn");
const formNote = document.getElementById("formNote");

fakeSendBtn?.addEventListener("click", () => {
  formNote.textContent =
    "This form is a placeholder. Add Formspree, Netlify Forms, or a backend later.";
});
