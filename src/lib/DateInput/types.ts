
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

export interface DateInputItem {
  /** Item-specific id. If provided, it will be used instead of the generated id. */
  id?: string;
  /** Item-specific name attribute. */
  name: string;
  /** Item-specific label text. If provided, this will be used instead of name for item label text. */
  label?: string;
  /** Optional value for the inputmode attribute. Defaults to 'numeric'. */
  inputmode?: string;
  /** Optional initial value of the input. */
  value?: string;
  /** Attribute to identify input purpose, for instance 'postal-code' or 'username'. */
  autocomplete?: string;
  /** Attribute to provide a regular expression pattern. */
  pattern?: string;
  /** Classes to add to the date input item. */
  classes?: string;
  /** HTML attributes to add to the date input item. */
  attributes?: Record<string, string>;
}

export interface DateValues {
  day?: string;
  month?: string;
  year?: string;
}

export interface DateInputProps {
  /** This is used for the main component and to compose id attribute for each item. */
  id?: string;
  /** Optional prefix. This is used to prefix each item.name using '-'. */
  namePrefix?: string;
  /** An array of input objects with name, value and classes. */
  items?: DateInputItem[];
  /** Options for the fieldset component. */
  fieldset?: FieldsetOptions;
  /** Options for the hint component. */
  hint?: HintOptions;
  /** Options for the error message component. */
  errorMessage?: ErrorMessageOptions;
  /** Additional options for the form group. */
  formGroup?: FormGroupOptions;
  /** Classes to add to the date-input container. */
  classes?: string;
  /** HTML attributes to add to the date-input container. */
  attributes?: Record<string, string>;
  /** An optional object to specify value attributes for the date parts. */
  values?: DateValues;
}
