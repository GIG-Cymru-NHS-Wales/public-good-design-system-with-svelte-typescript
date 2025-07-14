
export const dateInputConfig = {
  name: 'Date Input',
  examples: {
    default: {
      id: 'dob',
      namePrefix: 'dob',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      }
    },
    withAutocomplete: {
      id: 'dob-with-autocomplete-attribute',
      namePrefix: 'dob-with-autocomplete',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2',
          autocomplete: 'bday-day'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2',
          autocomplete: 'bday-month'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4',
          autocomplete: 'bday-year'
        }
      ]
    },
    withErrors: {
      id: 'dob-day-error',
      namePrefix: 'dob-day-error',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Error message goes here'
      },
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4'
        }
      ]
    },
    withMultipleErrors: {
      id: 'dob-errors',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Error message goes here'
      },
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4 nhsuk-input--error'
        }
      ]
    },
    withValues: {
      id: 'dob',
      namePrefix: 'dob',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      values: {
        day: '5',
        month: '8',
        year: '2024'
      }
    },
    monthAndYearWithValues: {
      id: 'dob',
      namePrefix: 'dob',
      fieldset: {
        legend: {
          text: 'When did you start your job?'
        }
      },
      hint: {
        text: 'For example, 11 2023'
      },
      values: {
        month: '8',
        year: '2024'
      },
      items: [
        {
          name: 'month',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4'
        }
      ]
    }
  }
} as const;
