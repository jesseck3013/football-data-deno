export type ValidValue = string | number | number[] | undefined;

export type Filters = Record<string, ValidValue>;

export interface MatchFilters extends Filters {
  ids: number[];
  date?: string;
  dateFrom?: string;
  dateTo?: string;
  status?: string;
}
