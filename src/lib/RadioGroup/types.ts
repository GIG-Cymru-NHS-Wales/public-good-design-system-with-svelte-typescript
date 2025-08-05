export interface FieldsetOptions {
  /**
   * Options for the fieldset legend
   */
  legend?: {
    text?: string;
    html?: string;
    classes?: string;
    isPageHeading?: boolean;
  };
  
  /**
   * One or more element IDs to add to the aria-describedby attribute
   */
  describedBy?: string;
  
  /**
   * Classes to add to the fieldset
   */
  classes?: string;
  
  /**
   * HTML attributes to add to the fieldset
   */
  attributes?: Record<string, string | number | boolean>;
}

export interface HintOptions {
  /**
   * Text content for the hint
   */
  text?: string;
  
  /**
   * HTML content for the hint
   */
  html?: string;
  
  /**
   * Classes to add to the hint
   */
  classes?: string;
  
  /**
   * HTML attributes to add to the hint
   */
  attributes?: Record<string, string | number | boolean>;
}

export interface ErrorMessageOptions {
  /**
   * Text content for the error message
   */
  text?: string;
  
  /**
   * HTML content for the error message
   */
  html?: string;
  
  /**
   * Classes to add to the error message
   */
  classes?: string;
}

export interface FormGroupOptions {
  /**
   * Classes to add to the form group
   */
  classes?: string;
}

export interface LabelOptions {
  /**
   * Classes to add to the label
   */
  classes?: string;
  
  /**
   * HTML attributes to add to the label
   */
  attributes?: Record<string, string | number | boolean>;
}

export interface ConditionalOptions {
  /**
   * HTML content to reveal when the radio is checked
   */
  html: string;
}

export interface RadioItem {
  /**
   * Text to use within each radio item label
   */
  text?: string;
  
  /**
   * HTML to use within each radio item label
   */
  html?: string;
  
  /**
   * Specific id attribute for the radio item
   */
  id?: string;
  
  /**
   * Options for the label component
   */
  label?: LabelOptions;
  
  /**
   * Value for the radio input
   */
  value?: string;
  
  /**
   * Provide hint to each radio item
   */
  hint?: HintOptions;
  
  /**
   * Divider text to separate radio items
   */
  divider?: string;
  
  /**
   * If true, radio will be checked
   */
  checked?: boolean;
  
  /**
   * If true, radio will be disabled
   */
  disabled?: boolean;
  
  /**
   * Provide additional content to reveal when the radio is checked
   */
  conditional?: ConditionalOptions;
  
  /**
   * HTML attributes to add to the radio input
   */
  attributes?: Record<string, string | number | boolean>;
}

export interface RadiosProps {
  /**
   * Options for the fieldset component
   */
  fieldset?: FieldsetOptions;
  
  /**
   * Options for the hint component
   */
  hint?: HintOptions;
  
  /**
   * Options for the error message component
   */
  errorMessage?: ErrorMessageOptions;
  
  /**
   * Additional options for the form group containing the radios component
   */
  formGroup?: FormGroupOptions;
  
  /**
   * String to prefix id for each radio item if no id is specified on each item
   */
  idPrefix?: string;
  
  /**
   * Name attribute for each radio item
   */
  name: string;
  
  /**
   * The value for the radio which should be checked when the page loads
   */
  value?: string;
  
  /**
   * Array of radio items objects
   */
  items: RadioItem[];
  
  /**
   * Classes to add to the radio container
   */
  classes?: string;
  
  /**
   * HTML attributes to add to the radio container
   */
  attributes?: Record<string, string | number | boolean>;
}
