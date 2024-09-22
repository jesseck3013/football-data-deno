import type { Result } from "../types.ts";
import type { AreaRefernece } from "./areas.ts";
import type { CompetitionBase } from "./competitions.ts";
import type { Match } from "./matches.ts";
import type { Team } from "./teams.ts";

export interface PersonBase {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
}

export interface Player extends PersonBase {
    section: string | null;
    position: string | null;
    shirtNumber: number | null;
    lastUpdated: string;
}

export interface Coach extends PersonBase {
    contract: Contract;
}

export interface Person extends PersonBase {
    currentTeam: Team;
}

export interface Contract {
    start: string;
    until: string;
}

export interface PersonDetail extends PersonBase {
    section: string | null;
    position: string | null;
    shirtNumber: number | null;
    lastUpdated: string;
    currentTeam: CurrentTeam;
}

export interface CurrentTeam {
    area: AreaRefernece;
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    runningCompetitions: CompetitionBase[];
    contract: Contract;
}

interface ResultSet {
    count: number;
    competitions: string;
    first: string;
    last: string;
}

export interface MatchesOfPerson extends Result {
    resultSet: ResultSet;
    aggregations: string;
    person: Player;
    matches: Match[];
}
