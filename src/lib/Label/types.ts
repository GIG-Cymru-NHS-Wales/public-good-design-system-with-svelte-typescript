export interface LabelProps {
  /**
   * Text to use within the label. If `html` is provided, the `text` argument will be ignored.
   */
  text?: string;
  
  /**
   * HTML to use within the label. If `html` is provided, the `text` argument will be ignored.
   */
  html?: string;
  
  /**
   * The value of the for attribute, the id of the input the label is associated with.
   */
  for?: string;
  
  /**
   * Whether the label also acts as the heading for the page.
   * @default false
   */
  isPageHeading?: boolean;
  
  /**
   * Classes to add to the label tag. Separate each class with a space.
   */
  classes?: string;
  
  /**
   * HTML attributes (for example data attributes) to add to the label tag.
   */
  attributes?: Record<string, string | number | boolean>;
}
