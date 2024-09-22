import { Filters } from "../types.ts";
import { AreaRefernece } from "./areas.ts";
import { CompetitionBase, Season } from "./competitions.ts";
import { Team } from "./teams.ts";

export interface MatchesResult {
    filters: Filters;
    resultSet: ResultSet;
    matches: Match[];
}

export interface ResultSet {
    count: number;
    competitions: string;
    first: string;
    last: string;
    played: number;
}

export interface Match {
    area: AreaRefernece;
    competition: CompetitionBase;
    season: Season;
    id: number;
    utcDate: string;
    status: string;
    matchday: number;
    stage: string;
    group: any;
    lastUpdated: string;
    homeTeam: Team;
    awayTeam: Team;
    score: Score;
    odds: any;
    referees: Referee[];
}

interface Referee {
    id: number;
    name: string;
    type: "REFEREE";
    nationality: string;
}

export interface Score {
    winner: string | null;
    duration: string;
    fullTime: Result;
    halfTime: Result;
}

export interface Result {
    home: number | null;
    away: number | null;
}
