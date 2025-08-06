import type { TableProps } from './types.js';

export const defaultProps: Partial<TableProps> = {
  headingLevel: 3,
  firstCellIsHeader: false,
  responsive: false,
  panel: false,
};

export const componentName = 'Tables';
