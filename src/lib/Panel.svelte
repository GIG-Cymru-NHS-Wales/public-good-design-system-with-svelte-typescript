<script lang="ts">
  import type { PanelProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';

  let {
    titleText,
    titleHtml,
    headingLevel = 1,
    text,
    html,
    classes = '',
    attributes = {},
    children
  }: PanelProps = $props();

  const hasContent = !!(children || html || text);
</script>

<div 
  class="nhsuk-panel{classes ? ` ${classes}` : ''}"
  {...parseAttributes(attributes)}
>
  {#if headingLevel === 1}
    <h1 class="nhsuk-panel__title">
      {#if titleHtml}
        {@html titleHtml}
      {:else}
        {titleText}
      {/if}
    </h1>
  {:else if headingLevel === 2}
    <h2 class="nhsuk-panel__title">
      {#if titleHtml}
        {@html titleHtml}
      {:else}
        {titleText}
      {/if}
    </h2>
  {:else if headingLevel === 3}
    <h3 class="nhsuk-panel__title">
      {#if titleHtml}
        {@html titleHtml}
      {:else}
        {titleText}
      {/if}
    </h3>
  {:else if headingLevel === 4}
    <h4 class="nhsuk-panel__title">
      {#if titleHtml}
        {@html titleHtml}
      {:else}
        {titleText}
      {/if}
    </h4>
  {:else if headingLevel === 5}
    <h5 class="nhsuk-panel__title">
      {#if titleHtml}
        {@html titleHtml}
      {:else}
        {titleText}
      {/if}
    </h5>
  {:else}
    <h6 class="nhsuk-panel__title">
      {#if titleHtml}
        {@html titleHtml}
      {:else}
        {titleText}
      {/if}
    </h6>
  {/if}
  
  {#if hasContent}
    <div class="nhsuk-panel__body">
      {#if children}
        {@render children()}
      {:else if html}
        {@html html}
      {:else if text}
        {text}
      {/if}
    </div>
  {/if}
</div>

<style>
  .nhsuk-panel {
    background: #007f3b;
    border: 8px solid transparent;
    box-sizing: border-box;
    color: #ffffff;
    padding: 32px;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 400;
    margin-bottom: 24px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-panel {
      font-size: 26px;
      font-size: 1.625rem;
      line-height: 1.07692;
      margin-bottom: 32px;
    }
  }

  @media (max-width: 48.0624em) {
    .nhsuk-panel {
      padding: 24px;
      /* Break long words on narrow viewports */
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    }
  }

  @media print {
    .nhsuk-panel {
      border-color: currentcolor;
      color: #212b32;
      background: none;
    }
  }

  .nhsuk-panel__title {
    margin-top: 0;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 32px;
    font-size: 2rem;
    line-height: 1.09375;
    font-weight: 700;
    margin-bottom: 32px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-panel__title {
      font-size: 48px;
      font-size: 3rem;
      line-height: 1.04167;
      margin-bottom: 40px;
    }
  }

  .nhsuk-panel__title:last-child {
    margin-bottom: 0;
  }

  /* Panel body styles */
  .nhsuk-panel__body {
    /* Inherit font properties from panel */
  }

  /* Global styles for content inside panel */
  :global(.nhsuk-panel p) {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin-bottom: 16px;
  }

  :global(.nhsuk-panel p:last-child) {
    margin-bottom: 0;
  }

  :global(.nhsuk-panel a) {
    color: #ffffff;
  }

  :global(.nhsuk-panel a:visited) {
    color: #ffffff;
  }

  :global(.nhsuk-panel a:hover) {
    color: #ffffff;
    text-decoration: none;
  }

  :global(.nhsuk-panel a:active) {
    color: #ffffff;
  }

  :global(.nhsuk-panel a:focus) {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
  }

  /* List styles within panel */
  :global(.nhsuk-panel ul),
  :global(.nhsuk-panel ol) {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin-bottom: 16px;
  }

  :global(.nhsuk-panel li) {
    margin-bottom: 8px;
  }

  :global(.nhsuk-panel li:last-child) {
    margin-bottom: 0;
  }

  /* Button styles within panel */
  :global(.nhsuk-panel .nhsuk-button) {
    background-color: #ffffff;
    box-shadow: 0 4px 0 #aeb7bd;
    color: #005eb8;
  }

  :global(.nhsuk-panel .nhsuk-button:hover) {
    background-color: #dae8f0;
    color: #005eb8;
  }

  :global(.nhsuk-panel .nhsuk-button:active) {
    background-color: #dae8f0;
    box-shadow: none;
    color: #005eb8;
    top: 4px;
  }

  :global(.nhsuk-panel .nhsuk-button:focus) {
    background-color: #ffeb3b;
    box-shadow: 0 4px 0 #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    outline-offset: 4px;
  }
</style>
