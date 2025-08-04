import type { Snippet } from 'svelte';

export interface InsetTextProps {
  /**
   * Text content to be used within the inset text component. 
   * If `html` is provided, the `text` argument will be ignored.
   */
  text?: string;
  
  /**
   * HTML content to be used within the inset text component. 
   * If `html` is provided, the `text` argument will be ignored.
   */
  html?: string;
  
  /**
   * Classes to add to the inset text.
   */
  classes?: string;
  
  /**
   * HTML attributes (for example data attributes) to add to the inset text.
   */
  attributes?: Record<string, string | number | boolean>;
  
  /**
   * Content to render inside the inset text (replaces the caller block from Nunjucks)
   */
  children?: Snippet;
}
