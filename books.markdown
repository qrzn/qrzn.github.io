---
layout: default
title: Books
permalink: /books/
---
Knowledge is power, guard it well.

Welcome, seeker. Within these pages, you will find a carefully curated collection of occult texts and esoteric tomes. Steeped in mystery and ancient wisdom, these works serve as both a guide and a challenge to those who dare to pursue the hidden truths of existence.

{% assign books_by_category = site.data.books | group_by:"category" | sort:"name" %}
{% for group in books_by_category %}
  <section class="category-section">
    <h2 class="category-heading">{{ group.name }}</h2>
    <ul class="books-list">
      {% assign sorted_books = group.items | sort:"title" %}
      {% for book in sorted_books %}
        <li class="book-item">
          <article class="book">
            <div class="book-title-wrapper">
              <h3 class="book-title">{{ book.title }}</h3>
            </div>
            <p class="book-author">&mdash; {{ book.author }}</p>
            {% if book.cover %}
              <figure class="book-cover">
                <a href="{{ book.file | relative_url }}" download>
                  <img src="{{ book.cover | relative_url }}" alt="{{ book.title }} Cover">
                </a>
              </figure>
            {% endif %}
            <p class="book-description">{{ book.description }}</p>
          </article>
        </li>
      {% endfor %}
    </ul>
  </section>
{% endfor %}

Whether you are a devoted practitioner of the occult or a curious wanderer seeking deeper truths, these texts offer a gateway to understanding the hidden realms of knowledge. Read, reflect, and let the journey transform your perception of reality.
