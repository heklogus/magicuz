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

// Fade-in on scroll
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('fade-ready');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});

// FAQ accordion
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const chevron = button.querySelector('.faq-chevron');
      const isOpen = !content.classList.contains('hidden');

      // Close all other items
      document.querySelectorAll('.faq-item').forEach((item) => {
        item.querySelector('.faq-content').classList.add('hidden');
        item.querySelector('.faq-chevron').classList.remove('rotate-180');
        item.classList.remove('is-open');
      });

      // Toggle current item
      if (!isOpen) {
        content.classList.remove('hidden');
        chevron.classList.add('rotate-180');
        button.closest('.faq-item').classList.add('is-open');
      }
    });
  });
});
