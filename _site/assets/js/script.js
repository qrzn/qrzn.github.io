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

// Remove preloader on window load and reset layout
window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  if (preloader && preloader.parentNode) {
    preloader.parentNode.removeChild(preloader);
  }
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    pageContent.style.visibility = "visible";
  }
  document.documentElement.style.height = "auto";
  document.body.style.height = "auto";
  document.body.style.overflow = "visible";
});

document.addEventListener('DOMContentLoaded', function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleImg = themeToggle.querySelector('img');

  // Check if a theme is saved in localStorage
  let savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    // Apply the saved theme
    if (savedTheme === 'light') {
      root.classList.add('light-mode');
      themeToggleImg.src = '/assets/img/moon-solid.svg';
      themeToggleImg.alt = 'Switch to Dark Mode';
    } else {
      root.classList.remove('light-mode');
      themeToggleImg.src = '/assets/img/sun-solid.svg';
      themeToggleImg.alt = 'Switch to Light Mode';
    }
  } else {
    // No saved theme; use the user's OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      root.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      themeToggleImg.src = '/assets/img/moon-solid.svg';
      themeToggleImg.alt = 'Switch to Dark Mode';
    } else {
      localStorage.setItem('theme', 'dark');
      themeToggleImg.src = '/assets/img/sun-solid.svg';
      themeToggleImg.alt = 'Switch to Light Mode';
    }
  }

  // Toggle theme when user clicks the theme toggle icon
  themeToggle.addEventListener('click', function() {
    root.classList.toggle('light-mode');
    if (root.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      themeToggleImg.src = '/assets/img/moon-solid.svg';
      themeToggleImg.alt = 'Switch to Dark Mode';
    } else {
      localStorage.setItem('theme', 'dark');
      themeToggleImg.src = '/assets/img/sun-solid.svg';
      themeToggleImg.alt = 'Switch to Light Mode';
    }
  });
});
