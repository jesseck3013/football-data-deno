import { API_BASE_URL, AREA, COMPETITION, MATCH } from "./constant.ts";
import { Filters, MatchFilters } from "./types.ts";
import { buildFilterQuery, removeDuplicates } from "./utils.ts";

/** combine endpoint with the base url */
function makeURL(endpoint: string): URL {
  return new URL(endpoint, API_BASE_URL);
}

/** url: `https://api.football-data.org/v4/areas` */
export function areas(): URL {
  return makeURL(AREA);
}

/** url: `https://api.football-data.org/v4/areas/${id}` */
export function areasById(id: number | string): URL {
  return makeURL(`${AREA}/${id}`);
}

/** url: `https://api.football-data.org/v4/competitions` */
export function competitions(filters: Filters = {}): URL {
  const query = buildFilterQuery(filters, ["areas"]);
  return makeURL(`${COMPETITION}${query}`);
}

/** url: `https://api.football-data.org/v4/competitions/${idOrCode}` */
export function competition(
  idOrCode: number | string,
  filters: Filters = {},
): URL {
  const query = buildFilterQuery(filters, ["areas"]);
  return makeURL(`${COMPETITION}/${idOrCode}${query}`);
}

/** url: `https://api.football-data.org/v4/competitions/${idOrCode}/standings` */
export function standingsOfCompetition(
  idOrCode: number | string,
  filters: Filters = {},
): URL {
  const query = buildFilterQuery(filters, ["season", "matchday", "date"]);
  return makeURL(`${COMPETITION}/${idOrCode}/standings${query}`);
}

/** url: `https://api.football-data.org/v4/competitions/${idOrCode}/scorers` */
export function scorersOfCompetition(
  idOrCode: number | string,
  fitlers: Filters = {},
): URL {
  const query = buildFilterQuery(fitlers, ["season", "matchday"]);
  return makeURL(`${COMPETITION}/${idOrCode}/scorers${query}`);
}

/** url: `https://api.football-data.org/v4/competitions/${idOrCode}/matches` */
export function matchesOfCompetition(
  idOrCode: number | string,
  fitlers: Filters = {},
): URL {
  const query = buildFilterQuery(fitlers, [
    "season",
    "matchday",
    "status",
    "dateFrom",
    "dateTo",
    "stage",
    "group",
  ]);
  return makeURL(`${COMPETITION}/${idOrCode}/matches${query}`);
}

/** url: `https://api.football-data.org/v4/competitions/${idOrCode}/teams` */
export function teamsOfCompetition(
  idOrCode: number | string,
  fitlers: Filters = {},
): URL {
  const query = buildFilterQuery(fitlers, [
    "season",
  ]);
  return makeURL(`${COMPETITION}/${idOrCode}/teams${query}`);
}

/** url: `https://api.football-data.org/v4/matches` */
export function match(id: number, filters: MatchFilters) {
  filters.ids.push(id);
  filters.ids = removeDuplicates(filters.ids);

  const query = buildFilterQuery(filters, [
    "ids",
    "date",
    "dateFrom",
    "dateTo",
    "status",
  ]);
  return makeURL(`${MATCH}${query}`);
}
