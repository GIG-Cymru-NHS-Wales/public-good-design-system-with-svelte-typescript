export interface HintProps {
  /**
   * Text to use within the hint. If `html` is provided, the `text` argument will be ignored.
   */
  text?: string;

  /**
   * HTML to use within the hint. If `html` is provided, the `text` argument will be ignored.
   */
  html?: string;

  /**
   * Id attribute to add to the hint.
   */
  id?: string;

  /**
   * Classes to add to the hint.
   */
  classes?: string;

  /**
   * HTML attributes (for example data attributes) to add to the hint.
   */
  attributes?: Record<string, string | number | boolean>;
}
