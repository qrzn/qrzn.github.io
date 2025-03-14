---
layout: retro
title: Games
permalink: /retro/games/
description: "Useful files for retro games"
---

<div class="games-section">
  <h1>Retro Game Patches</h1>
  <ul class="games-list">
    {% for game in site.data.games %}
      <li class="game-entry">
        <h2>{{ game.name }} ({{ game.release_date }})</h2>

        <!-- Patches List -->
        <ul class="patches-list">
          {% for patch in game.patches %}
            <li>
              <span class="patch-title">{{ patch.title }}</span><br>
              <div class="patch-links">
                <a href="{{ patch.url }}" class="patch-url" target="_blank">Main Link</a>
                {% if patch.backup_url %}
                  <a href="{{ patch.backup_url }}" class="patch-url" target="_blank">Backup Link</a>
                {% endif %}
              </div>
              <div class="patch-description">{{ patch.description }}</div>
            </li>
          {% endfor %}
        </ul>

        <!-- Linked Reviews Section -->
        {% if game.reviews %}
          <div class="reviews-section">
            <h3>Reviews & Guides</h3>
            <ul class="reviews-list">
              {% for review in game.reviews %}
                <li class="review-entry">
                  <strong>{{ review.title }}</strong><br>
                  <a href="{{ review.url }}" class="review-link" target="_blank">Read More</a><br>
                  <span class="review-summary">{{ review.summary }}</span>
                </li>
              {% endfor %}
            </ul>
          </div>
        {% endif %}
      </li>
    {% endfor %}

  </ul>
</div>
