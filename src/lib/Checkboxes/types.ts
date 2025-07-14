export interface FieldsetLegend {
  text?: string;
  html?: string;
  classes?: string;
  isPageHeading?: boolean;
  attributes?: Record<string, string>;
}

export interface FieldsetOptions {
  describedBy?: string;
  classes?: string;
  attributes?: Record<string, string>;
  legend?: FieldsetLegend;
}

export interface HintOptions {
  text?: string;
  html?: string;
  classes?: string;
  attributes?: Record<string, string>;
}

export interface ErrorMessageOptions {
  text?: string;
  html?: string;
  classes?: string;
  attributes?: Record<string, string>;
}

export interface FormGroupOptions {
  classes?: string;
}

export interface LabelOptions {
  classes?: string;
  attributes?: Record<string, string>;
}

export interface ConditionalOptions {
  html: string;
}

export interface CheckboxItem {
  text?: string;
  html?: string;
  id?: string;
  name?: string;
  label?: LabelOptions;
  value: string;
  divider?: string;
  hint?: HintOptions;
  checked?: boolean;
  conditional?: ConditionalOptions;
  disabled?: boolean;
  attributes?: Record<string, string>;
  exclusive?: boolean;
  exclusiveGroup?: string;
}

export interface CheckboxesProps {
  /** One or more element IDs to add to the input aria-describedby attribute without a fieldset */
  describedBy?: string;
  /** Options for the fieldset component */
  fieldset?: FieldsetOptions;
  /** Options for the hint component */
  hint?: HintOptions;
  /** Options for the error message component */
  errorMessage?: ErrorMessageOptions;
  /** Additional options for the form group */
  formGroup?: FormGroupOptions;
  /** String to prefix id for each checkbox item */
  idPrefix?: string;
  /** Name attribute for all checkbox items */
  name: string;
  /** Array of checkbox items objects */
  items: CheckboxItem[];
  /** Array of values for checkboxes which should be checked when the page loads */
  values?: string[];
  /** Classes to add to the checkboxes container */
  classes?: string;
  /** HTML attributes to add to the container */
  attributes?: Record<string, string>;
}
