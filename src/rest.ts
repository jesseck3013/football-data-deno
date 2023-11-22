import { API_BASE_URL, AREA } from "./constant.ts";

/** combine endpoint with the base url */
function makeURL(endpoint: string): URL {
  return new URL(endpoint, API_BASE_URL);
}

/** url: `https://api.football-data.org/v4/areas` */
export function areas(): URL {
  return makeURL(AREA);
}

/** url: `https://api.football-data.org/v4/areas/${id}` */
export function area(id: number | string) {
  return makeURL(`${AREA}/${id}`);
}
