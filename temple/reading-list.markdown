---
layout: sage
permalink: /reading-list
title: "Reading List"
---

<section class="reading-list">
  <h2 class="section-heading">Books I Think Are Worth Reading</h2>
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
      </ul>
    </div>
  {% endfor %}
</section>
