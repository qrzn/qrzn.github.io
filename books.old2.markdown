---
layout: default
title: "Books"
---

<h1>Books</h1>

{% assign books_by_category = site.books | group_by:"category" | sort: "name" %}
{% for group in books_by_category %}
  <h2 class="category-heading">{{ group.name }}</h2>
  <ul class="books-list">
    {% for book in group.items %}
      <li class="book-item">
        <h3 class="book-title">
          <a href="{{ book.url | relative_url }}">{{ book.title }}</a>
        </h3>
        {% if book.cover %}
          <div class="book-cover">
            <a href="{{ book.url | relative_url }}">
              <img src="{{ book.cover | relative_url }}" alt="{{ book.title }} Cover">
            </a>
          </div>
        {% endif %}
        <p class="book-description">{{ book.description | truncatewords: 30 }}</p>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
