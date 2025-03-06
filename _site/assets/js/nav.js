// Toggle mega menu open on hamburger click
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('mega-menu').classList.add('open');
});

// Toggle mega menu close on X button click
document.getElementById('close-menu').addEventListener('click', function() {
  document.getElementById('mega-menu').classList.remove('open');
});
