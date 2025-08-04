export const name = 'Footer';

export const description = 'Footer component for NHS websites';

export const params = {
  links: {
    type: 'array',
    required: false,
    description: 'Contains the array of the first column of footer link items.',
    params: {
      url: {
        type: 'string',
        required: false,
        description:
          'Href attribute for a footer link item in the first column.'
      },
      label: {
        type: 'string',
        required: true,
        description: 'The label for a footer link item in the first column.'
      }
    }
  },
  linksColumn2: {
    type: 'array',
    required: false,
    description:
      'Contains the array of the second column of footer link items.',
    params: {
      url: {
        type: 'string',
        required: false,
        description:
          'Href attribute for a footer link item in the second column.'
      },
      label: {
        type: 'string',
        required: true,
        description: 'The label for a footer link item in the second column.'
      }
    }
  },
  linksColumn3: {
    type: 'array',
    required: false,
    description: 'Contains the array of the third column of footer link items.',
    params: {
      url: {
        type: 'string',
        required: false,
        description:
          'Href attribute for a footer link item in the third column.'
      },
      label: {
        type: 'string',
        required: true,
        description: 'The label for a footer link item in the third column.'
      }
    }
  },
  copyright: {
    type: 'string',
    required: false,
    description: 'Optional text for the copyright notice in the footer.'
  },
  containerClasses: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the footer container, useful if you want to make the footer fixed width.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the footer container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the footer container.'
  },
  metaLinks: {
    type: 'array',
    required: false,
    description: 'Contains the array of key policy footer link items.',
    params: {
      url: {
        type: 'string',
        required: false,
        description: 'Href attribute for a key policy footer link item.'
      },
      label: {
        type: 'string',
        required: true,
        description: 'The label for a key policy footer link item.'
      }
    }
  }
};
