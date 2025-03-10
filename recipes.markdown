---
layout: default
title: Recipes
permalink: /recipes/
---
Welcome to my recipe collection! Here, you'll find a delightful array of dishes, from comforting classics to creative twists on traditional flavors. Whether you're an experienced cook or just starting out in the kitchen, you'll discover recipes designed to inspire, nourish, and satisfy. Explore and enjoy the journey of creating delicious meals with simple, wholesome ingredients!

<section class="category-posts">
  <h3 class="category-heading">Recipes</h3>
  {% assign recipes = "" | split: "" %}
  {% if site.categories.recipesbaking %}
    {% assign recipes = recipes | concat: site.categories.recipesbaking %}
  {% endif %}
  {% if site.categories.recipescooking %}
    {% assign recipes = recipes | concat: site.categories.recipescooking %}
  {% endif %}
  {% if site.categories.mealplan %}
    {% assign recipes = recipes | concat: site.categories.mealplan %}
  {% endif %}
  {% assign recipes = recipes | sort:"date" | reverse %}
  <ul class="posts-list">
    {% for post in recipes %}
      <li class="post-item" id="{{ post.title | slugify }}">
        <article class="post">
          <div class="post-title-wrapper">
            <h3 class="post-title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
          </div>
          {% if post.author %}
            <p class="post-author">&mdash; {{ post.author }}</p>
          {% endif %}
          <p class="post-date">{{ post.date | date: "%b %-d, %Y e.v." }}</p>
          {% if post.excerpt %}
            <div class="post-excerpt">
              {{ post.excerpt | strip_html | truncatewords: 30 }}
            </div>
          {% endif %}
        </article>
      </li>
    {% endfor %}
  </ul>
</section>
