document.addEventListener("DOMContentLoaded", function() {
  /* ====================
   * INTERSECTION OBSERVERS
   * ==================== */
  const animateItems = document.querySelectorAll(
    ".book-item, .post-item, .book-download-wrapper",
  );
  const input = document.getElementById("bookSearch");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Element is intersecting:", entry.target); // ADD THIS LINE
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateItems.forEach((item) => observer.observe(item));

  if (input) {
    observer.observe(input);
  }
});

/* ====================
 * PRELOADER HANDLING
 * ==================== */
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
  document.body.style.height = "";
  document.body.style.overflow = "";
});
