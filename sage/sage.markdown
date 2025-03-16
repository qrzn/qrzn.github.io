---
title: Welcome, Wanderer of the Dao
layout: sage
permalink: /
---

Step gently into this sanctuary where the subtle arts of wisdom and divination intertwine effortlessly. Within these quiet pages, you will encounter carefully chosen texts and instruments that whisper truths from the harmony of the universe.

From ancient manuscripts that speak softly of the way of nature, to divination tools that illuminate the flow of the Dao, each offering here invites you to align effortlessly with your innermost nature. Embrace simplicity, for as the Dao teaches:

_“The sage does nothing, yet nothing remains undone.”_

Let go of striving; allow insight to arise naturally. Journey beyond the familiar—hear the wisdom of sages past, converse quietly with the oracles, and let your inner clarity guide you effortlessly through the endless unfolding of the cosmic Dao.

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
