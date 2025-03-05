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
  <h3>English</h3>
  <ul>
    {% for post in site.categories.poetryenglish %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small class="post-date">{{ post.date | date: "%b %-d, %Y" }}</small>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="category-posts">
  <h3>Latin</h3>
  <ul>
    {% for post in site.categories.poetrylatin %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small class="post-date">{{ post.date | date: "%b %-d, %Y" }}</small>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="category-posts">
  <h3>German</h3>
  <ul>
    {% for post in site.categories.poetrygerman %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small class="post-date">{{ post.date | date: "%b %-d, %Y" }}</small>
      </li>
    {% endfor %}
  </ul>
</section>
