---
layout: default
title: Books
permalink: /books/
---
Knowledge is power, guard it well.

Welcome, seeker. Within these pages, you will find a carefully curated collection of occult texts and esoteric tomes. Steeped in mystery and ancient wisdom, these works serve as both a guide and a challenge to those who dare to pursue the hidden truths of existence.

<section class="category-posts">
  {% for cat in site.categories %}
    {% assign catName = cat[0] %}
    {% if catName != "Books" %}
      {%- assign subjectPosts = cat[1] | where_exp:"post", "post.categories contains 'Books'" -%}
      {% if subjectPosts.size > 0 %}
        <section class="category-section">
          <h3 class="category-heading">
            {% case catName %}
              {% when "essays" %}Essays
              {% when "poetryenglish" %}English Poetry
              {% when "poetrylatin" %}Latin Poetry
              {% when "poetrygerman" %}German Poetry
              {% when "recipesbaking" %}Baking Recipes
              {% when "recipescooking" %}Cooking Recipes
              {% when "recipesmealplan" %}Meal Plans
              {% when "fitness" %}Fitness
              {% when "Daoism" %}Daoism
              {% when "Thelema" %}Thelema
              {% else %}{{ catName | capitalize }}
            {% endcase %}
          </h3>
          <ul class="books-list">
            {% assign sorted_books = subjectPosts | sort:"title" %}
            {% for book in sorted_books %}
              <li class="book-item" id="{{ book.title | slugify }}">
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
      {% endif %}
    {% endif %}
  {% endfor %}
</section>

Whether you are a devoted practitioner of the occult or a curious wanderer seeking deeper truths, these texts offer a gateway to understanding the hidden realms of knowledge. Read, reflect, and let the journey transform your perception of reality.
