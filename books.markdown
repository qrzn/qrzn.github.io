---
layout: default
title: Books
permalink: /books/
---
Knowledge is power, guard it well.

Welcome, seeker. Within these pages, you will find a carefully curated collection of occult texts and esoteric tomes. Steeped in mystery and ancient wisdom, these works serve as both a guide and a challenge to those who dare to pursue the hidden truths of existence.

<section class="category-posts">
  <!-- Search Input -->
  <input type="text" id="bookSearch2" placeholder="Search books..." />

  {% assign booksByCategory = site.data.books | group_by:"category" | sort:"name" %}
  {% for group in booksByCategory %}
    <section class="category-section">
      <ul class="books-list">
        {% assign sorted_books = group.items | sort:"title" %}
        {% for book in sorted_books %}
          <li class="book-item" id="{{ book.title | slugify }}">
            <article class="book">
              <div class="book-title-wrapper">
                <h3 class="book-title">{{ book.title }}</h3>
              </div>
              <p class="book-author">&mdash; {{ book.author }}</p>
              {% if book.cover %}
                <figure class="book-cover">
                  <img src="{{ book.cover | relative_url }}" alt="{{ book.title }} Cover">
                </figure>
              {% endif %}
              <p class="book-category">{{ book.category }}</p>
              <p class="book-description">{{ book.description }}</p>
              {% if book.file %}
                <div class="book-download-wrapper">
                  <a href="{{ book.file | relative_url }}" download class="book-download">
                    <img src="{{ '/assets/img/download-solid.svg' | relative_url }}" alt="Download">
                  </a>
                </div>
              {% endif %}
            </article>
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</section>

<script>
document.getElementById("bookSearch2").addEventListener("keyup", function() {
  var filter = this.value.toLowerCase();
  var bookItems = document.querySelectorAll(".book-item");
  bookItems.forEach(function(item) {
    if(item.textContent.toLowerCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
</script>

<section class="recent-books">
  <h3>Recent Book Updates</h3>
  <input type="text" id="bookSearch" placeholder="Search books...">
  <table id="booksTable">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {% assign sorted_books = site.data.books | sort:"date" | reverse %}
      {% for book in sorted_books %}
        <tr>
          <td>
            <a href="/books/#{{ book.title | slugify }}">{{ book.title }}</a>
          </td>
          <td>{{ book.author }}</td>
          <td>{{ book.category }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</section>

<script>
document.getElementById("bookSearch").addEventListener("keyup", function() {
  var filter = this.value.toLowerCase();
  var rows = document.querySelectorAll("#booksTable tbody tr");
  rows.forEach(function(row) {
    // Check all text in the row
    var rowText = row.textContent.toLowerCase();
    row.style.display = rowText.indexOf(filter) > -1 ? "" : "none";
  });
});
</script>

Whether you are a devoted practitioner of the occult or a curious wanderer seeking deeper truths, these texts offer a gateway to understanding the hidden realms of knowledge. Read, reflect, and let the journey transform your perception of reality.
