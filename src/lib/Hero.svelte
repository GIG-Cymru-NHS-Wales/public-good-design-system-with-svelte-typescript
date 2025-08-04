<script lang="ts">
  import type { HeroProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';

  let {
    heading,
    headingClasses = '',
    headingLevel = 1,
    text,
    html,
    imageURL,
    containerClasses = '',
    classes = '',
    attributes = {},
    children
  }: HeroProps = $props();

  const hasContent = !!(children || heading || text || html);
  const hasImage = !!imageURL;
  const hasImageAndHeading = hasImage && !!heading;

  // Build the hero classes
  let heroClasses = 'nhsuk-hero';
  if (hasImage && heading) {
    heroClasses += ' nhsuk-hero--image nhsuk-hero--image-description';
  } else if (hasImage) {
    heroClasses += ' nhsuk-hero--image';
  }
  if (classes) {
    heroClasses += ` ${classes}`;
  }

  // Build heading classes
  let fullHeadingClasses = 'nhsuk-hero__heading';
  if (headingClasses) {
    fullHeadingClasses += ` ${headingClasses}`;
  }
  if (!children && !text && !html) {
    fullHeadingClasses += ' nhsuk-u-margin-bottom-0';
  }

  // Container classes
  let fullContainerClasses = 'nhsuk-width-container';
  if (containerClasses) {
    fullContainerClasses += ` ${containerClasses}`;
  }
  if (!hasImage) {
    fullContainerClasses += ' nhsuk-hero--border';
  }
</script>

<section 
  class={heroClasses}
  style={imageURL ? `background-image: url('${imageURL}');` : undefined}
  {...parseAttributes(attributes)}
>
  {#if hasImage}
    <div class="nhsuk-hero__overlay">
  {/if}
  
  {#if hasContent}
    <div class={fullContainerClasses}>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
          <div class={hasImage ? 'nhsuk-hero-content' : 'nhsuk-hero__wrapper'}>
            {#if heading}
              {#if headingLevel === 1}
                <h1 class={fullHeadingClasses}>{heading}</h1>
              {:else if headingLevel === 2}
                <h2 class={fullHeadingClasses}>{heading}</h2>
              {:else if headingLevel === 3}
                <h3 class={fullHeadingClasses}>{heading}</h3>
              {:else if headingLevel === 4}
                <h4 class={fullHeadingClasses}>{heading}</h4>
              {:else if headingLevel === 5}
                <h5 class={fullHeadingClasses}>{heading}</h5>
              {:else}
                <h6 class={fullHeadingClasses}>{heading}</h6>
              {/if}
            {/if}
            
            {#if children}
              {@render children()}
            {:else if html}
              {@html html}
            {:else if text}
              <p class="nhsuk-body-l nhsuk-u-margin-bottom-0">{text}</p>
            {/if}
            
            {#if hasImage}
              <span class="nhsuk-hero__arrow" aria-hidden="true"></span>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/if}
  
  {#if hasImage}
    </div>
  {/if}
</section>

<style>
  /* Hero base styles */
  .nhsuk-hero {
    background-color: #005eb8;
    color: #ffffff;
    position: relative;
  }

  @media print {
    .nhsuk-hero {
      color: #212b32;
    }
  }

  :global(.nhsuk-hero .nhsuk-link),
  :global(.nhsuk-hero a:not(.nhsuk-button)) {
    color: #ffffff;
  }

  :global(.nhsuk-hero .nhsuk-link:visited),
  :global(.nhsuk-hero a:not(.nhsuk-button):visited) {
    color: #ffffff;
  }

  :global(.nhsuk-hero .nhsuk-link:hover),
  :global(.nhsuk-hero a:not(.nhsuk-button):hover) {
    color: #ffffff;
  }

  :global(.nhsuk-hero .nhsuk-link:active),
  :global(.nhsuk-hero a:not(.nhsuk-button):active) {
    color: #ffffff;
  }

  :global(.nhsuk-hero .nhsuk-link:focus),
  :global(.nhsuk-hero a:not(.nhsuk-button):focus) {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
  }

  .nhsuk-hero--border {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .nhsuk-hero__wrapper {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-hero__wrapper {
      padding-top: 64px;
      padding-bottom: 64px;
    }
  }

  .nhsuk-hero__heading {
    margin-bottom: 24px;
  }

  /* Hero image styles */
  .nhsuk-hero--image {
    background-position: center right;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media only screen {
    .nhsuk-hero--image {
      min-height: 200px;
    }
  }

  @media (min-width: 48.0625em) and only screen {
    .nhsuk-hero--image {
      min-height: 320px;
    }

    .nhsuk-hero--image .nhsuk-hero__overlay {
      height: 320px;
    }
  }

  @media screen and (-ms-high-contrast: active) {
    .nhsuk-hero--image {
      min-height: 0;
    }
  }

  .nhsuk-hero__overlay {
    background-color: rgba(0, 94, 184, 0.5);
  }

  @media only screen {
    .nhsuk-hero__overlay {
      min-height: 200px;
    }
  }

  @media screen and (-ms-high-contrast: active) {
    .nhsuk-hero__overlay {
      height: auto;
      min-height: 0;
    }
  }

  /* Hero image with description styles */
  .nhsuk-hero--image-description {
    margin-bottom: calc(70px + 20px + 24px);
  }

  @media (min-width: 48.0625em) {
    .nhsuk-hero--image-description {
      margin-bottom: calc(48px + 20px + 32px);
    }
  }

  .nhsuk-hero--image-description .nhsuk-hero-content {
    background-color: #005eb8;
    color: #ffffff;
    margin-bottom: 24px;
    padding: 32px;
    position: relative;
    top: 70px;
  }

  .nhsuk-hero__arrow {
    bottom: -10px;
    display: block;
    height: 20px;
    left: 32px;
    overflow: hidden;
    position: absolute;
    transform: rotate(45deg);
    width: 20px;
  }

  @media print {
    .nhsuk-hero__arrow {
      display: none;
    }
  }

  .nhsuk-hero__arrow::before,
  .nhsuk-hero__arrow::after {
    border: solid 32px #005eb8;
    content: "";
    display: block;
    height: 0;
    position: absolute;
    top: 0;
    transform: rotate(45deg);
    width: 0;
  }

  @media (min-width: 375px) {
    .nhsuk-hero--image-description .nhsuk-hero-content {
      width: 85%;
    }
  }

  @media (min-width: 48.0625em) {
    .nhsuk-hero--image-description .nhsuk-hero-content {
      bottom: -48px;
      margin-bottom: 0;
      max-width: 35em;
      padding: 40px 48px;
      position: absolute;
      top: auto;
    }

    .nhsuk-hero__arrow {
      left: 46px;
    }
  }

  @media print {
    .nhsuk-hero--image-description .nhsuk-hero-content {
      color: #212b32;
      max-width: 100%;
      padding: 0;
    }
  }

  @media screen and (-ms-high-contrast: active) {
    .nhsuk-hero--image-description .nhsuk-hero-content {
      bottom: 0;
      margin-bottom: 0;
      min-height: 0;
      padding: 40px 0 0;
      position: relative;
      top: 0;
    }

    .nhsuk-hero__arrow {
      display: none;
    }
  }

  /* Utility classes */
  .nhsuk-u-margin-bottom-0 {
    margin-bottom: 0 !important;
  }

  .nhsuk-u-margin-top-5 {
    margin-top: 40px !important;
  }

  .nhsuk-body-l {
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-body-l {
      font-size: 24px;
      font-size: 1.5rem;
      line-height: 1.33333;
    }
  }

  .nhsuk-heading-l {
    font-size: 32px;
    font-size: 2rem;
    line-height: 1.09375;
    font-weight: 700;
    margin-bottom: 24px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-heading-l {
      font-size: 48px;
      font-size: 3rem;
      line-height: 1.04167;
    }
  }

  /* Grid classes */
  .nhsuk-width-container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px;
  }

  @media (min-width: 48.0625em) {
    .nhsuk-width-container {
      padding: 0 32px;
    }
  }

  .nhsuk-grid-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -16px;
  }

  .nhsuk-grid-column-two-thirds {
    box-sizing: border-box;
    padding: 0 16px;
    width: 100%;
  }

  @media (min-width: 48.0625em) {
    .nhsuk-grid-column-two-thirds {
      width: 66.6666%;
    }
  }

  /* Button reverse style (if used in examples) */
  :global(.nhsuk-hero .nhsuk-button--reverse) {
    background-color: #ffffff;
    box-shadow: 0 4px 0 #003c71;
    color: #005eb8;
  }

  :global(.nhsuk-hero .nhsuk-button--reverse:hover) {
    background-color: #dae8f0;
    color: #005eb8;
  }

  :global(.nhsuk-hero .nhsuk-button--reverse:active) {
    background-color: #dae8f0;
    box-shadow: none;
    color: #005eb8;
    top: 4px;
  }

  :global(.nhsuk-hero .nhsuk-button--reverse:focus) {
    background-color: #ffeb3b;
    box-shadow: 0 4px 0 #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    outline-offset: 4px;
  }
</style>
