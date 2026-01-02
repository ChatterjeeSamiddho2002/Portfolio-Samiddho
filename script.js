const path = document.getElementById("timeline-path");
const sections = document.querySelectorAll(".content");

// Prepare SVG path
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollRatio = scrollTop / maxScroll;

  // Draw the line
  path.style.strokeDashoffset =
    pathLength - pathLength * scrollRatio;

  // Reveal sections
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.65) {
      section.classList.add("active");
    }
  });
});
