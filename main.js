// Typing animation
const typedName = document.getElementById("typed-name");
const name = "Moustafa Outour";
let i = 0;

function typeWriter() {
  if (i < name.length) {
    typedName.innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  } else {
    setTimeout(() => {
      typedName.style.borderRight = "none";
    }, 1000);
  }
}

// Start typing after a short delay
setTimeout(typeWriter, 1000);

// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Smooth scrolling for CTA buttons
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.98)";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.95)";
  }
});

// Specialty tag click effects
document.querySelectorAll(".tag").forEach((tag) => {
  tag.addEventListener("click", () => {
    if (tag.classList.contains("cyber")) {
      window.location.href = "/cybersecurity/cyberandsocialpage.html";
    } else if (tag.classList.contains("cinema")) {
      window.location.href = "/cinema/cinema.html";
    }
  });
});
