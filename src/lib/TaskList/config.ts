import type { TaskStatusType, TaskStatusConfig } from './types';

/**
 * CSS class names used by the component
 */
export const classNames = {
  root: 'nhsuk-task-list',
  item: 'nhsuk-task-list__item',
  itemWithLink: 'nhsuk-task-list__item--with-link',
  nameAndHint: 'nhsuk-task-list__name-and-hint',
  link: 'nhsuk-link nhsuk-task-list__link',
  hint: 'nhsuk-task-list__hint',
  status: 'nhsuk-task-list__status',
  statusCompleted: 'nhsuk-task-list__status--completed',
  statusCannotStart: 'nhsuk-task-list__status--cannot-start-yet'
} as const;

/**
 * Default configuration
 */
export const defaultConfig = {
  idPrefix: 'task-list'
} as const;

/**
 * Common task status configurations
 */
export const taskStatusConfigs: Record<TaskStatusType, TaskStatusConfig> = {
  completed: {
    type: 'completed',
    text: 'Completed',
    statusClass: classNames.statusCompleted
  },
  incomplete: {
    type: 'incomplete',
    text: 'Incomplete',
    tagClass: 'nhsuk-tag--blue'
  },
  'cannot-start': {
    type: 'cannot-start',
    text: 'Cannot start yet',
    statusClass: classNames.statusCannotStart
  },
  'in-progress': {
    type: 'in-progress',
    text: 'In progress',
    tagClass: 'nhsuk-tag--yellow'
  },
  'not-started': {
    type: 'not-started',
    text: 'Not started',
    tagClass: 'nhsuk-tag--grey'
  }
};

/**
 * Helper to create a task status object from a status type
 */
export function createTaskStatus(type: TaskStatusType): import('./types').TaskStatus {
  const config = taskStatusConfigs[type];
  
  if (config.tagClass) {
    return {
      tag: {
        text: config.text,
        classes: config.tagClass
      }
    };
  }
  
  return {
    text: config.text,
    classes: config.statusClass
  };
}

/**
 * Common task list patterns
 */
export const taskListPatterns = {
  /** Pattern for a health assessment */
  healthAssessment: [
    { title: 'Personal details', status: 'completed' },
    { title: 'Medical history', status: 'completed' },
    { title: 'Current medications', status: 'in-progress' },
    { title: 'Allergies', status: 'incomplete' },
    { title: 'Review and submit', status: 'cannot-start' }
  ],
  
  /** Pattern for an application process */
  application: [
    { title: 'Eligibility check', status: 'completed' },
    { title: 'Personal information', status: 'completed' },
    { title: 'Supporting documents', status: 'incomplete' },
    { title: 'Declaration', status: 'not-started' },
    { title: 'Payment', status: 'cannot-start' }
  ],
  
  /** Pattern for a registration process */
  registration: [
    { title: 'Create account', status: 'completed' },
    { title: 'Verify email', status: 'completed' },
    { title: 'Add personal details', status: 'in-progress' },
    { title: 'Set preferences', status: 'not-started' }
  ]
} as const;
