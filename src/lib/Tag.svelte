<script lang="ts">
  import type { TagProps } from './types';
  import { classNames, getColorClass } from './config';

  let {
    text = '',
    html = '',
    color = 'default',
    noBorder = false,
    classes = '',
    attributes = {},
    ...rest
  }: TagProps = $props();

  // Build the complete class string
  $: tagClasses = [
    classNames.root,
    getColorClass(color),
    noBorder ? classNames.noBorder : '',
    classes
  ].filter(Boolean).join(' ');
</script>

<strong
  class={tagClasses}
  {...attributes}
  {...rest}
>
  {#if html}
    {@html html}
  {:else}
    {text}
  {/if}
</strong>

<style>
  /* Color functions equivalent to SCSS functions */
  :root {
    /* NHS color palette */
    --color-nhsuk-blue: #005eb8;
    --color-nhsuk-white: #ffffff;
    --color-nhsuk-black: #212b32;
    --color-nhsuk-grey-1: #4c6272;
    --color-nhsuk-green: #007f3b;
    --color-nhsuk-aqua-green: #00a499;
    --color-nhsuk-purple: #330072;
    --color-nhsuk-pink: #ae2573;
    --color-nhsuk-red: #d5281b;
    --color-nhsuk-warm-yellow: #ffb81c;
    --color-nhsuk-yellow: #fae100;

    /* Spacing */
    --nhsuk-spacing-1: 4px;
    --nhsuk-spacing-2: 8px;
  }

  /* Base tag styles */
  .nhsuk-tag {
    /* Default blue shade 10% darker */
    background-color: #0050a3;
    border: 1px solid #0050a3;
    color: var(--color-nhsuk-white);
    display: inline-block;
    outline: 2px solid transparent;
    outline-offset: -2px;
    padding-bottom: var(--nhsuk-spacing-1);
    padding-left: var(--nhsuk-spacing-2);
    padding-right: var(--nhsuk-spacing-2);
    padding-top: var(--nhsuk-spacing-1);
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    font-family: "Frutiger W01", Arial, sans-serif;
  }

  /* Color variants */

  /* White variant */
  .nhsuk-tag--white {
    background-color: var(--color-nhsuk-white);
    border-color: var(--color-nhsuk-black);
    color: var(--color-nhsuk-black);
  }

  /* Grey variant - tint 80%, shade 30% */
  .nhsuk-tag--grey {
    background-color: #d9dee2;
    border-color: #354550;
    color: #354550;
  }

  /* Green variant - tint 80%, shade 40% */
  .nhsuk-tag--green {
    background-color: #ccead7;
    border-color: #004c24;
    color: #004c24;
  }

  /* Aqua-green variant - tint 80%, shade 50% */
  .nhsuk-tag--aqua-green {
    background-color: #cceae7;
    border-color: #00524d;
    color: #00524d;
  }

  /* Blue variant - tint 80%, shade 30% */
  .nhsuk-tag--blue {
    background-color: #ccdff1;
    border-color: #004182;
    color: #004182;
  }

  /* Purple variant - tint 80%, shade 30% */
  .nhsuk-tag--purple {
    background-color: #d6cce4;
    border-color: #240050;
    color: #240050;
  }

  /* Pink variant - tint 80%, shade 50% */
  .nhsuk-tag--pink {
    background-color: #f5d7e8;
    border-color: #57133a;
    color: #57133a;
  }

  /* Red variant - tint 80%, shade 50% */
  .nhsuk-tag--red {
    background-color: #f9d5d3;
    border-color: #6b140e;
    color: #6b140e;
  }

  /* Orange variant - warm yellow tint 50%, shade 70% */
  .nhsuk-tag--orange {
    background-color: #ffdC8e;
    border-color: #4d3708;
    color: #4d3708;
  }

  /* Yellow variant - tint 50%, shade 70% */
  .nhsuk-tag--yellow {
    background-color: #fdf080;
    border-color: #484300;
    color: #484300;
  }

  /* Remove tag border */
  .nhsuk-tag--no-border {
    border: 0;
  }

  /* Focus styles */
  .nhsuk-tag:focus {
    outline: 3px solid transparent;
    outline-offset: 3px;
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
  }

  /* Print styles */
  @media print {
    .nhsuk-tag {
      background-color: transparent !important;
      border: 1px solid currentColor !important;
      color: #212b32 !important;
    }
  }
</style>
