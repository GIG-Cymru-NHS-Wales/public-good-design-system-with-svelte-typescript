<script lang="ts">
  import Hero from './Hero.svelte';
  import Button from '$lib/components/Button/Button.svelte';
</script>

<div class="example-container">
  <h2>Hero Examples</h2>
  
  <section class="example">
    <h3>Default Hero</h3>
    <div class="example-wrapper">
      <Hero 
        heading="We're here for you"
        text="Helping you take control of your health and wellbeing."
      />
    </div>
  </section>

  <section class="example">
    <h3>Hero with Image Only</h3>
    <div class="example-wrapper">
      <Hero 
        imageURL="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
      />
    </div>
  </section>

  <section class="example">
    <h3>Hero with Image and Content</h3>
    <div class="example-wrapper">
      <Hero 
        heading="We're here for you"
        text="Helping you take control of your health and wellbeing."
        imageURL="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
      />
    </div>
  </section>

  <section class="example">
    <h3>Hero with HTML Content</h3>
    <div class="example-wrapper">
      <Hero 
        heading="This is a header for the product or service"
        headingClasses="nhsuk-heading-l nhsuk-u-margin-top-5"
        html={`
          <p class="nhsuk-body-l">This is some more content which explains the product or service.</p>
          <a class="nhsuk-button nhsuk-button--reverse" href="#">Sign up</a>
        `}
      />
    </div>
  </section>

  <section class="example">
    <h3>Hero with Custom Content (using snippet)</h3>
    <div class="example-wrapper">
      <Hero heading="Welcome to our service">
        <p class="nhsuk-body-l">This hero uses a Svelte snippet for custom content.</p>
        <Button text="Get started" href="#" classes="nhsuk-button--reverse" />
        <p>You can include any content you want using the snippet approach.</p>
      </Hero>
    </div>
  </section>

  <section class="example">
    <h3>Hero with Different Heading Levels</h3>
    <div class="example-wrapper">
      <Hero 
        heading="This is an H2 heading"
        headingLevel={2}
        text="You can change the heading level while maintaining the same visual style."
      />
    </div>
  </section>

  <section class="example">
    <h3>Hero without Content</h3>
    <div class="example-wrapper">
      <Hero 
        heading="Just a heading"
      />
    </div>
  </section>

  <section class="example">
    <h3>Hero with Custom Classes</h3>
    <div class="example-wrapper">
      <Hero 
        heading="Custom styled hero"
        text="This hero has custom classes applied."
        classes="custom-hero-class"
        containerClasses="custom-container"
        attributes={{
          'data-test': 'hero-component',
          'id': 'custom-hero'
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Hero with Long Content and Image</h3>
    <div class="example-wrapper">
      <Hero 
        heading="Comprehensive Health Information"
        imageURL="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
      >
        <p class="nhsuk-body-l">
          Access trusted health information and services online. 
          Find out what to do about common health problems, 
          get advice on healthy living, and learn about conditions and treatments.
        </p>
        <ul>
          <li>Check your symptoms</li>
          <li>Find local services</li>
          <li>Book appointments online</li>
          <li>Access your health records</li>
        </ul>
        <Button text="Start now" href="#" classes="nhsuk-button--reverse" />
      </Hero>
    </div>
  </section>

  <section class="example">
    <h3>Hero with Multiple Elements</h3>
    <div class="example-wrapper">
      <Hero 
        heading="COVID-19 Vaccination Service"
        headingClasses="nhsuk-heading-xl"
      >
        <p class="nhsuk-body-l nhsuk-u-margin-bottom-4">
          Book your COVID-19 vaccination or find a walk-in centre near you.
        </p>
        <div class="nhsuk-action-link">
          <a class="nhsuk-action-link__link" href="#">
            <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
            </svg>
            <span class="nhsuk-action-link__text">Book your vaccination</span>
          </a>
        </div>
        <p class="nhsuk-body-s nhsuk-u-margin-top-7">
          Or call 119 free of charge if you cannot book online
        </p>
      </Hero>
    </div>
  </section>
</div>

<style>
  .example-container {
    padding: 24px;
    background-color: #f0f4f5;
  }

  .example {
    margin-bottom: 48px;
  }

  .example h3 {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 24px;
    color: #212b32;
  }

  .example-wrapper {
    margin-left: -24px;
    margin-right: -24px;
    position: relative;
    background-color: #ffffff;
  }

  /* Custom classes for demonstration */
  :global(.custom-hero-class) {
    /* Custom styles would go here */
  }

  :global(.custom-container) {
    /* Custom container styles would go here */
  }

  /* Additional utility classes */
  :global(.nhsuk-u-margin-bottom-4) {
    margin-bottom: 32px !important;
  }

  :global(.nhsuk-u-margin-top-7) {
    margin-top: 56px !important;
  }

  :global(.nhsuk-body-s) {
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-body-s) {
      font-size: 19px;
      font-size: 1.1875rem;
      line-height: 1.47368;
    }
  }

  :global(.nhsuk-heading-xl) {
    font-size: 32px;
    font-size: 2rem;
    line-height: 1.09375;
    font-weight: 700;
    margin-bottom: 24px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-heading-xl) {
      font-size: 48px;
      font-size: 3rem;
      line-height: 1.04167;
    }
  }

  /* Action link styles */
  :global(.nhsuk-action-link) {
    margin-top: 32px;
  }

  :global(.nhsuk-action-link__link) {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  }

  :global(.nhsuk-action-link__link:hover .nhsuk-action-link__text) {
    text-decoration: underline;
  }

  :global(.nhsuk-icon__arrow-right-circle) {
    fill: #005eb8;
    height: 36px;
    width: 36px;
    margin-right: 8px;
  }

  :global(.nhsuk-action-link__text) {
    color: #005eb8;
    font-weight: 600;
  }

  /* Button component styles (if not imported) */
  :global(.nhsuk-button) {
    font-weight: 600;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    padding: 12px 24px;
    margin-bottom: 28px;
    appearance: none;
    background-color: #007f3b;
    border: 2px solid transparent;
    border-radius: 4px;
    box-shadow: 0 4px 0 #002f15;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-align: center;
    text-decoration: none;
    vertical-align: top;
  }

  :global(.nhsuk-button:hover) {
    background-color: #005a2e;
  }

  :global(.nhsuk-button:active) {
    background-color: #005a2e;
    box-shadow: none;
    top: 4px;
  }

  :global(.nhsuk-button:focus) {
    background-color: #ffeb3b;
    box-shadow: 0 4px 0 #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    outline-offset: 4px;
  }
</style>
