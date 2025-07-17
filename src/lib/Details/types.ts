export interface DetailsProps {
  /** Text to use within the summary element (the visible part of the details element). If summaryHtml is provided, the summaryText option will be ignored. */
  summaryText?: string;
  /** HTML to use within the summary element (the visible part of the details element). If summaryHtml is provided, the summaryText option will be ignored. */
  summaryHtml?: string;
  /** Text to use within the disclosed part of the details element. If html is provided, the text option will be ignored. */
  text?: string;
  /** HTML to use within the disclosed part of the details element. If html is provided, the text option will be ignored. */
  html?: string;
  /** Id to add to the details element. */
  id?: string;
  /** If true, details element will be expanded. */
  open?: boolean;
  /** Classes to add to the details element. */
  classes?: string;
  /** HTML attributes (for example data attributes) to add to the details element. */
  attributes?: Record<string, string>;
}
