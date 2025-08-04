import type { Snippet } from 'svelte';

export interface HeroProps {
  /**
   * Text heading of the hero
   */
  heading?: string;
  
  /**
   * Optional additional classes to add to heading. Separate each class with a space
   */
  headingClasses?: string;
  
  /**
   * Optional heading level for the heading
   * @default 1
   */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /**
   * Text to use within the hero. If `html` is provided, the `text` option will be ignored
   */
  text?: string;
  
  /**
   * HTML to use within the hero. If `text` is provided, the `html` option will be ignored
   */
  html?: string;
  
  /**
   * The URL of the image in the hero
   */
  imageURL?: string;
  
  /**
   * Classes to add to the hero container, useful if you want to make the hero fixed width
   */
  containerClasses?: string;
  
  /**
   * Classes to add to the hero
   */
  classes?: string;
  
  /**
   * HTML attributes (for example data attributes) to add to the hero
   */
  attributes?: Record<string, string | number | boolean>;
  
  /**
   * Content to render inside the hero (replaces the caller block from Nunjucks)
   */
  children?: Snippet;
}
