/**
 * Tag configuration for task status
 */
export interface TaskStatusTag {
  /** Text content for the tag */
  text: string;
  /** Additional CSS classes for the tag */
  classes?: string;
  /** HTML attributes for the tag */
  attributes?: Record<string, string | number | boolean>;
}

/**
 * Task status configuration
 */
export interface TaskStatus {
  /** Tag to display as status */
  tag?: TaskStatusTag;
  /** Text to use for the status (alternative to tag) */
  text?: string;
  /** HTML to use for the status (alternative to tag) */
  html?: string;
  /** Additional CSS classes for the status container */
  classes?: string;
}

/**
 * Task title configuration
 */
export interface TaskTitle {
  /** Text content for the title */
  text?: string;
  /** HTML content for the title */
  html?: string;
  /** Additional CSS classes for the title */
  classes?: string;
}

/**
 * Task hint configuration
 */
export interface TaskHint {
  /** Text content for the hint */
  text?: string;
  /** HTML content for the hint */
  html?: string;
}

/**
 * Individual task item configuration
 */
export interface TaskItem {
  /** The main title for the task */
  title: TaskTitle;
  /** Optional hint text for additional context */
  hint?: TaskHint;
  /** The status of the task */
  status: TaskStatus;
  /** Link URL for the task (makes the row clickable) */
  href?: string;
  /** Additional CSS classes for the item */
  classes?: string;
}

/**
 * Task List component props
 */
export interface TaskListProps {
  /** Array of task items to display */
  items: TaskItem[];
  /** Optional prefix for IDs (defaults to 'task-list') */
  idPrefix?: string;
  /** Additional CSS classes for the list container */
  classes?: string;
  /** HTML attributes to add to the list container */
  attributes?: Record<string, string | number | boolean>;
}

/**
 * Common task status types
 */
export type TaskStatusType = 'completed' | 'incomplete' | 'cannot-start' | 'in-progress' | 'not-started';

/**
 * Task status configuration helper
 */
export interface TaskStatusConfig {
  type: TaskStatusType;
  text: string;
  tagClass?: string;
  statusClass?: string;
}
