document.addEventListener("DOMContentLoaded", function() {
  /* ====================
   * INTERSECTION OBSERVERS
   * ==================== */
  const animateItems = document.querySelectorAll(
    ".book-item, .post-item, .book-download-wrapper, main",
  );
  const input = document.getElementById("bookSearch");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Adjust threshold as needed
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  // Observe all animation targets
  animateItems.forEach((item) => observer.observe(item));

  // Observe search input
  if (input) {
    observer.observe(input);
  }

  /* ====================
   * THEME TOGGLING
   * ==================== */
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleImg = themeToggle.querySelector("img");
  const preloader = document.getElementById("preloader");

  // Helper function to apply the correct theme classes and toggle icon
  function applyTheme(theme) {
    if (theme === "light") {
      root.classList.add("light-mode");
      themeToggleImg.src = "/assets/img/sage/moon-solid.svg";
      themeToggleImg.alt = "Switch to Dark Mode";

      // If the preloader is still in the DOM, apply light mode
      if (preloader) {
        preloader.classList.add("light-mode");
      }
    } else {
      root.classList.remove("light-mode");
      themeToggleImg.src = "/assets/img/sage/sun-solid.svg";
      themeToggleImg.alt = "Switch to Light Mode";

      // If the preloader is still in the DOM, remove light mode
      if (preloader) {
        preloader.classList.remove("light-mode");
      }
    }
  }

  // 1) Check saved theme in localStorage
  let savedTheme = localStorage.getItem("theme");

  // 2) If no saved theme, check the user's OS preference
  if (!savedTheme) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      savedTheme = "light";
    } else {
      savedTheme = "dark";
    }
    localStorage.setItem("theme", savedTheme);
  }

  // Apply whichever theme we ended up with
  applyTheme(savedTheme);

  // 3) Listen for toggle click and swap theme
  themeToggle.addEventListener("click", function() {
    let currentTheme = localStorage.getItem("theme");
    currentTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
    applyTheme(currentTheme);
  });
});

/* ====================
 * PRELOADER HANDLING
 * ==================== */
window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  if (preloader && preloader.parentNode) {
    preloader.parentNode.removeChild(preloader);
  }

  // Show the actual content
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    pageContent.style.visibility = "visible";
  }

  // Reset any forced heights
  document.documentElement.style.height = "auto";
  document.body.style.height = "auto";
  document.body.style.overflow = "visible";
});
