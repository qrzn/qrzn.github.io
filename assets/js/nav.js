// Toggle mega menu and hamburger active state on hamburger click
document.getElementById('hamburger').addEventListener('click', function() {
  this.classList.toggle('is-active');
  document.getElementById('mega-menu').classList.toggle('open');
});

// Close mega menu when close button is clicked, and reset hamburger state
document.getElementById('close-menu').addEventListener('click', function() {
  document.getElementById('mega-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('is-active');
});
