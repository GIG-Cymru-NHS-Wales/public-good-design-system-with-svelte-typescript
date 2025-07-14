export interface LabelOptions {
  text?: string;
  html?: string;
  classes?: string;
  isPageHeading?: boolean;
  attributes?: Record<string, string>;
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

export interface CountMessageOptions {
  classes?: string;
}

export interface CharacterCountProps {
  /** The ID of the textarea. Defaults to the value of name. */
  id?: string;
  /** The name of the textarea, which is submitted with the form data. */
  name: string;
  /** Optional number of textarea rows (default is 5 rows). */
  rows?: number;
  /** Optional initial value of the textarea. */
  value?: string;
  /** Options for the label component. */
  label: LabelOptions;
  /** Options for the hint component. */
  hint?: HintOptions;
  /** Options for the error message component. */
  errorMessage?: ErrorMessageOptions;
  /** Additional options for the form group containing the character count component. */
  formGroup?: FormGroupOptions;
  /** Optional additional classes to add to the textarea tag. Separate each class with a space. */
  classes?: string;
  /** The maximum number of characters. If maxwords is provided, the maxlength argument will be ignored. */
  maxlength?: number;
  /** The maximum number of words. If maxwords is provided, the maxlength argument will be ignored. */
  maxwords?: number;
  /** The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default. */
  threshold?: number;
  /** Optional field to enable or disable the spellcheck attribute on the textarea. */
  spellcheck?: boolean;
  /** Any extra HTML attributes (for example data attributes) to add to the textarea tag. */
  attributes?: Record<string, string>;
  /** Additional options for the count message used by the character count component. */
  countMessage?: CountMessageOptions;
}
