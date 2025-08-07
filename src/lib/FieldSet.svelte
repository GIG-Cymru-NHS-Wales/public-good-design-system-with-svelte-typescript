<script lang="ts">
  import type { FieldsetProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';

  let {
    describedBy,
    legend,
    classes = '',
    attributes = {},
    children
  }: FieldsetProps = $props();
</script>

<fieldset
  class="nhsuk-fieldset{classes ? ` ${classes}` : ''}"
  aria-describedby={describedBy}
  {...parseAttributes(attributes)}
>
  {#if legend?.html || legend?.text}
    <legend class="nhsuk-fieldset__legend{legend.classes ? ` ${legend.classes}` : ''}">
      {#if legend.isPageHeading}
        <h1 class="nhsuk-fieldset__heading">
          {#if legend.html}
            {@html legend.html}
          {:else}
            {legend.text}
          {/if}
        </h1>
      {:else}
        {#if legend.html}
          {@html legend.html}
        {:else}
          {legend.text}
        {/if}
      {/if}
    </legend>
  {/if}

  {#if children}
    {@render children()}
  {/if}
</fieldset>

<style>
  .nhsuk-fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  .nhsuk-fieldset::after {
    clear: both;
    content: "";
    display: table;
  }

  .nhsuk-fieldset__legend {
    box-sizing: border-box;
    color: #212b32;
    display: table;
    margin-bottom: 16px;
    margin-top: 0;
    max-width: 100%;
    padding: 0;
    white-space: normal;

    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-fieldset__legend {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  /* Heading modifiers */
  .nhsuk-fieldset__legend--xl {
    margin-bottom: 24px;
    font-size: 32px;
    font-size: 2rem;
    line-height: 1.09375;
    font-weight: 700;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-fieldset__legend--xl {
      font-size: 48px;
      font-size: 3rem;
      line-height: 1.04167;
    }
  }

  .nhsuk-fieldset__legend--l {
    margin-bottom: 24px;
    font-size: 24px;
    font-size: 1.5rem;
    line-height: 1.04167;
    font-weight: 700;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-fieldset__legend--l {
      font-size: 36px;
      font-size: 2.25rem;
      line-height: 1.11111;
    }
  }

  .nhsuk-fieldset__legend--m {
    margin-bottom: 24px;
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 700;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-fieldset__legend--m {
      font-size: 26px;
      font-size: 1.625rem;
      line-height: 1.07692;
    }
  }

  .nhsuk-fieldset__legend--s {
    margin-bottom: 24px;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 700;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-fieldset__legend--s {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  .nhsuk-fieldset__heading {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
  }
</style>
