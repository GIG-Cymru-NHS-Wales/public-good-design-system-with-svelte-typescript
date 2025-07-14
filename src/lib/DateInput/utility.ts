
export function createDateInputProps(
  legend: string,
  hint: string,
  options: Partial<DateInputProps> = {}
): DateInputProps {
  return {
    fieldset: {
      legend: { text: legend }
    },
    hint: { text: hint },
    ...options
  };
}

export function createDateInputItem(
  name: string,
  options: Partial<DateInputItem> = {}
): DateInputItem {
  const defaultClasses = {
    day: 'nhsuk-input--width-2',
    month: 'nhsuk-input--width-2',
    year: 'nhsuk-input--width-4'
  };

  return {
    name,
    classes: defaultClasses[name as keyof typeof defaultClasses] || '',
    inputmode: 'numeric',
    ...options
  };
}

export function createBirthdayInputItems(): DateInputItem[] {
  return [
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
  ];
}

export function createMonthYearInputItems(): DateInputItem[] {
  return [
    {
      name: 'month',
      classes: 'nhsuk-input--width-2'
    },
    {
      name: 'year',
      classes: 'nhsuk-input--width-4'
    }
  ];
}
