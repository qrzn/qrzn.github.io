---
layout: sage
title: Books
permalink: /books
---

Welcome to the Epubs section of my website, a digital library containing a curated selection of electronic publications that I have prepared and made available.

Within this section, you will find EPUB versions of significant literary and philosophical works. Currently featured are Richard Wilhelm's esteemed German translations of the Daodejing and the Zhuangzi, two foundational texts of Daoist philosophy. These digital editions aim to provide accessible and well-formatted versions of these important works for scholarly and personal engagement.

Furthermore, this section also includes a collection of works by Aleister Crowley that have been meticulously prepared in the EPUB format. Some of these texts were previously unavailable in this digital format, and their inclusion here seeks to broaden their accessibility to interested readers.

It is my hope that this collection of epubs will serve as a valuable resource for those interested in exploring these diverse and influential writings. Please feel free to browse the available titles and download them for your personal use.

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
