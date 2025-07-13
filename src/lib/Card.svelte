<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  type CareCardType = 'non-urgent' | 'urgent' | 'emergency';

  interface Props {
    /** Text to use within the heading of the card component. If headingHtml is provided, the heading argument will be ignored. */
    heading?: string;
    /** HTML to use within the heading of the card component. If headingHtml is provided, the heading argument will be ignored. */
    headingHtml?: string;
    /** Classes to add to the card heading. */
    headingClasses?: string;
    /** Optional heading level for the card heading. Defaults to 2. */
    headingLevel?: number;
    /** The value of the card link href attribute. */
    href?: string;
    /** If set to true, then the whole card will become a clickable card variant. */
    clickable?: boolean;
    /** Care card variant type – "non-urgent", "urgent" or "emergency". */
    type?: CareCardType;
    /** If set to true, then the card will become a feature card variant. */
    feature?: boolean;
    /** If set to true, the card will become a primary card variant (with chevron). */
    primary?: boolean;
    /** If set to true, the card will become a secondary card variant. */
    secondary?: boolean;
    /** If set to true, the card will become a top task card variant. */
    topTask?: boolean;
    /** The URL of the image in the card. */
    imgURL?: string;
    /** The alternative text of the image in the card. */
    imgALT?: string;
    /** Text description within the card content. If descriptionHtml is provided, the description argument will be ignored. */
    description?: string;
    /** HTML to use within the card content. If descriptionHtml is provided, the description argument will be ignored. */
    descriptionHtml?: string;
    /** Classes to add to the card. */
    classes?: string;
    /** HTML attributes (for example data attributes) to add to the card. */
    attributes?: Record<string, string>;
    /** Custom content to be rendered inside the card */
    children?: any;
  }

  let {
    heading = '',
    headingHtml = '',
    headingClasses = '',
    headingLevel = 2,
    href = '',
    clickable = false,
    type = undefined,
    feature = false,
    primary = false,
    secondary = false,
    topTask = false,
    imgURL = '',
    imgALT = '',
    description = '',
    descriptionHtml = '',
    classes = '',
    attributes = {},
    children
  }: Props = $props();

  const dispatch = createEventDispatcher<{
    click: MouseEvent;
  }>();

  // Determine card classes
  const cardClasses = $derived(() => {
    const baseClass = 'nhsuk-card';
    const classList = [baseClass];

    if (clickable) classList.push('nhsuk-card--clickable');
    if (secondary) classList.push('nhsuk-card--secondary');
    if (type) {
      classList.push('nhsuk-card--care');
      classList.push(`nhsuk-card--care--${type}`);
    }
    if (feature) classList.push('nhsuk-card--feature');
    if (topTask) classList.push('nhsuk-card--top-task');
    if (classes) classList.push(classes);

    return classList.join(' ');
  });

  // Determine content classes
  const contentClasses = $derived(() => {
    if (type) return 'nhsuk-card--care__heading-container';
    
    const classList = ['nhsuk-card__content'];
    if (feature) classList.push('nhsuk-card__content--feature');
    if (primary) classList.push('nhsuk-card__content--primary');
    if (secondary) classList.push('nhsuk-card__content--secondary');
    
    return classList.join(' ');
  });

  // Determine heading classes
  const headingCssClasses = $derived(() => {
    const classList = [];
    
    if (type) {
      classList.push('nhsuk-card--care__heading');
    } else {
      classList.push('nhsuk-card__heading');
    }
    
    if (feature) classList.push('nhsuk-card__heading--feature');
    if (headingClasses) classList.push(headingClasses);
    
    return classList.join(' ');
  });

  // Determine content to display
  const headingContent = $derived(() => headingHtml || heading);
  const bodyContent = $derived(() => descriptionHtml || description);

  // Get visually hidden text for care cards
  const getVisuallyHiddenText = (cardType: CareCardType) => {
    switch (cardType) {
      case 'non-urgent':
        return 'Non-urgent advice: ';
      case 'urgent':
        return 'Urgent advice: ';
      case 'emergency':
        return 'Immediate action required: ';
      default:
        return 'Non-urgent advice: ';
    }
  };

  function handleClick(event: MouseEvent) {
    dispatch('click', event);
  }

  // Create dynamic heading component
  function createHeading(level: number) {
    return `h${level}`;
  }
</script>

<div 
  class={cardClasses}
  on:click={handleClick}
  {...attributes}
>
  {#if imgURL}
    <img class="nhsuk-card__img" src={imgURL} alt={imgALT} />
  {/if}

  <div class={contentClasses}>
    {#if headingHtml}
      {@html headingHtml}
    {:else if heading}
      <svelte:element this={createHeading(headingLevel)} class={headingCssClasses}>
        {#if href && !feature}
          <a class="nhsuk-card__link" {href}>{@html heading}</a>
        {:else if type}
          <span role="text">
            <span class="nhsuk-u-visually-hidden">
              {getVisuallyHiddenText(type)}
            </span>
            {heading}
          </span>
        {:else}
          {heading}
        {/if}
      </svelte:element>
    {/if}

    {#if type}
      <span class="nhsuk-card--care__arrow" aria-hidden="true"></span>
    </div>
    {/if}

    {#if type}
      <div class="nhsuk-card__content">
    {/if}

    {#if children}
      {@render children()}
    {:else if descriptionHtml}
      {@html descriptionHtml}
    {:else if description}
      <p class="nhsuk-card__description">{@html description}</p>
    {/if}

    {#if primary}
      <svg 
        class="nhsuk-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        width="27" 
        height="27" 
        aria-hidden="true" 
        focusable="false"
      >
        <circle cx="13.333" cy="13.333" r="13.333" fill="" />
        <g fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.667">
          <path d="M15.438 13l-3.771 3.771" />
          <path d="M11.667 9.229L15.438 13" />
        </g>
      </svg>
    {/if}

    {#if type}
      </div>
    {:else}
    </div>
    {/if}
</div>

<style>
  @import '../../core/settings';
  @import '../../core/tools';

  /*
   * Card component
   *
   * 1. Is needed for the :active top positioning, and invisible clickable overlay.
   * 2. Border is used to create a divider between the white content
   *    box and an image.
   * 3. Creates the 'pressed down' effect when clicked.
   * 4. Removes padding-top from headings directly after the card group.
   * 5. Includes the border width to achieve the correct left alignment.
   * 6. Stops the heading from spanning the full width of the card.
   * 7. Removes padding top for the feature heading positioning.
   * 8. Default care card colour set to blue (non-urgent care card) -
   *    using the @mixin care-card tools/_mixins.scss.
   *    The same mixin is used for each care card, setting the background
   *    colour,text colour and print border width with the variables.
   * 9. 'Random number' for the heading triangle.
   * 10. 'Random number' for the heading triangle positioning.
   * 11. 'Random number' used for spacing to compensate for the triangle.
   * 12. Needed to enable the triangle to show correctly in high contrast mode.
   * 13. Prevent additional padding on headings
   * 14. Give the action link icon sufficient contrast when used in the emergency variant
   * 15. Reset the positioning to the default [1] to display heading triangle on a coloured background.
   * 16. Emergency care card <a> needs to be white because the background colour is black.
   * 17. Trick IE10 into rendering the invisible clickable area. Without this it does not.
   */

  $card-border-width: 1px;
  $card-border-bottom-width: nhsuk-spacing(1);
  $card-border-color: $color_nhsuk-grey-4;
  $card-border-hover-color: $color_nhsuk-grey-3;

  :global(.nhsuk-card) {
    background: $color_nhsuk-white;
    border: $card-border-width solid $card-border-color;
    position: relative; /* [1] */
    width: 100%;

    @include nhsuk-responsive-margin(7, "bottom");
  }

  :global(.nhsuk-card__img) {
    border-bottom: $card-border-width solid $color_nhsuk-grey-5; /* [2] */
    display: block;
    width: 100%;

    @include nhsuk-print-hide;
  }

  :global(.nhsuk-card__content) {
    @include nhsuk-top-and-bottom;
    @include nhsuk-responsive-padding(5);
  }

  :global(.nhsuk-card__heading) {
    margin-bottom: nhsuk-spacing(3);

    &:has(+ .nhsuk-icon) {
      margin-bottom: 0;
    }
  }

  :global(.nhsuk-card__description) {
    margin-bottom: 0;
  }

  /* Clickable card */

  :global(.nhsuk-card--clickable) {
    border-bottom-width: $card-border-bottom-width;

    .nhsuk-card__heading a,
    .nhsuk-card__link {
      &::before {
        background-color: rgba(255, 255, 255, 0); /* [17] */
        bottom: 0;
        content: "";
        display: block;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    &:active {
      border-color: $card-border-hover-color;
      bottom: -$card-border-width; /* [3] */
    }
  }

  /* Card group */

  :global(.nhsuk-card-group) {
    margin-bottom: nhsuk-spacing(3);
    padding: 0;

    @include nhsuk-flex;

    @include nhsuk-media-query($until: desktop) {
      margin-bottom: nhsuk-spacing(6);
    }

    + h2,
    + .nhsuk-heading-l,
    + h3,
    + .nhsuk-heading-m {
      padding-top: 0; /* [4] */
    }
  }

  :global(.nhsuk-card-group__item) {
    list-style-type: none;
    margin-bottom: 0;

    @include nhsuk-flex-item;

    .nhsuk-card {
      margin-bottom: nhsuk-spacing(5);
    }

    @include nhsuk-media-query($until: desktop) {
      .nhsuk-card {
        margin-bottom: nhsuk-spacing(3);
      }

      &:last-child .nhsuk-card {
        margin-bottom: 0;
      }
    }
  }

  /* Card feature */

  :global(.nhsuk-card--feature) {
    @include nhsuk-responsive-margin(7, "top");
  }

  :global(.nhsuk-card__heading--feature) {
    background: $color_nhsuk-blue;
    color: $color_nhsuk-white;
    display: inline-block;
    left: -(nhsuk-spacing(4) + $card-border-width); /* [5] */
    margin-bottom: nhsuk-spacing(2);
    margin-right: -(nhsuk-spacing(4)); /* [6] */
    padding: nhsuk-spacing(2) nhsuk-spacing(4);
    position: relative;
    top: -(nhsuk-spacing(2));

    @include nhsuk-media-query($from: tablet) {
      left: -(nhsuk-spacing(5) + $card-border-width); /* [5] */
      margin-right: -(nhsuk-spacing(5)); /* [6] */
      padding: nhsuk-spacing(2) nhsuk-spacing(5);
      top: -(nhsuk-spacing(3));
    }
  }

  :global(.nhsuk-card__content--feature) {
    /* stylelint-disable-next-line declaration-no-important */
    padding-top: 0 !important; /* [7] */
  }

  /* Care card */

  :global(.nhsuk-card--care) {
    @include nhsuk-care-card($color_nhsuk-blue, $color_nhsuk-white, 4px); /* [8] */
    @include nhsuk-responsive-margin(7, "top");
  }

  :global(.nhsuk-card--care__heading-container) {
    padding-bottom: nhsuk-spacing(3);
    padding-top: nhsuk-spacing(3);
    position: relative;

    @include nhsuk-responsive-padding(5, "left");
    @include nhsuk-responsive-padding(5, "right");
  }

  :global(.nhsuk-card--care__heading) {
    margin: 0;
    padding-top: 0; /* [13] */

    @include nhsuk-font(26, $weight: bold);
    @include nhsuk-print-color($nhsuk-print-text-color);
  }

  :global(.nhsuk-card--care__arrow) {
    bottom: -10px; /* [9] */
    display: block;
    height: 20px; /* [9] */
    left: 30px; /* [10] */
    overflow: hidden;
    position: absolute;
    transform: rotate(45deg);
    width: 20px; /* [9] */
    @include nhsuk-print-hide;

    @include nhsuk-media-query($from: tablet) {
      left: 38px; /* [10] */
    }

    &::before,
    &::after {
      border: solid 32px $color_nhsuk-blue; /* [9] */
      content: "";
      display: block;
      height: 0;
      position: absolute;
      top: 0;
      transform: rotate(45deg); /* [12] */
      width: 0;
    }
  }

  :global(.nhsuk-card--care--urgent) {
    @include nhsuk-care-card($color_nhsuk-red, $color_nhsuk-white, 6px);

    .nhsuk-card--care__arrow {
      &::before,
      &::after {
        border-color: $color_nhsuk-red;
      }
    }
  }

  :global(.nhsuk-card--care--emergency) {
    @include nhsuk-care-card($color_nhsuk-red, $color_nhsuk-white, 8px);

    .nhsuk-card--care__arrow {
      &::before,
      &::after {
        border-color: $color_nhsuk-red;
      }
    }

    .nhsuk-card__content {
      background-color: $color_nhsuk-black;
      border: 0;
      color: $color_nhsuk-white;
      position: static; /* [15] */

      a {
        @include nhsuk-link-style-white;
      }

      @include nhsuk-media-query($media-type: print) {
        background-color: $color_nhsuk-white;
        color: $nhsuk-print-text-color;
      }
    }

    .nhsuk-details,
    .nhsuk-details__summary {
      color: $color_nhsuk-white;
    }

    .nhsuk-details__summary {
      &:hover {
        color: $color_nhsuk-white;
      }

      &:focus {
        color: $color_nhsuk-black;
      }
    }

    .nhsuk-action-link__link {
      .nhsuk-icon__arrow-right-circle {
        fill: $color_nhsuk-white; /* [14] */
      }
    }
  }

  /* Card primary */

  :global(.nhsuk-card__content--primary) {
    $icon-width: 27px;
    $icon-height: 27px;

    @include nhsuk-responsive-spacing(5, "padding", $direction: "right", $adjustment: $icon-width + nhsuk-spacing(4));

    @include nhsuk-media-query($from: desktop) {
      height: 100%;
    }

    .nhsuk-icon {
      display: block;
      width: $icon-width;
      height: $icon-height;
      fill: $color_nhsuk-blue;
      margin-top: -(math.floor(math.div($icon-height, 2)));
      pointer-events: none;
      position: absolute;
      top: 50%;
      @include nhsuk-responsive-spacing(5, "right");
    }
  }

  /* Card secondary */

  :global(.nhsuk-card--secondary) {
    background: transparent;
    border-bottom: $card-border-bottom-width solid $card-border-color;
    border-left: 0;
    border-right: 0;
    border-top: 0;
  }

  :global(.nhsuk-card__content--secondary) {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
</style>
