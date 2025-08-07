<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { TabsProps, TabItem } from './types';
  import { defaultConfig, classNames, ariaConfig, breakpoints } from './config';

  let {
    id = $bindable(),
    idPrefix = defaultConfig.idPrefix,
    title = defaultConfig.title,
    items = [],
    classes = '',
    attributes = {},
    ...rest
  }: TabsProps = $props();

  let activeIndex = $state(0);
  let isMobile = $state(true);
  let isSupported = $state(false);
  let tabsElement: HTMLDivElement;
  let tabRefs: HTMLAnchorElement[] = [];
  let mediaQuery: MediaQueryList;

  // Generate IDs for tabs and panels
  const getTabId = (item: TabItem, index: number) => {
    return item.id || `${idPrefix}-${index + 1}`;
  };

  const getPanelId = (item: TabItem, index: number) => {
    return getTabId(item, index);
  };

  const getTabElementId = (item: TabItem, index: number) => {
    return `tab_${getTabId(item, index)}`;
  };

  // Handle tab click
  const handleTabClick = (event: MouseEvent, index: number) => {
    if (!isMobile && isSupported) {
      event.preventDefault();
      activeIndex = index;
      updateHash(items[index], index);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: KeyboardEvent, index: number) => {
    if (!isMobile && isSupported) {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'Left':
        case 'Up':
          event.preventDefault();
          activatePreviousTab(index);
          break;
        case 'ArrowRight':
        case 'ArrowDown':
        case 'Right':
        case 'Down':
          event.preventDefault();
          activateNextTab(index);
          break;
      }
    }
  };

  const activateNextTab = (currentIndex: number) => {
    const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : currentIndex;
    if (nextIndex !== currentIndex) {
      activeIndex = nextIndex;
      tabRefs[nextIndex]?.focus();
      updateHash(items[nextIndex], nextIndex);
    }
  };

  const activatePreviousTab = (currentIndex: number) => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    if (prevIndex !== currentIndex) {
      activeIndex = prevIndex;
      tabRefs[prevIndex]?.focus();
      updateHash(items[prevIndex], prevIndex);
    }
  };

  const updateHash = (item: TabItem, index: number) => {
    const panelId = getPanelId(item, index);
    const panel = document.getElementById(panelId);
    if (panel) {
      // Save and restore the id to prevent jumping
      const originalId = panel.id;
      panel.id = '';
      window.location.hash = originalId;
      panel.id = originalId;
    }
  };

  const handleHashChange = () => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const index = items.findIndex((item, i) => getPanelId(item, i) === hash);
      if (index !== -1) {
        activeIndex = index;
      }
    }
  };

  const checkMode = () => {
    isMobile = !mediaQuery.matches;
  };

  // Initialize from URL hash
  const initFromHash = () => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const index = items.findIndex((item, i) => getPanelId(item, i) === hash);
      if (index !== -1) {
        activeIndex = index;
      }
    }
  };

  onMount(() => {
    // Check if JavaScript is supported
    isSupported = document.body.classList.contains(classNames.frontendSupported);

    if (typeof window.matchMedia === 'function') {
      mediaQuery = window.matchMedia(`(min-width: ${breakpoints.tablet}px)`);

      // Check initial state
      checkMode();

      // Add listener for responsive changes
      if ('addEventListener' in mediaQuery) {
        mediaQuery.addEventListener('change', checkMode);
      } else {
        // Fallback for older browsers
        (mediaQuery as any).addListener(checkMode);
      }
    }

    // Initialize from hash
    initFromHash();

    // Add hash change listener
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      if (mediaQuery) {
        if ('removeEventListener' in mediaQuery) {
          mediaQuery.removeEventListener('change', checkMode);
        } else {
          (mediaQuery as any).removeListener(checkMode);
        }
      }
      window.removeEventListener('hashchange', handleHashChange);
    };
  });
</script>

<div
  bind:this={tabsElement}
  id={id}
  class="{classNames.root} {classes}"
  data-module="nhsuk-tabs"
  {...attributes}
  {...rest}
>
  <h2 class={classNames.title}>
    {title}
  </h2>

  {#if items.length > 0}
    <ul
      class={classNames.list}
      role={!isMobile && isSupported ? ariaConfig.roles.tablist : undefined}
    >
      {#each items as item, index}
        {#if item}
          {@const tabId = getTabElementId(item, index)}
          {@const panelId = getPanelId(item, index)}
          {@const isActive = activeIndex === index}

          <li
            class="{classNames.listItem} {isActive && !isMobile && isSupported ? classNames.listItemSelected : ''}"
            role={!isMobile && isSupported ? ariaConfig.roles.presentation : undefined}
          >
            <a
              bind:this={tabRefs[index]}
              id={!isMobile && isSupported ? tabId : undefined}
              class={classNames.tab}
              href="#{panelId}"
              role={!isMobile && isSupported ? ariaConfig.roles.tab : undefined}
              aria-controls={!isMobile && isSupported ? panelId : undefined}
              aria-selected={!isMobile && isSupported ? String(isActive) : undefined}
              tabindex={!isMobile && isSupported ? (isActive ? 0 : -1) : undefined}
              onclick={(e) => handleTabClick(e, index)}
              onkeydown={(e) => handleKeyDown(e, index)}
              {...item.attributes}
            >
              {item.label}
            </a>
          </li>
        {/if}
      {/each}
    </ul>
  {/if}

  {#each items as item, index}
    {#if item}
      {@const panelId = getPanelId(item, index)}
      {@const tabId = getTabElementId(item, index)}
      {@const isHidden = !isMobile && isSupported && activeIndex !== index}

      <div
        id={panelId}
        class="{classNames.panel} {isHidden ? classNames.panelHidden : ''}"
        role={!isMobile && isSupported ? ariaConfig.roles.tabpanel : undefined}
        aria-labelledby={!isMobile && isSupported ? tabId : undefined}
        {...item.panel.attributes}
      >
        {#if item.panel.html}
          {@html item.panel.html}
        {:else}
          {item.panel.text}
        {/if}
      </div>
    {/if}
  {/each}
</div>

<style>
  /* Core settings */
  :root {
    --nhsuk-text-color: #212b32;
    --nhsuk-border-color: #d8dde0;
    --color-nhsuk-grey-4: #f0f4f5;
    --color-nhsuk-white: #ffffff;
    --nhsuk-spacing-1: 4px;
    --nhsuk-spacing-2: 8px;
    --nhsuk-spacing-4: 16px;
    --nhsuk-spacing-5: 20px;
    --nhsuk-spacing-6: 24px;
    --nhsuk-spacing-8: 32px;
  }

  /* Base tabs styles */
  .nhsuk-tabs {
    margin-top: var(--nhsuk-spacing-1);
    margin-bottom: var(--nhsuk-spacing-6);
  }

  .nhsuk-tabs__title {
    color: var(--nhsuk-text-color);
    margin-bottom: var(--nhsuk-spacing-2);
    font-size: 19px;
    line-height: 1.47368;
    font-weight: 400;
  }

  .nhsuk-tabs__list {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: var(--nhsuk-spacing-6);
  }

  .nhsuk-tabs__list-item {
    margin-left: var(--nhsuk-spacing-5);
    font-size: 19px;
    line-height: 1.47368;
  }

  .nhsuk-tabs__list-item::before {
    color: var(--nhsuk-text-color);
    content: "— ";
    margin-left: calc(-1 * var(--nhsuk-spacing-5));
    padding-right: var(--nhsuk-spacing-1);
  }

  .nhsuk-tabs__tab {
    display: inline-block;
    margin-bottom: var(--nhsuk-spacing-2);
    color: #005eb8;
    text-decoration: underline;
  }

  .nhsuk-tabs__tab:hover {
    color: #7C2855;
  }

  .nhsuk-tabs__tab:focus {
    background-color: #ffeb3b;
    box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    text-decoration: none;
  }

  .nhsuk-tabs__tab:active {
    color: #002f5c;
  }

  .nhsuk-tabs__panel {
    margin-bottom: var(--nhsuk-spacing-8);
  }

  /* Enhanced styles for JavaScript-enabled desktop view */
  @media (min-width: 641px) {
    :global(.nhsuk-frontend-supported) .nhsuk-tabs__list {
      border-bottom: 1px solid var(--nhsuk-border-color);
      margin-bottom: 0;
      overflow: hidden;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__list::after {
      content: "";
      display: table;
      clear: both;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__title {
      display: none;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__list-item {
      background-color: var(--color-nhsuk-grey-4);
      float: left;
      margin-bottom: 0;
      margin-left: 0;
      margin-right: var(--nhsuk-spacing-1);
      padding: var(--nhsuk-spacing-2) var(--nhsuk-spacing-4);
      position: relative;
      text-align: center;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__list-item::before {
      content: none;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__list-item--selected {
      background-color: var(--color-nhsuk-white);
      border: 1px solid var(--nhsuk-border-color);
      border-bottom: 0;
      margin-bottom: -1px;
      margin-top: calc(-1 * var(--nhsuk-spacing-1));
      padding-bottom: calc(var(--nhsuk-spacing-2) * 1.5 + 1px);
      padding-left: calc(var(--nhsuk-spacing-4) - 1px);
      padding-right: calc(var(--nhsuk-spacing-4) - 1px);
      padding-top: calc(var(--nhsuk-spacing-2) * 1.5 - 1px);
      position: relative;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__list-item--selected .nhsuk-tabs__tab {
      text-decoration: none;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__tab {
      margin-bottom: 0;
      color: var(--nhsuk-text-color);
      text-decoration: none;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__tab:hover {
      color: var(--nhsuk-text-color);
      text-decoration: underline;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__tab::after {
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__panel {
      background-color: var(--color-nhsuk-white);
      border: 1px solid var(--nhsuk-border-color);
      border-top: 0;
      padding: var(--nhsuk-spacing-6) var(--nhsuk-spacing-4);
      margin-bottom: 0;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__panel > :last-child {
      margin-bottom: 0;
    }

    :global(.nhsuk-frontend-supported) .nhsuk-tabs__panel--hidden {
      display: none;
    }
  }

  /* Responsive margins for tablets and above */
  @media (min-width: 641px) {
    .nhsuk-tabs {
      margin-top: var(--nhsuk-spacing-2);
      margin-bottom: var(--nhsuk-spacing-8);
    }

    .nhsuk-tabs__list {
      margin-bottom: var(--nhsuk-spacing-8);
    }

    .nhsuk-tabs__panel {
      margin-bottom: 40px;
    }
  }

  /* Responsive margins for desktop and above */
  @media (min-width: 769px) {
    .nhsuk-tabs {
      margin-bottom: 48px;
    }

    .nhsuk-tabs__list {
      margin-bottom: 48px;
    }

    .nhsuk-tabs__panel {
      margin-bottom: 48px;
    }
  }
</style>
