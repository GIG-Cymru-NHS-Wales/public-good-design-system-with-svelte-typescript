export const checkboxesConfig = {
  name: 'Checkboxes',
  examples: {
    default: {
      idPrefix: 'nationality',
      name: 'nationality',
      fieldset: {
        legend: {
          text: 'What is your nationality?',
          classes: 'nhsuk-fieldset__legend--m'
        }
      },
      values: ['british'],
      hint: {
        text: 'If you have more than 1 nationality, select all options that are relevant to you'
      },
      items: [
        { value: 'british', text: 'British' },
        { value: 'irish', text: 'Irish' },
        { value: 'other', text: 'citizen of another country' }
      ]
    },
    withHintText: {
      fieldset: {
        legend: {
          text: 'How do you want to sign in?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      items: [
        {
          value: 'gov-gateway',
          text: 'Sign in with Government Gateway',
          hint: {
            text: "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before"
          }
        },
        {
          value: 'nhsuk-verify',
          text: 'Sign in with NHS.UK login',
          hint: {
            text: "You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity"
          }
        }
      ]
    },
    withDisabledItem: {
      name: 'colours',
      items: [
        { value: 'red', text: 'Red' },
        { value: 'green', text: 'Green' },
        { value: 'blue', text: 'Blue', disabled: true }
      ]
    },
    withErrorMessage: {
      name: 'waste',
      errorMessage: { text: 'Please select an option' },
      fieldset: {
        legend: {
          text: 'Which types of waste do you transport regularly?',
          classes: 'nhsuk-fieldset__legend--m'
        }
      },
      items: [
        { value: 'animal', text: 'Waste from animal carcasses' },
        { value: 'mines', text: 'Waste from mines or quarries' },
        { value: 'farm', text: 'Farm or agricultural waste' }
      ]
    },
    withConditionalContent: {
      idPrefix: 'contact',
      name: 'contact',
      fieldset: {
        legend: {
          text: 'How would you prefer to be contacted?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      }
    },
    withNoneOption: {
      idPrefix: 'contact',
      name: 'contact',
      fieldset: {
        legend: {
          text: 'How would you prefer to be contacted?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      }
    }
  }
} as const;
