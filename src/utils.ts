import { Filters, ValidValue } from "./types.ts";

export function makeAuthFetchFn(token: string) {
  return (url: URL) => {
    return fetch(url, { method: "GET", headers: { "X-Auth-Token": token } });
  };
}

/**
 * ignore properties of filters that are not availble
 * then create a url query string
 * // returns "?a=10"
 * @example getValidFilters({a: 10, b: 200}, ["a", "x"])
 */
export function buildFilterQuery(
  filters: Filters,
  available: string[] = [],
): string {
  const s = new Set(available);
  const params = [];
  for (const [k, v] of Object.entries(filters)) {
    if (s.has(k)) {
      params.push([k, v]);
    }
  }

  return buildQuery(params);
}

/**
 * build a query string from an array of properties
 * @example
 * returns "?aa=100&bb=200"
 * @example
 * returns ""
 * buildQuery([])
 */
export function buildQuery<Type extends ValidValue>(
  params: Type[][] = [],
): string {
  let query = params.length === 0 ? "" : "?";

  let isFirstParam = true;
  for (const param of params) {
    const [key, value] = param;
    if (isFirstParam) {
      query = `${query}${key}=${value}`;
      isFirstParam = false;
    } else {
      query = `${query}&${key}=${value}`;
    }
  }

  return query;
}

/**
 * given an array, remove duplicate items
 */
export function removeDuplicates<Type>(array: Type[]) {
  const s = new Set(array);
  return Array.from(s);
}
