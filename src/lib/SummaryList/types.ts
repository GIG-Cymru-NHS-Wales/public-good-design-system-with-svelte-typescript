export interface SummaryListAction {
  href: string;
  text?: string;
  html?: string;
  visuallyHiddenText?: string;
}

export interface SummaryListActions {
  items?: SummaryListAction[];
  classes?: string;
}

export interface SummaryListKey {
  text?: string;
  html?: string;
  classes?: string;
}

export interface SummaryListValue {
  text?: string;
  html?: string;
  classes?: string;
}

export interface SummaryListRow {
  key: SummaryListKey;
  value: SummaryListValue;
  actions?: SummaryListActions;
  classes?: string;
}

export interface SummaryListProps {
  rows: SummaryListRow[];
  classes?: string;
  attributes?: Record<string, string>;
}
