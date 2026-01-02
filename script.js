// Activate content on scroll
const contents = document.querySelectorAll('.content');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + window.innerHeight * 0.75;
  contents.forEach(content => {
    if (scrollY > content.offsetTop) {
      content.classList.add('active');
    }
  });
});

// Optional: Animate SVG timeline path drawing
const path = document.getElementById('timeline-path');
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
  const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  path.style.strokeDashoffset = pathLength * (1 - scrollPercent);
});
