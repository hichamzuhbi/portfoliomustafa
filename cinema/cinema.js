// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Smooth scroll for CTA button
document.querySelector(".cta-button").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#work").scrollIntoView({
    behavior: "smooth",
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(10, 10, 10, 0.98)";
  } else {
    header.style.background = "rgba(10, 10, 10, 0.95)";
  }
});
