<script lang="ts">
  import Pagination from './Pagination.svelte';
</script>

<div class="example-container">
  <h2>Pagination Examples</h2>

  <section class="example">
    <h3>Default Pagination</h3>
    <Pagination
      previousUrl="/section/treatments"
      previousPage="Treatments"
      nextUrl="/section/symptoms"
      nextPage="Symptoms"
    />
  </section>

  <section class="example">
    <h3>Only Previous Link</h3>
    <Pagination
      previousUrl="/section/page-2"
      previousPage="Page 2: Understanding your condition"
    />
  </section>

  <section class="example">
    <h3>Only Next Link</h3>
    <Pagination
      nextUrl="/section/page-2"
      nextPage="Page 2: Treatment options"
    />
  </section>

  <section class="example">
    <h3>Long Page Titles</h3>
    <Pagination
      previousUrl="/guide/managing-long-term-conditions"
      previousPage="Managing long-term conditions: A comprehensive guide"
      nextUrl="/guide/support-services"
      nextPage="Support services and resources for patients and families"
    />
  </section>

  <section class="example">
    <h3>With Custom Classes</h3>
    <Pagination
      previousUrl="/custom/prev"
      previousPage="Previous section"
      nextUrl="/custom/next"
      nextPage="Next section"
      classes="custom-pagination-class"
    />
  </section>

  <section class="example">
    <h3>With Custom Attributes</h3>
    <Pagination
      previousUrl="/test/prev"
      previousPage="Test Previous"
      nextUrl="/test/next"
      nextPage="Test Next"
      attributes={{
        'data-test': 'pagination-component',
        'data-module': 'nhsuk-pagination',
        'id': 'test-pagination'
      }}
    />
  </section>

  <section class="example">
    <h3>Article Navigation Example</h3>
    <article class="article-example">
      <h4>Understanding Diabetes</h4>
      <p>This is page 2 of a multi-page article about diabetes.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </article>
    <Pagination
      previousUrl="/articles/diabetes/introduction"
      previousPage="Introduction to diabetes"
      nextUrl="/articles/diabetes/symptoms"
      nextPage="Symptoms and diagnosis"
    />
  </section>

  <section class="example">
    <h3>Guide Navigation Example</h3>
    <div class="guide-content">
      <h4>Step 3: Preparing for your appointment</h4>
      <p>Make sure to bring all relevant documents and prepare your questions.</p>
    </div>
    <Pagination
      previousUrl="/guide/booking-appointment"
      previousPage="Step 2: Booking your appointment"
      nextUrl="/guide/during-appointment"
      nextPage="Step 4: During your appointment"
    />
  </section>

  <section class="example">
    <h3>Search Results Pagination</h3>
    <div class="search-results">
      <p>Showing results 11-20 of 47</p>
    </div>
    <Pagination
      previousUrl="/search?q=diabetes&page=1"
      previousPage="Results 1-10"
      nextUrl="/search?q=diabetes&page=3"
      nextPage="Results 21-30"
    />
  </section>

  <section class="example">
    <h3>Chapter Navigation</h3>
    <Pagination
      previousUrl="/handbook/chapter-3"
      previousPage="Chapter 3: Risk factors"
      nextUrl="/handbook/chapter-5"
      nextPage="Chapter 5: Prevention strategies"
    />
  </section>

  <section class="example">
    <h3>Form Steps Navigation</h3>
    <div class="form-step">
      <h4>Step 2 of 5: Personal details</h4>
      <p>Please provide your personal information.</p>
    </div>
    <Pagination
      previousUrl="/form/step-1"
      previousPage="Contact information"
      nextUrl="/form/step-3"
      nextPage="Medical history"
    />
  </section>

  <section class="example">
    <h3>Minimal Text</h3>
    <Pagination
      previousUrl="/prev"
      previousPage="Back"
      nextUrl="/next"
      nextPage="Continue"
    />
  </section>
</div>

<style>
  .example-container {
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
  }

  .example {
    margin-bottom: 64px;
    padding: 24px;
    background-color: #f4f4f4;
    border-radius: 4px;
  }

  .example h3 {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 24px;
  }

  .example h4 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 20px;
  }

  .example p {
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    line-height: 1.47368;
    margin-bottom: 16px;
  }

  .article-example,
  .guide-content,
  .search-results,
  .form-step {
    background-color: white;
    padding: 24px;
    border-radius: 4px;
    margin-bottom: 24px;
  }

  /* Custom class for demonstration */
  :global(.custom-pagination-class) {
    border: 2px solid #007f3b;
    padding: 16px;
    border-radius: 8px;
  }

  /* Demonstrate how pagination looks in different contexts */
  .search-results {
    border-left: 4px solid #005eb8;
  }

  .form-step {
    border-top: 4px solid #005eb8;
  }
</style>
