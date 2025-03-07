document.addEventListener('DOMContentLoaded', function () {
  // Select both book and post items for animation
  const animateItems = document.querySelectorAll('.book-item, .post-item, p, h1, h2, h3, li');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1, // Adjust threshold as needed
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve to animate only once:
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateItems.forEach(item => {
    observer.observe(item);
  });
});
