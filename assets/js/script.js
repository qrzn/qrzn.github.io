document.addEventListener('DOMContentLoaded', function () {
  // Select both book and post items for animation
  const animateItems = document.querySelectorAll('.book-item, .post-item, .book-download-wrapper, p, li, input, h1, h2, h3');

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

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('bookSearch');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.1 });

  observer.observe(input);
});

window.addEventListener("load", function() {
  // Hide the preloader
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";

  // Show the actual content
  const pageContent = document.querySelector(".page-content");
  pageContent.style.visibility = "visible";
});
