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
import type { MatchesOfPerson, PersonDetail } from "./types/person.ts";

export class Client {
  private authFetch: <Type>(url: URL) => Promise<FootballResponse<Type>>;
  constructor(token: string) {
    this.authFetch = makeAuthFetchFn(token);
  }

  /** list all areas */
  areas(): Promise<FootballResponse<AreasResult>> {
    return this.authFetch<AreasResult>(areas());
  }

  /** given a parent id, return all child ids */
  areasById(id: number | string): Promise<FootballResponse<Area>> {
    return this.authFetch<Area>(areasById(id));
  }

  /** list competitions */
  competitions(
    filters: Filters = {},
  ): Promise<FootballResponse<CompetitionsResult>> {
    return this.authFetch<CompetitionsResult>(competitions(filters));
  }

  /** info of a specific competition by its id or code */
  competition(
    idOrCode: number | string = "PL",
    filters: Filters = {},
  ): Promise<FootballResponse<Competition>> {
    return this.authFetch<Competition>(competition(idOrCode, filters));
  }

  /** standings info of a specific competition */
  standingsOfCompetition(
    idOrCode: number | string = "PL",
    filters: Filters = {},
  ): Promise<FootballResponse<StandingsResult>> {
    return this.authFetch<StandingsResult>(
      standingsOfCompetition(idOrCode, filters),
    );
  }

  /** top scorer info of a specific competition */
  scorersOfCompetition(
    idOrCode: number | string = "PL",
    filters: Filters = {},
  ): Promise<FootballResponse<ScoersResult>> {
    return this.authFetch<ScoersResult>(
      scorersOfCompetition(idOrCode, filters),
    );
  }

  /** matches of a competition */
  matchesOfCompetition(
    idOrCode: number | string = "PL",
    filters: Filters = {},
  ): Promise<FootballResponse<MatchesOfCompetition>> {
    return this.authFetch<MatchesOfCompetition>(
      matchesOfCompetition(idOrCode, filters),
    );
  }

  /** teams info of its competition */
  teamsOfCompetition(
    idOrCode: number | string = "PL",
    filters: Filters = {},
  ): Promise<FootballResponse<TeamsOfCompetition>> {
    return this.authFetch<TeamsOfCompetition>(
      teamsOfCompetition(idOrCode, filters),
    );
  }

  /** match info */
  matches(
    filters: MatchFilters = { ids: [] },
  ): Promise<FootballResponse<MatchesResult>> {
    return this.authFetch<MatchesResult>(match(filters));
  }

  /** head2head history info of a match */
  head2head(
    matchId: number,
    filters: Filters = {},
  ): Promise<FootballResponse<Head2Head>> {
    return this.authFetch<Head2Head>(head2headOfMatch(matchId, filters));
  }

  /** list all teams */
  teams(): Promise<FootballResponse<TeamsResult>> {
    return this.authFetch<TeamsResult>(teams());
  }

  /** team info */
  team(id: number): Promise<FootballResponse<Team>> {
    return this.authFetch<Team>(team(id));
  }

  /** matches info of a team */
  matchesOfTeam(
    id: number,
    filters: Filters = {},
  ): Promise<FootballResponse<MatchesOfTeam>> {
    return this.authFetch<MatchesOfTeam>(matchesOfTeam(id, filters));
  }

  /** person info */
  person(id: number): Promise<FootballResponse<PersonDetail>> {
    return this.authFetch<PersonDetail>(person(id));
  }

  /** matches of a person */
  matchesOfPerson(
    id: number,
    filters: Filters = {},
  ): Promise<FootballResponse<MatchesOfPerson>> {
    return this.authFetch<MatchesOfPerson>(matchesOfPerson(id, filters));
  }
}
