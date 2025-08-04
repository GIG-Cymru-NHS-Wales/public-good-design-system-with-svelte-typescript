<script lang="ts">
  import type { HeaderProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';
  import { onMount } from 'svelte';
  import { Header as HeaderJS } from './header.js';

  let {
    logo = {},
    service = {},
    organisation,
    navigation = {},
    search = {},
    account = {},
    baseUrl = '',
    containerClasses = '',
    classes = '',
    attributes = {}
  }: HeaderProps = $props();

  let headerElement: HTMLElement;

  const searchAction = search.action || 'https://www.nhs.uk/search/';
  const searchName = search.name || 'q';
  const searchPlaceholder = search.placeholder || 'Search';
  const searchVisuallyHiddenButton = search.visuallyHiddenButton || 'Search';
  const searchVisuallyHiddenLabel = search.visuallyHiddenLabel || 'Search the NHS website';

  // Determine if logo and service name should be combined
  const combineLogoAndServiceNameLinks = 
    (service.href && !logo.href) || 
    (service.href && service.href === logo.href);

  const logoHref = combineLogoAndServiceNameLinks ? service.href : logo.href;
  const logoAriaLabel = logo.ariaLabel || 'NHS';

  onMount(() => {
    if (headerElement && navigation?.items?.length) {
      new HeaderJS(headerElement);
    }
  });

  function getAccountItemIcon() {
    return `<svg class="nhsuk-icon nhsuk-icon__user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z"></path>
    </svg>`;
  }
</script>

<header 
  bind:this={headerElement}
  class="nhsuk-header{organisation ? ' nhsuk-header--organisation' : ''}{classes ? ` ${classes}` : ''}" 
  role="banner"
  {...parseAttributes(attributes)}
>
  <div class="nhsuk-header__container nhsuk-width-container{containerClasses ? ` ${containerClasses}` : ''}">
    <div class="nhsuk-header__service">
      {#if logoHref}
        <a class="nhsuk-header__service-logo" href={logoHref}>
          {#if logo.src}
            <img class="nhsuk-header__organisation-logo" src="{baseUrl}{logo.src}" width="280" alt={logoAriaLabel}>
          {:else}
            <svg class="nhsuk-header__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" height="40" width="100" focusable="false" role="img" aria-label={logoAriaLabel}>
              <title>{logoAriaLabel}</title>
              <path fill="currentcolor" d="M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"/>
            </svg>
          {/if}
          {#if organisation}
            <span class="nhsuk-header__organisation-name">
              {organisation.name}
              {#if organisation.split}
                <span class="nhsuk-header__organisation-name-split">{organisation.split}</span>
              {/if}
            </span>
            {#if organisation.descriptor}
              <span class="nhsuk-header__organisation-name-descriptor">{organisation.descriptor}</span>
            {/if}
          {/if}
          {#if combineLogoAndServiceNameLinks && service.text}
            <span class="nhsuk-header__service-name">{service.text}</span>
          {/if}
        </a>
      {:else}
        {#if logo.src}
          <img class="nhsuk-header__organisation-logo" src="{baseUrl}{logo.src}" width="280" alt={logoAriaLabel}>
        {:else}
          <svg class="nhsuk-header__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" height="40" width="100" focusable="false" role="img" aria-label={logoAriaLabel}>
            <title>{logoAriaLabel}</title>
            <path fill="currentcolor" d="M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"/>
          </svg>
        {/if}
        {#if organisation}
          <span class="nhsuk-header__organisation-name">
            {organisation.name}
            {#if organisation.split}
              <span class="nhsuk-header__organisation-name-split">{organisation.split}</span>
            {/if}
          </span>
          {#if organisation.descriptor}
            <span class="nhsuk-header__organisation-name-descriptor">{organisation.descriptor}</span>
          {/if}
        {/if}
        {#if combineLogoAndServiceNameLinks && service.text}
          <span class="nhsuk-header__service-name">{service.text}</span>
        {/if}
      {/if}
      
      {#if service.text && !combineLogoAndServiceNameLinks}
        {#if service.href}
          <a class="nhsuk-header__service-name" href={service.href}>{service.text}</a>
        {:else}
          <span class="nhsuk-header__service-name">{service.text}</span>
        {/if}
      {/if}
    </div>

    {#if search && Object.keys(search).length > 0}
      <search class="nhsuk-header__search">
        <form class="nhsuk-header__search-form" id="search" action={searchAction} method="get">
          <label class="nhsuk-u-visually-hidden" for="search-field">{searchVisuallyHiddenLabel}</label>
          <input 
            class="nhsuk-header__search-input nhsuk-input" 
            id="search-field" 
            name={searchName} 
            type="search" 
            placeholder={searchPlaceholder} 
            autocomplete="off"
          >
          <button class="nhsuk-header__search-submit" type="submit">
            <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
            </svg>
            <span class="nhsuk-u-visually-hidden">{searchVisuallyHiddenButton}</span>
          </button>
        </form>
      </search>
    {/if}

    {#if account?.items?.length}
      <nav 
        class="nhsuk-header__account{account.classes ? ` ${account.classes}` : ''}" 
        aria-label={account.ariaLabel || 'Account'}
        {...parseAttributes(account.attributes || {})}
      >
        <ul class="nhsuk-header__account-list">
          {#each account.items as item}
            {#if item}
              <li class="nhsuk-header__account-item{item.classes ? ` ${item.classes}` : ''}">
                {#if item.href}
                  <a class="nhsuk-header__account-link" href={item.href}>
                    {#if item.icon}
                      {@html getAccountItemIcon()}
                    {/if}
                    {#if item.html}
                      {@html item.html}
                    {:else}
                      {item.text}
                    {/if}
                  </a>
                {:else if item.action}
                  <form class="nhsuk-header__account-form" action={item.action} method={item.method || 'post'}>
                    <button class="nhsuk-header__account-button">
                      {#if item.icon}
                        {@html getAccountItemIcon()}
                      {/if}
                      {#if item.html}
                        {@html item.html}
                      {:else}
                        {item.text}
                      {/if}
                    </button>
                  </form>
                {:else}
                  {#if item.icon}
                    {@html getAccountItemIcon()}
                  {/if}
                  {#if item.html}
                    {@html item.html}
                  {:else}
                    {item.text}
                  {/if}
                {/if}
              </li>
            {/if}
          {/each}
        </ul>
      </nav>
    {/if}
  </div>

  {#if navigation?.items?.length}
    <nav 
      class="nhsuk-header__navigation{navigation.classes ? ` ${navigation.classes}` : ''}" 
      aria-label={navigation.ariaLabel || 'Menu'}
      {...parseAttributes(navigation.attributes || {})}
    >
      <div class="nhsuk-header__navigation-container nhsuk-width-container{containerClasses ? ` ${containerClasses}` : ''}">
        <ul class="nhsuk-header__navigation-list">
          {#each navigation.items as item}
            <li 
              class="nhsuk-header__navigation-item{item.active || item.current ? ' nhsuk-header__navigation-item--current' : ''}{item.classes ? ` ${item.classes}` : ''}"
              {...parseAttributes(item.attributes || {})}
            >
              <a 
                class="nhsuk-header__navigation-link" 
                href={item.href}
                aria-current={item.current ? 'page' : (item.active ? 'true' : undefined)}
              >
                {#if item.active || item.current}
                  <strong class="nhsuk-header__navigation-item-current-fallback">
                    {#if item.html}
                      {@html item.html}
                    {:else}
                      {item.text}
                    {/if}
                  </strong>
                {:else}
                  {#if item.html}
                    {@html item.html}
                  {:else}
                    {item.text}
                  {/if}
                {/if}
              </a>
            </li>
          {/each}
          <li class="nhsuk-header__menu" hidden>
            <button class="nhsuk-header__menu-toggle nhsuk-header__navigation-link" id="toggle-menu" aria-expanded="false">
              <span class="nhsuk-u-visually-hidden">Browse </span>More
              <svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  {/if}
</header>

<style>
  /* Header base styles */
  .nhsuk-header {
    background-color: #005eb8;
    color: #ffffff;
  }

  .nhsuk-header:has(.nhsuk-header__menu-list:not([hidden])) {
    border-bottom: 8px solid #f0f4f5;
  }

  @media print {
    .nhsuk-header {
      color: #212b32;
    }
  }

  .nhsuk-header__container {
    padding: 24px 0;
  }

  @media (min-width: 48.0625em) {
    .nhsuk-header__container {
      display: flex;
      flex-flow: row wrap;
      gap: 24px;
    }
  }

  /* Service logo and name */
  .nhsuk-header__logo {
    min-width: 100px;
  }

  .nhsuk-header__service,
  .nhsuk-header__service-logo {
    gap: 16px 24px;
    margin-right: auto;
  }

  .nhsuk-header__service {
    display: flex;
  }

  @media (min-width: 48.0625em) {
    .nhsuk-header__service {
      flex-grow: 999;
    }
  }

  .nhsuk-header__service-name {
    display: inline-flex;
    flex-direction: column;
    flex-grow: 0;
    justify-content: center;
    margin-right: auto;
    text-wrap: balance;
    max-width: 54ch;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.1;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-header__service-name {
      font-size: 22px;
      font-size: 1.375rem;
    }
  }

  .nhsuk-header__service-name:only-child {
    display: block;
  }

  .nhsuk-header__service-logo {
    position: relative;
    display: inline-flex;
    flex-grow: 0;
    line-height: 0;
    margin-right: 0;
    text-decoration: none;
  }

  .nhsuk-header__service-logo:only-child {
    display: flex;
  }

  .nhsuk-header__service-logo:has(svg):not(:focus):hover::before {
    content: "";
    border-bottom: 0.1rem solid currentcolor;
    display: inline;
    height: 40px;
    position: absolute;
    top: 0.2rem;
    width: 100px;
  }

  /* Link styles */
  .nhsuk-header__service-logo,
  .nhsuk-header__service-name[href],
  .nhsuk-header__account-button,
  .nhsuk-header__account-link {
    color: #ffffff;
  }

  .nhsuk-header__service-logo:visited,
  .nhsuk-header__service-name[href]:visited,
  .nhsuk-header__account-button:visited,
  .nhsuk-header__account-link:visited {
    color: #ffffff;
  }

  .nhsuk-header__service-logo:hover,
  .nhsuk-header__service-name[href]:hover,
  .nhsuk-header__account-button:hover,
  .nhsuk-header__account-link:hover {
    color: #dae8f0;
  }

  .nhsuk-header__service-logo:active,
  .nhsuk-header__service-name[href]:active,
  .nhsuk-header__account-button:active,
  .nhsuk-header__account-link:active {
    color: #aec7db;
  }

  .nhsuk-header__service-logo:focus,
  .nhsuk-header__service-name[href]:focus,
  .nhsuk-header__account-button:focus,
  .nhsuk-header__account-link:focus {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
  }

  .nhsuk-header__service-logo:focus:visited,
  .nhsuk-header__service-name[href]:focus:visited,
  .nhsuk-header__account-button:focus:visited,
  .nhsuk-header__account-link:focus:visited {
    box-shadow: inset 0 -4px #212b32;
    color: #212b32;
  }

  @media print {
    .nhsuk-header__service-logo,
    .nhsuk-header__service-name[href],
    .nhsuk-header__account-button,
    .nhsuk-header__account-link {
      color: inherit;
    }

    .nhsuk-header__service-logo::after,
    .nhsuk-header__service-name[href]::after,
    .nhsuk-header__account-button::after,
    .nhsuk-header__account-link::after {
      content: "";
    }
  }

  /* Account section */
  .nhsuk-header__account {
    background-color: #003c71;
    border: 1px solid #003c71;
    border-radius: 4px;
    flex-grow: 1;
    margin-top: 24px;
    overflow: hidden;
  }

  @media print {
    .nhsuk-header__account {
      display: none;
    }
  }

  @media (min-width: 48.0625em) {
    .nhsuk-header__account {
      align-self: start;
      margin: -1px;
    }
  }

  .nhsuk-header__account .nhsuk-icon__user {
    fill: currentcolor;
    height: 24px;
    width: 24px;
    flex-shrink: 0;
  }

  .nhsuk-header__account-list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }

  .nhsuk-header__account-item {
    display: flex;
    flex-grow: 1;
    gap: 16px;
    margin: 0;
    outline: 1px solid #005eb8;
    overflow-wrap: anywhere;
    padding: 16px 12px;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-header__account-item {
      font-size: 19px;
      font-size: 1.1875rem;
      line-height: 1.47368;
    }
  }

  .nhsuk-header__account-item:nth-last-child(2) {
    margin-right: auto;
  }

  .nhsuk-header__account-item:last-child {
    flex-grow: 0;
  }

  .nhsuk-header__account-button,
  .nhsuk-header__account-link {
    display: flex;
    gap: 16px;
    margin: -16px -12px;
    padding: 16px 12px;
    overflow-wrap: anywhere;
  }

  .nhsuk-header__account-button {
    background: none;
    border: 0;
    cursor: pointer;
    text-decoration: underline;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-header__account-button {
      font-size: 19px;
      font-size: 1.1875rem;
      line-height: 1.47368;
    }
  }

  /* Search section */
  .nhsuk-header__search {
    flex-grow: 1;
    margin-top: 24px;
    position: relative;
    z-index: 10;
  }

  @media print {
    .nhsuk-header__search {
      display: none;
    }
  }

  @media (min-width: 48.0625em) {
    .nhsuk-header__search {
      margin: 0;
    }
  }

  .nhsuk-header__search .nhsuk-icon__search {
    height: 28px;
    width: 28px;
    margin: 0 -2px -2px 0;
  }

  .nhsuk-header__search-form {
    display: flex;
    height: 100%;
    overflow: visible;
  }

  .nhsuk-header__search-input.nhsuk-input {
    border-color: transparent;
    border-radius: 4px 0 0 4px;
    height: 40px;
    margin-right: -2px;
    padding-right: 12px;
    padding-left: 10px;
    width: 100%;
    font-size: 16px;
    font-size: 1rem;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-header__search-input.nhsuk-input {
      font-size: 19px;
      font-size: 1.1875rem;
    }
  }

  .nhsuk-header__search-input.nhsuk-input:focus {
    z-index: 10;
  }

  .nhsuk-header__search-input.nhsuk-input::placeholder {
    color: #425563;
    opacity: 1;
  }

  .nhsuk-header__search-input.nhsuk-input::-ms-clear {
    display: none;
  }

  .nhsuk-header__search-input.nhsuk-input::-webkit-search-decoration,
  .nhsuk-header__search-input.nhsuk-input::-webkit-search-cancel-button {
    appearance: none;
  }

  @media (max-width: 48.0624em) {
    .nhsuk-header__search-input.nhsuk-input {
      font-size: inherit;
    }
  }

  .nhsuk-header__search-submit {
    background-color: #f0f4f5;
    border: 0;
    border-radius: 0 4px 4px 0;
    color: #005eb8;
    flex-shrink: 0;
    height: 48px;
    line-height: 1;
    margin: 0;
    width: 44px;
    cursor: pointer;
  }

  .nhsuk-header__search-submit:hover,
  .nhsuk-header__search-submit:active {
    background-color: #003c71;
    box-shadow: inset 0 0 0 1px #ffffff;
    color: #ffffff;
  }

  .nhsuk-header__search-submit:active {
    background-color: #002147;
  }

  .nhsuk-header__search-submit:focus {
    outline: none;
  }

  .nhsuk-header__search-submit:focus:not(:active),
  .nhsuk-header__search-submit:focus:not(:active):hover {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
  }

  /* Navigation section */
  .nhsuk-header__navigation {
    background-color: #005eb8;
    border: 0 solid #ffffff;
    color: #ffffff;
  }

  @media screen and (forced-colors: active), (-ms-high-contrast: active) {
    .nhsuk-header__navigation {
      border: 0;
    }
  }

  @media print {
    .nhsuk-header__navigation {
      display: none;
    }
  }

  .nhsuk-header__navigation-list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 -8px;
    padding: 0;
    width: calc(100% + 16px);
  }

  @media (min-width: 48.0625em) {
    .nhsuk-header__navigation-list {
      width: calc(100% + 32px);
      margin: 0 -16px;
    }
  }

  @media (min-width: 61.875em) {
    .nhsuk-header__navigation--justified .nhsuk-header__navigation-list {
      justify-content: space-between;
    }
  }

  .nhsuk-frontend-supported .nhsuk-header__navigation-list {
    flex-wrap: nowrap;
  }

  .nhsuk-header__navigation-item {
    margin-bottom: 0;
    padding: 0 8px;
  }

  @media (min-width: 48.0625em) {
    .nhsuk-header__navigation-item {
      padding: 0 16px;
    }
  }

  .nhsuk-header__navigation-item-current-fallback {
    font-weight: inherit;
  }

  .nhsuk-header__navigation-link {
    display: block;
    padding: 24px 2px;
    position: relative;
    white-space: nowrap;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
    color: #ffffff;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-header__navigation-link {
      font-size: 19px;
      font-size: 1.1875rem;
      line-height: 1.47368;
    }
  }

  .nhsuk-header__navigation-link:visited {
    color: #ffffff;
  }

  .nhsuk-header__navigation-link:hover {
    color: #dae8f0;
  }

  .nhsuk-header__navigation-link:active {
    color: #aec7db;
  }

  .nhsuk-header__navigation-link:focus {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
  }

  .nhsuk-header__navigation-link:focus:visited {
    box-shadow: inset 0 -4px #212b32;
    color: #212b32;
  }

  @media print {
    .nhsuk-header__navigation-link {
      color: inherit;
    }

    .nhsuk-header__navigation-link::after {
      content: "";
    }
  }

  .nhsuk-header__navigation-link::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border: 0 solid currentcolor;
  }

  .nhsuk-header__navigation-link[aria-current="page"]::before,
  .nhsuk-header__navigation-link[aria-current="true"]::before {
    border-bottom-width: 4px;
  }

  @media (max-width: 48.0624em) {
    .nhsuk-header__navigation-link {
      font-size: inherit;
    }
  }

  /* Menu */
  .nhsuk-header__menu {
    align-self: center;
    padding: 0 8px;
  }

  .nhsuk-header__menu[hidden] {
    display: none;
  }

  @media (min-width: 48.0625em) {
    .nhsuk-header__menu {
      padding: 0 16px;
    }
  }

  .nhsuk-header__menu-toggle {
    align-items: center;
    background: transparent;
    border: 0;
    border-radius: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    margin: 0;
    text-align: center;
    vertical-align: top;
  }

  .nhsuk-header__menu-toggle[hidden] {
    display: none;
  }

  .nhsuk-header__menu-toggle .nhsuk-icon__chevron-down {
    width: 32px;
    height: 32px;
    transform: rotate(90deg);
    margin-right: -6px;
  }

  .nhsuk-header__menu-toggle[aria-expanded="true"] .nhsuk-icon__chevron-down {
    transform: rotate(270deg);
  }

  .nhsuk-header__menu-list {
    list-style: none;
    margin: 0 8px;
    padding: 0;
    position: absolute;
    right: 0;
    top: 100%;
    left: 0;
  }

  @media print {
    .nhsuk-header__menu-list {
      display: none;
    }
  }

  @media (min-width: 48.0625em) {
    .nhsuk-header__menu-list {
      margin: 0 16px;
    }
  }

  .nhsuk-header__menu-list[hidden] {
    display: none;
  }

  .nhsuk-header__menu-list .nhsuk-header__navigation-link {
    color: #005eb8;
  }

  .nhsuk-header__menu-list .nhsuk-header__navigation-link:visited {
    color: #330072;
  }

  .nhsuk-header__menu-list .nhsuk-header__navigation-link:hover {
    color: #003c71;
  }

  .nhsuk-header__menu-list .nhsuk-header__navigation-link:active {
    color: #002147;
  }

  .nhsuk-header__menu-list .nhsuk-header__navigation-link[aria-current="page"]::before,
  .nhsuk-header__menu-list .nhsuk-header__navigation-link[aria-current="true"]::before {
    width: 0;
    top: 0;
    bottom: 0;
    left: -16px;
    right: auto;
    border-left-width: 4px;
  }

  @media (min-width: 61.875em) {
    .nhsuk-header__menu-list .nhsuk-header__navigation-link[aria-current="page"]::before,
    .nhsuk-header__menu-list .nhsuk-header__navigation-link[aria-current="true"]::before {
      left: -32px;
    }
  }

  .nhsuk-header__menu-list .nhsuk-header__navigation-item {
    padding: 0;
    border-bottom: 1px solid #f0f4f5;
  }

  .nhsuk-header__menu-list .nhsuk-header__navigation-item:last-child {
    border: 0;
  }

  /* White navigation variant */
  .nhsuk-header__navigation--white {
    background-color: #ffffff;
    color: #005eb8;
  }

  .nhsuk-header__navigation--white .nhsuk-header__navigation-link {
    color: #005eb8;
  }

  .nhsuk-header__navigation--white .nhsuk-header__navigation-link:visited {
    color: #330072;
  }

  .nhsuk-header__navigation--white .nhsuk-header__navigation-link:hover {
    color: #003c71;
  }

  .nhsuk-header__navigation--white .nhsuk-header__navigation-link:active {
    color: #002147;
  }

  .nhsuk-header__navigation--white .nhsuk-header__menu-list {
    border-top: 1px solid #f0f4f5;
  }

  /* Navigation container styles */
  .nhsuk-header__navigation-container {
    box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.2);
  }

  .nhsuk-header--white .nhsuk-header__navigation--white .nhsuk-header__navigation-container {
    box-shadow: 0 -1px 0 0 #f0f4f5;
  }

  .nhsuk-header--white :not(.nhsuk-header__navigation--white) .nhsuk-header__navigation-container,
  .nhsuk-header__navigation--white .nhsuk-header__navigation-container {
    box-shadow: none;
    margin-top: 0;
  }

  .nhsuk-header__navigation-container,
  .nhsuk-header--white .nhsuk-header__navigation--white .nhsuk-header__navigation-container {
    @media (max-width: 48.0624em) {
      box-shadow: none;
      margin-top: -16px;
    }
  }

  /* White header variant */
  .nhsuk-header--white {
    background-color: #ffffff;
    color: #005eb8;
  }

  .nhsuk-header--white .nhsuk-header__service-logo,
  .nhsuk-header--white .nhsuk-header__service-name[href],
  .nhsuk-header--white .nhsuk-header__account-button,
  .nhsuk-header--white .nhsuk-header__account-link {
    color: #005eb8;
  }

  .nhsuk-header--white .nhsuk-header__service-logo:visited,
  .nhsuk-header--white .nhsuk-header__service-name[href]:visited,
  .nhsuk-header--white .nhsuk-header__account-button:visited,
  .nhsuk-header--white .nhsuk-header__account-link:visited {
    color: #330072;
  }

  .nhsuk-header--white .nhsuk-header__service-logo:hover,
  .nhsuk-header--white .nhsuk-header__service-name[href]:hover,
  .nhsuk-header--white .nhsuk-header__account-button:hover,
  .nhsuk-header--white .nhsuk-header__account-link:hover {
    color: #003c71;
  }

  .nhsuk-header--white .nhsuk-header__service-logo:active,
  .nhsuk-header--white .nhsuk-header__service-name[href]:active,
  .nhsuk-header--white .nhsuk-header__account-button:active,
  .nhsuk-header--white .nhsuk-header__account-link:active {
    color: #002147;
  }

  .nhsuk-header--white .nhsuk-header__service-logo:not(:focus):not(:hover) .nhsuk-header__organisation-name {
    color: #212b32;
  }

  .nhsuk-header--white .nhsuk-header__account {
    background-color: #f0f4f5;
    border-color: #d8dde0;
  }

  .nhsuk-header--white .nhsuk-header__account-item {
    outline-color: #d8dde0;
  }

  .nhsuk-header--white .nhsuk-header__search-input.nhsuk-input:not(:focus) {
    margin-right: -1px;
    padding-left: 11px;
    border-color: #aeb7bd;
    border-width: 1px;
  }

  .nhsuk-header--white .nhsuk-header__search-submit {
    background-color: #005eb8;
    color: #ffffff;
  }

  .nhsuk-header--white .nhsuk-header__search-submit:hover,
  .nhsuk-header--white .nhsuk-header__search-submit:active {
    background-color: #003c71;
    border-color: #003c71;
    box-shadow: none;
  }

  .nhsuk-header--white .nhsuk-header__search-submit:active {
    background-color: #002147;
  }

  /* Organisation variant */
  .nhsuk-header--organisation .nhsuk-header__logo {
    height: 24px;
    margin-bottom: 6px;
    min-width: auto;
    width: 60px;
  }

  @media (min-width: 48.0625em) {
    .nhsuk-header--organisation .nhsuk-header__logo {
      height: 32px;
      width: 80px;
    }
  }

  .nhsuk-header--organisation .nhsuk-header__service-logo {
    display: block;
  }

  .nhsuk-header--organisation .nhsuk-header__service-logo:has(svg):not(:focus):hover::before {
    height: 24px;
    width: 60px;
  }

  @media (min-width: 48.0625em) {
    .nhsuk-header--organisation .nhsuk-header__service-logo:has(svg):not(:focus):hover::before {
      height: 32px;
      width: 80px;
    }
  }

  .nhsuk-header__organisation-name {
    display: block;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 22px;
    font-size: 1.375rem;
    line-height: 1.1;
    font-weight: 700;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-header__organisation-name {
      font-size: 26px;
      font-size: 1.625rem;
    }
  }

  .nhsuk-header__organisation-name-split {
    display: block;
  }

  .nhsuk-header__organisation-name-descriptor {
    display: block;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 14px;
    font-size: 0.875rem;
    line-height: 1.71429;
    font-weight: 700;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-header__organisation-name-descriptor {
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  .nhsuk-header__organisation-logo {
    border: 0;
    height: auto;
    width: 280px;
  }

  @media (max-width: 450px) {
    .nhsuk-header__organisation-logo {
      max-width: 150px;
    }
  }

  .nhsuk-header__organisation-logo[src$=".svg"] {
    max-width: 220px;
    width: 220px;
  }

  /* Service name styling */
  .nhsuk-header .nhsuk-header__service-name[href] {
    text-decoration: none;
  }

  .nhsuk-header .nhsuk-header__service-logo:not(:focus):hover,
  .nhsuk-header .nhsuk-header__service-logo:not(:focus):hover .nhsuk-header__service-name,
  .nhsuk-header .nhsuk-header__service-name[href]:not(:focus):hover {
    text-decoration: underline;
  }

  .nhsuk-header .nhsuk-header__service-logo:focus {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
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

  /* Support for JavaScript enhanced header */
  .nhsuk-frontend-supported {
    font-family: Frutiger W01, Arial, Sans-serif;
  }

  /* Additional input styles */
  .nhsuk-input {
    font-family: Frutiger W01, Arial, Sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    margin-top: 0;
    padding: 5px;
    border: 2px solid #212b32;
    border-radius: 4px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .nhsuk-input:focus {
    outline: 3px solid transparent;
    outline-offset: 0;
    box-shadow: inset 0 0 0 2px;
  }

  .nhsuk-input:focus {
    border-color: #212b32;
    outline: 4px solid #ffeb3b;
    outline-offset: -2px;
  }