/**
 * Tag component color variants
 */
export type TagColor =
  | 'default'
  | 'white'
  | 'grey'
  | 'green'
  | 'aqua-green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow';

/**
 * Tag component props
 */
export interface TagProps {
  /** Text to use within the tag component. If `html` is provided, the `text` argument will be ignored */
  text?: string;
  /** HTML to use within the tag component. If `html` is provided, the `text` argument will be ignored */
  html?: string;
  /** Color variant of the tag */
  color?: TagColor;
  /** Remove border from the tag */
  noBorder?: boolean;
  /** Additional CSS classes to add to the tag */
  classes?: string;
  /** HTML attributes (for example data attributes) to add to the tag */
  attributes?: Record<string, string | number | boolean>;
}

/**
 * Predefined tag status mappings
 */
export interface TagStatus {
  text: string;
  color: TagColor;
}
