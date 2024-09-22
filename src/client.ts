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
import type { Filters, MatchFilters } from "./types.ts";
import type { FootballResponse } from "./types/response.ts";
import type { Area, AreasResult } from "./types/areas.ts";
import type {
  Competition,
  CompetitionsResult,
  MatchesOfCompetition,
  ScoersResult,
  StandingsResult,
  TeamsOfCompetition,
} from "./types/competitions.ts";
import type { MatchesResult } from "./types/matches.ts";
import type {
  Head2Head,
  MatchesOfTeam,
  Team,
  TeamsResult,
} from "./types/teams.ts";
import type { PersonDetail } from "./types/person.ts";

export class Client {
  private authFetch: <Type>(url: URL) => Promise<FootballResponse<Type>>;
  constructor(token: string) {
    this.authFetch = makeAuthFetchFn(token);
  }

  /** list all areas */
  areas() {
    return this.authFetch<AreasResult>(areas());
  }

  /** given a parent id, return all child ids */
  areasById(id: number | string) {
    return this.authFetch<Area>(areasById(id));
  }

  /** list competitions */
  competitions(filters: Filters = {}) {
    return this.authFetch<CompetitionsResult>(competitions(filters));
  }

  /** info of a specific competition by its id or code */
  competition(idOrCode: number | string = "PL", filters: Filters = {}) {
    return this.authFetch<Competition>(competition(idOrCode, filters));
  }

  /** standings info of a specific competition */
  standingsOfCompetition(
    idOrCode: number | string = "PL",
    filters: Filters = {},
  ) {
    return this.authFetch<StandingsResult>(
      standingsOfCompetition(idOrCode, filters),
    );
  }

  /** top scorer info of a specific competition */
  scorersOfCompetition(
    idOrCode: number | string = "PL",
    filters: Filters = {},
  ) {
    return this.authFetch<ScoersResult>(
      scorersOfCompetition(idOrCode, filters),
    );
  }

  /** matches of a competition */
  matchesOfCompetition(
    idOrCode: number | string = "PL",
    filters: Filters = {},
  ) {
    return this.authFetch<MatchesOfCompetition>(
      matchesOfCompetition(idOrCode, filters),
    );
  }

  /** teams info of its competition */
  teamsOfCompetition(idOrCode: number | string = "PL", filters: Filters = {}) {
    return this.authFetch<TeamsOfCompetition>(
      teamsOfCompetition(idOrCode, filters),
    );
  }

  /** match info */
  matches(filters: MatchFilters = { ids: [] }) {
    return this.authFetch<MatchesResult>(match(filters));
  }

  /** head2head history info of a match */
  head2head(matchId: number, filters: Filters = {}) {
    return this.authFetch<Head2Head>(head2headOfMatch(matchId, filters));
  }

  /** list all teams */
  teams() {
    return this.authFetch<TeamsResult>(teams());
  }

  /** team info */
  team(id: number) {
    return this.authFetch<Team>(team(id));
  }

  /** matches info of a team */
  matchesOfTeam(id: number, filters: Filters = {}) {
    return this.authFetch<MatchesOfTeam>(matchesOfTeam(id, filters));
  }

  /** person info */
  person(id: number) {
    return this.authFetch<PersonDetail>(person(id));
  }

  /** matches of a person */
  matchesOfPerson(id: number, filters: Filters = {}) {
    return this.authFetch<MatchesOfCompetition>(matchesOfPerson(id, filters));
  }
}
