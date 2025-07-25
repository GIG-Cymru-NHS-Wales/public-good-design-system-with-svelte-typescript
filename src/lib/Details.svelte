<!-- Details.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  interface Props {
    /** Text to use within the summary element (the visible part of the details element). If summaryHtml is provided, the summaryText option will be ignored. */
    summaryText?: string;
    /** HTML to use within the summary element (the visible part of the details element). If summaryHtml is provided, the summaryText option will be ignored. */
    summaryHtml?: string;
    /** Text to use within the disclosed part of the details element. If html is provided, the text option will be ignored. */
    text?: string;
    /** HTML to use within the disclosed part of the details element. If html is provided, the text option will be ignored. */
    html?: string;
    /** Id to add to the details element. */
    id?: string;
    /** If true, details element will be expanded. */
    open?: boolean;
    /** Classes to add to the details element. */
    classes?: string;
    /** HTML attributes (for example data attributes) to add to the details element. */
    attributes?: Record<string, string>;
    /** Custom content to be rendered inside the details */
    children?: any;
  }

  let {
    summaryText = '',
    summaryHtml = '',
    text = '',
    html = '',
    id = '',
    open = $bindable(false),
    classes = '',
    attributes = {},
    children
  }: Props = $props();

  const dispatch = createEventDispatcher<{
    toggle: { open: boolean };
    open: {};
    close: {};
  }>();

  let detailsElement: HTMLDetailsElement;

  // Determine content to display
  const summaryContent = $derived(summaryHtml || summaryText);
  const detailsContent = $derived(html || text);

  // Handle toggle event
  function handleToggle(event: Event) {
    const target = event.target as HTMLDetailsElement;
    const isOpen = target.open;
    
    open = isOpen;
    
    dispatch('toggle', { open: isOpen });
    
    if (isOpen) {
      dispatch('open');
    } else {
      dispatch('close');
    }
  }

  // Programmatic control
  export function toggle(): void {
    if (detailsElement) {
      detailsElement.open = !detailsElement.open;
      handleToggle({ target: detailsElement } as Event);
    }
  }

  export function show(): void {
    if (detailsElement) {
      detailsElement.open = true;
      handleToggle({ target: detailsElement } as Event);
    }
  }

  export function hide(): void {
    if (detailsElement) {
      detailsElement.open = false;
      handleToggle({ target: detailsElement } as Event);
    }
  }
</script>

<details
  bind:this={detailsElement}
  {id}
  class="nhsuk-details{classes ? ` ${classes}` : ''}"
  {open}
  on:toggle={handleToggle}
  {...attributes}
>
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">
      {#if summaryHtml}
        {@html summaryHtml}
      {:else}
        {summaryText}
      {/if}
    </span>
  </summary>
  
  <div class="nhsuk-details__text">
    {#if children}
      {@render children()}
    {:else if html}
      {@html html}
    {:else if text}
      {text}
    {/if}
  </div>
</details>

<style>
  @import '../../core/settings';
  @import '../../core/tools';

  /*
   * Details component
   *
   * 1. Style the summary to look like a link...
   * 2. Make the focus outline shrink-wrap the text content of the summary
   * 3. Absolutely position the marker against this element
   * 3. Allow for absolutely positioned marker and align with disclosed text
   * 4. Only underline the text, not the arrow
   * 5. Remove the default details marker so we can style our own consistently and
   *    ensure it displays in Firefox
   * 6. Custom padding to left align the details text with the summary
   */

  :global(.nhsuk-details) {
    display: block;
    @include nhsuk-text-color;
    @include nhsuk-font-size(19);
    @include nhsuk-responsive-margin(4, "bottom");
  }

  :global(.nhsuk-details__summary) {
    display: block;
  }

  :global(.nhsuk-details__text) {
    @include nhsuk-top-and-bottom;
  }

  /* Hack to support Internet Explorer 11 */
  @media screen\0 {
    :global(.nhsuk-details) {
      border-left: nhsuk-spacing(1) solid $color_nhsuk-grey-4;
      margin-top: nhsuk-spacing(2);
      padding: nhsuk-spacing(3) 0;
      padding-left: 20px; /* [6] */
    }

    :global(.nhsuk-details__summary-text) {
      display: block;
      font-weight: $nhsuk-font-bold;
      @include nhsuk-responsive-margin(4, "bottom");
    }
  }

  /* 
   * We wrap styles for newer browsers in a feature query, which is ignored by
   * older browsers, which always expand the details element.
   * 
   * Additionally, -ms-ime-align is only supported by Edge 12 - 18
   * 
   * This ensures we don't use these styles in browsers which:
   *   - support ES6 modules but not the <details> element (Edge 16 - 18)
   *   - do not support ES6 modules or the <details> element (eg, IE8+)
   */
  @supports not (-ms-ime-align: auto) {
    :global(.nhsuk-details__summary) {
      color: $nhsuk-link-color; /* [1] */
      cursor: pointer;
      padding-left: nhsuk-spacing(4);
      position: relative; /* [3] */
      width: fit-content; /* [2] */

      &:hover {
        color: $nhsuk-link-hover-color;
      }

      &:focus {
        @include nhsuk-focused-text;
      }

      &:hover,
      &:focus {
        .nhsuk-details__summary-text {
          text-decoration: none;
        }
      }

      &::-webkit-details-marker {
        display: none; /* [5] */
      }

      &::before {
        bottom: 0;
        content: "";
        left: 0;
        margin: auto;
        position: absolute;
        top: 0;

        @include nhsuk-shape-arrow($direction: right, $base: 14px);

        .nhsuk-details[open] > & {
          @include nhsuk-shape-arrow($direction: down, $base: 14px);
        }
      }
    }

    :global(.nhsuk-details__summary-text) {
      text-decoration: underline; /* [4] */
    }

    :global(.nhsuk-details__text) {
      border-left: nhsuk-spacing(1) solid $color_nhsuk-grey-4;
      margin-top: nhsuk-spacing(2);
      padding: nhsuk-spacing(3) 0;
      padding-left: 20px; /* [6] */
      padding-right: 0;
    }
  }

  /* Expander variation */

  $expander-border-width: 1px;
  $expander-border-bottom-width: nhsuk-spacing(1);
  $expander-border-color: $color_nhsuk-grey-4;
  $expander-border-hover-color: $color_nhsuk-grey-3;

  :global(.nhsuk-expander) {
    background-color: $color_nhsuk-white;
    border: $expander-border-width solid $expander-border-color;

    .nhsuk-details__summary {
      background-color: $color_nhsuk-white;
      border-top: $nhsuk-focus-width solid transparent;
      display: block;
      padding: nhsuk-spacing(4) - $nhsuk-focus-width nhsuk-spacing(4) 0;
      width: auto;

      @include nhsuk-media-query($from: tablet) {
        padding: nhsuk-spacing(5) - $nhsuk-focus-width nhsuk-spacing(5) 0;
      }
    }

    .nhsuk-details__text {
      border-left: 0;
      margin-left: 0;
      margin-top: 0;

      @include nhsuk-responsive-padding(5, "bottom");
      @include nhsuk-responsive-padding(5, "left");
      @include nhsuk-responsive-padding(5, "right");
      @include nhsuk-responsive-padding(0, "top");
    }

    /* Hack to support Internet Explorer 11 */
    @media screen\0 {
      margin-top: 0;
      padding: 0;

      .nhsuk-details__summary-text {
        display: block;
        font-weight: $nhsuk-font-bold;
        @include nhsuk-font-size(26);
        @include nhsuk-responsive-margin(4, "bottom");
      }
    }

    @supports not (-ms-ime-align: auto) {
      border-bottom-width: $expander-border-bottom-width;

      &:hover {
        border-color: $expander-border-hover-color;
      }

      .nhsuk-details__summary {
        padding-bottom: nhsuk-spacing(4);
      }

      @include nhsuk-media-query($from: tablet) {
        .nhsuk-details__summary {
          padding-bottom: nhsuk-spacing(5);
        }
      }

      .nhsuk-details__summary::before {
        /* stylelint-disable-next-line declaration-no-important */
        display: none !important;
      }

      .nhsuk-details__summary:focus {
        box-shadow: none;
      }

      .nhsuk-details__summary-text {
        color: $color_nhsuk-blue;
        cursor: pointer;
        display: inline-block;
        padding: nhsuk-spacing(1) nhsuk-spacing(1) nhsuk-spacing(1) 38px;
        position: relative;
      }

      .nhsuk-details__summary:hover .nhsuk-details__summary-text {
        color: $nhsuk-link-hover-color;
      }

      .nhsuk-details__summary:focus .nhsuk-details__summary-text {
        @include nhsuk-focused-text;
      }

      .nhsuk-details__summary-text::before {
        background: url("data:image/svg+xml,%3Csvg class='nhsuk-icon nhsuk-icon__plus' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' aria-hidden='true'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23005eb8'%3E%3C/circle%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M12 8v8M8 12h8'%3E%3C/path%3E%3C/svg%3E%0A")
          left -2px center no-repeat;
        content: "";
        display: inline-block;
        height: 32px;
        left: 0;
        position: absolute;
        top: calc(50% - 16px);
        width: 32px;
      }

      .nhsuk-details__summary:focus .nhsuk-details__summary-text::before {
        background: $nhsuk-focus-color
          url("data:image/svg+xml,%3Csvg class='nhsuk-icon nhsuk-icon__plus' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' aria-hidden='true'%3E%3Ccircle cx='12' cy='12' r='10' fill='002f5c'%3E%3C/circle%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M12 8v8M8 12h8'%3E%3C/path%3E%3C/svg%3E%0A")
          left -2px center no-repeat;
      }

      &[open] {
        border-bottom-width: $expander-border-width;
      }

      &[open] .nhsuk-details__summary-text::before {
        background: url("data:image/svg+xml,%3Csvg class='nhsuk-icon nhsuk-icon__minus' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' aria-hidden='true'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23005eb8'%3E%3C/circle%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M8 12h8'%3E%3C/path%3E%3C/svg%3E%0A")
          left -2px center no-repeat;
      }

      &[open] .nhsuk-details__summary:focus .nhsuk-details__summary-text::before {
        background: $nhsuk-focus-color
          url("data:image/svg+xml,%3Csvg class='nhsuk-icon nhsuk-icon__minus' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' aria-hidden='true'%3E%3Ccircle cx='12' cy='12' r='10' fill='002f5c'%3E%3C/circle%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M8 12h8'%3E%3C/path%3E%3C/svg%3E%0A")
          left -2px center no-repeat;
      }
    }
  }

  :global(.nhsuk-expander-group) {
    @include nhsuk-responsive-margin(4, "bottom");

    > .nhsuk-details {
      @include nhsuk-responsive-margin(2, "bottom");
    }
  }

  :global(.nhsuk-details + h2),
  :global(.nhsuk-details + .nhsuk-heading-l) {
    @include nhsuk-responsive-padding(4, "top");
  }
</style>
