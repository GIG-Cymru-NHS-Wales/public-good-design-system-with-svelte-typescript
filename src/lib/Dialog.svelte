<script>
  /**
   * @typedef {Object} DoAndDontItem
   * @property {string} item - Text to use within each do and don't item label
   */

  /**
   * @typedef {Object} DoAndDontListProps
   * @property {string} title - Title to be displayed on the do and don't list component
   * @property {'cross' | 'tick'} type - Type of do and don't list component
   * @property {DoAndDontItem[]} items - Array of do and don't items objects
   * @property {boolean} [hidePrefix] - If set to true when type is 'cross', then removes the default 'do not' text prefix to each item
   * @property {number} [headingLevel=3] - Optional heading level for the title heading
   * @property {string} [classes] - Classes to add to the do and don't list container
   * @property {Object} [attributes] - HTML attributes to add to the do and don't list container
   */

  /** @type {DoAndDontListProps} */
  let {
    title,
    type,
    items = [],
    hidePrefix = false,
    headingLevel = 3,
    classes = '',
    attributes = {},
    ...restProps
  } = $props();

  // Create dynamic heading tag
  const HeadingTag = `h${headingLevel}`;
</script>

<div
  class="nhsuk-do-dont-list{classes ? ` ${classes}` : ''}"
  {...attributes}
  {...restProps}
>
  <svelte:element this={HeadingTag} class="nhsuk-do-dont-list__label">
    {title}
  </svelte:element>

  <ul class="nhsuk-list {type === 'tick' ? 'nhsuk-list--tick' : 'nhsuk-list--cross'}" role="list">
    {#each items as data}
      <li>
        {#if type === 'cross'}
          <svg
            class="nhsuk-icon nhsuk-icon__cross"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="34"
            height="34"
          >
            <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
            <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
          </svg>
        {:else}
          <svg
            class="nhsuk-icon nhsuk-icon__tick"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            width="34"
            height="34"
          >
            <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12" stroke="#007f3b"></path>
          </svg>
        {/if}
        {#if type === 'cross' && !hidePrefix}do not {/if}{@html data.item}
      </li>
    {/each}
  </ul>
</div>

<style>
  /*
   * Note: The SCSS styles from the original file would need to be compiled
   * and included in your global styles or converted to vanilla CSS here.
   * The mixins referenced in the SCSS would need to be resolved.
   */
</style>
