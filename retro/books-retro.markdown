---
layout: retro
title: Books
permalink: /retro/books/
description: "Ebooks in epub format!"
---

<section class="recent-books">
  <input type="text" id="bookSearch" placeholder="Search books...">
  <ul id="booksList">
    {% assign sorted_books = site.data.books | sort:"date" | reverse %}
    {% for book in sorted_books %}
      <li>
        <a href="{{ book.file }}">{{ book.author }} &mdash; {{ book.title }}</a>
      </li>
    {% endfor %}
  </ul>
</section>

<script>
document.getElementById("bookSearch").addEventListener("keyup", function() {
  var filter = this.value.toLowerCase();
  var items = document.querySelectorAll("#booksList li");
  items.forEach(function(item) {
    var text = item.textContent.toLowerCase();
    item.style.display = text.indexOf(filter) > -1 ? "" : "none";
  });
});
</script>
