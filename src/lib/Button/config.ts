export const buttonConfig = {
  name: 'Button',
  variants: [
    'primary',
    'secondary', 
    'secondary-solid',
    'warning',
    'login',
    'reverse'
  ],
  examples: {
    default: {
      text: 'Save and continue'
    },
    disabled: {
      text: 'Disabled button',
      disabled: true
    },
    asLink: {
      text: 'Link button',
      href: '#'
    },
    login: {
      text: 'Continue',
      classes: 'nhsuk-button--login'
    },
    withDoubleClickPrevented: {
      text: 'Save and continue',
      preventDoubleClick: true
    },
    reverse: {
      text: 'Log out',
      classes: 'nhsuk-button--reverse'
    },
    secondary: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary'
    },
    warning: {
      text: 'Yes, delete this vaccine',
      classes: 'nhsuk-button--warning'
    }
  }
} as const;
