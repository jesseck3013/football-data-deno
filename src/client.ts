import { makeAuthFetchFn } from "./utils.ts";
import {
  areas,
  areasById,
  competition,
  competitions,
  head2headOfMatch,
  match,
  matchesOfCompetition,
  matchesOfPerson,
  matchesOfTeam,
  person,
  scorersOfCompetition,
  standingsOfCompetition,
  team,
  teams,
  teamsOfCompetition,
} from "./rest.ts";
import { Filters, MatchFilters } from "./types.ts";

export class Client {
  private authFetch: (url: URL) => Promise<Response>;
  constructor(token: string) {
    this.authFetch = makeAuthFetchFn(token);
  }

  /** list all areas */
  areas() {
    return this.authFetch(areas());
  }

  /** given a parent id, return all child ids */
  areasById(id: number | string) {
    return this.authFetch(areasById(id));
  }

  /** list competitions */
  competitions(filters: Filters = {}) {
    return this.authFetch(competitions(filters));
  }

  /** info of a specific competition by its id or code */
  competition(idOrCode: number | string = "PL", filters: Filters = {}) {
    return this.authFetch(competition(idOrCode, filters));
  }

  /** standings info of a specific competition */
  standingsOfCompetition(
    idOrCode: number | string = "PL",
    filters: Filters = {},
  ) {
    return this.authFetch(standingsOfCompetition(idOrCode, filters));
  }

  /** top scorer info of a specific competition */
  scorersOfCompetition(
    idOrCode: number | string = "PL",
    filters: Filters = {},
  ) {
    return this.authFetch(scorersOfCompetition(idOrCode, filters));
  }

  /** matches of a competition */
  matchesOfCompetition(
    idOrCode: number | string = "PL",
    filters: Filters = {},
  ) {
    return this.authFetch(matchesOfCompetition(idOrCode, filters));
  }

  /** teams info of its competition */
  teamsOfCompetition(idOrCode: number | string = "PL", filters: Filters = {}) {
    return this.authFetch(teamsOfCompetition(idOrCode, filters));
  }

  /** match info */
  matches(filters: MatchFilters = { ids: [] }) {
    return this.authFetch(match(filters));
  }

  /** head2head history info of a match */
  head2head(matchId: number, filters: Filters = {}) {
    return this.authFetch(head2headOfMatch(matchId, filters));
  }

  /** list all teams */
  teams() {
    return this.authFetch(teams());
  }

  /** team info */
  team(id: number) {
    return this.authFetch(team(id));
  }

  /** matches info of a team */
  matchesOfTeam(id: number, filters: Filters = {}) {
    return this.authFetch(matchesOfTeam(id, filters));
  }

  /** person info */
  person(id: number) {
    return this.authFetch(person(id));
  }

  /** matches of a person */
  matchesOfPerson(id: number, filters: Filters = {}) {
    return this.authFetch(matchesOfPerson(id, filters));
  }
}
