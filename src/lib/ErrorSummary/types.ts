import type { HTMLAttributes, Snippet } from 'svelte';

/**
 * Individual error item in the error list
 */
export interface ErrorListItem {
  /** Href attribute for the error link item. If provided item will be an anchor. */
  href?: string;

  /** Text for the error link item. If `html` is provided, the `text` argument will be ignored. */
  text?: string;

  /** HTML for the error link item. If `html` is provided, the `text` argument will be ignored. */
  html?: string;

  /** HTML attributes (for example data attributes) to add to the error link anchor. */
  attributes?: Record<string, string | number | boolean>;
}

/**
 * Props for the ErrorSummary component
 */
export interface ErrorSummaryProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  /**
   * Text to use for the heading of the error summary block.
   * If `titleHtml` is provided, `titleText` will be ignored.
   */
  titleText?: string;

  /**
   * HTML to use for the heading of the error summary block.
   * If `titleHtml` is provided, `titleText` will be ignored.
   */
  titleHtml?: string;

  /**
   * Text to use for the description of the errors.
   * If `descriptionHtml` is provided, `descriptionText` will be ignored.
   */
  descriptionText?: string;

  /**
   * HTML to use for the description of the errors.
   * If `descriptionHtml` is provided, `descriptionText` will be ignored.
   */
  descriptionHtml?: string;

  /** Contains an array of error link items and all their available arguments. */
  errorList: ErrorListItem[];

  /** Classes to add to the error-summary container. */
  class?: string;

  /** If set to false, the error summary will not be focused when the page loads. Defaults to true. */
  focusOnPageLoad?: boolean;

  /** Slot content that renders inside the description area */
  children?: Snippet;
}

/**
 * Configuration for ErrorSummary component examples
 */
export interface ErrorSummaryExample {
  name: string;
  description?: string;
  props: ErrorSummaryProps;
  slotContent?: string;
}

/**
 * Configuration for parameter documentation
 */
export interface ErrorSummaryParamConfig {
  type: string;
  required: boolean;
  description: string;
  default?: any;
  params?: Record<string, ErrorSummaryParamConfig>;
}
