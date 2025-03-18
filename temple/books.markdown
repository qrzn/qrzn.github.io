---
layout: sage
title: Books
permalink: /books
---

Understanding arises, let it flow naturally.

Welcome, traveler. Within these gathered scrolls, lie whispers of ancient understanding and the subtle currents of the unseen. Woven with the threads of mystery and the breath of ages, these writings offer glimpses and gentle nudges to those who listen for the deeper rhythms of existence.

<section class="category-posts">
  <input type="text" id="bookSearchTable" placeholder="Search books..." />

  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Description</th>
        <th>Download</th>
      </tr>
    </thead>
    <tbody>
      {% assign booksByCategory = site.data.books | group_by:"category" | sort:"name" %}
      {% for group in booksByCategory %}
        {% assign sorted_books = group.items | sort:"title" %}
        {% for book in sorted_books %}
          <tr class="book-item-table" id="{{ book.title | slugify }}">
            <td data-label="Title">{{ book.title }}</td>
            <td data-label="Author">{{ book.author }}</td>
            <td data-label="Category">{{ book.category }}</td>
            <td data-label="Description">{{ book.description }}</td>
            <td data-label="Download">
              {% if book.file %}
                <div class="book-download-wrapper">
                  <a href="{{ book.file | relative_url }}" download class="book-download">
                    <img src="{{ '/assets/img/sage/download-solid.svg' | relative_url }}" alt="Download">
                  </a>
                </div>
              {% endif %}
            </td>
          </tr>
        {% endfor %}
      {% endfor %}
    </tbody>
  </table>
</section>

<script>
// Basic JavaScript for table search (This is a simplified version)
document.getElementById("bookSearchTable").addEventListener("keyup", function() {
  var filter = this.value.toLowerCase();
  var table = document.querySelector("table");
  var rows = table.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) { // Start from index 1 to skip the header row
    var cells = rows[i].getElementsByTagName("td");
    var found = false;
    for (var j = 0; j < cells.length; j++) {
      if (cells[j].textContent.toLowerCase().indexOf(filter) > -1) {
        found = true;
        break;
      }
    }
    if (found) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});
</script>

Whether you are a devoted practitioner of the occult or a curious wanderer seeking deeper truths, these texts offer a gateway to understanding the hidden realms of knowledge. Read, reflect, and let the journey transform your perception of reality.
