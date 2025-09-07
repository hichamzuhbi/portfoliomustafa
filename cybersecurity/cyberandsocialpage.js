// Matrix rain effect
function createMatrixRain() {
  const matrixBg = document.getElementById("matrix-bg");
  const chars =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

  for (let i = 0; i < 50; i++) {
    const char = document.createElement("div");
    char.className = "matrix-char";
    char.textContent = chars[Math.floor(Math.random() * chars.length)];
    char.style.left = Math.random() * 100 + "%";
    char.style.animationDuration = Math.random() * 3 + 2 + "s";
    char.style.animationDelay = Math.random() * 2 + "s";
    matrixBg.appendChild(char);
  }
}

// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Smooth scroll for CTA button
document.querySelector(".cta-button").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#services").scrollIntoView({
    behavior: "smooth",
  });
});

// Animated counter
function animateCounter(element, target) {
  let count = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(count) + (target > 99 ? "" : "");
  }, 20);
}

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Animate counters when stats section becomes visible
      if (entry.target.classList.contains("stats-section")) {
        const counters = entry.target.querySelectorAll(".stat-number");
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-count"));
          animateCounter(counter, target);
        });
      }
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
    header.style.background = "rgba(0, 0, 0, 0.98)";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.95)";
  }
});

// Initialize matrix rain effect
createMatrixRain();
