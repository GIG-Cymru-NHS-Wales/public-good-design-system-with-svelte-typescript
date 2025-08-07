<!-- ContentsList.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  interface ContentsItem {
    /** href value to use within each content list item label */
    href: string;
    /** Text to use within each content list item label */
    text: string;
    /** Set this item as the current active page */
    current?: boolean;
  }

  interface Props {
    /** Array of content list items objects */
    items: ContentsItem[];
    /** Classes to add to the content list container */
    classes?: string;
    /** HTML attributes (for example data attributes) to add to the container */
    attributes?: Record<string, string>;
    /** Optional aria-label for the navigation */
    ariaLabel?: string;
  }

  let {
    items,
    classes = '',
    attributes = {},
    ariaLabel = 'Pages in this guide'
  }: Props = $props();

  const dispatch = createEventDispatcher<{
    navigate: { href: string; text: string; item: ContentsItem };
  }>();

  function handleClick(event: MouseEvent, item: ContentsItem) {
    // Only dispatch if not current page
    if (!item.current) {
      dispatch('navigate', {
        href: item.href,
        text: item.text,
        item
      });
    }
  }
</script>

<nav
  class="nhsuk-contents-list{classes ? ` ${classes}` : ''}"
  role="navigation"
  aria-label={ariaLabel}
  {...attributes}
>
  <h2 class="nhsuk-u-visually-hidden">Contents</h2>
  <ol class="nhsuk-contents-list__list">
    {#each items as item}
      <li
        class="nhsuk-contents-list__item"
        aria-current={item.current ? 'page' : undefined}
      >
        {#if item.current}
          <span class="nhsuk-contents-list__current">{item.text}</span>
        {:else}
          <a
            class="nhsuk-contents-list__link"
            href={item.href}
            on:click={(e) => handleClick(e, item)}
          >
            {item.text}
          </a>
        {/if}
      </li>
    {/each}
  </ol>
</nav>

<style>
  @import '../../core/settings';
  @import '../../core/tools';

  /*
   * Contents list component
   *
   * 1. Creates a grey line before each list
   *    item using a ASCII number for the symbol.
   */

  :global(.nhsuk-contents-list) {
    @include nhsuk-responsive-margin(7, "bottom");
  }

  :global(.nhsuk-contents-list__list) {
    list-style: none;
    padding: 0;
  }

  :global(.nhsuk-contents-list__item) {
    background: url("data:image/svg+xml,%3Csvg class='nhsuk-icon nhsuk-icon__emdash' xmlns='http://www.w3.org/2000/svg' fill='%23aeb7bd' width='19' height='1' aria-hidden='true'%3E%3Cpath d='M0 0h19v1H0z'%3E%3C/path%3E%3C/svg%3E")
      left nhsuk-px-to-rem(12px) no-repeat;
    padding: 0 0 0 nhsuk-spacing(5);
    position: relative;

    @include nhsuk-media-query($from: tablet) {
      background: url("data:image/svg+xml,%3Csvg class='nhsuk-icon nhsuk-icon__emdash' xmlns='http://www.w3.org/2000/svg' fill='%23aeb7bd' width='16' height='1' aria-hidden='true'%3E%3Cpath d='M0 0h19v1H0z'%3E%3C/path%3E%3C/svg%3E")
        left nhsuk-px-to-rem(14px) no-repeat;
    }
  }

  :global(.nhsuk-contents-list__link) {
    display: inline-block;
  }

  :global(.nhsuk-contents-list__current) {
    font-weight: $nhsuk-font-bold;
  }
</style>
