export interface BreadcrumbItem {
  /** Text to use within the breadcrumbs item. */
  text: string;
  /** The value of the breadcrumb item link href attribute. */
  href?: string;
  /** HTML attributes (for example data attributes) to add to the individual crumb. */
  attributes?: Record<string, string>;
  /** Classes to add to the individual breadcrumb item. */
  classes?: string;
}

export interface BreadcrumbProps {
  /** Array of breadcrumbs item objects. This should contain all pages in the breadcrumb except for the parent page. */
  items: BreadcrumbItem[];
  /** Text to use for the parent page. */
  text?: string;
  /** The value of the parent page link href attribute. */
  href?: string;
  /** Classes to add to the container. */
  classes?: string;
  /** HTML attributes (for example data attributes) to add to the container. */
  attributes?: Record<string, string>;
  /** Plain text label identifying the landmark to screen readers. Defaults to "Breadcrumb". */
  labelText?: string;
}
