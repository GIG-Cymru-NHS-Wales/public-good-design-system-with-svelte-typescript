export interface LabelOptions {
  /**
   * Text to use within the label. If `html` is provided, the `text` argument will be ignored.
   */
  text?: string;
  
  /**
   * HTML to use within the label. If `html` is provided, the `text` argument will be ignored.
   */
  html?: string;
  
  /**
   * Classes to add to the label.
   */
  classes?: string;
  
  /**
   * Whether the label also acts as the heading for the page.
   */
  isPageHeading?: boolean;
  
  /**
   * HTML attributes (for example data attributes) to add to the label.
   */
  attributes?: Record<string, string | number | boolean>;
}

export interface HintOptions {
  /**
   * Text to use within the hint. If `html` is provided, the `text` argument will be ignored.
   */
  text?: string;
  
  /**
   * HTML to use within the hint. If `html` is provided, the `text` argument will be ignored.
   */
  html?: string;
  
  /**
   * Classes to add to the hint.
   */
  classes?: string;
  
  /**
   * HTML attributes (for example data attributes) to add to the hint.
   */
  attributes?: Record<string, string | number | boolean>;
}

export interface ErrorMessageOptions {
  /**
   * Text to use within the error message. If `html` is provided, the `text` argument will be ignored.
   */
  text?: string;
  
  /**
   * HTML to use within the error message. If `html` is provided, the `text` argument will be ignored.
   */
  html?: string;
  
  /**
   * Classes to add to the error message.
   */
  classes?: string;
}

export interface FormGroupOptions {
  /**
   * Classes to add to the form group (for example to show error state for the whole group).
   */
  classes?: string;
}

export interface InputProps {
  /**
   * The ID of the input. Defaults to the value of `name`.
   */
  id?: string;
  
  /**
   * The name of the input, which is submitted with the form data.
   */
  name: string;
  
  /**
   * Type of input control to render.
   * @default 'text'
   */
  type?: string;
  
  /**
   * Optional value for inputmode.
   */
  inputmode?: string;
  
  /**
   * Optional initial value of the input.
   */
  value?: string;
  
  /**
   * One or more element IDs to add to the `aria-describedby` attribute, 
   * used to provide additional descriptive information for screenreader users.
   */
  describedBy?: string;
  
  /**
   * Options for the label component.
   */
  label: LabelOptions;
  
  /**
   * Options for the hint component.
   */
  hint?: HintOptions;
  
  /**
   * Options for the error message component. The error message component will not display 
   * if you use a falsy value for `errorMessage`, for example `false` or `null`.
   */
  errorMessage?: ErrorMessageOptions;
  
  /**
   * Optional prefix text to be displayed before the input.
   */
  prefix?: string;
  
  /**
   * Optional suffix text to be displayed after the input.
   */
  suffix?: string;
  
  /**
   * Additional options for the form group containing the input component.
   */
  formGroup?: FormGroupOptions;
  
  /**
   * Classes to add to the input.
   */
  classes?: string;
  
  /**
   * autocomplete attribute to identify input purpose, for instance `"postal-code"` or `"username"`.
   */
  autocomplete?: string;
  
  /**
   * pattern attribute to provide a regular expression pattern, 
   * used to match allowed character combinations for the input value.
   */
  pattern?: string;
  
  /**
   * Optional field to enable or disable the spellcheck attribute on the input.
   */
  spellcheck?: boolean;
  
  /**
   * HTML attributes (for example data attributes) to add to the input.
   */
  attributes?: Record<string, string | number | boolean>;
}
