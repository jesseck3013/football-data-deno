import { football } from "./client.ts";

football.teams()
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));

football.team(1)
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));

football.matchesOfTeam(1, { limit: 5 })
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));
