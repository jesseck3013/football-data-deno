import { football } from "./client.ts";

football.competitions()
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));

football.competition("PL")
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));

football.standingsOfCompetition("PL")
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));

football.scorersOfCompetition("PL")
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));

football.matchesOfCompetition("PL")
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));

football.teamsOfCompetition("PL")
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));
