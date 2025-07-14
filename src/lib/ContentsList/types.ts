export interface ContentsItem {
  /** href value to use within each content list item label */
  href: string;
  /** Text to use within each content list item label */
  text: string;
  /** Set this item as the current active page */
  current?: boolean;
}

export interface ContentsListProps {
  /** Array of content list items objects */
  items: ContentsItem[];
  /** Classes to add to the content list container */
  classes?: string;
  /** HTML attributes (for example data attributes) to add to the container */
  attributes?: Record<string, string>;
  /** Optional aria-label for the navigation */
  ariaLabel?: string;
}
