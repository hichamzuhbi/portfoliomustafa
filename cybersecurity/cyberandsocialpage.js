// Fade-in effect on scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".cyber-content, .hero-cyber");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.15
    });
  
    sections.forEach(section => observer.observe(section));
  });
  