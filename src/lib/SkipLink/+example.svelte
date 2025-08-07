<script lang="ts">
  import SkipLink from './SkipLink.svelte';
</script>

<div class="example-container">
  <h1>Skip Link Component Examples</h1>

  <section class="example">
    <h2>Default Skip Link</h2>
    <p>Press Tab to see the skip link appear</p>
    <SkipLink href="#maincontent" text="Skip to main content" />
  </section>

  <section class="example">
    <h2>Custom Text</h2>
    <SkipLink href="#navigation" text="Skip to navigation" />
  </section>

  <section class="example">
    <h2>With Custom Classes</h2>
    <SkipLink
      href="#footer"
      text="Skip to footer"
      class="custom-skip-link"
    />
  </section>

  <section class="example">
    <h2>With Custom Attributes</h2>
    <SkipLink
      href="#search"
      text="Skip to search"
      data-testid="skip-to-search"
      aria-label="Skip directly to search form"
    />
  </section>

  <section class="example">
    <h2>Multiple Skip Links</h2>
    <SkipLink href="#maincontent" text="Skip to main content" />
    <SkipLink href="#navigation" text="Skip to navigation" />
    <SkipLink href="#search" text="Skip to search" />
  </section>

  <!-- Example content sections to skip to -->
  <nav id="navigation" class="content-section">
    <h2>Navigation</h2>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>

  <main id="maincontent" class="content-section">
    <h2>Main Content</h2>
    <p>
      This is the main content area. When you activate the skip link,
      focus will move directly here, bypassing the navigation.
    </p>
    <p>
      Skip links are essential for keyboard navigation and accessibility,
      allowing users to quickly navigate to important sections of the page.
    </p>
  </main>

  <section id="search" class="content-section">
    <h2>Search</h2>
    <form>
      <label for="search-input">Search the site:</label>
      <input type="search" id="search-input" name="q" />
      <button type="submit">Search</button>
    </form>
  </section>

  <footer id="footer" class="content-section">
    <h2>Footer</h2>
    <p>© 2024 NHS Digital. All rights reserved.</p>
  </footer>
</div>

<style>
  .example-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .example {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #d8dde0;
    border-radius: 4px;
    background-color: #f0f4f5;
  }

  .example h2 {
    margin-top: 0;
    color: #212b32;
    font-size: 20px;
  }

  .example p {
    color: #425563;
    margin: 10px 0;
  }

  .content-section {
    margin: 30px 0;
    padding: 20px;
    border: 1px solid #d8dde0;
    background-color: white;
  }

  .content-section h2 {
    color: #005eb8;
    margin-top: 0;
  }

  .content-section ul {
    list-style: none;
    padding: 0;
  }

  .content-section li {
    margin: 10px 0;
  }

  .content-section a {
    color: #005eb8;
    text-decoration: underline;
  }

  .content-section form {
    display: flex;
    gap: 10px;
    align-items: flex-end;
  }

  .content-section label {
    display: block;
    margin-bottom: 5px;
  }

  .content-section input {
    padding: 8px;
    border: 2px solid #212b32;
    border-radius: 4px;
  }

  .content-section button {
    padding: 8px 16px;
    background-color: #007f3b;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
  }

  .content-section button:hover {
    background-color: #00632e;
  }

  /* Custom class example */
  :global(.custom-skip-link) {
    /* Custom styles can be applied here */
  }
</style>
