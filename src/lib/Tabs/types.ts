/**
 * Tab panel configuration
 */
export interface TabPanel {
  /** Text content for the panel */
  text?: string;
  /** HTML content for the panel */
  html?: string;
  /** HTML attributes for the panel */
  attributes?: Record<string, string>;
}

/**
 * Individual tab item configuration
 */
export interface TabItem {
  /** Specific id attribute for the tab item */
  id?: string;
  /** The text label of a tab item */
  label: string;
  /** HTML attributes to add to the tab */
  attributes?: Record<string, string>;
  /** Content for the panel */
  panel: TabPanel;
}

/**
 * Tabs component props
 */
export interface TabsProps {
  /** Main component id and to compose id attribute for each item */
  id?: string;
  /** String to prefix id for each tab item if no id is specified on each item */
  idPrefix?: string;
  /** Title for the tabs table of contents */
  title?: string;
  /** Array of tab items */
  items: TabItem[];
  /** Additional CSS classes */
  classes?: string;
  /** HTML attributes to add to the component */
  attributes?: Record<string, string>;
}

/**
 * Tab state for managing active tab
 */
export interface TabState {
  /** Currently active tab index */
  activeIndex: number;
  /** Whether tabs are in mobile view */
  isMobile: boolean;
}
