export const backLinkConfig = {
  name: 'Back Link',
  examples: {
    default: {
      // Uses default values
    },
    asButton: {
      element: 'button' as const
    },
    reverse: {
      classes: 'nhsuk-back-link--reverse'
    },
    customText: {
      text: 'Return to previous page',
      href: '/previous'
    },
    withHtml: {
      html: '<strong>Back</strong> to results',
      href: '/results'
    }
  }
} as const;
