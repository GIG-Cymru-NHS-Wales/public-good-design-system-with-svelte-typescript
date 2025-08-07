import type { TextareaProps, AutocompleteValue } from './types';

/**
 * CSS class names used by the component
 */
export const classNames = {
  formGroup: 'nhsuk-form-group',
  formGroupError: 'nhsuk-form-group--error',
  textarea: 'nhsuk-textarea',
  textareaError: 'nhsuk-textarea--error',
  label: 'nhsuk-label',
  labelWrapper: 'nhsuk-label-wrapper',
  hint: 'nhsuk-hint',
  errorMessage: 'nhsuk-error-message',
  errorMessageVisuallyHidden: 'nhsuk-u-visually-hidden'
} as const;

/**
 * Default configuration for the textarea
 */
export const defaultConfig: Partial<TextareaProps> = {
  rows: 5,
  spellcheck: true
};

/**
 * Common autocomplete values with descriptions
 */
export const autocompleteOptions: Record<string, { value: AutocompleteValue; description: string }> = {
  streetAddress: {
    value: 'street-address',
    description: 'Full street address (multiple lines)'
  },
  postalCode: {
    value: 'postal-code',
    description: 'Postal or ZIP code'
  },
  organization: {
    value: 'organization',
    description: 'Company or organization name'
  },
  username: {
    value: 'username',
    description: 'Username or account name'
  },
  email: {
    value: 'email',
    description: 'Email address'
  },
  tel: {
    value: 'tel',
    description: 'Telephone number'
  },
  url: {
    value: 'url',
    description: 'Web address'
  },
  on: {
    value: 'on',
    description: 'Enable autocomplete'
  },
  off: {
    value: 'off',
    description: 'Disable autocomplete'
  }
};

/**
 * Common textarea configurations
 */
export const commonConfigs = {
  /** Address textarea configuration */
  address: {
    name: 'address',
    label: { text: 'Full address' },
    autocomplete: 'street-address' as AutocompleteValue,
    rows: 5
  },

  /** Comments textarea configuration */
  comments: {
    name: 'comments',
    label: { text: 'Comments' },
    hint: { text: 'Please provide any additional information' },
    rows: 4
  },

  /** Feedback textarea configuration */
  feedback: {
    name: 'feedback',
    label: { text: 'Your feedback' },
    hint: { text: 'Tell us what you think about our service' },
    rows: 6
  },

  /** Medical history textarea configuration */
  medicalHistory: {
    name: 'medical-history',
    label: { text: 'Medical history' },
    hint: { text: 'Include any relevant medical conditions, medications, or allergies' },
    rows: 8
  },

  /** Reason/explanation textarea configuration */
  reason: {
    name: 'reason',
    label: { text: 'Please explain' },
    hint: { text: 'Provide as much detail as possible' },
    rows: 5
  }
} as const;

/**
 * Helper function to create a textarea configuration
 */
export function createTextareaConfig(
  name: string,
  labelText: string,
  options: Partial<TextareaProps> = {}
): TextareaProps {
  return {
    name,
    label: { text: labelText },
    ...defaultConfig,
    ...options
  };
}

/**
 * Validation patterns for common textarea content
 */
export const validationPatterns = {
  /** No special characters */
  alphanumericOnly: /^[a-zA-Z0-9\s.,!?-]*$/,

  /** No HTML tags */
  noHtml: /^[^<>]*$/,

  /** UK postcode format */
  ukPostcode: /^[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s?[0-9][A-Z]{2}$/i,

  /** Email format */
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  /** URL format */
  url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
};

/**
 * Character count configuration
 */
export interface CharacterCountConfig {
  max?: number;
  threshold?: number; // Percentage at which to show warning (e.g., 75)
  message?: {
    under?: (remaining: number) => string;
    over?: (over: number) => string;
  };
}

/**
 * Default character count messages
 */
export const defaultCharacterCountMessages = {
  under: (remaining: number) =>
    `You have ${remaining} character${remaining !== 1 ? 's' : ''} remaining`,
  over: (over: number) =>
    `You have ${over} character${over !== 1 ? 's' : ''} too many`
};
