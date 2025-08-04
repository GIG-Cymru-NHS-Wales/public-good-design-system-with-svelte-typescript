<script lang="ts">
  import type { FooterProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';

  let {
    links = [],
    linksColumn2 = [],
    linksColumn3 = [],
    copyright,
    containerClasses = '',
    classes = '',
    attributes = {},
    metaLinks = []
  }: FooterProps = $props();

  const copyrightText = copyright || '© NHS England';
  const hasMultipleColumns = linksColumn2.length > 0;
</script>

<footer role="contentinfo">
  <div class="nhsuk-footer-container">
    <div class="nhsuk-width-container{containerClasses ? ` ${containerClasses}` : ''}">
      <h2 class="nhsuk-u-visually-hidden">Support links</h2>
      <div 
        class="nhsuk-footer{classes ? ` ${classes}` : ''}"
        {...parseAttributes(attributes)}
      >
        {#if !hasMultipleColumns}
          <ul class="nhsuk-footer__list">
            {#each links as item}
              <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
                <a class="nhsuk-footer__list-item-link" href={item.url}>{item.label}</a>
              </li>
            {/each}
            {#each linksColumn2 as item}
              <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
                <a class="nhsuk-footer__list-item-link" href={item.url}>{item.label}</a>
              </li>
            {/each}
            {#each linksColumn3 as item}
              <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
                <a class="nhsuk-footer__list-item-link" href={item.url}>{item.label}</a>
              </li>
            {/each}
            {#each metaLinks as item}
              <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
                <a class="nhsuk-footer__list-item-link" href={item.url}>{item.label}</a>
              </li>
            {/each}
          </ul>
          <div>
            <p class="nhsuk-footer__copyright">{copyrightText}</p>
          </div>
        {:else}
          <ul class="nhsuk-footer__list">
            {#each links as item}
              <li class="nhsuk-footer__list-item">
                <a class="nhsuk-footer__list-item-link" href={item.url}>{item.label}</a>
              </li>
            {/each}
          </ul>
          <ul class="nhsuk-footer__list">
            {#each linksColumn2 as item}
              <li class="nhsuk-footer__list-item">
                <a class="nhsuk-footer__list-item-link" href={item.url}>{item.label}</a>
              </li>
            {/each}
          </ul>
          <ul class="nhsuk-footer__list">
            {#each linksColumn3 as item}
              <li class="nhsuk-footer__list-item">
                <a class="nhsuk-footer__list-item-link" href={item.url}>{item.label}</a>
              </li>
            {/each}
          </ul>
          {#if metaLinks.length > 0}
            <ul class="nhsuk-footer__list nhsuk-footer__meta">
              {#each metaLinks as item}
                <li class="nhsuk-footer__list-item">
                  <a class="nhsuk-footer__list-item-link" href={item.url}>{item.label}</a>
                </li>
              {/each}
            </ul>
          {/if}
        {/if}
      </div>
      {#if hasMultipleColumns}
        <div>
          <p class="nhsuk-footer__copyright">{copyrightText}</p>
        </div>
      {/if}
    </div>
  </div>
</footer>

<style>
  .nhsuk-footer-container {
    background-color: #f0f4f5;
    border-top: 8px solid #005eb8;
    padding-bottom: 32px;
    padding-top: 32px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-footer-container {
      padding-bottom: 40px;
      padding-top: 40px;
    }
  }

  /* Clearfix */
  .nhsuk-footer-container::before,
  .nhsuk-footer-container::after {
    content: "";
    display: table;
  }

  .nhsuk-footer-container::after {
    clear: both;
  }

  /* Print styles */
  @media print {
    .nhsuk-footer-container {
      display: none;
    }
  }

  .nhsuk-footer {
    background-color: #f0f4f5;
    margin-bottom: 15px;
  }

  @media (min-width: 61.875em) {
    .nhsuk-footer {
      display: flex;
      justify-content: space-between;
    }
  }

  .nhsuk-footer__list {
    list-style-type: none;
    margin-bottom: 25px;
    padding-left: 0;
    padding-bottom: 24px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-footer__list {
      padding-bottom: 32px;
    }
  }

  .nhsuk-footer__list:last-child {
    margin-bottom: 15px;
  }

  @media (min-width: 61.875em) {
    .nhsuk-footer__list {
      float: left;
      padding-bottom: 0;
      padding-right: 40px;
      width: 75%;
    }

    .nhsuk-footer__list:last-child {
      padding-right: 0;
    }
  }

  .nhsuk-footer__list-item {
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-footer__list-item {
      font-size: 19px;
      font-size: 1.1875rem;
      line-height: 1.47368;
    }
  }

  @media (min-width: 61.875em) {
    .nhsuk-footer__list-item {
      float: none;
      margin-right: 0;
    }
  }

  .nhsuk-footer-default__list-item {
  }

  @media (min-width: 61.875em) {
    .nhsuk-footer-default__list-item {
      float: left;
      margin-right: 40px;
    }
  }

  .nhsuk-footer__list-item-link,
  .nhsuk-footer__list-item-link:visited {
    color: #003087;
  }

  .nhsuk-footer__list-item-link:hover {
    text-decoration: underline;
  }

  .nhsuk-footer__list-item-link:focus {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
  }

  .nhsuk-footer__list-item-link:active {
    color: #002f5c;
  }

  .nhsuk-footer__copyright {
    color: #425563;
    margin-bottom: 0;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-footer__copyright {
      font-size: 19px;
      font-size: 1.1875rem;
      line-height: 1.47368;
    }
  }

  .nhsuk-footer__meta {
  }

  @media (max-width: 61.874em) {
    .nhsuk-footer__meta {
      border-top: 1px solid #d8dde0;
      padding-top: 35px;
    }
  }

  /* Utility classes */
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

  .nhsuk-width-container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px;
  }

  @media (min-width: 48.0625em) {
    .nhsuk-width-container {
      padding: 0 32px;
    }
  }
</style>
