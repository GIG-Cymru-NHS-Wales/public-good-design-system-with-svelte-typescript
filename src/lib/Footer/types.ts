export interface FooterLink {
  /**
   * Href attribute for a footer link item
   */
  url?: string;
  
  /**
   * The label for a footer link item
   */
  label: string;
}

export interface FooterProps {
  /**
   * Contains the array of the first column of footer link items
   */
  links?: FooterLink[];
  
  /**
   * Contains the array of the second column of footer link items
   */
  linksColumn2?: FooterLink[];
  
  /**
   * Contains the array of the third column of footer link items
   */
  linksColumn3?: FooterLink[];
  
  /**
   * Optional text for the copyright notice in the footer
   * @default '© NHS England'
   */
  copyright?: string;
  
  /**
   * Classes to add to the footer container, useful if you want to make the footer fixed width
   */
  containerClasses?: string;
  
  /**
   * Classes to add to the footer container
   */
  classes?: string;
  
  /**
   * HTML attributes (for example data attributes) to add to the footer container
   */
  attributes?: Record<string, string | number | boolean>;
  
  /**
   * Contains the array of key policy footer link items
   */
  metaLinks?: FooterLink[];
}
