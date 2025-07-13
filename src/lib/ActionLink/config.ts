export const actionLinkConfig = {
  name: 'Action Link',
  examples: {
    default: {
      text: 'Find your nearest A&E',
      href: '#'
    },
    newWindow: {
      text: 'External link',
      href: 'https://example.com',
      openInNewWindow: true
    },
    withClasses: {
      text: 'Custom styled link',
      href: '/custom',
      classes: 'my-custom-class'
    },
    withAttributes: {
      text: 'Link with data attributes',
      href: '/data',
      attributes: {
        'data-testid': 'test-link',
        'data-track': 'click'
      }
    }
  }
} as const;
