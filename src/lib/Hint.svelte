<script lang="ts">
  import type { HintProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';

  let {
    text,
    html,
    id,
    classes = '',
    attributes = {}
  }: HintProps = $props();
</script>

<div 
  class="nhsuk-hint{classes ? ` ${classes}` : ''}"
  {id}
  {...parseAttributes(attributes)}
>
  {#if html}
    {@html html}
  {:else}
    {text}
  {/if}
</div>

<style>
  .nhsuk-hint {
    color: #425563;
    display: block;
    margin-bottom: 24px;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-hint {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  /* Reduces margin-bottom of hint when used after the default label (no class)
     or nhsuk-label--s for better vertical alignment */
  :global(.nhsuk-label:not(.nhsuk-label--m):not(.nhsuk-label--l):not(.nhsuk-label--xl) + .nhsuk-hint) {
    margin-bottom: 16px;
  }

  /* Reduces margin-bottom of hint when used after the default legend (no class)
     or nhsuk-fieldset__legend--s for better vertical alignment */
  :global(.nhsuk-fieldset__legend:not(.nhsuk-fieldset__legend--m):not(.nhsuk-fieldset__legend--l):not(.nhsuk-fieldset__legend--xl) + .nhsuk-hint) {
    margin-bottom: 16px;
  }

  /* Reduces visual spacing of legend when there is a hint */
  :global(.nhsuk-fieldset__legend + .nhsuk-hint) {
    margin-top: -8px;
  }
</style>
