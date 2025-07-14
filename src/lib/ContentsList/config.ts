export const contentsListConfig = {
  name: 'Contents List',
  examples: {
    default: {
      items: [
        {
          href: '#',
          text: 'What is AMD?',
          current: true
        },
        {
          href: '#',
          text: 'Symptoms'
        },
        {
          href: '#',
          text: 'Getting diagnosed'
        },
        {
          href: '#',
          text: 'Treatments'
        },
        {
          href: '#',
          text: 'Living with AMD'
        }
      ]
    },
    withCustomLabel: {
      items: [
        { href: '/guide/overview', text: 'Overview' },
        { href: '/guide/setup', text: 'Getting started' },
        { href: '/guide/features', text: 'Features', current: true },
        { href: '/guide/troubleshooting', text: 'Troubleshooting' }
      ],
      ariaLabel: 'User guide navigation'
    }
  }
} as const;
