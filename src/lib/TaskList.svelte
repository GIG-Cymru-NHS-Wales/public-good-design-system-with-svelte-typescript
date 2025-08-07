<script lang="ts">
  import type { TaskListProps, TaskItem } from './types';
  import { classNames, defaultConfig } from './config';
  
  // Import Tag component (assuming it exists in the same project)
  // If not available, we'll render a simple span instead
  let Tag: any = null;
  try {
    // @ts-ignore - Dynamic import attempt
    Tag = (await import('../tag/Tag.svelte')).default;
  } catch {
    // Tag component not available, will use fallback
  }
  
  let {
    items = [],
    idPrefix = defaultConfig.idPrefix,
    classes = '',
    attributes = {},
    ...rest
  }: TaskListProps = $props();
  
  // Generate unique IDs for hints and statuses
  const getHintId = (index: number) => `${idPrefix}-${index}-hint`;
  const getStatusId = (index: number) => `${idPrefix}-${index}-status`;
  
  // Build aria-describedby attribute
  const getAriaDescribedBy = (item: TaskItem, index: number) => {
    const parts = [];
    if (item.hint) {
      parts.push(getHintId(index));
    }
    parts.push(getStatusId(index));
    return parts.join(' ');
  };
</script>

<ul 
  class="{classNames.root} {classes}"
  {...attributes}
  {...rest}
>
  {#each items as item, index}
    <li class="{classNames.item} {item.href ? classNames.itemWithLink : ''} {item.classes || ''}">
      <div class={classNames.nameAndHint}>
        {#if item.href}
          <a 
            class="{classNames.link} {item.title.classes || ''}"
            href={item.href}
            aria-describedby={getAriaDescribedBy(item, index + 1)}
          >
            {#if item.title.html}
              {@html item.title.html}
            {:else}
              {item.title.text}
            {/if}
          </a>
        {:else}
          <div class={item.title.classes || ''}>
            {#if item.title.html}
              {@html item.title.html}
            {:else}
              {item.title.text}
            {/if}
          </div>
        {/if}
        
        {#if item.hint}
          <div id={getHintId(index + 1)} class={classNames.hint}>
            {#if item.hint.html}
              {@html item.hint.html}
            {:else}
              {item.hint.text}
            {/if}
          </div>
        {/if}
      </div>
      
      <div 
        class="{classNames.status} {item.status.classes || ''}"
        id={getStatusId(index + 1)}
      >
        {#if item.status.tag}
          {#if Tag}
            <Tag 
              text={item.status.tag.text}
              classes={item.status.tag.classes}
              attributes={item.status.tag.attributes}
            />
          {:else}
            <!-- Fallback if Tag component is not available -->
            <strong class="nhsuk-tag {item.status.tag.classes || ''}">
              {item.status.tag.text}
            </strong>
          {/if}
        {:else if item.status.html}
          {@html item.status.html}
        {:else}
          {item.status.text}
        {/if}
      </div>
    </li>
  {/each}
</ul>

<style>
  /* Core settings */
  :root {
    --nhsuk-text-color: #212b32;
    --nhsuk-secondary-text-color: #425563;
    --nhsuk-border-color: #d8dde0;
    --color-nhsuk-grey-5: #f0f4f5;
    --nhsuk-task-list-hover-color: #e8ecef; /* Slightly darker than grey-5 */
    --nhsuk-spacing-1: 4px;
    --nhsuk-spacing-2: 8px;
    --nhsuk-spacing-5: 20px;
  }

  /* Task list container */
  .nhsuk-task-list {
    margin-top: 0;
    margin-bottom: var(--nhsuk-spacing-5);
    padding: 0;
    list-style-type: none;
    font-size: 19px;
    line-height: 1.47368;
    font-weight: 400;
    font-family: "Frutiger W01", Arial, sans-serif;
  }

  /* Task list item */
  .nhsuk-task-list__item {
    display: table;
    position: relative;
    width: 100%;
    margin-bottom: 0;
    padding-top: calc(var(--nhsuk-spacing-2) + 4px);
    padding-bottom: calc(var(--nhsuk-spacing-2) + 4px);
    border-bottom: 1px solid var(--nhsuk-border-color);
  }

  .nhsuk-task-list__item:first-child {
    border-top: 1px solid var(--nhsuk-border-color);
  }

  /* Hover state for clickable items */
  .nhsuk-task-list__item--with-link:hover {
    background: var(--nhsuk-task-list-hover-color);
  }

  /* Name and hint container */
  .nhsuk-task-list__name-and-hint {
    display: table-cell;
    vertical-align: top;
    color: var(--nhsuk-text-color);
  }

  /* Task status container */
  .nhsuk-task-list__status {
    display: table-cell;
    padding-left: var(--nhsuk-spacing-2);
    text-align: right;
    vertical-align: top;
    color: var(--nhsuk-text-color);
  }

  /* Status text styles (non-tag statuses) */
  .nhsuk-task-list__status--completed,
  .nhsuk-task-list__status--cannot-start-yet {
    display: inline-block;
    padding-bottom: var(--nhsuk-spacing-1);
    padding-left: var(--nhsuk-spacing-2);
    padding-top: calc(var(--nhsuk-spacing-1) + 2px);
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  }

  .nhsuk-task-list__status--cannot-start-yet {
    color: var(--nhsuk-secondary-text-color);
  }

  /* Link styles */
  :global(.nhsuk-link) {
    color: #005eb8;
    text-decoration: underline;
  }

  :global(.nhsuk-link:hover) {
    color: #7C2855;
    text-decoration: underline;
  }

  :global(.nhsuk-link:focus) {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
  }

  :global(.nhsuk-link:active) {
    color: #002f5c;
  }

  /* Transparent overlay for clickable area */
  .nhsuk-task-list__link::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  /* Hint text */
  .nhsuk-task-list__hint {
    margin-top: var(--nhsuk-spacing-1);
    color: var(--nhsuk-secondary-text-color);
  }

  /* Fallback tag styles if Tag component is not available */
  .nhsuk-tag {
    background-color: #0050a3;
    border: 1px solid #0050a3;
    color: #ffffff;
    display: inline-block;
    outline: 2px solid transparent;
    outline-offset: -2px;
    padding: 4px 8px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }

  .nhsuk-tag--blue {
    background-color: #ccdff1;
    border-color: #004182;
    color: #004182;
  }

  .nhsuk-tag--grey {
    background-color: #d9dee2;
    border-color: #354550;
    color: #354550;
  }

  .nhsuk-tag--yellow {
    background-color: #fdf080;
    border-color: #484300;
    color: #484300;
  }

  /* Responsive margins */
  @media (min-width: 641px) {
    .nhsuk-task-list {
      margin-bottom: 24px;
    }
  }

  @media (min-width: 769px) {
    .nhsuk-task-list {
      margin-bottom: 32px;
    }
  }

  /* Print styles */
  @media print {
    .nhsuk-task-list__item--with-link:hover {
      background: none;
    }

    .nhsuk-task-list__status--cannot-start-yet {
      color: var(--nhsuk-text-color);
    }
  }
</style>
