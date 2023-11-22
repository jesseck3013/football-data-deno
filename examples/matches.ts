import { football } from "./client.ts";

football.matches({ ids: [111] })
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));
