/**
 * Warning Callout component props
 */
export interface WarningCalloutProps {
  /** Heading to be used on the warning callout */
  heading: string;
  /** Optional heading level for the heading. Defaults to 3 */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Text content to be used within the warning callout */
  text?: string;
  /** HTML content to be used within the warning callout */
  html?: string;
  /** Classes to add to the warning callout */
  classes?: string;
  /** HTML attributes to add to the warning callout */
  attributes?: Record<string, string | number | boolean>;
  /** Child content (for slot usage) */
  children?: any;
}

/**
 * Common warning types with predefined headings
 */
export type WarningType = 
  | 'important'
  | 'safety'
  | 'medical'
  | 'allergy'
  | 'interaction'
  | 'dosage'
  | 'storage'
  | 'pregnancy'
  | 'driving'
  | 'alcohol'
  | 'side-effects'
  | 'emergency';

/**
 * Warning configuration
 */
export interface WarningConfig {
  heading: string;
  type: WarningType;
  icon?: string;
}
