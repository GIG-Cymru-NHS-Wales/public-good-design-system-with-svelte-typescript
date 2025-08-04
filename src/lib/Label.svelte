<script lang="ts">
  import type { LabelProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';

  let {
    text,
    html,
    for: htmlFor,
    isPageHeading = false,
    classes = '',
    attributes = {}
  }: LabelProps = $props();

  // Only render if there's content
  const hasContent = !!(html || text);
</script>

{#if hasContent}
  {#if isPageHeading}
    <h1 class="nhsuk-label-wrapper">
      <label 
        class="nhsuk-label{classes ? ` ${classes}` : ''}"
        for={htmlFor}
        {...parseAttributes(attributes)}
      >
        {#if html}
          {@html html}
        {:else}
          {text}
        {/if}
      </label>
    </h1>
  {:else}
    <label 
      class="nhsuk-label{classes ? ` ${classes}` : ''}"
      for={htmlFor}
      {...parseAttributes(attributes)}
    >
      {#if html}
        {@html html}
      {:else}
        {text}
      {/if}
    </label>
  {/if}
{/if}

<style>
  .nhsuk-label {
    display: block;
    margin-bottom: 5px;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-label {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  /* Modifiers that make labels look more like their equivalent headings */
  :global(.nhsuk-label--xl),
  :global(.nhsuk-label--l),
  :global(.nhsuk-label--m) {
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 24px;
  }

  :global(.nhsuk-label--xl) {
    font-size: 32px;
    font-size: 2rem;
    line-height: 1.09375;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-label--xl) {
      font-size: 48px;
      font-size: 3rem;
      line-height: 1.04167;
    }
  }

  :global(.nhsuk-label--l) {
    font-size: 24px;
    font-size: 1.5rem;
    line-height: 1.04167;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-label--l) {
      font-size: 36px;
      font-size: 2.25rem;
      line-height: 1.11111;
    }
  }

  :global(.nhsuk-label--m) {
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 1.2;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-label--m) {
      font-size: 26px;
      font-size: 1.625rem;
      line-height: 1.07692;
    }
  }

  :global(.nhsuk-label--s) {
    font-weight: 700;
    margin-top: 0;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-label--s) {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  /* Label wrapper for page headings */
  .nhsuk-label-wrapper {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
</style>
