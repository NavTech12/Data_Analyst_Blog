// ===============================
// Toggle light/dark theme with persistence using localStorage
// ===============================
(function themeInit() {
  // Get the root <html> element
  const root = document.documentElement;

  // Check if the user has a saved theme in localStorage
  const saved = localStorage.getItem("theme");

  // If the saved theme is "dark", apply the dark mode class
  if (saved === "dark") root.classList.add("dark");

  // Find the button that toggles the theme
  const btn = document.getElementById("themeToggle");

  // If the button exists, listen for clicks
  if (btn) {
    btn.addEventListener("click", () => {

      // Toggle the "dark" class on the root element
      root.classList.toggle("dark");
  
      // Save the current mode ("dark" or "light") in localStorage
      const mode = root.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", mode);
    });
  }
})();

// ===============================
// Mobile navigation menu toggle
// ===============================
(function mobileMenu() {
  // Get the toggle button and the navigation links container
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  // If either element does not exist, stop the function
  if (!toggle || !links) return;

  // When the toggle button is clicked...
  toggle.addEventListener("click", () => {

    // Show or hide the navigation links
    const isOpen = links.classList.toggle("show");

    // Update the button’s accessibility attribute
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
})();

// ===============================
// Automatically set the current year in the footer. Used in all the pages.
// ===============================
(function setYear() {

  // Get the element where the year will appear
  const y = document.getElementById("year");

  // If it exists, insert the current year dynamically
  if (y) y.textContent = new Date().getFullYear();
})();

// ===============================
// Simple search filter for posts (by title or tags)
// ===============================
(function postSearch() {

  // Get the search input and the list of posts
  const input = document.getElementById("postSearch");
  const list = document.getElementById("postList");

  // If either element does not exist, stop the function
  if (!input || !list) return;

  // When the user types in the search bar...
  input.addEventListener("input", () => {
    // Get the query text in lowercase
    const q = input.value.trim().toLowerCase();

    // Loop through all posts (cards)
    list.querySelectorAll(".post-card").forEach(li => {

      // Get post title and tags (also in lowercase)
      const title = li.querySelector("h3")?.textContent.toLowerCase() || "";
      const tags = (li.getAttribute("data-tags") || "").toLowerCase();

      // Check if the query matches title or tags
      const match = title.includes(q) || tags.includes(q);

      // Show or hide the post depending on the match
      li.style.display = match ? "" : "none";
    });
  });
})();
