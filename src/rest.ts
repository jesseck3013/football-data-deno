import {
  API_BASE_URL,
  AREA,
  COMPETITION,
  MATCH,
  PERSON,
  TEAM,
} from "./constant.ts";
import type { Filters, MatchFilters } from "./types.ts";
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
export function competitions(filters: Filters): URL {
  const query = buildFilterQuery(filters, ["areas"]);
  return makeURL(`${COMPETITION}${query}`);
}

/** url: `https://api.football-data.org/v4/competitions/${idOrCode}` */
export function competition(
  idOrCode: number | string,
  filters: Filters,
): URL {
  const query = buildFilterQuery(filters, ["areas"]);
  return makeURL(`${COMPETITION}/${idOrCode}${query}`);
}

/** url: `https://api.football-data.org/v4/competitions/${idOrCode}/standings` */
export function standingsOfCompetition(
  idOrCode: number | string,
  filters: Filters,
): URL {
  const query = buildFilterQuery(filters, ["season", "matchday", "date"]);
  return makeURL(`${COMPETITION}/${idOrCode}/standings${query}`);
}

/** url: `https://api.football-data.org/v4/competitions/${idOrCode}/scorers` */
export function scorersOfCompetition(
  idOrCode: number | string,
  fitlers: Filters,
): URL {
  const query = buildFilterQuery(fitlers, ["season", "matchday"]);
  return makeURL(`${COMPETITION}/${idOrCode}/scorers${query}`);
}

/** url: `https://api.football-data.org/v4/competitions/${idOrCode}/matches` */
export function matchesOfCompetition(
  idOrCode: number | string,
  fitlers: Filters,
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
  fitlers: Filters,
): URL {
  const query = buildFilterQuery(fitlers, [
    "season",
  ]);
  return makeURL(`${COMPETITION}/${idOrCode}/teams${query}`);
}

/** url: `https://api.football-data.org/v4/matches` */
export function match(filters: MatchFilters) {
  if (filters.ids) {
    filters.ids = removeDuplicates(filters.ids);
  }

  const query = buildFilterQuery(filters, [
    "ids",
    "date",
    "dateFrom",
    "dateTo",
    "status",
  ]);
  return makeURL(`${MATCH}${query}`);
}

/** url: `https://api.football-data.org/v4/matches/{id}/head2head` */
export function head2headOfMatch(id: number, filters: Filters) {
  const query = buildFilterQuery(filters, [
    "limit",
    "dateFrom",
    "dateTo",
    "competitions",
  ]);
  return makeURL(`${MATCH}/${id}/head2head${query}`);
}

/** url: `https://api.football-data.org/v4/teams` */
export function teams() {
  return makeURL(`${TEAM}`);
}

/** url: `https://api.football-data.org/v4/teams/${id}` */
export function team(id: number) {
  return makeURL(`${TEAM}/${id}`);
}

/** url: `https://api.football-data.org/v4/teams/${id}/matches` */
export function matchesOfTeam(id: number, filters: Filters) {
  const query = buildFilterQuery(filters, [
    "dateFrom",
    "dateTo",
    "season",
    "status",
    "venue",
    "limit",
  ]);
  return makeURL(`${TEAM}/${id}/matches${query}`);
}

/** url: `https://api.football-data.org/v4/persons/${id}` */
export function person(id: number) {
  return makeURL(`${PERSON}/${id}`);
}

/** url: `https://api.football-data.org/v4/persons/${id}/matches` */
export function matchesOfPerson(id: number, filters: Filters) {
  const query = buildFilterQuery(filters, [
    "lineup",
    "e",
    "dateFrom",
    "dateTo",
    "competitions",
    "limit",
    "offset",
  ]);

  return makeURL(`${PERSON}/${id}/matches${query}`);
}
