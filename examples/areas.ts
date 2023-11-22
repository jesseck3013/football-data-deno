import { football } from "./client.ts";

football.areas()
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));

football.areasById(2077)
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));
