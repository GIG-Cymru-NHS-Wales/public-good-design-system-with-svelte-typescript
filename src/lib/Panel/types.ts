import type { Snippet } from 'svelte';

export interface PanelProps {
  /**
   * Text to use within the panel title. If `titleHtml` is provided, the `titleText` option will be ignored.
   */
  titleText?: string;
  
  /**
   * HTML to use within the panel title. If `titleHtml` is provided, the `titleText` option will be ignored.
   */
  titleHtml?: string;
  
  /**
   * Heading level, from 1 to 6.
   * @default 1
   */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /**
   * Text to use within the panel content. If `html` is provided, the `text` option will be ignored.
   */
  text?: string;
  
  /**
   * HTML to use within the panel content. If `html` is provided, the `text` option will be ignored.
   */
  html?: string;
  
  /**
   * Optional additional classes to add to the panel `div` tag. Separate each class with a space.
   */
  classes?: string;
  
  /**
   * Any extra HTML attributes (for example data attributes) to add to the panel component.
   */
  attributes?: Record<string, string | number | boolean>;
  
  /**
   * Content to render inside the panel body (replaces the caller block from Nunjucks)
   */
  children?: Snippet;
}
