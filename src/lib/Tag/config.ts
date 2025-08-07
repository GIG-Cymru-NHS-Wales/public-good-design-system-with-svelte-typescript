import type { TagColor, TagStatus } from './types';

/**
 * CSS class names used by the component
 */
export const classNames = {
  root: 'nhsuk-tag',
  noBorder: 'nhsuk-tag--no-border',
  colors: {
    default: '',
    white: 'nhsuk-tag--white',
    grey: 'nhsuk-tag--grey',
    green: 'nhsuk-tag--green',
    'aqua-green': 'nhsuk-tag--aqua-green',
    blue: 'nhsuk-tag--blue',
    purple: 'nhsuk-tag--purple',
    pink: 'nhsuk-tag--pink',
    red: 'nhsuk-tag--red',
    orange: 'nhsuk-tag--orange',
    yellow: 'nhsuk-tag--yellow'
  }
} as const;

/**
 * Common status tags with their recommended colors
 */
export const commonStatuses: Record<string, TagStatus> = {
  active: { text: 'Active', color: 'default' },
  inactive: { text: 'Inactive', color: 'grey' },
  inProgress: { text: 'In progress', color: 'white' },
  new: { text: 'New', color: 'green' },
  pending: { text: 'Pending', color: 'blue' },
  received: { text: 'Received', color: 'purple' },
  sent: { text: 'Sent', color: 'pink' },
  rejected: { text: 'Rejected', color: 'red' },
  declined: { text: 'Declined', color: 'orange' },
  delayed: { text: 'Delayed', color: 'yellow' },
  completed: { text: 'Completed', color: 'aqua-green' },
  draft: { text: 'Draft', color: 'grey' },
  published: { text: 'Published', color: 'green' },
  archived: { text: 'Archived', color: 'grey' },
  urgent: { text: 'Urgent', color: 'red' },
  warning: { text: 'Warning', color: 'orange' },
  info: { text: 'Info', color: 'blue' },
  success: { text: 'Success', color: 'green' },
  error: { text: 'Error', color: 'red' }
};

/**
 * Get the CSS class for a color variant
 */
export function getColorClass(color?: TagColor): string {
  if (!color || color === 'default') return '';
  return classNames.colors[color] || '';
}
