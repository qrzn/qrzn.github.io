---
layout: sage
title: Recipes
permalink: /recipes/
---

Welcome to my recipe collection! Here, you’ll find a delightful array of dishes, from comforting classics to creative twists on traditional flavors. Whether you’re an experienced cook or just starting out in the kitchen, you’ll discover recipes designed to inspire, nourish, and satisfy. Explore and enjoy the journey of creating delicious meals with simple, wholesome ingredients!

<section class="category-posts">
  <h3 class="category-heading">Recipes</h3>
  {% assign recipes = site.categories.recipes | sort:"date" | reverse %}
  <style>
    .recipe-content {
      margin-top: 1em;
      padding: 1em;
      white-space: normal; /* Recipes might not need pre-wrap */
      position: relative; /* For positioning the close button if needed */
    }

    .recipe-content.hidden {
      display: none;
    }

    .recipe-title {
      cursor: pointer;
    }

    .close-recipe {
      background: none;
      border: 1px solid var(--accent-border);
      color: var(--link-color);
      padding: 0.5em 1em;
      cursor: pointer;
      border-radius: 5px;
      margin-top: 1em;
      display: block; /* Make it take full width or adjust as needed */
      width: fit-content; /* Adjust width to content */
    }

    .close-recipe:hover {
      background-color: var(--item-bg-color); /* Subtle hover effect */
      color: var(--link-hover);
    }

  </style>
  <ul class="posts-list recipe-list">
    {% for post in recipes %}
      <li class="post-item recipe-item" id="{{ post.title | slugify }}">
        <article class="post">
          <div class="post-title-wrapper">
            <h3 class="post-title recipe-title" data-recipe-id="{{ post.title | slugify }}">
              {{ post.title }}
            </h3>
          </div>
          {% if post.author %}
            <p class="post-author">&mdash; {{ post.author }}</p>
          {% endif %}
          <p class="post-date">{{ post.date | date: "%b %-d, %Y e.v." }}</p>
          <div id="recipe-content-{{ post.title | slugify }}" class="recipe-content hidden">
            {{ post.content }}
            <button class="close-recipe">Close</button>
          </div>
        </article>
      </li>
    {% endfor %}
  </ul>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const recipeList = document.querySelector('.recipe-list');
  const recipeTitles = document.querySelectorAll('.recipe-title');
  const recipeItems = document.querySelectorAll('.recipe-item');
  const closeButtons = document.querySelectorAll('.close-recipe');
  let currentlyOpenRecipe = null;

  recipeTitles.forEach(title => {
    title.addEventListener('click', function() {
      const recipeId = this.getAttribute('data-recipe-id');
      const contentDiv = document.getElementById(`recipe-content-${recipeId}`);
      const parentListItem = this.closest('.recipe-item');

      // Hide all other recipe items
      recipeItems.forEach(item => {
        if (item !== parentListItem) {
          item.style.display = 'none';
        }
      });

      // Show the content of the clicked recipe
      contentDiv.classList.remove('hidden');
      currentlyOpenRecipe = contentDiv;

      // Optionally scroll to the opened recipe's title
      this.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.stopPropagation();
      const contentDiv = this.closest('.recipe-content');
      if (contentDiv) {
        contentDiv.classList.add('hidden');
        currentlyOpenRecipe = null;

        // Show all recipe items again
        recipeItems.forEach(item => {
          item.style.display = 'block';
        });

        // Optionally scroll back to the top of the recipes
        document.querySelector('.category-heading').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
</script>
