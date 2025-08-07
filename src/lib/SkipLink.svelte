<script lang="ts">
  import { onMount } from 'svelte';
  import type { SkipLinkProps } from './types';

  let {
    text = 'Skip to main content',
    href = '#maincontent',
    class: className = '',
    ...attributes
  }: SkipLinkProps = $props();

  let skipLinkElement: HTMLAnchorElement;

  /**
   * Get fragment from URL hash
   */
  function getFragmentFromUrl(url: string): string | null {
    if (!url.includes('#')) {
      return null;
    }
    return url.split('#').pop() || null;
  }

  /**
   * Set focus on element with accessibility improvements
   */
  function setFocus(
    element: HTMLElement,
    options?: {
      onBeforeFocus?: () => void;
      onBlur?: () => void;
    }
  ) {
    if (!element.getAttribute('tabindex')) {
      element.setAttribute('tabindex', '-1');
    }

    options?.onBeforeFocus?.();

    element.focus();

    element.addEventListener('blur', function handleBlur() {
      element.removeAttribute('tabindex');
      options?.onBlur?.();
      element.removeEventListener('blur', handleBlur);
    });
  }

  /**
   * Handle skip link click
   */
  function handleClick(event: MouseEvent) {
    const linkedElementId = getFragmentFromUrl(href);

    if (!linkedElementId) {
      console.error(`SkipLink: Target link (\`href="${href}"\`) hash fragment not found`);
      return;
    }

    const linkedElement = document.getElementById(linkedElementId);

    if (!linkedElement) {
      console.error(`SkipLink: Target content (\`id="${linkedElementId}"\`) not found`);
      return;
    }

    setFocus(linkedElement, {
      onBeforeFocus() {
        linkedElement.classList.add('nhsuk-skip-link-focused-element');
      },
      onBlur() {
        linkedElement.classList.remove('nhsuk-skip-link-focused-element');
      }
    });
  }

  onMount(() => {
    // Check if NHS UK frontend is supported
    if (!document.body.classList.contains('nhsuk-frontend-supported')) {
      console.warn('NHS.UK frontend is not supported in this browser');
    }
  });
</script>

<a
  bind:this={skipLinkElement}
  class="nhsuk-skip-link {className}"
  {href}
  onclick={handleClick}
  {...attributes}
>
  {text}
</a>

<style>
  /* Skip link component styles */
  .nhsuk-skip-link {
    position: absolute;
    z-index: 2;
    left: 16px; /* nhsuk-spacing(3) = 16px */
    top: 16px; /* nhsuk-spacing(3) = 16px */
    padding: 8px; /* nhsuk-spacing(2) = 8px */

    /* Visually hidden but focusable styles */
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: 0 !important;
    white-space: nowrap !important;
  }

  /* When focused, make the skip link visible */
  .nhsuk-skip-link:focus {
    position: absolute !important;
    width: auto !important;
    height: auto !important;
    margin: inherit !important;
    padding: 8px !important; /* nhsuk-spacing(2) = 8px */
    overflow: visible !important;
    clip: auto !important;
    clip-path: none !important;
    white-space: normal !important;

    /* Additional focus styles */
    left: 16px; /* nhsuk-spacing(3) = 16px */
    top: 16px; /* nhsuk-spacing(3) = 16px */
    z-index: 2;

    /* NHS UK design system styles */
    background-color: #ffeb3b;
    border: 4px solid #212b32;
    color: #212b32;
    display: block;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  /* Global styles for focused elements */
  :global(.nhsuk-skip-link-focused-element:focus) {
    /* Remove the native visible focus indicator when the element is
       programmatically focused */
    outline: none;
  }
</style>
