import type { Result } from "../types.ts";
import type { AreaRefernece } from "./areas.ts";
import type { Match } from "./matches.ts";
import type { Player } from "./person.ts";
import type { Team, TeamBase } from "./teams.ts";

export interface CompetitionsResult extends Result {
    competitions: Competition[];
}

export interface CompetitionBase {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
}

export interface Competition extends CompetitionBase {
    area: AreaRefernece;
    plan: string;
    currentSeason: Season;
    numberOfAvailableSeasons: number;
    lastUpdated: string;
}

export interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number | null;
    winner: Team | null;
}

export interface StandingsResult extends Result {
    area: AreaRefernece;
    competition: CompetitionBase;
    season: Season;
    standings: Standing[];
}

export interface Standing {
    stage: string;
    type: string;
    group: any;
    table: Table[];
}

export interface Table {
    position: number;
    team: TeamBase;
    playedGames: number;
    form: any;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}

export interface ScoersResult extends Result {
    competition: CompetitionBase;
    season: Season;
    scorers: Scorer[];
}

export interface Scorer {
    player: Player;
    team: Team;
    playedMatches: number | null;
    goals: number | null;
    assists: number | null;
    penalties: number | null;
}

interface ResultSet {
    count: number;
    first: string;
    last: string;
    played: number;
}

export interface MatchesOfCompetition extends Result {
    resultSet: ResultSet;
    competition: CompetitionBase;
    matches: Match[];
}

export interface TeamsOfCompetition extends Result {
    competition: CompetitionBase;
    season: Season;
    teams: Team[];
}
