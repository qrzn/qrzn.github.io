# Temple of Nachash Kadosh

**Temple of Nachash Kadosh** is a Jekyll-based website dedicated to exploring occultism, Thelema, and esoteric wisdom. The site features curated collections of occult texts, a blog with articles, recipes, poetry, and more—all presented with modern animations, responsive design, and interactive features.

## Features

- **Books Section:**  
  - Books are managed via a single data file (`_data/books.yml`), making it easy to update and maintain.
  - Books are displayed in grouped sections (by category) and are searchable via a dynamic search interface.

- **Blog:**  
  - Blog posts are organized by category and displayed using a consistent, container-based design.
  - Each post shows title, author, date, and a truncated excerpt for quick reading.

- **Responsive Navigation:**  
  - The site uses a hamburger button that triggers a left-side mega menu with a close button.
  - The header features alternate imagery and a logo for a distinctive look.

- **Preloader & Animations:**  
  - A custom preloader with a diamond spinner animation is displayed while pages load.
  - Content elements (posts, books, etc.) fade and slide into view as the user scrolls, using Intersection and Mutation Observers.

- **Social Media Integration:**  
  - The footer includes neatly styled SVG icons linking to social media profiles.

- **Share Functionality:**  
  - Individual book entries include a share button that uses the Web Share API (with a fallback) to allow quick sharing.

## Technologies

- **Jekyll:** Static site generator for building the site.
- **HTML5, CSS3 & JavaScript:**  
  - CSS Flexbox and Grid for responsive layouts.
  - CSS animations and transitions for smooth user experience.
  - Intersection Observer API and Mutation Observer for scroll-triggered animations.
- **SVG Icons:** Custom icons (download, share, navigation, social) stored in the assets folder.

## Installation & Setup

1. **Prerequisites:**  
   - Install [Ruby](https://www.ruby-lang.org/), [Bundler](https://bundler.io/), and [Jekyll](https://jekyllrb.com/).

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/qrzn/qrzn.github.io.git
   cd qrzn.github.io
   ```

3. **Install Dependencies:**

   ```bash
   bundle install
   ```

4. **Run Locally:**

   ```bash
   bundle exec jekyll serve
   ```

   Then open your browser at [http://localhost:4000](http://localhost:4000).

## File Structure

- **_config.yml:**  
  Global Jekyll configuration.

- **_data/books.yml:**  
  Contains book entries (title, author, cover, file, date, description, category).

- **_posts/:**  
  Markdown files for blog posts.

- **assets/css/:**  
  - `books.css` – Main styles including preloader, book and blog styling.
  - `nav.css` – Styles for navigation (hamburger, mega menu, etc.).

- **assets/js/:**  
  - `nav.js` – JavaScript for navigation toggling.
  - `script.js` – Additional custom scripts (animations, share functionality, etc.).

- **assets/img/:**  
  Contains all images and SVG icons (e.g., `download-solid.svg`, `share-solid.svg`, `arrow-left-solid.svg`, `arrow-up-solid.svg`, social icons).

- **_layouts/:**  
  Layout templates (`default.html`, `blog-post.html`, etc.) used by various pages.

## Customization

- **Books:**  
  Edit or add entries in `_data/books.yml` to update your book collection.

- **Blog Posts:**  
  Create or modify markdown files in `_posts/`.

- **Navigation:**  
  Update your navigation links in `site.data.navigation`.

- **Styling & Scripts:**  
  Adjust CSS files in `assets/css/` and JavaScript in `assets/js/` as needed.

## License

Include your license here (for example, MIT License).

## Credits

Developed by [qrzn](https://github.com/qrzn) and inspired by esoteric traditions.

