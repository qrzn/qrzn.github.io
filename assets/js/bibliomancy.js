document.addEventListener('DOMContentLoaded', function() {
  let verses = [];

  // Fetch the verses from your JSON file (adjust the path if needed)
  fetch('/assets/json/liber_verses.json')
    .then(response => response.json())
    .then(data => {
      verses = data;
    })
    .catch(error => console.error('Error loading verses:', error));

  // Function to display a random verse
  function displayRandomVerse() {
    if (verses.length > 0) {
      const randomIndex = Math.floor(Math.random() * verses.length);
      const randomVerse = verses[randomIndex];
      document.getElementById('quote').textContent = randomVerse.verse;
      document.getElementById('author').textContent = `${randomVerse.chapter} - Verse ${randomVerse.verse_number}`;
    }
  }

  // Event listener for the button
  document.getElementById('new-quote').addEventListener('click', displayRandomVerse);
});
