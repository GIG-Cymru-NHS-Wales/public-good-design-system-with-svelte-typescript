export const cardConfig = {
  name: 'Card',
  variants: [
    'basic',
    'clickable', 
    'primary',
    'secondary',
    'feature',
    'care-non-urgent',
    'care-urgent',
    'care-emergency',
    'top-task'
  ],
  examples: {
    default: {
      heading: "If you need help now, but it's not an emergency",
      headingLevel: 3
    },
    basicWithHtml: {
      heading: 'Help from NHS 111',
      headingLevel: 3
    },
    nonUrgent: {
      heading: 'Speak to a GP if:',
      headingLevel: 3,
      type: 'non-urgent' as const
    },
    urgent: {
      heading: 'Ask for an urgent GP appointment if:',
      headingLevel: 3,
      type: 'urgent' as const
    },
    emergency: {
      heading: 'Call 999 if you have sudden chest pain that:',
      headingLevel: 3,
      type: 'emergency' as const
    },
    primaryWithChevron: {
      href: '#',
      primary: true,
      clickable: true,
      heading: 'Breast screening',
      headingClasses: 'nhsuk-heading-m'
    },
    primaryWithDescription: {
      href: '#',
      primary: true,
      clickable: true,
      heading: 'Introduction to care and support',
      headingClasses: 'nhsuk-heading-m',
      description: 'A quick guide for people who have care and support needs and their carers'
    },
    clickable: {
      href: '#',
      clickable: true,
      heading: 'Introduction to care and support',
      headingClasses: 'nhsuk-heading-m',
      description: 'A quick guide for people who have care and support needs and their carers'
    },
    secondary: {
      href: '#',
      clickable: true,
      secondary: true,
      heading: 'Urgent and emergency care services',
      headingClasses: 'nhsuk-heading-m',
      description: 'Services the NHS provides if you need urgent or emergency medical help'
    },
    feature: {
      feature: true,
      href: '#',
      heading: 'Feature card heading',
      headingClasses: 'nhsuk-heading-m',
      description: 'Feature card description'
    },
    withImage: {
      imgURL: 'https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg',
      imgALT: 'People exercising',
      href: '#',
      clickable: true,
      heading: 'Exercise',
      headingClasses: 'nhsuk-heading-m',
      description: 'Programmes, workouts and tips to get you moving and improve your fitness and wellbeing'
    },
    topTask: {
      href: '#',
      clickable: true,
      headingLevel: 5,
      heading: 'Order a repeat prescription',
      headingClasses: 'nhsuk-heading-xs',
      topTask: true
    }
  }
} as const;
