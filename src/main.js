import './style.css'

// Initialize mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const closeMenuButton = document.getElementById('closeMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuButton && mobileMenu && closeMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });

    closeMenuButton.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
});

// No need to replace the HTML content since we're using the one from index.html
// Just add any JavaScript functionality you need here
console.log('Tailwind CSS is ready to use!')

// Slideshow functionality
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('#slideshow .slide');
  if (!slides.length) return;
  let currentSlide = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove('opacity-0');
        slide.classList.add('opacity-100');
      } else {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0');
      }
    });
    currentSlide = index;
  }
  // Show first slide
  showSlide(0);
  // Loop slides every 3 seconds
  setInterval(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }, 3000);
});
