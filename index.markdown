---
title: Welcome, Seeker of the Magickal Arts
layout: default
---
Enter a realm where ancient occult wisdom and the art of divination converge. Within these digital pages, you will discover a curated collection of forbidden texts and esoteric tools—guides to the hidden mysteries of the universe.

From the sacred manuscripts of magickal lore to divination instruments that reveal the unseen currents of fate, every artifact here is designed to awaken your true will. Embrace the call of Thelema, where the law proclaims: 

*"Do what thou wilt shall be the whole of the law."*

Prepare to journey beyond the mundane—uncover ancient secrets, consult the oracles, and let your inner light guide you through the cosmic tapestry of occult knowledge.

<div class="updates-container">
  <section class="recent-books">
    <h3>Latest eBooks</h3>
    <ul>
      {% assign sorted_books = site.data.books | sort:"date" | reverse %}
      {% for book in sorted_books limit:3 %}
        <li>
          <a href="/books/#{{ book.title | slugify }}">{{ book.title }}</a><br>
          <small class="book-date">{{ book.date | date: "%b %-d, %Y e.v." }}</small>
        </li>
      {% endfor %}
    </ul>
  </section>

  <section class="updates">
    <h3>Latest Posts</h3>
    <ul>
      {% for post in site.posts limit:3 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a><br>
          <small class="post-date">{{ post.date | date: "%b %-d, %Y e.v." }}</small>
          {% if post.categories %}
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  </section>
</div>
