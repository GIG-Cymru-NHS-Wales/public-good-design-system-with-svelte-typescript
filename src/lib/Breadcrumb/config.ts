export const breadcrumbConfig = {
  name: 'Breadcrumb',
  examples: {
    default: {
      items: [
        {
          href: '#',
          text: 'Level one',
          attributes: { lang: 'en' }
        },
        {
          href: '#',
          text: 'Level two'
        },
        {
          href: '#',
          text: 'Level three',
          attributes: { lang: 'en' }
        },
        {
          href: '#',
          text: 'Level four',
          classes: 'example-class-one example-class-two',
          attributes: { lang: 'en' }
        }
      ]
    },
    reverse: {
      classes: 'nhsuk-breadcrumb--reverse',
      items: [
        {
          href: '#',
          text: 'Level one',
          attributes: { lang: 'en' }
        },
        {
          href: '#',
          text: 'Level two'
        },
        {
          href: '#',
          text: 'Level three',
          attributes: { lang: 'en' }
        },
        {
          href: '#',
          text: 'Level four',
          classes: 'example-class-one example-class-two',
          attributes: { lang: 'en' }
        }
      ]
    }
  }
} as const;
