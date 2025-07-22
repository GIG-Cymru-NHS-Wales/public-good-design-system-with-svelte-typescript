<script lang="ts">
  import { onMount } from 'svelte';
  import type { ErrorSummaryProps } from './types';
  import { getFragmentFromUrl } from './utils';
  
  let {
    titleText,
    titleHtml,
    descriptionText,
    descriptionHtml,
    errorList = [],
    class: className = '',
    children,
    focusOnPageLoad = true,
    ...attributes
  }: ErrorSummaryProps = $props();
  
  let errorSummaryElement: HTMLDivElement;
  
  // Determine title and description content
  const titleContent = $derived(titleHtml || titleText || '');
  const descriptionContent = $derived(descriptionHtml || descriptionText || '');
  
  onMount(() => {
    if (focusOnPageLoad && errorSummaryElement) {
      errorSummaryElement.focus();
    }
  });
  
  function getAssociatedLegendOrLabel(input: HTMLInputElement): HTMLElement | null {
    const fieldset = input.closest('fieldset');
    
    if (fieldset) {
      const legends = fieldset.getElementsByTagName('legend');
      
      if (legends.length) {
        const candidateLegend = legends[0];
        
        // For radio or checkbox, always use the legend if there is one
        if (input.type === 'checkbox' || input.type === 'radio') {
          return candidateLegend;
        }
        
        // For other input types, only use legend if input would be in top half of screen
        const legendTop = candidateLegend.getBoundingClientRect().top;
        const inputRect = input.getBoundingClientRect();
        
        if (inputRect.height && window.innerHeight) {
          const inputBottom = inputRect.top + inputRect.height;
          
          if (inputBottom - legendTop < window.innerHeight / 2) {
            return candidateLegend;
          }
        }
      }
    }
    
    // Fall back to label
    return (
      document.querySelector(`label[for='${input.getAttribute('id')}']`) ||
      input.closest('label')
    );
  }
  
  function focusTarget(target: EventTarget | null): boolean {
    if (!target || !(target instanceof HTMLAnchorElement) || !target.href) {
      return false;
    }
    
    const inputId = getFragmentFromUrl(target.href);
    if (!inputId) {
      return false;
    }
    
    const input = document.getElementById(inputId);
    if (!input || !(input instanceof HTMLInputElement)) {
      return false;
    }
    
    const legendOrLabel = getAssociatedLegendOrLabel(input);
    if (!legendOrLabel) {
      return false;
    }
    
    // Scroll the legend or label into view before focusing the input
    legendOrLabel.scrollIntoView();
    input.focus({ preventScroll: true });
    
    return true;
  }
  
  function handleClick(event: MouseEvent) {
    if (focusTarget(event.target)) {
      event.preventDefault();
    }
  }
</script>

<div
  bind:this={errorSummaryElement}
  class="nhsuk-error-summary {className}"
  aria-labelledby="error-summary-title"
  role="alert"
  tabindex="-1"
  onclick={handleClick}
  {...attributes}
>
  <h2 class="nhsuk-error-summary__title" id="error-summary-title">
    {#if titleHtml}
      {@html titleHtml}
    {:else}
      {titleText}
    {/if}
  </h2>
  <div class="nhsuk-error-summary__body">
    {#if children}
      <p>{@render children()}</p>
    {:else if descriptionContent}
      <p>
        {#if descriptionHtml}
          {@html descriptionHtml}
        {:else}
          {descriptionText}
        {/if}
      </p>
    {/if}
    <ul class="nhsuk-list nhsuk-error-summary__list" role="list">
      {#each errorList as item}
        <li>
          {#if item.href}
            <a href={item.href} {...item.attributes}>
              {#if item.html}
                {@html item.html}
              {:else}
                {item.text}
              {/if}
            </a>
          {:else}
            {#if item.html}
              {@html item.html}
            {:else}
              {item.text}
            {/if}
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .nhsuk-error-summary {
    margin-bottom: 20px;
    border: 4px solid #d5281b;
    padding: 16px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-error-summary {
      margin-bottom: 28px;
      border: 5px solid #d5281b;
      padding: 24px;
    }
  }

  @media (min-width: 48.0625em) {
    .nhsuk-error-summary {
      padding: 32px;
    }
  }

  .nhsuk-error-summary:focus {
    border: 4px solid #212b32;
    box-shadow: 0 0 0 4px #ffeb3b;
    outline: 4px solid transparent;
  }

  .nhsuk-error-summary__title {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.45455;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-error-summary__title {
      margin-bottom: 24px;
      font-size: 26px;
      line-height: 1.38462;
    }
  }

  @media (min-width: 48.0625em) {
    .nhsuk-error-summary__title {
      margin-bottom: 32px;
    }
  }

  .nhsuk-error-summary__body {
    font-size: 16px;
    line-height: 1.5;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-error-summary__body {
      font-size: 19px;
      line-height: 1.47368;
    }
  }

  .nhsuk-error-summary__body p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-error-summary__body p {
      margin-bottom: 24px;
    }
  }

  @media (min-width: 48.0625em) {
    .nhsuk-error-summary__body p {
      margin-bottom: 32px;
    }
  }

  .nhsuk-error-summary__list {
    margin-bottom: 0;
    margin-top: 0;
  }

  :global(.nhsuk-list) {
    font-size: inherit;
    line-height: inherit;
    list-style-type: none;
    margin-bottom: 16px;
    margin-top: 16px;
    padding-left: 0;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-list) {
      margin-bottom: 24px;
      margin-top: 24px;
    }
  }

  :global(.nhsuk-list li) {
    margin-bottom: 8px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-list li) {
      margin-bottom: 8px;
    }
  }

  .nhsuk-error-summary__list a {
    font-weight: 700;
  }

  .nhsuk-error-summary__list a:link,
  .nhsuk-error-summary__list a:visited,
  .nhsuk-error-summary__list a:hover,
  .nhsuk-error-summary__list a:active {
    color: #d5281b;
  }

  .nhsuk-error-summary__list a:focus {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
  }
</style>
