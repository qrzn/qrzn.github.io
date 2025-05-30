---
layout: sage
title: Blog
permalink: /blog/
---

Step into our enchanted blog—a realm where Thelemic wisdom melds with creative expression. Here, essays unveil occult mysteries, recipes transform simple ingredients into sacred rituals, and poetry sings the language of the cosmos. Each post is a crafted spell, designed to ignite your inner flame and guide you on the path of true will. Embrace the call of Thelema—“Do what thou wilt shall be the whole of the law”—and allow these digital musings to inspire your journey beyond the mundane.

<section class="category-posts">
  <h3 class="category-heading">Latest Posts</h3>
  {% assign latest_posts = site.posts | sort:"date" | reverse | slice: 0, 3 %}
  <ul class="posts-list">
    {% for post in latest_posts %}
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
                  {{ post.excerpt | strip_html | truncatewords: 30 }}
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
