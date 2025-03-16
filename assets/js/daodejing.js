let chapters = [];

// Load JSON data once
fetch("/assets/json/daodejing.json")
  .then((res) => res.json())
  .then((data) => {
    chapters = data;
    showRandomChapter(); // Show initial random chapter
  });

// Display random chapter
function showRandomChapter() {
  const chapter = chapters[Math.floor(Math.random() * chapters.length)];
  displayChapters([chapter]);
}

// Display full text
function showFullText() {
  displayChapters(chapters);
}

// Display Table of Contents
function showTOC() {
  let tocHTML = "<h2>Table of Contents</h2><ul>";
  chapters.forEach((ch, index) => {
    tocHTML += `<li><a href="#" onclick="showChapter(${index});return false;">${ch.chapter}. ${ch.title}</a></li>`;
  });
  tocHTML += "</ul>";
  document.getElementById("chapter-content").innerHTML = tocHTML;
}

// Display selected chapter from TOC
function showChapter(index) {
  displayChapters([chapters[index]]);
}

// Keyword search function
function searchKeyword(query) {
  query = query.toLowerCase().trim();
  if (!query) {
    document.getElementById("chapter-content").innerHTML =
      "<p>Enter a keyword to search.</p>";
    return;
  }

  const results = chapters.filter(
    (ch) =>
      ch.title.toLowerCase().includes(query) ||
      ch.text.some((line) => line.toLowerCase().includes(query)),
  );

  if (results.length > 0) {
    displayChapters(results);
  } else {
    document.getElementById("chapter-content").innerHTML =
      "<p>No matching chapters found.</p>";
  }
}

// Helper to display chapters
function displayChapters(chaptersArray) {
  let html = "";
  chaptersArray.forEach((ch) => {
    html += `<h2>${ch.chapter}. ${ch.title}</h2>`;
    html += ch.text.map((line) => `<p>${line}</p>`).join("");
  });
  document.getElementById("chapter-content").innerHTML = html;
}
