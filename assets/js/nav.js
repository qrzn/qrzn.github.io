// Toggle mega menu and hamburger active state on hamburger click
document.getElementById("hamburger").addEventListener("click", function() {
  this.classList.toggle("is-active");
  document.getElementById("mega-menu").classList.toggle("open");
});
