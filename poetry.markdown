---
layout: default
title: Poetry
permalink: /poetry/
---
Hark! A collection of verses I've penned,  
When muse did alight and inspiration send.  
In the tongue of the Germans, most are composed,  
Yet at times, in English and Latin they're posed.  

Far more lie hidden, in parchment and quill,  
In the folds of notebooks, silent and still.  
Perchance, as I peruse each handwritten tome,  
Expect, from time to time, more treasures to come home.

<section class="category-posts">
  <h3 class="category-heading">Poetry</h3>
  {% if site.categories.poetryenglish %}
    {% assign english = site.categories.poetryenglish %}
  {% else %}
    {% assign english = "" | split: "" %}
  {% endif %}
  {% if site.categories.poetrylatin %}
    {% assign latin = site.categories.poetrylatin %}
  {% else %}
    {% assign latin = "" | split: "" %}
  {% endif %}
  {% if site.categories.poetrygerman %}
    {% assign german = site.categories.poetrygerman %}
  {% else %}
    {% assign german = "" | split: "" %}
  {% endif %}
  {% assign poetry = english | concat: latin | concat: german %}
  {% assign poetry = poetry | sort:"date" | reverse %}
  <ul class="posts-list">
    {% for post in poetry %}
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
          <p class="post-date">{{ post.date | date: "%b %-d, %Y" }}</p>
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
