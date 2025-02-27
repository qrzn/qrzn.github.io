---
layout: default
title: "Recent Updates"
description: "Latest news and updates about Temple of Nachash Kadosh."
---

<section class="updates">
  <h1>Recent Updates</h1>
  <ul>
    {% for post in site.posts limit:5 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small class="post-date">{{ post.date | date: "%b %-d, %Y" }}</small>
      </li>
    {% endfor %}
  </ul>
</section>
