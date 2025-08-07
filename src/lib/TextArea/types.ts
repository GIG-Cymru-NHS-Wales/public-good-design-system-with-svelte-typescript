/**
 * Label configuration for the textarea
 */
export interface TextareaLabel {
  /** Text content for the label */
  text?: string;
  /** HTML content for the label */
  html?: string;
  /** Additional CSS classes for the label */
  classes?: string;
  /** Whether the label is also a page heading */
  isPageHeading?: boolean;
  /** HTML attributes for the label */
  attributes?: Record<string, string | number | boolean>;
}

/**
 * Hint configuration for the textarea
 */
export interface TextareaHint {
  /** Text content for the hint */
  text?: string;
  /** HTML content for the hint */
  html?: string;
  /** Additional CSS classes for the hint */
  classes?: string;
  /** HTML attributes for the hint */
  attributes?: Record<string, string | number | boolean>;
}

/**
 * Error message configuration for the textarea
 */
export interface TextareaErrorMessage {
  /** Text content for the error message */
  text?: string;
  /** HTML content for the error message */
  html?: string;
  /** Additional CSS classes for the error message */
  classes?: string;
}

/**
 * Form group configuration
 */
export interface TextareaFormGroup {
  /** Classes to add to the form group */
  classes?: string;
}

/**
 * Textarea component props
 */
export interface TextareaProps {
  /** The ID of the textarea. Defaults to the value of `name` */
  id?: string;
  /** The name of the textarea, which is submitted with the form data */
  name: string;
  /** Optional number of textarea rows (default is 5 rows) */
  rows?: number | string;
  /** Optional initial value of the textarea */
  value?: string;
  /** One or more element IDs to add to the `aria-describedby` attribute */
  describedBy?: string;
  /** Options for the label component */
  label: TextareaLabel;
  /** Options for the hint component */
  hint?: TextareaHint;
  /** Options for the error message component */
  errorMessage?: TextareaErrorMessage | false | null;
  /** Additional options for the form group containing the textarea */
  formGroup?: TextareaFormGroup;
  /** Autocomplete attribute to identify input purpose */
  autocomplete?: string;
  /** Classes to add to the textarea */
  classes?: string;
  /** HTML attributes to add to the textarea */
  attributes?: Record<string, string | number | boolean>;
  /** Placeholder text for the textarea */
  placeholder?: string;
  /** Whether the textarea is disabled */
  disabled?: boolean;
  /** Whether the textarea is readonly */
  readonly?: boolean;
  /** Whether the textarea is required */
  required?: boolean;
  /** Maximum length of text allowed */
  maxlength?: number;
  /** Minimum length of text required */
  minlength?: number;
  /** Whether spellcheck is enabled */
  spellcheck?: boolean;
}

/**
 * Common autocomplete values for textareas
 */
export type AutocompleteValue =
  | 'on'
  | 'off'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'organization'
  | 'organization-title'
  | 'name'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'email'
  | 'username'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'url'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year';
