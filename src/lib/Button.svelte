<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  type ButtonElement = 'input' | 'button' | 'a';
  type ButtonType = 'button' | 'submit' | 'reset';

  interface Props {
    /** HTML element for the button component – "input", "button" or "a". In most cases you will not need to set this as it will be configured automatically if href is provided. */
    element?: ButtonElement;
    /** Text for the button or link. If html is provided, the text argument will be ignored. This argument has no effect if element is set to "input". */
    text?: string;
    /** HTML for the button or link. If html is provided, the text argument will be ignored. This argument has no effect if element is set to "input". */
    html?: string;
    /** Name for the input or button. This has no effect on a elements. */
    name?: string;
    /** Type of input or button – "button", "submit" or "reset". Defaults to "submit". This has no effect on a elements. */
    type?: ButtonType;
    /** Value for the button tag. This has no effect on a or input elements. */
    value?: string;
    /** Whether the button should be disabled. For button and input elements, disabled and aria-disabled attributes will be set automatically. */
    disabled?: boolean;
    /** The URL that the button should link to. If this is set, element will be automatically set to "a" if it has not already been defined. */
    href?: string;
    /** Classes to add to the button component. */
    classes?: string;
    /** HTML attributes (for example data attributes) to add to the button component. */
    attributes?: Record<string, string>;
    /** Prevent accidental double clicks on submit buttons from submitting forms multiple times. */
    preventDoubleClick?: boolean;
  }

  let {
    element = undefined,
    text = '',
    html = '',
    name = '',
    type = 'submit',
    value = '',
    disabled = false,
    href = '',
    classes = '',
    attributes = {},
    preventDoubleClick = false
  }: Props = $props();

  const dispatch = createEventDispatcher<{
    click: MouseEvent;
    keydown: KeyboardEvent;
  }>();

  // Determine the element type based on props
  const elementType = $derived<ButtonElement>(() => {
    if (element) return element;
    if (href) return 'a';
    return 'button';
  });

  // Determine the content to display
  const content = $derived(() => html || text);

  // Common classes
  const buttonClasses = $derived(() => {
    return `nhsuk-button${classes ? ` ${classes}` : ''}`;
  });

  // Common attributes for all elements
  const commonAttrs = $derived(() => ({
    class: buttonClasses,
    'data-module': 'nhsuk-button',
    ...(preventDoubleClick && { 'data-prevent-double-click': 'true' }),
    ...attributes
  }));

  // Button/input specific attributes
  const buttonAttrs = $derived(() => ({
    ...(name && { name }),
    type: elementType === 'a' ? undefined : type,
    ...(disabled && { disabled: true, 'aria-disabled': 'true' })
  }));

  // Link specific attributes
  const linkAttrs = $derived(() => ({
    href: href || '#',
    draggable: false,
    role: 'button'
  }));

  // Double-click prevention
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;
  const DEBOUNCE_TIMEOUT = 1000; // 1 second

  function handleClick(event: MouseEvent) {
    // Handle double-click prevention
    if (preventDoubleClick) {
      if (debounceTimer) {
        event.preventDefault();
        return;
      }
      debounceTimer = setTimeout(() => {
        debounceTimer = null;
      }, DEBOUNCE_TIMEOUT);
    }

    dispatch('click', event);
  }

  function handleKeyDown(event: KeyboardEvent) {
    // Handle space key for elements with role="button"
    if (event.key === ' ' && elementType === 'a') {
      event.preventDefault();
      (event.target as HTMLElement).click();
    }

    dispatch('keydown', event);
  }

  // Cleanup timer on component destroy
  onMount(() => {
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  });
</script>

{#if elementType === 'a'}
  <a
    {...commonAttrs}
    {...linkAttrs}
    on:click={handleClick}
    on:keydown={handleKeyDown}
  >
    {#if html}
      {@html html}
    {:else}
      {text}
    {/if}
  </a>
{:else if elementType === 'button'}
  <button
    {...commonAttrs}
    {...buttonAttrs}
    {value}
    on:click={handleClick}
    on:keydown={handleKeyDown}
  >
    {#if html}
      {@html html}
    {:else}
      {text}
    {/if}
  </button>
{:else if elementType === 'input'}
  <input
    {...commonAttrs}
    {...buttonAttrs}
    value={text}
    on:click={handleClick}
    on:keydown={handleKeyDown}
  />
{/if}

<style>
  @import '../../core/settings';
  @import '../../core/tools';

  /*
   * Button component
   *
   * 1. Ensure that any global link styles are overridden.
   * 2. Fix unwanted button padding in Firefox.
   * 3. Use a pseudo element to expand the click target area to include the
   *    button's shadow as well, in case users try to click it.
   * 4. Use a pseudo element to expand and cover the button's bounds, used to
   *    add a button shadow or border without affecting the total height
   */

  // Because the shadow (s0) is visually 'part of' the button, we need to reduce
  // the height of the button to compensate by adjusting its padding (s2) and
  // increase the bottom margin to include it (s1).
  $button-border-radius: $nhsuk-border-width-form-element * 2;
  $button-shadow-size: $button-border-radius;
  $button-padding-top-bottom-mobile: 8px;
  $button-padding-top-bottom-desktop: 12px;
  $button-padding-left-right: 16px;

  :global(.nhsuk-button) {
    -webkit-appearance: none;
    // Set shadow below the button [4]
    box-shadow: 0 $button-shadow-size 0 $nhsuk-button-shadow-color; // s0
    background-color: $nhsuk-button-color;
    border: $nhsuk-border-width-form-element solid transparent;
    border-radius: $button-border-radius;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    overflow: visible;
    margin-top: 0;
    padding: $button-padding-top-bottom-mobile $button-padding-left-right; // s2
    position: relative;
    text-align: center;
    vertical-align: top;
    width: 100%;

    @include nhsuk-font(19, $weight: bold);
    @include nhsuk-responsive-margin(5, "bottom", $adjustment: $button-shadow-size); // s1

    @include nhsuk-media-query($from: tablet) {
      width: auto;
      padding: $button-padding-top-bottom-desktop $button-padding-left-right; // s2
    }

    // [1]
    &,
    &:hover,
    &:active {
      text-decoration: none;

      &,
      &:visited {
        color: $nhsuk-button-text-color;
      }
    }

    // [2]
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    &:hover {
      background-color: $nhsuk-button-hover-color;
    }

    // Reset focus styles added to buttons as links
    &:focus {
      box-shadow: none;
      outline: none;
    }

    // Add button focus styles ensuring the active "pressed" state has priority
    &:focus:not(:active),
    &:focus:not(:active):hover {
      @include nhsuk-focused-button;

      // stylelint-disable-next-line no-duplicate-selectors
      & {
        // Set shadow below the button [4]
        box-shadow: 0 $button-shadow-size 0 $nhsuk-focus-text-color; // s0
      }
    }

    // Remove button shadow when pressed
    &:active,
    &:active:focus {
      box-shadow: none;
      background-color: $nhsuk-button-active-color;
      top: $button-shadow-size;
    }

    // Default pseudo element styles for [3] and [4] below
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: -$nhsuk-border-width-form-element;
      right: -$nhsuk-border-width-form-element;
      bottom: -$nhsuk-border-width-form-element;
      left: -$nhsuk-border-width-form-element;
      border-radius: $button-border-radius;
    }

    // Use a pseudo element to expand the click target area to include the
    // button's shadow as well, in case users try to click it [3]
    &::before {
      bottom: -($nhsuk-border-width-form-element + $button-shadow-size);
      border: $nhsuk-border-width-form-element solid transparent;
      background-color: transparent;
    }

    // When the button is active it is shifted down by $button-shadow-size to
    // denote a 'pressed' state. If the user happened to click at the very top
    // of the button, their mouse is no longer over the button (because it has
    // 'moved beneath them') and so the click event is not fired.
    //
    // This corrects that by shifting the top of the pseudo element so that it
    // continues to cover the area that the user originally clicked, which means
    // the click event is still fired.
    &:active::before {
      top: -($nhsuk-border-width-form-element + $button-shadow-size);
      bottom: -$nhsuk-border-width-form-element;
    }
  }

  /// Button variations

  :global(.nhsuk-button--secondary),
  :global(.nhsuk-button--secondary-solid) {
    &,
    &:visited,
    &:hover,
    &:hover:visited,
    &:active,
    &:active:visited {
      color: $nhsuk-secondary-button-text-color;
    }

    &:hover {
      background-color: $nhsuk-secondary-button-hover-color;
    }

    // Set border for active state (no shadow)
    &:active,
    &:active:focus {
      background-color: $nhsuk-secondary-button-active-color;
      border-color: $nhsuk-secondary-button-border-color;
      border-radius: $button-border-radius;
    }

    // Set border on click area for default and hover states which allows the
    // border to render underneath the shadow and hide pixel artifacts, but
    // ensuring the active "pressed" and focus states have priority [3]
    &:not(:focus):not(:active)::before {
      border-color: $nhsuk-secondary-button-border-color;
    }

    // Set shadow on both the button and the pseudo element. The button shadow
    // remains in place to prevent any pixel gaps due to browser rounding [4]
    &,
    &::after {
      box-shadow: 0 $button-shadow-size 0 $nhsuk-secondary-button-shadow-color; // s0
    }

    // Inset the pseudo element shadow away from the edges, to restore lost
    // border radius (and its shadow) previously hidden by the 2px border [4]
    &:not(:focus)::after {
      left: 0;
      right: 0;
      border-radius: math.div($button-border-radius, 2);
    }

    // Remove the pseudo element shadow when focused or pressed
    &:focus::after,
    &:active::after {
      box-shadow: none;
    }
  }

  :global(.nhsuk-button--secondary) {
    background-color: $nhsuk-secondary-button-color;
  }

  :global(.nhsuk-button--secondary-solid) {
    background-color: $nhsuk-secondary-button-solid-background-color;
  }

  :global(.nhsuk-button--reverse) {
    // Set shadow below the button [4]
    box-shadow: 0 $button-shadow-size 0 $nhsuk-reverse-button-shadow-color; // s0
    background-color: $nhsuk-reverse-button-color;

    &,
    &:visited,
    &:hover,
    &:hover:visited,
    &:active,
    &:active:visited {
      color: $nhsuk-reverse-button-text-color;
    }

    &:hover {
      background-color: $nhsuk-reverse-button-hover-color;
    }

    &:active,
    &:active:focus {
      background-color: $nhsuk-reverse-button-active-color;
    }
  }

  :global(.nhsuk-button--warning) {
    // Set shadow below the button [4]
    box-shadow: 0 $button-shadow-size 0 $nhsuk-warning-button-shadow-color; // s0
    background-color: $nhsuk-warning-button-color;

    &:hover {
      background-color: $nhsuk-warning-button-hover-color;
    }

    &:active,
    &:active:focus {
      background-color: $nhsuk-warning-button-active-color;
    }
  }

  :global(.nhsuk-button--login) {
    // Set shadow below the button [4]
    box-shadow: 0 $button-shadow-size 0 $nhsuk-login-button-shadow-color; // s0
    background-color: $nhsuk-login-button-color;

    &:hover {
      background-color: $nhsuk-login-button-hover-color;
    }

    &:active,
    &:active:focus {
      background-color: $nhsuk-login-button-active-color;
    }
  }

  /// Button disabled states

  :global(.nhsuk-button:disabled) {
    opacity: (0.5);
    pointer-events: none;
  }
</style>
