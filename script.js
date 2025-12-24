// Scroll-based reveal animation (simple & safe)
const revealElements = document.querySelectorAll(
  ".section, .header, footer"
);

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < triggerPoint) {
      el.classList.add("show");
    }
  });
};

// Initial reveal (hero/header)
window.addEventListener("load", revealOnScroll);

// Reveal on scroll
window.addEventListener("scroll", revealOnScroll);
