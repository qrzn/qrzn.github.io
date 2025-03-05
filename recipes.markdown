---
layout: default
title: Recipes
permalink: /recipes/
---
Welcome to my recipe collection! Here, you'll find a delightful array of dishes, from comforting classics to creative twists on traditional flavors. Whether you're an experienced cook or just starting out in the kitchen, you'll discover recipes designed to inspire, nourish, and satisfy. Explore and enjoy the journey of creating delicious meals with simple, wholesome ingredients!

<section class="category-posts">
  <h3>Baking</h3>
  <ul>
    {% for post in site.categories.recipesbaking %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small class="post-date">{{ post.date | date: "%b %-d, %Y" }}</small>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="category-posts">
  <h3>Cooking</h3>
  <ul>
    {% for post in site.categories.recipescooking %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small class="post-date">{{ post.date | date: "%b %-d, %Y" }}</small>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="category-posts">
<h3>Meal Plans</h3>
  <ul>
    {% for post in site.categories.mealplan %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small class="post-date">{{ post.date | date: "%b %-d, %Y" }}</small>
      </li>
    {% endfor %}
  </ul>
</section>

