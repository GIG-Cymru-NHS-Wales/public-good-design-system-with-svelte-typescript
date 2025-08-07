import type { HTMLAttributes } from 'svelte/elements';

/**
 * Props for the ErrorMessage component
 */
export interface ErrorMessageProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'class'> {
  /**
   * Text to use within the error message.
   * If `html` is provided, the `text` argument will be ignored.
   */
  text?: string;

  /**
   * HTML to use within the error message.
   * If `html` is provided, the `text` argument will be ignored.
   */
  html?: string;

  /** Id attribute to add to the error message span tag */
  id?: string;

  /** Classes to add to the error message span tag */
  class?: string;

  /**
   * A visually hidden prefix used before the error message.
   * Defaults to "Error".
   */
  visuallyHiddenText?: string;
}

/**
 * Configuration for ErrorMessage component examples
 */
export interface ErrorMessageExample {
  name: string;
  description?: string;
  props: ErrorMessageProps;
}

/**
 * Configuration for parameter documentation
 */
export interface ErrorMessageParamConfig {
  type: string;
  required: boolean;
  description: string;
  default?: any;
}
