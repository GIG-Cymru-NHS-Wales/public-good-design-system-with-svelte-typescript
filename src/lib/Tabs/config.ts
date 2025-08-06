import type { TabsProps } from './types';

/**
 * Default configuration for the Tabs component
 */
export const defaultConfig: Partial<TabsProps> = {
  title: 'Contents',
  idPrefix: 'tab',
  items: []
};

/**
 * CSS class names used by the component
 */
export const classNames = {
  root: 'nhsuk-tabs',
  title: 'nhsuk-tabs__title',
  list: 'nhsuk-tabs__list',
  listItem: 'nhsuk-tabs__list-item',
  listItemSelected: 'nhsuk-tabs__list-item--selected',
  tab: 'nhsuk-tabs__tab',
  panel: 'nhsuk-tabs__panel',
  panelHidden: 'nhsuk-tabs__panel--hidden',
  frontendSupported: 'nhsuk-frontend-supported'
};

/**
 * ARIA attributes and roles
 */
export const ariaConfig = {
  roles: {
    tablist: 'tablist',
    tab: 'tab',
    tabpanel: 'tabpanel',
    presentation: 'presentation'
  },
  attributes: {
    selected: 'aria-selected',
    controls: 'aria-controls',
    labelledby: 'aria-labelledby'
  }
};

/**
 * Breakpoint for responsive behavior (matches NHS UK design system)
 */
export const breakpoints = {
  tablet: 641 // Minimum width for tablet view
};
