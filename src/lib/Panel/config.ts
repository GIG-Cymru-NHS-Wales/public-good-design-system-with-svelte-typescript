export const name = 'Panel';

export const description = 'Panel component for displaying success messages and important information';

export const params = {
  titleText: {
    type: 'string',
    required: true,
    description:
      'If `titleHtml` is set, this is not required. Text to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored.'
  },
  titleHtml: {
    type: 'string',
    required: false,
    description:
      'If `titleText` is set, this is not required. HTML to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored.'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Heading level, from `1` to `6`. Defaults to `1`.'
  },
  text: {
    type: 'string',
    required: false,
    description:
      'If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, the `text` option will be ignored.'
  },
  html: {
    type: 'string',
    required: false,
    description:
      'If `text` is set, this is not required. Text to use within the panel content. If `text` is provided, the `html` option will be ignored.'
  },
  classes: {
    type: 'string',
    required: false,
    description:
      'Optional additional classes to add to the hint `div` tag. Separate each class with a space.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'Any extra HTML attributes (for example data attributes) to add to the input component.'
  }
};
