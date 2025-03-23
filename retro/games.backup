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
        <details>
          <summary>
            <h2>{{ game.name }} ({{ game.release_date }})</h2>
            <p>
              <strong>Genre:</strong> {{ game.genre }} | <strong>Platform:</strong> {{ game.platform }}
            </p>
          </summary>
          <div class="game-content">
            <!-- Patches Section -->
            {% if game.patches %}
              <div class="patches-section">
                <h3>Patches</h3>
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
              </div>
            {% endif %}

            <!-- Tools Section -->
            {% if game.tools %}
              <div class="tools-section">
                <h3>Tools</h3>
                <ul class="tools-list">
                  {% for tool in game.tools %}
                    <li>
                      <span class="tool-title">{{ tool.title }}</span><br>
                      <div class="tool-links">
                        <a href="{{ tool.url }}" class="tool-url" target="_blank">Main Link</a>
                        {% if tool.backup_url %}
                          <a href="{{ tool.backup_url }}" class="tool-url" target="_blank">Backup Link</a>
                        {% endif %}
                      </div>
                      <div class="tool-description">{{ tool.description }}</div>
                    </li>
                  {% endfor %}
                </ul>
              </div>
            {% endif %}

            <!-- Reviews & Guides Section (combining reviews, walkthroughs, and cheats) -->
            {% if game.reviews or game.walkthroughs or game.cheats %}
              <div class="reviews-section">
                <h3>Reviews &amp; Guides</h3>
                <ul class="reviews-list">
                  {% if game.reviews %}
                    {% for review in game.reviews %}
                      <li class="review-entry">
                        <strong>{{ review.title }}</strong><br>
                        <a href="{{ review.url }}" class="review-link" target="_blank">Read More</a><br>
                        <span class="review-description">{{ review.description }}</span>
                      </li>
                    {% endfor %}
                  {% endif %}
                  {% if game.walkthroughs %}
                    {% for walkthrough in game.walkthroughs %}
                      <li class="review-entry">
                        <strong>{{ walkthrough.title }}</strong><br>
                        <a href="{{ walkthrough.url }}" class="review-link" target="_blank">Read More</a><br>
                        <span class="review-description">{{ walkthrough.description }}</span>
                      </li>
                    {% endfor %}
                  {% endif %}
                  {% if game.cheats %}
                    {% for cheat in game.cheats %}
                      <li class="review-entry">
                        <strong>{{ cheat.title }}</strong><br>
                        <a href="{{ cheat.url }}" class="review-link" target="_blank">Read More</a><br>
                        <span class="review-description">{{ cheat.description }}</span>
                      </li>
                    {% endfor %}
                  {% endif %}
                </ul>
              </div>
            {% endif %}

            <!-- Media Section -->
            {% if game.media %}
              <div class="media-section">
                <h3>Media</h3>
                <ul class="media-list">
                  {% for media in game.media %}
                    <li class="media-item">
                      {% if media.type == "image" %}
                        <img src="{{ media.url }}" alt="{{ media.caption }}" class="media-image"><br>
                        <span class="media-caption">{{ media.caption }}</span>
                      {% elsif media.type == "video" %}
                        <a href="{{ media.url }}" class="media-link" target="_blank">Video Link</a><br>
                        <span class="media-caption">{{ media.caption }}</span>
                      {% endif %}
                    </li>
                  {% endfor %}
                </ul>
              </div>
            {% endif %}
          </div>
        </details>
      </li>
    {% endfor %}

  </ul>
</div>
