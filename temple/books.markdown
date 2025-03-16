---
layout: sage
title: Books
permalink: /books
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
<p class="book-category">{{ book.category }}</p>
<p class="book-description">{{ book.description }}</p>
{% if book.file %}
<div class="book-download-wrapper">
<a href="{{ book.file | relative_url }}" download class="book-download">
<img src="{{ '/assets/img/sage/download-solid.svg' | relative_url }}" alt="Download">
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

Whether you are a devoted practitioner of the occult or a curious wanderer seeking deeper truths, these texts offer a gateway to understanding the hidden realms of knowledge. Read, reflect, and let the journey transform your perception of reality.
