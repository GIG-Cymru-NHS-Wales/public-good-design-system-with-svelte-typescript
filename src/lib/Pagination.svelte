<script lang="ts">
  import type { PaginationProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';

  let {
    previousUrl,
    previousPage,
    nextUrl,
    nextPage,
    classes = '',
    attributes = {}
  }: PaginationProps = $props();
</script>

<nav 
  class="nhsuk-pagination{classes ? ` ${classes}` : ''}"
  role="navigation"
  aria-label="Pagination"
  {...parseAttributes(attributes)}
>
  <ul class="nhsuk-list nhsuk-pagination__list">
    {#if previousUrl && previousPage}
      <li class="nhsuk-pagination-item--previous">
        <a class="nhsuk-pagination__link nhsuk-pagination__link--prev" href={previousUrl}>
          <span class="nhsuk-pagination__title">Previous</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">{previousPage}</span>
          <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">
            <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
          </svg>
        </a>
      </li>
    {/if}
    {#if nextUrl && nextPage}
      <li class="nhsuk-pagination-item--next">
        <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href={nextUrl}>
          <span class="nhsuk-pagination__title">Next</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">{nextPage}</span>
          <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          </svg>
        </a>
      </li>
    {/if}
  </ul>
</nav>

<style>
  .nhsuk-pagination {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-pagination {
      margin-top: 56px;
      margin-bottom: 56px;
    }
  }

  .nhsuk-pagination__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Clearfix */
  .nhsuk-pagination__list::after {
    clear: both;
    content: "";
    display: table;
  }

  .nhsuk-pagination-item--previous {
    float: left;
    text-align: left;
    width: 50%;
  }

  .nhsuk-pagination-item--previous .nhsuk-icon {
    left: -6px;
  }

  .nhsuk-pagination-item--previous .nhsuk-pagination__title {
    padding-left: 40px;
  }

  .nhsuk-pagination-item--next {
    float: right;
    text-align: right;
    width: 50%;
  }

  .nhsuk-pagination-item--next .nhsuk-icon {
    right: -6px;
  }

  .nhsuk-pagination-item--next .nhsuk-pagination__title {
    padding-right: 40px;
  }

  .nhsuk-pagination__link {
    display: block;
    position: relative;
    text-decoration: none;
    width: 100%;
    color: #005eb8;
  }

  .nhsuk-pagination__link:visited {
    color: #330072;
  }

  .nhsuk-pagination__link:hover {
    color: #003c71;
  }

  .nhsuk-pagination__link:active {
    color: #002147;
  }

  .nhsuk-pagination__link:focus {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
  }

  @media print {
    .nhsuk-pagination__link {
      color: #212b32;
    }
  }

  .nhsuk-pagination__link .nhsuk-icon {
    position: absolute;
    top: -2px;
    fill: currentColor;
  }

  @media print {
    .nhsuk-pagination__link .nhsuk-icon {
      color: #212b32;
      margin-top: 0;
    }
  }

  .nhsuk-pagination__title {
    display: block;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-pagination__title {
      font-size: 26px;
      font-size: 1.625rem;
      line-height: 1.07692;
    }
  }

  @media print {
    .nhsuk-pagination__title::after {
      content: " page";
    }
  }

  .nhsuk-pagination__page {
    display: block;
    text-decoration: underline;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-pagination__page {
      font-size: 19px;
      font-size: 1.1875rem;
      line-height: 1.47368;
    }
  }

  .nhsuk-pagination__link:hover .nhsuk-pagination__page,
  .nhsuk-pagination__link:focus .nhsuk-pagination__page {
    text-decoration: none;
  }

  /* Utility class for visually hidden content */
  .nhsuk-u-visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    border: 0;
  }

  /* List reset */
  .nhsuk-list {
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-list {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }
</style>
