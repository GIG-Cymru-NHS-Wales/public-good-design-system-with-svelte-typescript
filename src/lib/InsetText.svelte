<script lang="ts">
  import type { InsetTextProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';

  let {
    text,
    html,
    classes = '',
    attributes = {},
    children
  }: InsetTextProps = $props();
</script>

<div
  class="nhsuk-inset-text{classes ? ` ${classes}` : ''}"
  {...parseAttributes(attributes)}
>
  <span class="nhsuk-u-visually-hidden">Information: </span>
  {#if children}
    {@render children()}
  {:else if html}
    {@html html}
  {:else if text}
    <p>{text}</p>
  {/if}
</div>

<style>
  .nhsuk-inset-text {
    border-left: 10px solid #005eb8;
    max-width: 44em;
    padding: 24px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-inset-text {
      padding: 32px;
      margin-top: 56px;
      margin-bottom: 56px;
    }
  }

  @media print {
    .nhsuk-inset-text {
      border-color: #212b32;
    }
  }

  /* Remove top margin from first child and bottom margin from last child */
  .nhsuk-inset-text > :first-child {
    margin-top: 0;
  }

  .nhsuk-inset-text > :last-child {
    margin-bottom: 0;
  }

  /* Visually hidden utility class */
  .nhsuk-u-visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    border: 0;
  }

  /* Typography styles for content inside inset text */
  :global(.nhsuk-inset-text p) {
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 400;
    margin-bottom: 16px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-inset-text p) {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
      margin-bottom: 24px;
    }
  }

  :global(.nhsuk-inset-text p:last-child) {
    margin-bottom: 0;
  }

  /* Link styles within inset text */
  :global(.nhsuk-inset-text a) {
    color: #005eb8;
    text-decoration: underline;
  }

  :global(.nhsuk-inset-text a:visited) {
    color: #330072;
  }

  :global(.nhsuk-inset-text a:hover) {
    color: #003c71;
    text-decoration: none;
  }

  :global(.nhsuk-inset-text a:active) {
    color: #002147;
  }

  :global(.nhsuk-inset-text a:focus) {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
  }

  /* List styles within inset text */
  :global(.nhsuk-inset-text ul),
  :global(.nhsuk-inset-text ol) {
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    margin-bottom: 16px;
    padding-left: 20px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-inset-text ul),
    :global(.nhsuk-inset-text ol) {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
      margin-bottom: 24px;
    }
  }

  :global(.nhsuk-inset-text li) {
    margin-bottom: 8px;
  }

  :global(.nhsuk-inset-text li:last-child) {
    margin-bottom: 0;
  }

  /* Heading styles within inset text */
  :global(.nhsuk-inset-text h2),
  :global(.nhsuk-inset-text h3),
  :global(.nhsuk-inset-text h4) {
    font-family: Frutiger W01, Arial, Sans-serif;
    font-weight: 700;
    margin-bottom: 16px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-inset-text h2),
    :global(.nhsuk-inset-text h3),
    :global(.nhsuk-inset-text h4) {
      margin-bottom: 24px;
    }
  }

  :global(.nhsuk-inset-text h2) {
    font-size: 24px;
    font-size: 1.5rem;
    line-height: 1.04167;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-inset-text h2) {
      font-size: 36px;
      font-size: 2.25rem;
      line-height: 1.11111;
    }
  }

  :global(.nhsuk-inset-text h3) {
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 1.2;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-inset-text h3) {
      font-size: 26px;
      font-size: 1.625rem;
      line-height: 1.07692;
    }
  }

  :global(.nhsuk-inset-text h4) {
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-inset-text h4) {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }
</style>
