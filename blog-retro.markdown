---
layout: retro
title: Blog
permalink: /blog-retro/
---

<section class="category-posts">
  {% assign ordered_categories = "Books,essays,poetryenglish,poetrylatin,poetrygerman,recipesbaking,recipescooking,recipesmealplan,fitness" | split: "," %}
  {% for cat_key in ordered_categories %}
    {% if site.categories[cat_key] %}
      {% assign posts_in_category = site.categories[cat_key] | sort: "date" | reverse %}
      {% if cat_key == "essays" %}
        {% assign display_name = "Essays" %}
      {% elsif cat_key == "poetryenglish" %}
        {% assign display_name = "English Poetry" %}
      {% elsif cat_key == "Books" %}
        {% assign display_name = "Books" %}
      {% elsif cat_key == "poetrylatin" %}
        {% assign display_name = "Latin Poetry" %}
      {% elsif cat_key == "poetrygerman" %}
        {% assign display_name = "German Poetry" %}
      {% elsif cat_key == "recipesbaking" %}
        {% assign display_name = "Baking Recipes" %}
      {% elsif cat_key == "recipescooking" %}
        {% assign display_name = "Cooking Recipes" %}
      {% elsif cat_key == "recipesmealplan" %}
        {% assign display_name = "Meal Plans" %}
      {% elsif cat_key == "fitness" %}
        {% assign display_name = "Fitness" %}
      {% else %}
        {% assign display_name = cat_key | capitalize %}
      {% endif %}
      
      <h3 class="category-heading">{{ display_name }}</h3>
      <ul class="posts-list">
        {% for post in posts_in_category %}
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
                  {{ post.excerpt }}
                </div>
              {% endif %}
            </article>
          </li>
        {% endfor %}
      </ul>
    {% endif %}
  {% endfor %}
</section>

Whether you are a devoted practitioner of the occult or a curious wanderer seeking deeper truths, let these musings inspire your journey into the mysteries of the cosmos.
