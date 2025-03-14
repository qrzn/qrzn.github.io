---
layout: retro
title: Games
permalink: /retro/games/
description: "Useful files for retro games"
---

Here are useful files for old games to make them run better on modern systems, mostly hd fixes.

<div class="games-section">
  <h1>Retro Game Patches</h1>
  <ul class="games-list">
    {% for game in site.data.games %}
      <li class="game-entry">
        <h2>{{ game.name }} ({{ game.release_date }})</h2>
        <ul class="patches-list">
          {% for patch in game.patches %}
            <li>
              <span class="patch-title">{{ patch.title }}</span><br>
              
              <div class="patch-links">
                <!-- Main Link -->
                <a href="{{ patch.url }}" class="patch-url" target="_blank">Main</a>
                
                <!-- Backup Link (only shown if backup_url is present) -->
                {% if patch.backup_url %}
                  <a href="{{ patch.backup_url }}" class="patch-url" target="_blank">MEGA</a>
                {% endif %}
              </div>

              <div class="patch-description">
                {{ patch.description }}
              </div>
            </li>
          {% endfor %}
        </ul>
      </li>
    {% endfor %}

  </ul>
</div>
