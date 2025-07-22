import type { ErrorSummaryExample, ErrorSummaryParamConfig } from './types';

/**
 * Component metadata
 */
export const componentInfo = {
  name: 'Error summary',
  description: 'Use this component at the top of a page to summarise any errors a user has made.',
  category: 'components',
  nhsukVersion: 'latest',
  adaptedFrom: 'https://github.com/alphagov/govuk-frontend/blob/v2.13.0/src/components/error-summary/error-summary.js'
};

/**
 * Component parameter definitions for documentation
 */
export const parameterDefinitions: Record<string, ErrorSummaryParamConfig> = {
  titleText: {
    type: 'string',
    required: false,
    description: 'If `titleHtml` is set, this is not required. Text to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored.'
  },
  titleHtml: {
    type: 'string',
    required: false,
    description: 'If `titleText` is set, this is not required. HTML to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored.'
  },
  descriptionText: {
    type: 'string',
    required: false,
    description: 'Text to use for the description of the errors. If you set `descriptionHtml`, the component will ignore `descriptionText`.'
  },
  descriptionHtml: {
    type: 'string',
    required: false,
    description: 'HTML to use for the description of the errors. If you set this option, the component will ignore `descriptionText`.'
  },
  errorList: {
    type: 'array',
    required: true,
    description: 'Contains an array of error link items and all their available arguments.',
    params: {
      href: {
        type: 'string',
        required: false,
        description: 'Href attribute for the error link item. If provided item will be an anchor.'
      },
      text: {
        type: 'string',
        required: false,
        description: 'If `html` is set, this is not required. Text for the error link item. If `html` is provided, the `text` argument will be ignored.'
      },
      html: {
        type: 'string',
        required: false,
        description: 'If `text` is set, this is not required. HTML for the error link item. If `html` is provided, the `text` argument will be ignored.'
      },
      attributes: {
        type: 'object',
        required: false,
        description: 'HTML attributes (for example data attributes) to add to the error link anchor.'
      }
    }
  },
  class: {
    type: 'string',
    required: false,
    description: 'Classes to add to the error-summary container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the error-summary container.'
  },
  focusOnPageLoad: {
    type: 'boolean',
    required: false,
    default: true,
    description: 'If set to false, the error summary will not be focused when the page loads.'
  },
  children: {
    type: 'snippet',
    required: false,
    description: 'Svelte 5 snippet for slot content. This replaces the Nunjucks caller block functionality.'
  }
};

/**
 * Predefined examples for the component
 */
export const examples: Record<string, ErrorSummaryExample> = {
  default: {
    name: 'Default',
    description: 'Basic error summary with a single error',
    props: {
      titleText: 'There is a problem',
      errorList: [
        {
          text: 'Date of birth must be in the past',
          href: '#example-error'
        }
      ]
    }
  },
  withDescription: {
    name: 'With description',
    description: 'Error summary with a description explaining the errors',
    props: {
      titleText: 'There is a problem',
      descriptionText: 'Describe the errors and how to correct them',
      errorList: [
        {
          text: 'Date of birth must be in the past',
          href: '#example-error'
        }
      ]
    }
  },
  multipleErrors: {
    name: 'Multiple errors',
    description: 'Error summary with multiple validation errors',
    props: {
      titleText: 'There are 3 problems with your application',
      errorList: [
        {
          text: 'Enter your full name',
          href: '#fullname'
        },
        {
          text: 'Enter a valid email address',
          href: '#email'
        },
        {
          text: 'Select your date of birth',
          href: '#dob'
        }
      ]
    }
  },
  withHtmlContent: {
    name: 'With HTML content',
    description: 'Error summary using HTML for rich formatting',
    props: {
      titleHtml: 'There are <strong>2 problems</strong> with your submission',
      descriptionHtml: 'Fix the errors below and <a href="#submit">try again</a>',
      errorList: [
        {
          html: 'Enter a valid <abbr title="National Health Service">NHS</abbr> number',
          href: '#nhs-number'
        },
        {
          html: 'Password must be <strong>at least 8 characters</strong>',
          href: '#password'
        }
      ]
    }
  },
  withoutAutoFocus: {
    name: 'Without auto focus',
    description: 'Error summary that does not automatically receive focus on page load',
    props: {
      titleText: 'There is a problem',
      focusOnPageLoad: false,
      errorList: [
        {
          text: 'Select a valid option',
          href: '#select-field'
        }
      ]
    }
  }
};

/**
 * CSS color variables used by the component
 */
export const nhsColors = {
  errorColor: '#d5281b',
  focusColor: '#ffeb3b',
  focusTextColor: '#212b32',
  white: '#ffffff'
};

/**
 * Spacing values from NHS design system
 */
export const nhsSpacing = {
  mobile: {
    border: '4px',
    padding: '16px',
    marginBottom: '20px'
  },
  tablet: {
    border: '5px',
    padding: '24px',
    marginBottom: '28px'
  },
  desktop: {
    padding: '32px'
  }
};

/**
 * Usage guidelines for the component
 */
export const usageGuidelines = {
  when: [
    'There are validation errors on a form submission',
    'Multiple fields have errors that need user attention',
    'You need to summarize errors at the top of the page'
  ],
  howTo: [
    'Place at the top of the page, after the back link but before the H1',
    'Include links to each field that has an error',
    'Focus the error summary when the page loads (unless disabled)',
    'Use clear, specific error messages that help users fix the problem'
  ],
  accessibility: [
    'The component has role="alert" and aria-labelledby for screen readers',
    'It receives focus on page load to announce errors immediately',
    'Clicking error links scrolls to and focuses the related form field',
    'The component handles focus management for better keyboard navigation'
  ]
};
