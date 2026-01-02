// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeOverlay = document.getElementById('themeToggleOverlay');
const body = document.documentElement;

let isDark = localStorage.getItem('theme') === 'dark';
updateTheme();

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  updateTheme();
  
  // Show overlay animation
  themeOverlay.classList.add('active');
  setTimeout(() => {
    themeOverlay.classList.remove('active');
  }, 400);
});

function updateTheme() {
  if (isDark) {
    body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = body.classList.contains('dark') 
      ? 'rgba(10, 10, 10, 0.98)' 
      : 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = body.classList.contains('dark') 
      ? 'rgba(10, 10, 10, 0.95)' 
      : 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
  }
});

// Profile image load animation
window.addEventListener('load', () => {
  const profileImg = document.querySelector('.profile-img');
  profileImg.style.opacity = '0';
  profileImg.style.transform = 'scale(0.8) rotate(-10deg)';
  
  setTimeout(() => {
    profileImg.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    profileImg.style.opacity = '1';
    profileImg.style.transform = 'scale(1) rotate(0deg)';
  }, 500);
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation (add more sections later)
document.querySelector('.hero-content').style.opacity = '0';
document.querySelector('.hero-content').style.transform = 'translateY(30px)';
document.querySelector('.hero-content').style.transition = 'all 0.8s ease';
observer.observe(document.querySelector('.hero-content'));