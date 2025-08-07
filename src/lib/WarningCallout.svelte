<script lang="ts">
  import type { WarningCalloutProps } from './types';
  import type { Snippet } from 'svelte';
  import { classNames, defaultConfig, isImportantHeading } from './config';

  let {
    heading,
    headingLevel = defaultConfig.headingLevel,
    text = '',
    html = '',
    classes = '',
    attributes = {},
    children,
    ...rest
  }: WarningCalloutProps = $props();

  // Determine if we should add the visually hidden "Important:" prefix
  const needsImportantPrefix = !isImportantHeading(heading);

  // Build the complete class string
  const rootClasses = [classNames.root, classes].filter(Boolean).join(' ');
</script>

<div
  class={rootClasses}
  {...attributes}
  {...rest}
>
  {#if headingLevel === 1}
    <h1 class={classNames.label}>
      {#if needsImportantPrefix}
        <span role="text">
          <span class={classNames.visuallyHidden}>Important: </span>
          {@html heading}
        </span>
      {:else}
        {@html heading}<span class={classNames.visuallyHidden}>:</span>
      {/if}
    </h1>
  {:else if headingLevel === 2}
    <h2 class={classNames.label}>
      {#if needsImportantPrefix}
        <span role="text">
          <span class={classNames.visuallyHidden}>Important: </span>
          {@html heading}
        </span>
      {:else}
        {@html heading}<span class={classNames.visuallyHidden}>:</span>
      {/if}
    </h2>
  {:else if headingLevel === 3}
    <h3 class={classNames.label}>
      {#if needsImportantPrefix}
        <span role="text">
          <span class={classNames.visuallyHidden}>Important: </span>
          {@html heading}
        </span>
      {:else}
        {@html heading}<span class={classNames.visuallyHidden}>:</span>
      {/if}
    </h3>
  {:else if headingLevel === 4}
    <h4 class={classNames.label}>
      {#if needsImportantPrefix}
        <span role="text">
          <span class={classNames.visuallyHidden}>Important: </span>
          {@html heading}
        </span>
      {:else}
        {@html heading}<span class={classNames.visuallyHidden}>:</span>
      {/if}
    </h4>
  {:else if headingLevel === 5}
    <h5 class={classNames.label}>
      {#if needsImportantPrefix}
        <span role="text">
          <span class={classNames.visuallyHidden}>Important: </span>
          {@html heading}
        </span>
      {:else}
        {@html heading}<span class={classNames.visuallyHidden}>:</span>
      {/if}
    </h5>
  {:else if headingLevel === 6}
    <h6 class={classNames.label}>
      {#if needsImportantPrefix}
        <span role="text">
          <span class={classNames.visuallyHidden}>Important: </span>
          {@html heading}
        </span>
      {:else}
        {@html heading}<span class={classNames.visuallyHidden}>:</span>
      {/if}
    </h6>
  {/if}

  {#if children}
    {@render children()}
  {:else if html}
    {@html html}
  {:else if text}
    <p>{text}</p>
  {/if}
</div>

<style>
  /* Core color variables */
  :root {
    --color-nhsuk-pale-yellow: #fff9c4;
    --color-nhsuk-yellow: #ffeb3b;
    --nhsuk-text-color: #212b32;
    --nhsuk-spacing-3: 12px;
    --nhsuk-spacing-4: 16px;
    --nhsuk-spacing-5: 20px;
  }

  /* Warning callout panel styles - implements panel-with-label mixin */
  .nhsuk-warning-callout {
    background-color: var(--color-nhsuk-pale-yellow);
    border: 1px solid var(--color-nhsuk-yellow);
    border-left-width: 4px;
    color: var(--nhsuk-text-color);
    margin-bottom: 24px;
    margin-top: 0;
    padding: var(--nhsuk-spacing-5) var(--nhsuk-spacing-4) var(--nhsuk-spacing-4);
  }

  @media (min-width: 641px) {
    .nhsuk-warning-callout {
      margin-bottom: 32px;
      padding: var(--nhsuk-spacing-5) var(--nhsuk-spacing-5) var(--nhsuk-spacing-4);
    }
  }

  @media (min-width: 769px) {
    .nhsuk-warning-callout {
      margin-bottom: 40px;
    }
  }

  /* Warning callout label styles - implements heading-label mixin */
  .nhsuk-warning-callout__label {
    background-color: var(--color-nhsuk-yellow);
    color: var(--nhsuk-text-color);
    display: inline-block;
    margin: calc(-1 * var(--nhsuk-spacing-5) - 1px) calc(-1 * var(--nhsuk-spacing-4) - 1px) var(--nhsuk-spacing-3);
    padding: 8px var(--nhsuk-spacing-4);
    position: relative;
    top: -1px;
    font-family: "Frutiger W01", Arial, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.35;
  }

  @media (min-width: 641px) {
    .nhsuk-warning-callout__label {
      margin: calc(-1 * var(--nhsuk-spacing-5) - 1px) calc(-1 * var(--nhsuk-spacing-5) - 1px) var(--nhsuk-spacing-3);
      padding: 8px var(--nhsuk-spacing-5);
      font-size: 24px;
      line-height: 1.375;
    }
  }

  /* Ensure proper margin for all heading levels */
  :global(.nhsuk-warning-callout h1.nhsuk-warning-callout__label),
  :global(.nhsuk-warning-callout h2.nhsuk-warning-callout__label),
  :global(.nhsuk-warning-callout h3.nhsuk-warning-callout__label),
  :global(.nhsuk-warning-callout h4.nhsuk-warning-callout__label),
  :global(.nhsuk-warning-callout h5.nhsuk-warning-callout__label),
  :global(.nhsuk-warning-callout h6.nhsuk-warning-callout__label) {
    margin-top: calc(-1 * var(--nhsuk-spacing-5) - 1px);
    margin-bottom: var(--nhsuk-spacing-3);
  }

  @media (min-width: 641px) {
    :global(.nhsuk-warning-callout h1.nhsuk-warning-callout__label),
    :global(.nhsuk-warning-callout h2.nhsuk-warning-callout__label),
    :global(.nhsuk-warning-callout h3.nhsuk-warning-callout__label),
    :global(.nhsuk-warning-callout h4.nhsuk-warning-callout__label),
    :global(.nhsuk-warning-callout h5.nhsuk-warning-callout__label),
    :global(.nhsuk-warning-callout h6.nhsuk-warning-callout__label) {
      margin-top: calc(-1 * var(--nhsuk-spacing-5) - 1px);
    }
  }

  /* Visually hidden text for screen readers */
  .nhsuk-u-visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    border: 0;
    white-space: nowrap;
  }

  /* Content within warning callout */
  .nhsuk-warning-callout :global(p) {
    margin: 0;
    color: var(--nhsuk-text-color);
    font-family: "Frutiger W01", Arial, sans-serif;
    font-size: 19px;
    line-height: 1.47368;
  }

  .nhsuk-warning-callout :global(p:not(:first-child)) {
    margin-top: var(--nhsuk-spacing-4);
  }

  .nhsuk-warning-callout :global(ul),
  .nhsuk-warning-callout :global(ol) {
    margin: var(--nhsuk-spacing-3) 0 0 0;
    padding-left: var(--nhsuk-spacing-5);
    color: var(--nhsuk-text-color);
    font-family: "Frutiger W01", Arial, sans-serif;
    font-size: 19px;
    line-height: 1.47368;
  }

  .nhsuk-warning-callout :global(li) {
    margin-bottom: var(--nhsuk-spacing-2);
  }

  .nhsuk-warning-callout :global(a) {
    color: #005eb8;
    text-decoration: underline;
  }

  .nhsuk-warning-callout :global(a:hover) {
    color: #7C2855;
  }

  .nhsuk-warning-callout :global(a:focus) {
    background-color: var(--color-nhsuk-yellow);
    box-shadow: 0 -2px var(--color-nhsuk-yellow), 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
  }

  /* Print styles */
  @media print {
    .nhsuk-warning-callout {
      background-color: white;
      border: 2px solid #212b32;
      page-break-inside: avoid;
    }

    .nhsuk-warning-callout__label {
      background-color: white;
      color: #212b32;
      font-weight: bold;
      text-decoration: underline;
    }
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    .nhsuk-warning-callout {
      border-width: 3px;
    }

    .nhsuk-warning-callout__label {
      border: 1px solid;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .nhsuk-warning-callout :global(a:focus) {
      transition: none;
    }
  }
</style>
