import type { HTMLAttributes } from 'svelte/elements';

/**
 * Individual item in the do and don't list
 */
export interface DoAndDontItem {
  /** Text to use within each do and don't item label. HTML is supported. */
  item: string;
}

/**
 * Props for the DoAndDontList component
 */
export interface DoAndDontListProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  /** Title to be displayed on the do and don't list component */
  title: string;
  
  /** Type of do and don't list component – 'cross' or 'tick' */
  type: 'cross' | 'tick';
  
  /** Array of do and don't items objects */
  items: DoAndDontItem[];
  
  /** If set to true when type is 'cross', then removes the default 'do not' text prefix to each item */
  hidePrefix?: boolean;
  
  /** Optional heading level for the title heading. Defaults to 3 */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /** Classes to add to the do and don't list container */
  class?: string;
}

/**
 * Example configuration for demonstrating the component
 */
export interface DoAndDontListExample {
  name: string;
  description?: string;
  props: DoAndDontListProps;
}
