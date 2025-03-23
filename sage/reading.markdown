---
layout: sage
permalink: /reading-list
title: "Reading List"
---

Presented here is a collection of books that I believe to be well worth the attention of discerning readers. This list represents a selection of works that have resonated with me due to their significant insights, compelling narratives, or profound impact. I trust that you will find within this section titles that spark your interest and provide rewarding reading experiences.

---

<section class="reading-list">
  {% for category in site.data.reading-list.categories %}
    <div class="reading-category">
      <h3 class="category-heading">{{ category.name }}</h3>
      <ul class="reading-items">
        {% for item in category.items %}
          <li class="reading-item">
            <h4 class="reading-title">{{ item.title }}</h4>
            {% if item.author %}
              <p class="reading-author">&mdash; {{ item.author }}</p>
            {% endif %}
            {% if item.description %}
              <p class="reading-description">{{ item.description }}</p>
            {% endif %}
            {% if item.notes %}
              <p class="reading-notes"><em>{{ item.notes }}</em></p>
            {% endif %}
          </li>
        {% endfor %}
            <hr>
      </ul>
    </div>
  {% endfor %}
</section>
