document.addEventListener("DOMContentLoaded", function() {
  // Load the tarot card data from an external JSON file
  fetch('/assets/json/tarot.json')
    .then(response => response.json())
    .then(data => {
      window.tarotDeck = data; // Store the loaded tarot deck globally
    })
    .catch(error => console.error('Error loading tarot data:', error));

  // Add event listener for drawing cards
  document.getElementById("draw-cards").addEventListener("click", drawCards);
});

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Draw cards and update the DOM
function drawCards() {
  if (!window.tarotDeck) {
    console.error('Tarot deck not loaded yet.');
    return;
  }
  
  // Create a copy of the deck and shuffle it
  const deckCopy = shuffle([...window.tarotDeck]);
  // Select a three-card spread
  const spread = deckCopy.slice(0, 3);
  
  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = ''; // Clear any previous cards

  spread.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = `<h2>${card.name}</h2><p>${card.meaning}</p>`;
    cardsContainer.appendChild(cardDiv);
  });
}
