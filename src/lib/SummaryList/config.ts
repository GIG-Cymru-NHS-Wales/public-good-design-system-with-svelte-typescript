import type { SummaryListProps } from './types.js';

export const name = 'Summary list';

export const defaultProps: Partial<SummaryListProps> = {
  rows: [],
  classes: '',
  attributes: {}
};

export const examples = {
  default: {
    rows: [
      {
        key: {
          text: 'Name'
        },
        value: {
          text: 'Sarah Philips'
        }
      },
      {
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '5 January 1978'
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'date of birth'
            }
          ]
        }
      },
      {
        key: {
          text: 'Contact information'
        },
        value: {
          html: `72 Guild Street<br>
London<br>
SE23 6FH`
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'contact information'
            }
          ]
        }
      },
      {
        key: {
          text: 'Contact details'
        },
        value: {
          html: `<p>07700 900457</p>
<p>sarah.philips@example.com</p>`
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Add',
              visuallyHiddenText: 'new contact details'
            },
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'contact details'
            }
          ]
        }
      },
      {
        key: {
          text: 'Medicines'
        },
        value: {
          html: `<p>Isotretinoin capsules (Roaccutane)</p>
<p>Isotretinoin gel (Isotrex)</p>
<p>Pepto-Bismol (bismuth subsalicylate)</p>`
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Add',
              visuallyHiddenText: 'new medicine'
            },
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'medicines'
            }
          ]
        }
      }
    ]
  },
  withoutActions: {
    rows: [
      {
        key: {
          text: 'Name'
        },
        value: {
          text: 'Sarah Philips'
        }
      },
      {
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '5 January 1978'
        }
      },
      {
        key: {
          text: 'Contact information'
        },
        value: {
          html: `72 Guild Street<br>
London<br>
SE23 6FH`
        }
      },
      {
        key: {
          text: 'Contact details'
        },
        value: {
          html: `<p>07700 900457</p>
<p>sarah.philips@example.com</p>`
        }
      }
    ]
  },
  withoutBorder: {
    classes: 'nhsuk-summary-list--no-border',
    rows: [
      {
        key: {
          text: 'Name'
        },
        value: {
          text: 'Sarah Philips'
        }
      },
      {
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '5 January 1978'
        }
      },
      {
        key: {
          text: 'Contact information'
        },
        value: {
          html: `72 Guild Street<br>
London<br>
SE23 6FH`
        }
      },
      {
        key: {
          text: 'Contact details'
        },
        value: {
          html: `<p>07700 900457</p>
<p>sarah.philips@example.com</p>`
        }
      }
    ]
  },
  withoutRowBorder: {
    rows: [
      {
        key: {
          text: 'Name'
        },
        value: {
          text: 'Sarah Philips'
        }
      },
      {
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '5 January 1978'
        }
      },
      {
        key: {
          text: 'Contact information'
        },
        value: {
          html: `72 Guild Street<br>
London<br>
SE23 6FH`
        }
      },
      {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Contact details'
        },
        value: {
          html: `<p>07700 900457</p>
<p>sarah.philips@example.com</p>`
        }
      }
    ]
  }
};
