export type CareCardType = 'non-urgent' | 'urgent' | 'emergency';

export interface CardProps {
  /** Text to use within the heading of the card component. If headingHtml is provided, the heading argument will be ignored. */
  heading?: string;
  /** HTML to use within the heading of the card component. If headingHtml is provided, the heading argument will be ignored. */
  headingHtml?: string;
  /** Classes to add to the card heading. */
  headingClasses?: string;
  /** Optional heading level for the card heading. Defaults to 2. */
  headingLevel?: number;
  /** The value of the card link href attribute. */
  href?: string;
  /** If set to true, then the whole card will become a clickable card variant. */
  clickable?: boolean;
  /** Care card variant type – "non-urgent", "urgent" or "emergency". */
  type?: CareCardType;
  /** If set to true, then the card will become a feature card variant. */
  feature?: boolean;
  /** If set to true, the card will become a primary card variant (with chevron). */
  primary?: boolean;
  /** If set to true, the card will become a secondary card variant. */
  secondary?: boolean;
  /** If set to true, the card will become a top task card variant. */
  topTask?: boolean;
  /** The URL of the image in the card. */
  imgURL?: string;
  /** The alternative text of the image in the card. */
  imgALT?: string;
  /** Text description within the card content. If descriptionHtml is provided, the description argument will be ignored. */
  description?: string;
  /** HTML to use within the card content. If descriptionHtml is provided, the description argument will be ignored. */
  descriptionHtml?: string;
  /** Classes to add to the card. */
  classes?: string;
  /** HTML attributes (for example data attributes) to add to the card. */
  attributes?: Record<string, string>;
}
