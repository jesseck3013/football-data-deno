import type { Coach, PersonBase } from "./person.ts";
import type { Area } from "./areas.ts";
import type { CompetitionBase } from "./competitions.ts";
import type { Filters, Result } from "../types.ts";
import type { Match } from "./matches.ts";

export interface TeamsResult {
    count: number;
    filters: Filters;
    teams: Team[];
}

export interface TeamBase {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
}

export interface Team {
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string | null;
    lastUpdated: string;
}

export interface TeamDetail extends Team {
    area: Area;
    runningCompetitions: CompetitionBase[];
    coach: Coach;
    squad: PersonBase[];
    staff: PersonBase[];
}

export interface ResultSet {
    count: number;
    competitions: string;
    first: string;
    last: string;
    played: number;
    wins: number;
    draws: number;
    losses: number;
}

export interface MatchesOfTeam extends Result {
    resultSet: ResultSet;
    matches: Match[];
}

interface Head2HeadResultSet {
    count: number;
    competitions: string;
    first: string;
    last: string;
}

interface TeamData {
    id: number;
    name: string;
    wins: number;
    draws: number;
    losses: number;
}

export interface Aggregates {
    numberOfMatches: number;
    totalGoals: number;
    homeTeam: TeamData;
    awayTeam: TeamData;
}

export interface Head2Head extends Result {
    filters: Filters;
    resultSet: Head2HeadResultSet;
    aggregates: Aggregates;
    matches: Match[];
}
