export interface TableCell {
  text?: string;
  html?: string;
  header?: string;
  format?: 'numeric';
  colspan?: number;
  rowspan?: number;
  classes?: string;
  attributes?: Record<string, string>;
}

export interface TableHead {
  text?: string;
  html?: string;
  format?: 'numeric';
  colspan?: number;
  rowspan?: number;
  classes?: string;
  attributes?: Record<string, string>;
}

export interface TableProps {
  rows: TableCell[][];
  head?: TableHead[];
  heading?: string;
  headingLevel?: number;
  caption?: string;
  captionClasses?: string;
  firstCellIsHeader?: boolean;
  responsive?: boolean;
  tableClasses?: string;
  panel?: boolean;
  panelClasses?: string;
  attributes?: Record<string, string>;
}
