import type { ErrorMessageExample, ErrorMessageParamConfig } from './types';

/**
 * Component metadata
 */
export const componentInfo = {
  name: 'Error message',
  description: 'Use an error message when there is a validation error. Explain what went wrong and how to fix it.',
  category: 'components',
  nhsukVersion: 'latest'
};

/**
 * Component parameter definitions for documentation
 */
export const parameterDefinitions: Record<string, ErrorMessageParamConfig> = {
  text: {
    type: 'string',
    required: false,
    description: 'If `html` is set, this is not required. Text to use within the error message. If `html` is provided, the `text` argument will be ignored.'
  },
  html: {
    type: 'string',
    required: false,
    description: 'If `text` is set, this is not required. HTML to use within the error message. If `html` is provided, the `text` argument will be ignored.'
  },
  id: {
    type: 'string',
    required: false,
    description: 'Id attribute to add to the error message span tag.'
  },
  class: {
    type: 'string',
    required: false,
    description: 'Classes to add to the error message span tag.'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the error message span tag.'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    default: 'Error',
    description: 'A visually hidden prefix used before the error message. Defaults to "Error".'
  }
};

/**
 * Predefined examples for the component
 */
export const examples: Record<string, ErrorMessageExample> = {
  default: {
    name: 'Default Error Message',
    description: 'Standard error message with default settings',
    props: {
      text: 'Error message about full name goes here'
    }
  },
  withHtml: {
    name: 'With HTML Content',
    description: 'Error message containing HTML formatting',
    props: {
      html: 'Enter an email address in the correct format, like <strong>name@example.com</strong>'
    }
  },
  withId: {
    name: 'With Custom ID',
    description: 'Error message with a specific ID for ARIA associations',
    props: {
      text: 'Date of birth must be in the past',
      id: 'dob-error'
    }
  },
  customVisuallyHiddenText: {
    name: 'Custom Visually Hidden Text',
    description: 'Error message with custom screen reader prefix',
    props: {
      text: 'Please select at least one option',
      visuallyHiddenText: 'Validation error'
    }
  },
  noVisuallyHiddenText: {
    name: 'Without Visually Hidden Text',
    description: 'Error message without screen reader prefix',
    props: {
      text: 'This field is required',
      visuallyHiddenText: ''
    }
  },
  withCustomClass: {
    name: 'With Custom Class',
    description: 'Error message with additional CSS class',
    props: {
      text: 'Invalid format',
      class: 'js-error-message'
    }
  },
  withDataAttributes: {
    name: 'With Data Attributes',
    description: 'Error message with custom data attributes for testing',
    props: {
      text: 'Please enter a valid NHS number',
      'data-testid': 'nhs-number-error',
      'data-field': 'nhs-number'
    }
  },
  complexHtml: {
    name: 'Complex HTML Error',
    description: 'Error message with complex HTML structure',
    props: {
      html: '<span>Your password must:</span><ul><li>Be at least 8 characters long</li><li>Contain at least one number</li><li>Contain at least one special character</li></ul>'
    }
  }
};

/**
 * CSS color variables used by the component
 */
export const nhsColors = {
  errorColor: '#d5281b',
  textColor: '#212b32',
  white: '#ffffff'
};

/**
 * Usage guidelines for the component
 */
export const usageGuidelines = {
  when: [
    'A form field has failed validation',
    'User input is in an incorrect format',
    'A required field has been left empty',
    'Data conflicts with system requirements'
  ],
  howTo: [
    'Place error messages directly after the label and before the input',
    'Use clear, concise language that helps users fix the error',
    'Be specific about what went wrong and how to fix it',
    'Associate error messages with form fields using aria-describedby'
  ],
  accessibility: [
    'Error messages include visually hidden "Error:" prefix for screen readers by default',
    'Ensure error messages are programmatically associated with their form fields',
    'Error messages should be announced by screen readers when they appear',
    'Use appropriate ARIA attributes on the related form fields'
  ]
};
