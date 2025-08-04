export const name = 'Hero';

export const description = 'Hero component for prominent page headers and calls to action';

export const params = {
  heading: {
    type: 'string',
    required: true,
    description: 'Text heading of the hero.'
  },
  headingClasses: {
    type: 'string',
    required: false,
    description:
      'Optional additional classes to add to heading. Separate each class with a space.'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional heading level for the heading. Defaults to `1`.'
  },
  text: {
    type: 'string',
    required: false,
    description:
      'If `html` is set, this is not required. Text to use within the hero. If `html` is provided, the `text` option will be ignored.'
  },
  html: {
    type: 'string',
    required: false,
    description:
      'If `text` is set, this is not required. Text to use within the hero. If `text` is provided, the `html` option will be ignored.'
  },
  imageURL: {
    type: 'string',
    required: false,
    description: 'The URL of the image in the hero.'
  },
  containerClasses: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the hero container, useful if you want to make the hero fixed width.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the hero.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the hero.'
  }
};
