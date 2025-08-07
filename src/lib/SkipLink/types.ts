import type { HTMLAttributes } from 'svelte/elements';

/**
 * Props for the SkipLink component
 */
export interface SkipLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'href'> {
  /**
   * Text to use within the skip link component.
   * @default "Skip to main content"
   */
  text?: string;

  /**
   * The value of the skip link's href attribute.
   * @default "#maincontent"
   */
  href?: string;

  /**
   * Additional CSS classes to add to the skip link.
   */
  class?: string;

  /**
   * Additional HTML attributes (for example data attributes) to add to the skip link.
   */
  [key: string]: any;
}

/**
 * Skip link configuration options
 */
export interface SkipLinkConfig {
  /**
   * Default text for the skip link
   */
  defaultText: string;

  /**
   * Default href for the skip link
   */
  defaultHref: string;

  /**
   * CSS class name for the skip link
   */
  className: string;

  /**
   * CSS class name for focused elements
   */
  focusedElementClassName: string;
}

/**
 * Options for initializing skip links
 */
export interface InitSkipLinksOptions {
  /**
   * Scope of the document to search within
   */
  scope?: Element | Document | null;
}

/**
 * Options for setting focus on an element
 */
export interface SetFocusOptions {
  /**
   * Callback to run before focusing the element
   */
  onBeforeFocus?: () => void;

  /**
   * Callback to run when the element loses focus
   */
  onBlur?: () => void;
}

/**
 * Example configuration for the skip link component
 */
export interface SkipLinkExample {
  /**
   * Name of the example
   */
  name: string;

  /**
   * Description of the example
   */
  description?: string;

  /**
   * Props to pass to the component
   */
  props: SkipLinkProps;
}

/**
 * Component metadata
 */
export interface SkipLinkMetadata {
  /**
   * Component name
   */
  name: string;

  /**
   * Component description
   */
  description: string;

  /**
   * Component version
   */
  version?: string;

  /**
   * Component parameters/props documentation
   */
  params: {
    [key: string]: {
      type: string;
      required: boolean;
      description: string;
      default?: any;
    };
  };
}
