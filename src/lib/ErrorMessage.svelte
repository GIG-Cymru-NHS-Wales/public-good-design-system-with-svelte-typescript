<script lang="ts">
  import type { ErrorMessageProps } from './types';
  
  let {
    text,
    html,
    id,
    class: className = '',
    visuallyHiddenText = 'Error',
    ...attributes
  }: ErrorMessageProps = $props();
  
  // Determine what content to show
  const content = $derived(html || text || '');
</script>

<span 
  class="nhsuk-error-message {className}"
  {id}
  {...attributes}
>
  {#if visuallyHiddenText}
    <span class="nhsuk-u-visually-hidden">{visuallyHiddenText}:</span>
  {/if}
  {#if html}
    {@html html}
  {:else}
    {text}
  {/if}
</span>

<style>
  .nhsuk-error-message {
    clear: both;
    color: #d5281b;
    display: block;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-error-message {
      font-size: 19px;
      line-height: 1.47368;
    }
  }

  /* Visually hidden class for screen reader text */
  :global(.nhsuk-u-visually-hidden) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
