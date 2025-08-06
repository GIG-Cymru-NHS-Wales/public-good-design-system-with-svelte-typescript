<script lang="ts">
  import type { TableProps } from './types.js';
  import { defaultProps } from './config.js';

  interface Props extends TableProps {}

  let {
    rows,
    head,
    heading,
    headingLevel = defaultProps.headingLevel!,
    caption,
    captionClasses,
    firstCellIsHeader = defaultProps.firstCellIsHeader!,
    responsive = defaultProps.responsive!,
    tableClasses,
    panel = defaultProps.panel!,
    panelClasses,
    attributes,
    ...restProps
  }: Props = $props();

  function attributesToString(attrs?: Record<string, string>): string {
    if (!attrs) return '';
    return Object.entries(attrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
  }
</script>

{#if panel}
  <div class="nhsuk-table__panel-with-heading-tab{panelClasses ? ` ${panelClasses}` : ''}">
    {#if heading}
      {#if headingLevel === 1}
        <h1 class="nhsuk-table__heading-tab">{@html heading}</h1>
      {:else if headingLevel === 2}
        <h2 class="nhsuk-table__heading-tab">{@html heading}</h2>
      {:else if headingLevel === 3}
        <h3 class="nhsuk-table__heading-tab">{@html heading}</h3>
      {:else if headingLevel === 4}
        <h4 class="nhsuk-table__heading-tab">{@html heading}</h4>
      {:else if headingLevel === 5}
        <h5 class="nhsuk-table__heading-tab">{@html heading}</h5>
      {:else if headingLevel === 6}
        <h6 class="nhsuk-table__heading-tab">{@html heading}</h6>
      {/if}
    {/if}
{/if}

<table 
  class="nhsuk-table{responsive ? '-responsive' : ''}{tableClasses ? ` ${tableClasses}` : ''}"
  {responsive ? 'role="table"' : ''}
  {...attributes}
  {...restProps}
>
  {#if caption}
    <caption class="nhsuk-table__caption{captionClasses ? ` ${captionClasses}` : ''}">{@html caption}</caption>
  {/if}

  {#if head}
    <thead class="nhsuk-table__head" {responsive ? 'role="rowgroup"' : ''}>
      <tr {responsive ? 'role="row"' : ''}>
        {#each head as item}
          <th 
            scope="col" 
            class="nhsuk-table__header{item.format ? ` nhsuk-table__header--${item.format}` : ''}{item.classes ? ` ${item.classes}` : ''}"
            {item.colspan ? `colspan="${item.colspan}"` : ''}
            {item.rowspan ? `rowspan="${item.rowspan}"` : ''}
            {responsive ? 'role="columnheader"' : ''}
            {attributesToString(item.attributes)}
          >
            {@html item.html || item.text || ''}
          </th>
        {/each}
      </tr>
    </thead>
  {/if}

  <tbody class="nhsuk-table__body">
    {#each rows as row}
      <tr class="nhsuk-table__row" {responsive ? 'role="row"' : ''}>
        {#each row as cell, cellIndex}
          {#if cellIndex === 0 && firstCellIsHeader}
            <th 
              scope="row" 
              class="nhsuk-table__header{cell.classes ? ` ${cell.classes}` : ''}"
              {responsive ? 'role="rowheader"' : ''}
              {cell.colspan ? `colspan="${cell.colspan}"` : ''}
              {cell.rowspan ? `rowspan="${cell.rowspan}"` : ''}
              {attributesToString(cell.attributes)}
            >
              {#if responsive && cell.header}
                <span class="nhsuk-table-responsive__heading" aria-hidden="true">{cell.header} </span>
              {/if}
              {@html cell.html || cell.text || ''}
            </th>
          {:else}
            <td 
              class="nhsuk-table__cell{cell.format ? ` nhsuk-table__cell--${cell.format}` : ''}{cell.classes ? ` ${cell.classes}` : ''}"
              {responsive ? 'role="cell"' : ''}
              {cell.colspan ? `colspan="${cell.colspan}"` : ''}
              {cell.rowspan ? `rowspan="${cell.rowspan}"` : ''}
              {attributesToString(cell.attributes)}
            >
              {#if responsive && cell.header}
                <span class="nhsuk-table-responsive__heading" aria-hidden="true">{cell.header} </span>
              {/if}
              {@html cell.html || cell.text || ''}
            </td>
          {/if}
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

{#if panel}
  </div>
{/if}

<style>
  /* Table component styles compiled from SCSS */
  
  /* Table container */
  .nhsuk-table-container {
    display: block;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    overflow-x: auto;
    width: 100%;
    margin-bottom: 2rem;
  }

  .nhsuk-table-container .nhsuk-table,
  .nhsuk-table-container .nhsuk-table-responsive {
    margin: 0;
  }

  .nhsuk-table,
  .nhsuk-table-responsive {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 19px;
    font-family: "Frutiger W01", Arial, sans-serif;
    line-height: 1.47368;
    margin-bottom: 2rem;
  }

  /* Caption sizes */
  .nhsuk-table__caption--xl {
    font-size: 48px;
    line-height: 1.09375;
  }

  .nhsuk-table__caption--l {
    font-size: 36px;
    line-height: 1.11111;
  }

  .nhsuk-table__caption--m {
    font-size: 26px;
    line-height: 1.23077;
  }

  .nhsuk-table__caption--s {
    font-size: 22px;
    line-height: 1.27273;
  }

  /* Table row hover */
  .nhsuk-table__row:hover {
    background-color: #f0f4f5;
  }

  /* Table panel with tab heading */
  .nhsuk-table__panel-with-heading-tab {
    background: #ffffff;
    border: 1px solid #d8dde0;
    padding: 24px;
    position: relative;
    top: 16px;
  }

  .nhsuk-table__panel-with-heading-tab .nhsuk-table,
  .nhsuk-table__panel-with-heading-tab .nhsuk-table-container,
  .nhsuk-table__panel-with-heading-tab .nhsuk-table-responsive {
    margin: 0;
  }

  .nhsuk-table__heading-tab {
    background: #005eb8;
    color: #ffffff;
    display: inline-block;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 8px 0;
    padding: 8px 16px;
    position: relative;
    top: -40px;
  }

  /* Responsive table styles */
  @media (max-width: 48.0525em) {
    .nhsuk-table-responsive thead {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }

  .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table-responsive__heading {
    font-weight: 600;
    padding-right: 16px;
    text-align: left;
  }

  .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row {
    display: block;
    margin-bottom: 24px;
  }

  .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row:last-child {
    margin-bottom: 0;
  }

  .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row th,
  .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row td {
    display: block;
    display: flex;
    justify-content: space-between;
    min-width: 1px;
  }

  @media all and (-ms-high-contrast: none) {
    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row th,
    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row td {
      display: block;
    }
  }

  @media (max-width: 48.0525em) {
    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row th {
      font-weight: 400;
    }

    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row th,
    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row td {
      padding-right: 0;
      text-align: right;
    }

    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row th:last-child,
    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row td:last-child {
      border-bottom: 3px solid #d8dde0;
    }
  }

  @media (min-width: 48.0625em) {
    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table-responsive__heading {
      display: none;
    }

    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row {
      display: table-row;
    }

    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row th {
      text-align: left;
    }

    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row th,
    .nhsuk-table-responsive .nhsuk-table__body .nhsuk-table__row td {
      display: table-cell;
    }
  }

  /* Numeric tables */
  .nhsuk-table__header--numeric,
  .nhsuk-table__cell--numeric {
    text-align: right;
  }

  /* Standard table styles */
  .nhsuk-table th,
  .nhsuk-table td {
    border-bottom: 1px solid #d8dde0;
    padding: 12px 20px 12px 0;
    text-align: left;
    vertical-align: top;
  }

  .nhsuk-table th {
    font-weight: 600;
  }

  .nhsuk-table__header {
    font-weight: 600;
  }

  .nhsuk-table__caption {
    font-weight: 600;
    text-align: left;
    caption-side: top;
  }

  /* Visually hidden utility */
  .nhsuk-u-visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /* Text break word utility */
  .nhsuk-u-text-break-word {
    word-break: break-word;
  }

  /* Width utilities */
  .nhsuk-u-width-one-half {
    width: 50%;
  }

  .nhsuk-u-width-one-quarter {
    width: 25%;
  }
</style>
