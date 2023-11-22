import { football } from "./client.ts";

football.person(16275)
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));

football.matchesOfPerson(16275, { limit: 1 })
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));
