---
title: Welcome
layout: sage
permalink: /
---

**A Digital Repository of Explorations and Creations**

Welcome to the online home of [**J.G. Landje**](/about). This website serves as a personal archive and public-facing collection of my diverse intellectual and creative endeavors. Here, you will find a variety of content reflecting my interests in literature, philosophy, software development, culinary arts, and esoteric studies.

---

**Featured Sections:**

- [**Essays:**](/essays) Delve into my thoughts and reflections on a range of subjects. This section contains my written explorations of various ideas and concepts.

- [**Books:**](/books) Discover a collection of digital publications I have prepared, including Richard Wilhelm's German translations of the Daodejing and the Zhuangzi, as well as previously unavailable EPUB versions of works by Aleister Crowley.

- [**Recipes:**](/recipes) Explore my culinary adventures and find inspiration for your own kitchen with a collection of recipes I enjoy.

<!--
- [**Coding Projects:**](/coding) Examine my personal software development projects, featuring applications such as a CLI game launcher, an I Ching web app, and various game clones.
-->

[**About Me:**](/about) To learn more about my background, interests, and motivations, please visit the [About Me](/about) page.

[**Contact:**](/contact) If you wish to get in touch, please find my contact information on the [Contact](/contact) page.

Thank you for visiting. I invite you to explore the various sections of this website and engage with the content provided.

---

<div class="updates-container">

  <section class="updates">
    <h3>Latest Essays</h3>
    <ul>
      {% for post in site.categories.essays limit:5 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a><br>
          <small class="post-date">{{ post.date | date: "%b %-d, %Y" }}</small><br>
          <small class="post-description">{{ post.description | date: "%b %-d, %Y" }}</small>
          {% if post.categories %}
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  </section>
  <section class="recent-books">
    <h3>Latest Books</h3>
    <ul>
      {% assign sorted_books = site.data.books | sort:"date" | reverse %}
      {% for book in sorted_books limit:3 %}
        <li>
          <a href="/books/#{{ book.title | slugify }}">{{ book.title }}</a><br>
          <small class="book-author">by {{ book.author | date: "%b %-d, %Y" }}</small><br>
          <small class="book-date">{{ book.date | date: "%b %-d, %Y" }}</small>
        </li>
      {% endfor %}
    </ul>
  </section>
</div>
