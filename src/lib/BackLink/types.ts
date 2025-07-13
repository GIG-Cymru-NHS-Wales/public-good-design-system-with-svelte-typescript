export interface BackLinkProps {
  /** Text to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to "Back". */
  text?: string;
  /** HTML to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to "Back". */
  html?: string;
  /** The value of the link href attribute. */
  href?: string;
  /** Classes to add to the container. */
  classes?: string;
  /** HTML attributes (for example data attributes) to add to the tag. */
  attributes?: Record<string, string>;
  /** HTML element for the back link component – "button" or "a". If not provided, defaults to "a". */
  element?: 'button' | 'a';
}
