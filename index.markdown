---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

# Welcome, Seeker of the Mystical Arts
Enter a realm where ancient occult wisdom and the art of divination converge. Within these digital pages, you will discover a curated collection of forbidden texts and esoteric tools—guides to the hidden mysteries of the universe.

From the sacred manuscripts of magickal lore to divination instruments that reveal the unseen currents of fate, every artifact here is designed to awaken your true will. Embrace the call of Thelema, where the law proclaims: "Do what thou wilt shall be the whole of the law."

Prepare to journey beyond the mundane—uncover ancient secrets, consult the oracles, and let your inner light guide you through the cosmic tapestry of occult knowledge.

<section class="updates">
  <h3>Recent Updates</h3>
  <ul>
    {% for post in site.posts limit:5 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small class="post-date">{{ post.date | date: "%b %-d, %Y" }}</small>
      </li>
    {% endfor %}
  </ul>
</section>
