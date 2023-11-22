// url_test.ts
import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import {
  areas,
  areasById,
  competition,
  competitions,
  match,
  matchesOfCompetition,
  matchesOfPerson,
  matchesOfTeam,
  person,
  standingsOfCompetition,
  teams,
  teamsOfCompetition,
} from "../src/rest.ts";

Deno.test("areas", () => {
  const url = areas();
  assertEquals(url, new URL("https://api.football-data.org/v4/areas"));
});

Deno.test("areas by id", () => {
  const url = areasById(2077);
  assertEquals(url, new URL("https://api.football-data.org/v4/areas/2077"));
});

Deno.test("competitions", () => {
  const url = competitions();
  assertEquals(url, new URL("https://api.football-data.org/v4/competitions"));
});

Deno.test("competitions with areas filters", () => {
  const filter = {
    areas: [100, 2000],
  };

  assertEquals(
    competitions(filter),
    new URL(`https://api.football-data.org/v4/competitions?areas=100,2000`),
  );
});

Deno.test("competition by id", () => {
  assertEquals(
    competition(2001),
    new URL(`https://api.football-data.org/v4/competitions/2001`),
  );
});

Deno.test("competition by code", () => {
  assertEquals(
    competition("PL"),
    new URL(`https://api.football-data.org/v4/competitions/PL`),
  );
});

Deno.test("standings of a competition", () => {
  const filters = {
    season: 2023,
    matchday: 15,
    date: "2023-01-01",
  };
  assertEquals(
    standingsOfCompetition("PL", filters),
    new URL(
      `/v4/competitions/PL/standings?season=2023&matchday=15&date=2023-01-01`,
      `https://api.football-data.org`,
    ),
  );
});

Deno.test("scorers of a competition", () => {
  const filters = {
    season: 2023,
    matchday: 15,
    date: "2023-01-01",
  };
  assertEquals(
    standingsOfCompetition("PL", filters),
    new URL(
      `/v4/competitions/PL/standings?season=2023&matchday=15&date=2023-01-01`,
      `https://api.football-data.org`,
    ),
  );
});

Deno.test("matches of a competition", () => {
  const filters = {
    season: "2021",
  };
  assertEquals(
    matchesOfCompetition("PL", filters),
    new URL(
      `/v4/competitions/PL/matches?season=2021`,
      `https://api.football-data.org`,
    ),
  );
});

Deno.test("teams of a competition", () => {
  const filters = {
    season: "2021",
  };
  assertEquals(
    teamsOfCompetition("PL", filters),
    new URL(
      `/v4/competitions/PL/teams?season=2021`,
      `https://api.football-data.org`,
    ),
  );
});

Deno.test("match", () => {
  const filters = {
    ids: [2021, 2022],
  };
  assertEquals(
    match(2021, filters),
    new URL(
      `/v4/matches?ids=2021,2022`,
      `https://api.football-data.org`,
    ),
  );
});

Deno.test("list all teams", () => {
  assertEquals(
    teams(),
    new URL(
      `/v4/teams`,
      `https://api.football-data.org`,
    ),
  );
});

Deno.test("matches of team", () => {
  assertEquals(
    matchesOfTeam(583, {
      "dateFrom": "2021-07-01",
      "dateTo": "2022-01-01",
    }),
    new URL(
      `/v4/teams/583/matches?dateFrom=2021-07-01&dateTo=2022-01-01`,
      `https://api.football-data.org`,
    ),
  );
});

Deno.test("person", () => {
  assertEquals(
    person(16275),
    new URL(
      `/v4/persons/16275`,
      `https://api.football-data.org`,
    ),
  );
});

Deno.test("matches of a person", () => {
  assertEquals(
    matchesOfPerson(16275, {
      e: "GOAL",
      limit: 5,
    }),
    new URL(
      `/v4/persons/16275/matches?e=GOAL&limit=5`,
      `https://api.football-data.org`,
    ),
  );
});
