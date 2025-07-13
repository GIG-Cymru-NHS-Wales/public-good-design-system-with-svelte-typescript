export type ButtonElement = 'input' | 'button' | 'a';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  /** HTML element for the button component – "input", "button" or "a". In most cases you will not need to set this as it will be configured automatically if href is provided. */
  element?: ButtonElement;
  /** Text for the button or link. If html is provided, the text argument will be ignored. This argument has no effect if element is set to "input". */
  text?: string;
  /** HTML for the button or link. If html is provided, the text argument will be ignored. This argument has no effect if element is set to "input". */
  html?: string;
  /** Name for the input or button. This has no effect on a elements. */
  name?: string;
  /** Type of input or button – "button", "submit" or "reset". Defaults to "submit". This has no effect on a elements. */
  type?: ButtonType;
  /** Value for the button tag. This has no effect on a or input elements. */
  value?: string;
  /** Whether the button should be disabled. For button and input elements, disabled and aria-disabled attributes will be set automatically. */
  disabled?: boolean;
  /** The URL that the button should link to. If this is set, element will be automatically set to "a" if it has not already been defined. */
  href?: string;
  /** Classes to add to the button component. */
  classes?: string;
  /** HTML attributes (for example data attributes) to add to the button component. */
  attributes?: Record<string, string>;
  /** Prevent accidental double clicks on submit buttons from submitting forms multiple times. */
  preventDoubleClick?: boolean;
}
