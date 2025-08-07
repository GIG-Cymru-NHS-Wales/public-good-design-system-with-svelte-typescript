<!-- BackLink.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  interface Props {
    /** Text to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to "Back". */
    text?: string;
    /** HTML to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to "Back". */
    html?: string;
    /** The value of the link href attribute. */
    href?: string;
    /** Classes to add to the container. */
    classes?: string;
    /** HTML attributes (for example data attributes) to add to the tag. */
    attributes?: Record<string, string>;
    /** HTML element for the back link component – "button" or "a". If not provided, defaults to "a". */
    element?: 'button' | 'a';
  }

  let {
    text = 'Back',
    html = '',
    href = '#',
    classes = '',
    attributes = {},
    element = 'a'
  }: Props = $props();

  const dispatch = createEventDispatcher<{
    click: MouseEvent;
  }>();

  // Determine the content to display
  const content = $derived(html || text);

  // Handle click events for button elements
  function handleClick(event: MouseEvent) {
    dispatch('click', event);
  }
</script>

<div class="nhsuk-back-link{classes ? ` ${classes}` : ''}">
  {#if element === 'button'}
    <button
      class="nhsuk-back-link__link"
      on:click={handleClick}
      {...attributes}
    >
      <svg
        class="nhsuk-icon nhsuk-icon__chevron-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
        height="24"
        width="24"
      >
        <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
      </svg>
      {#if html}
        {@html html}
      {:else}
        {text}
      {/if}
    </button>
  {:else}
    <a
      class="nhsuk-back-link__link"
      {href}
      {...attributes}
    >
      <svg
        class="nhsuk-icon nhsuk-icon__chevron-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
        height="24"
        width="24"
      >
        <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
      </svg>
      {#if html}
        {@html html}
      {:else}
        {text}
      {/if}
    </a>
  {/if}
</div>

<style>
  @import '../../core/settings';
  @import '../../core/tools';

  /*
   * Back link component
   *
   * 1. Allow space for the arrow.
   * 2. Align the icon with the start of the back link.
   * 3. Align the icon with the middle of the text.
   * 4. Make back link same height as breadcrumb.
   */

  .nhsuk-back-link {
    padding-top: nhsuk-spacing(3);
    line-height: 1; /* [4] */

    @include nhsuk-media-query($from: tablet) {
      padding-top: nhsuk-spacing(4);
    }
  }

  .nhsuk-back-link__link {
    background: none;
    border: 0;
    cursor: pointer;
    display: inline-block;
    padding: 0 0 0 16px; /* [1] */
    position: relative;
    @include nhsuk-link-style-default;
    @include nhsuk-link-style-no-visited-state;
    @include nhsuk-font-size(16);

    .nhsuk-icon__chevron-left {
      height: 24px;
      left: -8px; /* [2] */
      position: absolute;
      top: -1px; /* [3] */
      width: 24px;

      @include nhsuk-media-query($from: tablet) {
        top: 0; /* [3] */
      }
    }

    .nhsuk-back-link--reverse & {
      @include nhsuk-link-style-white;
    }
  }
</style>
