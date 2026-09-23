const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
nav.classList.toggle("active");
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("active");
});
});
