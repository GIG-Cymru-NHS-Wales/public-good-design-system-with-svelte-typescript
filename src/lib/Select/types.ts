export interface SelectItem {
  /**
   * Value for the option item. Defaults to an empty string.
   */
  value?: string;

  /**
   * Text for the option item.
   */
  text: string;

  /**
   * Sets the option as the selected.
   */
  selected?: boolean;

  /**
   * Sets the option item as disabled.
   */
  disabled?: boolean;

  /**
   * HTML attributes (for example data attributes) to add to the option.
   */
  attributes?: Record<string, string | number | boolean>;
}

export interface LabelOptions {
  /**
   * Text to use within the label.
   */
  text?: string;

  /**
   * HTML to use within the label.
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
   * HTML attributes to add to the label.
   */
  attributes?: Record<string, string | number | boolean>;
}

export interface HintOptions {
  /**
   * Text to use within the hint.
   */
  text?: string;

  /**
   * HTML to use within the hint.
   */
  html?: string;

  /**
   * Classes to add to the hint.
   */
  classes?: string;

  /**
   * HTML attributes to add to the hint.
   */
  attributes?: Record<string, string | number | boolean>;
}

export interface ErrorMessageOptions {
  /**
   * Text to use within the error message.
   */
  text?: string;

  /**
   * HTML to use within the error message.
   */
  html?: string;

  /**
   * Classes to add to the error message.
   */
  classes?: string;
}

export interface FormGroupOptions {
  /**
   * Classes to add to the form group.
   */
  classes?: string;

  /**
   * HTML attributes to add to the form group.
   */
  attributes?: Record<string, string | number | boolean>;
}

export interface SelectProps {
  /**
   * The ID of the select. Defaults to the value of `name`.
   */
  id?: string;

  /**
   * Name property for the select.
   */
  name: string;

  /**
   * Array of option items for the select.
   */
  items: SelectItem[];

  /**
   * Value for the option which should be selected.
   * Use this as an alternative to setting the `selected` option on each individual item.
   */
  value?: string;

  /**
   * If `true`, select box will be disabled.
   * Use the `disabled` option on each individual item to only disable certain options.
   */
  disabled?: boolean;

  /**
   * One or more element IDs to add to the `aria-describedby` attribute,
   * used to provide additional descriptive information for screenreader users.
   */
  describedBy?: string;

  /**
   * Options for the label component.
   */
  label?: LabelOptions;

  /**
   * Options for the hint component.
   */
  hint?: HintOptions;

  /**
   * Options for the error message component.
   * The error message component will not display if you use a falsy value for `errorMessage`.
   */
  errorMessage?: ErrorMessageOptions;

  /**
   * Additional options for the form group containing the select component.
   */
  formGroup?: FormGroupOptions;

  /**
   * Classes to add to the select.
   */
  classes?: string;

  /**
   * HTML attributes (for example data attributes) to add to the select.
   */
  attributes?: Record<string, string | number | boolean>;
}
