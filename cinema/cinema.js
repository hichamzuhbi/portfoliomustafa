const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".cinema-content, .hero-cinema");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  sections.forEach((section) => observer.observe(section));
});

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});
