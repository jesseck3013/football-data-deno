import type { Filters, ValidValue } from "./types.ts";
import type { FootballResponse } from "./types/response.ts";
import type { FootballHeaders } from "./types/response.ts";

export interface ErrorMsg {
  message: string;
}

function fetchSource(url: URL, token: string) {
  return fetch(url, {
    method: "GET",
    headers: { "X-Auth-Token": token },
  });
}

function parseResponse(resp: Response): FootballHeaders {
  const headers = resp.headers;
  return {
    date: headers.get("x-api-version") ?? undefined,
    "x-api-version": headers.get("x-api-version") ?? undefined,
    "x-authenticated-client": headers.get("x-api-version") ?? undefined,
    "x-requestcounter-reset": headers.get("x-api-version") ?? undefined,
    "x-requests-available-minute": headers.get("x-api-version") ?? undefined,
  };
}

export function makeAuthFetchFn(token: string) {
  return async <Type>(url: URL) => {
    const resp = await fetchSource(url, token);

    if (!resp.ok) {
      const errMsg = await resp.json();
      throw new Error(
        `request failed with status ${resp.status}, because ${errMsg.message}`,
      );
    }

    const headers = parseResponse(resp);
    const data = await resp.json();
    return {
      ok: resp.ok,
      status: resp.status,
      url: resp.url,
      headers: headers,
      data: data,
    } as FootballResponse<Type>;
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
