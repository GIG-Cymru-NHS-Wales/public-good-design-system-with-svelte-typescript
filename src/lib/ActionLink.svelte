<!-- ActionLink.svelte -->
<script lang="ts">
  interface Props {
    /** Text to use within the action link component. */
    text: string;
    /** The value of the link href attribute. */
    href: string;
    /** If set to true, then the link will open in a new window. */
    openInNewWindow?: boolean;
    /** Classes to add to the anchor tag. */
    classes?: string;
    /** HTML attributes (for example data attributes) to add to the anchor tag. */
    attributes?: Record<string, string>;
  }

  let {
    text,
    href,
    openInNewWindow = false,
    classes = '',
    attributes = {}
  }: Props = $props();

  // Convert attributes object to string for spreading
  function getAttributesString(attrs: Record<string, string>): string {
    return Object.entries(attrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
  }
</script>

<div class="nhsuk-action-link">
  <a
    class="nhsuk-action-link__link{classes ? ` ${classes}` : ''}"
    {href}
    target={openInNewWindow ? '_blank' : undefined}
    {...attributes}
  >
    <svg
      class="nhsuk-icon nhsuk-icon__arrow-right-circle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="36"
      height="36"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
    </svg>
    <span class="nhsuk-action-link__text">{text}</span>
  </a>
</div>

<style>
  @import '../../core/settings';
  @import '../../core/tools';

  /*
   * Action link component
   *
   * 1. Display is inline-block so the top and bottom margins/paddings are
   *    respected.
   * 2. 'Random number' is used to properly have sufficient space between icon
   *    and text.
   * 3. Position is relative so the arrow icon can display absolute.
   * 4. Text decoration none used to override default <a> styling.
   * 5. Box shadow 8px used instead of the default 4px.
   * 6. Text decoration underline used to override default <a> styling.
   */

  .nhsuk-action-link {
    @include nhsuk-responsive-margin(6, "bottom");
  }

  .nhsuk-action-link__link {
    display: inline-block; /* [1] */
    padding-left: 38px; /* [2] */
    position: relative; /* [3] */
    text-decoration: none; /* [4] */
    @include nhsuk-font(22, $weight: bold);

    &:not(:focus):hover {
      .nhsuk-action-link__text {
        text-decoration: underline; /* [6] */
      }
    }

    @include nhsuk-media-query($until: tablet) {
      padding-left: 26px; /* [2] */
    }

    @include nhsuk-media-query($media-type: print) {
      color: $nhsuk-print-text-color;
      &:visited {
        color: $nhsuk-print-text-color;
      }
    }

    .nhsuk-icon__arrow-right-circle {
      /* stylelint-disable-next-line declaration-no-important */
      fill: $color_nhsuk-green !important;
      height: 36px;
      left: -3px;
      position: absolute;
      top: -3px;
      width: 36px;
      @include nhsuk-print-color($nhsuk-print-text-color);

      @include nhsuk-media-query($until: tablet) {
        height: 24px;
        left: -2px;
        margin-bottom: 0;
        top: 1px;
        width: 24px;
      }
    }

    &:focus .nhsuk-icon__arrow-right-circle {
      /* stylelint-disable-next-line declaration-no-important */
      fill: $color_nhsuk-black !important;
    }
  }
</style>
