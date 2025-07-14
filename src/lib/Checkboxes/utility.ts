export function createCheckboxesProps(
  name: string,
  items: CheckboxItem[],
  legend: string,
  options: Partial<CheckboxesProps> = {}
): CheckboxesProps {
  return {
    name,
    items,
    fieldset: {
      legend: {
        text: legend,
        classes: 'nhsuk-fieldset__legend--m'
      }
    },
    ...options
  };
}

export function createCheckboxItem(
  value: string,
  text: string,
  options: Partial<CheckboxItem> = {}
): CheckboxItem {
  return {
    value,
    text,
    ...options
  };
}

export function createConditionalCheckbox(
  value: string,
  text: string,
  conditionalHtml: string,
  options: Partial<CheckboxItem> = {}
): CheckboxItem {
  return {
    value,
    text,
    conditional: { html: conditionalHtml },
    ...options
  };
}

export function createExclusiveCheckbox(
  value: string,
  text: string,
  exclusiveGroup: string,
  options: Partial<CheckboxItem> = {}
): CheckboxItem {
  return {
    value,
    text,
    exclusive: true,
    exclusiveGroup,
    ...options
  };
}

// Validation helpers
export function validateCheckboxes(
  values: string[],
  required = false,
  minSelections?: number,
  maxSelections?: number
): string | null {
  if (required && values.length === 0) {
    return 'Please select at least one option';
  }

  if (minSelections && values.length < minSelections) {
    return `Please select at least ${minSelections} option${minSelections > 1 ? 's' : ''}`;
  }

  if (maxSelections && values.length > maxSelections) {
    return `Please select no more than ${maxSelections} option${maxSelections > 1 ? 's' : ''}`;
  }

  return null;
}

export function validateExclusiveGroup(
  values: string[],
  items: CheckboxItem[],
  exclusiveGroup: string
): string | null {
  const groupItems = items.filter(item => item.exclusiveGroup === exclusiveGroup);
  const exclusiveItems = groupItems.filter(item => item.exclusive);
  const regularItems = groupItems.filter(item => !item.exclusive);

  const selectedExclusive = exclusiveItems.filter(item => values.includes(item.value));
  const selectedRegular = regularItems.filter(item => values.includes(item.value));

  if (selectedExclusive.length > 0 && selectedRegular.length > 0) {
    return 'Cannot select both regular options and "none of the above" option';
  }

  return null;
}

// Accessibility helpers
export function announceCheckboxChange(
  value: string,
  checked: boolean,
  totalSelected: number
): void {
  const action = checked ? 'selected' : 'deselected';
  const message = `${value} ${action}. ${totalSelected} option${totalSelected !== 1 ? 's' : ''} selected.`;

  // Announce to screen readers
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'nhsuk-u-visually-hidden';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Component composition helpers
export function createCheckboxGroup(
  title: string,
  items: CheckboxItem[],
  options: {
    name?: string;
    hint?: string;
    required?: boolean;
    error?: string;
  } = {}
) {
  const name = options.name || title.toLowerCase().replace(/\s+/g, '-');
  
  return {
    name,
    items,
    fieldset: {
      legend: {
        text: title,
        classes: 'nhsuk-fieldset__legend--m'
      }
    },
    ...(options.hint && {
      hint: { text: options.hint }
    }),
    ...(options.error && {
      errorMessage: { text: options.error },
      formGroup: { classes: 'nhsuk-form-group--error' }
    })
  };
}
