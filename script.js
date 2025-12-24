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
/* =====================
   DASHBOARD CLOCK
===================== */
function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  const date = now.toLocaleDateString([], {
    weekday: "long",
    month: "short",
    day: "numeric"
  });

  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

updateClock();
setInterval(updateClock, 1000);
