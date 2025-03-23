---
layout: retro
title: Games
permalink: /retro/games/
description: "Useful files for retro games"
---

<section class="category-posts">
  <style>
    .game-content {
      margin-top: 1em;
      padding: 1em;
      white-space: normal;
      position: relative;
    }
    .game-content.hidden {
      display: none;
    }
    .game-title {
      cursor: pointer;
      color: var(--link-color);
      transition: color 0.3s ease;
    }
    .game-title:hover {
      cursor: pointer;
      color: var(--link-hover);
    }
    .close-game {
      background: none;
      border: 1px solid var(--accent-border);
      color: var(--link-color);
      padding: 0.5em 1em;
      cursor: pointer;
      border-radius: 5px;
      margin-top: 1em;
      display: block;
      width: fit-content;
    }
    .close-game:hover {
      background-color: var(--item-bg-color);
      color: var(--link-hover);
    }
  </style>

  <ul class="posts-list game-list">
    {% for game in site.data.games %}
      <li class="post-item game-item" id="{{ game.name | slugify }}">
        <article class="post">
          <div class="post-title-wrapper">
            <h3 class="post-title game-title" data-game-id="{{ game.name | slugify }}">
              {{ game.name }} ({{ game.release_date }})<br>
              <small>
                <strong>Genre:</strong> {{ game.genre }} | 
                <strong>Platform:</strong> {{ game.platform }}
              </small>
            </h3>
          </div>
          <p class="post-date">{{ game.release_date }}</p>
          <div id="game-content-{{ game.name | slugify }}" class="game-content hidden">
            <!-- Patches Section -->
            {% if game.patches %}
              <div class="patches-section">
                <h4>Patches</h4>
                <ul class="patches-list">
                  {% for patch in game.patches %}
                    <li>
                      <strong>{{ patch.title }}</strong><br>
                      <a href="{{ patch.url }}" target="_blank">Main Link</a>
                      {% if patch.backup_url %}
                        | <a href="{{ patch.backup_url }}" target="_blank">Backup Link</a>
                      {% endif %}
                      <p>{{ patch.description }}</p>
                    </li>
                  {% endfor %}
                </ul>
              </div>
            {% endif %}

            <!-- Tools Section -->
            {% if game.tools %}
              <div class="tools-section">
                <h4>Tools</h4>
                <ul class="tools-list">
                  {% for tool in game.tools %}
                    <li>
                      <strong>{{ tool.title }}</strong><br>
                      <a href="{{ tool.url }}" target="_blank">Main Link</a>
                      {% if tool.backup_url %}
                        | <a href="{{ tool.backup_url }}" target="_blank">Backup Link</a>
                      {% endif %}
                      <p>{{ tool.description }}</p>
                    </li>
                  {% endfor %}
                </ul>
              </div>
            {% endif %}

            <!-- Reviews & Guides Section (combining reviews, walkthroughs, and cheats) -->
            {% if game.reviews or game.walkthroughs or game.cheats %}
              <div class="reviews-section">
                <h4>Reviews &amp; Guides</h4>
                <ul class="reviews-list">
                  {% if game.reviews %}
                    {% for review in game.reviews %}
                      <li>
                        <strong>{{ review.title }}</strong><br>
                        <a href="{{ review.url }}" target="_blank">Read More</a>
                        <p>{{ review.description }}</p>
                      </li>
                    {% endfor %}
                  {% endif %}
                  {% if game.walkthroughs %}
                    {% for walkthrough in game.walkthroughs %}
                      <li>
                        <strong>{{ walkthrough.title }}</strong><br>
                        <a href="{{ walkthrough.url }}" target="_blank">Read More</a>
                        <p>{{ walkthrough.description }}</p>
                      </li>
                    {% endfor %}
                  {% endif %}
                  {% if game.cheats %}
                    {% for cheat in game.cheats %}
                      <li>
                        <strong>{{ cheat.title }}</strong><br>
                        <a href="{{ cheat.url }}" target="_blank">Read More</a>
                        <p>{{ cheat.description }}</p>
                      </li>
                    {% endfor %}
                  {% endif %}
                </ul>
              </div>
            {% endif %}

            <!-- Media Section -->
            {% if game.media %}
              <div class="media-section">
                <h4>Media</h4>
                <ul class="media-list">
                  {% for media in game.media %}
                    <li>
                      {% if media.type == "image" %}
                        <img src="{{ media.url }}" alt="{{ media.caption }}" class="media-image"><br>
                        <span>{{ media.caption }}</span>
                      {% elsif media.type == "video" %}
                        <a href="{{ media.url }}" target="_blank">Video Link</a><br>
                        <span>{{ media.caption }}</span>
                      {% endif %}
                    </li>
                  {% endfor %}
                </ul>
              </div>
            {% endif %}
            <button class="close-game">Close</button>
          </div>
        </article>
      </li>
    {% endfor %}

  </ul>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const gameTitles = document.querySelectorAll('.game-title');
  const gameItems = document.querySelectorAll('.game-item');
  const closeButtons = document.querySelectorAll('.close-game');
  const headerWrapper = document.querySelector('.header-wrapper'); // optional, for offset scrolling

  gameTitles.forEach(title => {
    title.addEventListener('click', function() {
      const gameId = this.getAttribute('data-game-id');
      const contentDiv = document.getElementById(`game-content-${gameId}`);
      const parentListItem = this.closest('.game-item');

      // Hide all other game items
      gameItems.forEach(item => {
        if (item !== parentListItem) {
          item.style.display = 'none';
        }
      });

      // Show the content of the clicked game
      contentDiv.classList.remove('hidden');

      // Scroll to the opened game's title with an optional header offset
      const headerHeight = headerWrapper ? headerWrapper.offsetHeight : 0;
      const titleRect = this.getBoundingClientRect();
      const titleAbsoluteTop = titleRect.top + window.scrollY;
      const scrollPosition = titleAbsoluteTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.stopPropagation();
      const contentDiv = this.closest('.game-content');
      if (contentDiv) {
        contentDiv.classList.add('hidden');
        // Show all game items again
        gameItems.forEach(item => {
          item.style.display = 'block';
        });
      }
    });
  });
});
</script>
