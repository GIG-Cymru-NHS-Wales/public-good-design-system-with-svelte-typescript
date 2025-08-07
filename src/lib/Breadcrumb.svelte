<script lang="ts">
  interface BreadcrumbItem {
    /** Text to use within the breadcrumbs item. */
    text: string;
    /** The value of the breadcrumb item link href attribute. */
    href?: string;
    /** HTML attributes (for example data attributes) to add to the individual crumb. */
    attributes?: Record<string, string>;
    /** Classes to add to the individual breadcrumb item. */
    classes?: string;
  }

  interface Props {
    /** Array of breadcrumbs item objects. This should contain all pages in the breadcrumb except for the parent page. */
    items: BreadcrumbItem[];
    /** Text to use for the parent page. */
    text?: string;
    /** The value of the parent page link href attribute. */
    href?: string;
    /** Classes to add to the container. */
    classes?: string;
    /** HTML attributes (for example data attributes) to add to the container. */
    attributes?: Record<string, string>;
    /** Plain text label identifying the landmark to screen readers. Defaults to "Breadcrumb". */
    labelText?: string;
  }

  let {
    items,
    text = '',
    href = '',
    classes = '',
    attributes = {},
    labelText = 'Breadcrumb'
  }: Props = $props();

  // Determine the last item for the back link
  const lastItem = $derived(() => {
    if (href && text) {
      return { href, text, attributes: {} };
    } else {
      return items[items.length - 1] || { href: '#', text: 'Back', attributes: {} };
    }
  });

  // All breadcrumb items including the final one
  const allItems = $derived(() => {
    const itemsWithLinks = items.filter(item => item.href);
    if (href && text) {
      return [...itemsWithLinks, { text, href, attributes: {} }];
    }
    return itemsWithLinks;
  });
</script>

<nav
  class="nhsuk-breadcrumb{classes ? ` ${classes}` : ''}"
  aria-label={labelText}
  {...attributes}
>
  <ol class="nhsuk-breadcrumb__list">
    {#each allItems as item, index}
      <li class="nhsuk-breadcrumb__item{item.classes ? ` ${item.classes}` : ''}">
        {#if item.href}
          <a
            class="nhsuk-breadcrumb__link"
            href={item.href}
            {...(item.attributes || {})}
          >
            {item.text}
          </a>
        {:else}
          {item.text}
        {/if}
      </li>
    {/each}
  </ol>

  <p class="nhsuk-breadcrumb__back">
    <a
      class="nhsuk-breadcrumb__backlink"
      href={lastItem().href}
      {...(lastItem().attributes || {})}
    >
      <span class="nhsuk-u-visually-hidden">Back to &nbsp;</span>
      {lastItem().text}
    </a>
  </p>
</nav>

<style>
  @import '../../core/settings';
  @import '../../core/tools';

  /*
   * Breadcrumb component
   *
   * 1. Hide the breadcrumb on print stylesheets.
   * 3. Don't show the full breadcrumb below tablet size.
   * 4. Typography sizing mixin, see core/tools/_typography
   * 5. and core/settings/_typography for size maps.
   *    .. but show a back to index page link.
   * 6. Spacing to align the chevron with breadcrumb items
   */

  .nhsuk-breadcrumb {
    padding-top: nhsuk-spacing(3);
    @include nhsuk-print-hide; /* [1] */

    @include nhsuk-media-query($from: tablet) {
      padding-top: nhsuk-spacing(4);
    }
  }

  .nhsuk-breadcrumb__list {
    list-style: none;
    margin: 0;
    padding: 0;

    @include nhsuk-font(16); /* [4] */

    @include nhsuk-media-query($until: tablet) {
      display: none; /* [3] */
    }
  }

  .nhsuk-breadcrumb__item {
    $chevron-background: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23768692' height='18' width='18' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z'%3E%3C/path%3E%3C/svg%3E";
    $chevron-background-reverse: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23aeb7bd' height='18' width='18' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z'%3E%3C/path%3E%3C/svg%3E";

    display: inline-block;
    margin-bottom: 0;
    @include nhsuk-font(16); /* [4] */

    &:not(:last-child)::after {
      background: url($chevron-background) no-repeat 0 0;
      content: "";
      display: inline-block;
      height: 19px; /* [6] */
      margin-left: 9px; /* [6] */
      margin-right: 2px; /* [6] */
      vertical-align: middle; /* [6] */
      width: 18px; /* [6] */
    }

    .nhsuk-breadcrumb--reverse &:not(:last-child)::after {
      background-image: url($chevron-background-reverse);
    }
  }

  .nhsuk-breadcrumb__link {
    @include nhsuk-link-style-no-visited-state;

    .nhsuk-breadcrumb--reverse & {
      @include nhsuk-link-style-white;
    }
  }

  .nhsuk-breadcrumb__back {
    margin: 0;
    line-height: 1;

    @include nhsuk-media-query($from: tablet) {
      display: none; /* [5] */
    }
  }

  .nhsuk-breadcrumb__backlink {
    $icon-background: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23005eb8' height='24' width='24' viewBox='8 0 24 24'%3E%3Cpath d='M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z'%3E%3C/path%3E%3C/svg%3E";
    $icon-background-hover: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%237c2855' height='24' width='24' viewBox='8 0 24 24'%3E%3Cpath d='M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z'%3E%3C/path%3E%3C/svg%3E";
    $icon-background-focus: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23212b32' height='24' width='24' viewBox='8 0 24 24'%3E%3Cpath d='M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z'%3E%3C/path%3E%3C/svg%3E";
    $icon-background-reverse: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' height='24' width='24' viewBox='8 0 24 24'%3E%3Cpath d='M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z'%3E%3C/path%3E%3C/svg%3E";

    background: none;
    border: 0;
    cursor: pointer;
    display: inline-block;
    padding: 0 0 0 16px;
    position: relative;

    @include nhsuk-link-style-no-visited-state;
    @include nhsuk-font(16); /* [4] */

    &::before {
      background: url($icon-background) no-repeat 8px 0;
      content: "";
      display: block;

      height: 24px;
      left: -8px;
      position: absolute;
      top: -1px;
      width: 24px;

      @include nhsuk-media-query($from: tablet) {
        top: 0; /* [3] */
      }
    }

    .nhsuk-breadcrumb--reverse & {
      @include nhsuk-link-style-white;
    }

    &:hover::before {
      background-image: url($icon-background-hover);
    }

    .nhsuk-breadcrumb--reverse &::before,
    .nhsuk-breadcrumb--reverse &:active::before {
      background-image: url($icon-background-reverse);
    }

    &:focus::before,
    &:active::before,
    .nhsuk-breadcrumb--reverse &:focus::before {
      background-image: url($icon-background-focus);
    }
  }
</style>
