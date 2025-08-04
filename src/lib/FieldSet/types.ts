import type { Snippet } from 'svelte';

export interface LegendOptions {
  /**
   * Text to use within the legend. If `html` is provided, the `text` argument will be ignored.
   */
  text?: string;
  
  /**
   * HTML to use within the legend. If `html` is provided, the `text` argument will be ignored.
   */
  html?: string;
  
  /**
   * Classes to add to the legend.
   */
  classes?: string;
  
  /**
   * Whether the legend also acts as the heading for the page.
   */
  isPageHeading?: boolean;
}

export interface FieldsetProps {
  /**
   * One or more element IDs to add to the `aria-describedby` attribute, 
   * used to provide additional descriptive information for screenreader users.
   */
  describedBy?: string;
  
  /**
   * Options for the legend
   */
  legend?: LegendOptions;
  
  /**
   * Classes to add to the fieldset container.
   */
  classes?: string;
  
  /**
   * HTML attributes (for example data attributes) to add to the fieldset container.
   */
  attributes?: Record<string, string | number | boolean>;
  
  /**
   * Content to render inside the fieldset
   */
  children?: Snippet;
}
