---
title: Daodejing
layout: sage
permalink: /daodejing
---

<link rel="stylesheet" href="{{ '/assets/css/daodejing.css' | relative_url }}" />

<section class="daodejing-section">

  <div class="daodejing-buttons">
    <button class="daodejing-btn" onclick="showRandomChapter()">Random Chapter</button>
    <button class="daodejing-btn" onclick="showFullText()">Show Full Text</button>
    <button class="daodejing-btn" onclick="showTOC()">Table of Contents</button>
  </div>

  <input type="text" id="search" placeholder="Search the Daodejing..." oninput="searchKeyword(this.value)" />

  <div id="chapter-content" class="daodejing-content"></div>
</section>

<script src="/assets/js/daodejing.js"></script>
