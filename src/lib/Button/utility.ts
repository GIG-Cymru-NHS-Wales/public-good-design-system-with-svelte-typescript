export function createButtonProps(
  variant: 'primary' | 'secondary' | 'warning' | 'login' | 'reverse',
  options: Partial<ButtonProps> = {}
): ButtonProps {
  const variantClasses = {
    primary: '',
    secondary: 'nhsuk-button--secondary',
    warning: 'nhsuk-button--warning',
    login: 'nhsuk-button--login',
    reverse: 'nhsuk-button--reverse'
  };

  return {
    classes: variantClasses[variant],
    preventDoubleClick: variant === 'primary', // Enable by default for primary
    ...options
  };
}

// Component wrapper for specific button types
export const PrimaryButton = (props: Omit<ButtonProps, 'classes'>) => ({
  ...props,
  classes: ''
});

export const SecondaryButton = (props: Omit<ButtonProps, 'classes'>) => ({
  ...props,
  classes: 'nhsuk-button--secondary'
});

export const WarningButton = (props: Omit<ButtonProps, 'classes'>) => ({
  ...props,
  classes: 'nhsuk-button--warning'
});

// Utility for form submission with loading states
export function createSubmitButton(
  text: string,
  isLoading: boolean,
  options: Partial<ButtonProps> = {}
): ButtonProps {
  return {
    text: isLoading ? 'Loading...' : text,
    type: 'submit',
    disabled: isLoading,
    preventDoubleClick: true,
    ...options
  };
}
