<script lang="ts">
  import type { SummaryListProps, SummaryListRow, SummaryListAction } from './types.js';

  let {
    rows,
    classes = '',
    attributes = {},
    ...restProps
  }: SummaryListProps = $props();

  // Determine if any row has actions to set proper column layout
  $derived anyRowHasActions = rows.some(row => row.actions?.items && row.actions.items.length > 0);

  // Convert attributes object to string for dynamic attributes
  function getAttributesString(attrs: Record<string, string>) {
    return Object.entries(attrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
  }
</script>

<dl
  class="nhsuk-summary-list {classes}"
  {...attributes}
  {...restProps}
>
  {#each rows as row}
    {#if row}
      <div
        class="nhsuk-summary-list__row
               {anyRowHasActions && (!row.actions?.items || row.actions.items.length === 0) ? 'nhsuk-summary-list__row--no-actions' : ''}
               {row.classes || ''}"
      >
        <dt class="nhsuk-summary-list__key {row.key.classes || ''}">
          {#if row.key.html}
            {@html row.key.html}
          {:else}
            {row.key.text || ''}
          {/if}
        </dt>

        <dd class="nhsuk-summary-list__value {row.value.classes || ''}">
          {#if row.value.html}
            {@html row.value.html}
          {:else}
            {row.value.text || ''}
          {/if}
        </dd>

        {#if row.actions?.items && row.actions.items.length > 0}
          <dd class="nhsuk-summary-list__actions {row.actions.classes || ''}">
            {#if row.actions.items.length === 1}
              {@const action = row.actions.items[0]}
              <a href={action.href} class="nhsuk-link">
                {#if action.html}
                  {@html action.html}
                {:else}
                  {action.text || ''}
                {/if}
                {#if action.visuallyHiddenText}
                  <span class="nhsuk-u-visually-hidden"> {action.visuallyHiddenText}</span>
                {/if}
              </a>
            {:else}
              <ul class="nhsuk-summary-list__actions-list">
                {#each row.actions.items as action}
                  <li class="nhsuk-summary-list__actions-list-item">
                    <a href={action.href} class="nhsuk-link">
                      {#if action.html}
                        {@html action.html}
                      {:else}
                        {action.text || ''}
                      {/if}
                      {#if action.visuallyHiddenText}
                        <span class="nhsuk-u-visually-hidden"> {action.visuallyHiddenText}</span>
                      {/if}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </dd>
        {/if}
      </div>
    {/if}
  {/each}
</dl>

<style>
  /* Summary list component styles converted from SCSS */
  .nhsuk-summary-list {
    margin: 0;
    font-size: 19px;
    line-height: 1.47368;
    margin-bottom: 40px;
  }

  @media (min-width: 641px) {
    .nhsuk-summary-list {
      border-collapse: collapse;
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  }

  .nhsuk-summary-list__row {
    border-bottom: 1px solid #d8dde0;
  }

  @media (max-width: 640px) {
    .nhsuk-summary-list__row {
      margin-bottom: 15px;
    }
  }

  @media (min-width: 641px) {
    .nhsuk-summary-list__row {
      display: table-row;
    }
  }

  /* Remove right padding from the last column in the row */
  .nhsuk-summary-list__row:not(.nhsuk-summary-list__row--no-actions) > :last-child {
    padding-right: 0;
  }

  /* Provide an empty 'cell' for rows that don't have actions */
  @media (min-width: 641px) {
    .nhsuk-summary-list__row--no-actions::after {
      content: "";
      display: table-cell;
      width: 20%;
    }
  }

  .nhsuk-summary-list__key,
  .nhsuk-summary-list__value,
  .nhsuk-summary-list__actions {
    margin: 0;
    vertical-align: top;
  }

  @media (min-width: 641px) {
    .nhsuk-summary-list__key,
    .nhsuk-summary-list__value,
    .nhsuk-summary-list__actions {
      display: table-cell;
      padding-bottom: 10px;
      padding-right: 20px;
      padding-top: 10px;
    }
  }

  .nhsuk-summary-list__actions {
    margin-bottom: 15px;
  }

  @media (min-width: 641px) {
    .nhsuk-summary-list__actions {
      text-align: right;
      width: 20%;
    }
  }

  .nhsuk-summary-list__key,
  .nhsuk-summary-list__value {
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .nhsuk-summary-list__key {
    margin-bottom: 5px;
    font-weight: 600;
  }

  @media (min-width: 641px) {
    .nhsuk-summary-list__key {
      width: 30%;
    }
  }

  @media (max-width: 640px) {
    .nhsuk-summary-list__value {
      margin-bottom: 15px;
    }
  }

  .nhsuk-summary-list__value > p {
    margin-bottom: 12px;
  }

  .nhsuk-summary-list__value > :last-child {
    margin-bottom: 0;
  }

  .nhsuk-summary-list__actions-list {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .nhsuk-summary-list__actions-list-item {
    display: inline-block;
  }

  @media (max-width: 640px) {
    .nhsuk-summary-list__actions-list-item {
      border-right: 1px solid #d8dde0;
      margin-right: 10px;
      padding-right: 10px;
    }

    .nhsuk-summary-list__actions-list-item:last-child {
      border: 0;
      margin-right: 0;
      padding-right: 0;
    }
  }

  @media (min-width: 641px) {
    .nhsuk-summary-list__actions-list-item {
      margin-left: 10px;
      padding-left: 10px;
    }

    .nhsuk-summary-list__actions-list-item:first-child {
      border: 0;
      margin-left: 0;
      padding-left: 0;
    }

    .nhsuk-summary-list__actions-list-item:not(:first-child) {
      border-left: 1px solid #d8dde0;
    }
  }

  /* Create stacking context on focus to prevent overlap */
  .nhsuk-summary-list__actions-list-item .nhsuk-link:focus {
    isolation: isolate;
  }

  /* No border on entire summary list */
  .nhsuk-summary-list--no-border .nhsuk-summary-list__row {
    border: 0;
  }

  @media (min-width: 641px) {
    .nhsuk-summary-list--no-border .nhsuk-summary-list__key,
    .nhsuk-summary-list--no-border .nhsuk-summary-list__value,
    .nhsuk-summary-list--no-border .nhsuk-summary-list__actions {
      padding-bottom: 11px; /* 10px + 1px compensation */
    }
  }

  /* No border on specific rows */
  .nhsuk-summary-list__row--no-border {
    border: 0;
  }

  @media (min-width: 641px) {
    .nhsuk-summary-list__row--no-border .nhsuk-summary-list__key,
    .nhsuk-summary-list__row--no-border .nhsuk-summary-list__value,
    .nhsuk-summary-list__row--no-border .nhsuk-summary-list__actions {
      padding-bottom: 11px; /* 10px + 1px compensation */
    }
  }

  /* Basic link styling - you may want to import from your NHS UK design system */
  .nhsuk-link {
    color: #005eb8;
    text-decoration: underline;
  }

  .nhsuk-link:visited {
    color: #330072;
  }

  .nhsuk-link:hover {
    color: #003087;
  }

  .nhsuk-link:focus {
    color: #0b0c0c;
    background-color: #ffdd00;
    box-shadow: 0 -2px #ffdd00, 0 4px #0b0c0c;
    text-decoration: none;
    outline: 4px solid transparent;
  }

  .nhsuk-link:active {
    color: #0b0c0c;
  }

  /* Visually hidden utility class */
  .nhsuk-u-visually-hidden {
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
  }
</style>
