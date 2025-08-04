export const name = 'Inset text';

export const description = 'Inset text component for highlighting important information';

export const params = {
  text: {
    type: 'string',
    required: true,
    description:
      'Text content to be used within the inset text component. If `html` is provided, the `text` argument will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'HTML content to be used within the inset text component. If `html` is provided, the `text` argument will be ignored.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the inset text.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the inset text.'
  }
};
