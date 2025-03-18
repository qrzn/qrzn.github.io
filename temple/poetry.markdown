---
layout: sage
title: Poetry
permalink: /poetry
---

In this sacred space of verse, the natural flow of words mirrors the gentle meander of the Dao. Here, poetry arises like a soft breeze through ancient groves—unforced, effortless, and alive with the rhythms of nature. Each line is a step on a winding path, inviting you to let go of striving and simply be.

Just as the Tao reveals itself in the silent harmony of the mountains and streams, so too does each poem capture the unspoken truths of existence. The words here are not confined by rigid form but are free to wander, echoing the balance of yin and yang in every breath. They remind us that true wisdom blossoms when we embrace simplicity and the ever-changing flow of life.

Step into this tranquil sanctuary of thought and feel the pulse of the natural world guiding your journey. May the gentle cadence of these verses inspire you to reflect, connect, and discover the profound serenity that lies within the heart of all things.

<section class="category-posts">
  <h3 class="category-heading">Poetry</h3>
  {% assign poetry = site.categories.poetry | sort:"date" | reverse %}
  <ul class="posts-list poetry-list">
    {% for post in poetry %}
      <li class="post-item poetry-item" id="{{ post.title | slugify }}">
        <article class="post">
          <div class="post-title-wrapper">
            <h3 class="post-title poem-title" data-poem-id="{{ post.title | slugify }}">
              {{ post.title }}
            </h3>
          </div>
          {% if post.author %}
            <p class="post-author">&mdash; {{ post.author }}</p>
          {% endif %}
          <p class="post-date">{{ post.date | date: "%b %-d, %Y" }}</p>
          <div id="poem-content-{{ post.title | slugify }}" class="poem-content hidden">
            {{ post.content }}
          </div>
        </article>
      </li>
    {% endfor %}
  </ul>
</section>

<style>
.poem-content.hidden {
  display: none;
}

.poem-title {
  cursor: pointer;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const poemTitles = document.querySelectorAll('.poem-title');
  let currentlyOpenPoem = null;

  poemTitles.forEach(title => {
    title.addEventListener('click', function() {
      const poemId = this.getAttribute('data-poem-id');
      const contentDivId = `poem-content-${poemId}`;
      const contentDiv = document.getElementById(contentDivId);

      console.log('Clicked title:', this.textContent);
      console.log('Poem ID:', poemId);
      console.log('Content Div ID:', contentDivId);
      console.log('Content Div Element:', contentDiv);

      if (currentlyOpenPoem && currentlyOpenPoem !== contentDiv) {
        console.log('Hiding previous poem:', currentlyOpenPoem.id);
        currentlyOpenPoem.classList.add('hidden');
      }

      if (contentDiv) {
        contentDiv.classList.toggle('hidden');
        console.log('Toggled visibility of:', contentDivId, ' - now hidden:', contentDiv.classList.contains('hidden'));
        currentlyOpenPoem = contentDiv.classList.contains('hidden') ? null : contentDiv;
      } else {
        console.log('Content div not found for ID:', contentDivId);
      }
    });
  });
});
</script>
