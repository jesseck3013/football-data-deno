import { football } from "./client.ts";
import { writeFile } from "./write_data.ts";

football.person(16275)
  .then((resp) => {
    writeFile("person_by_id", resp.data);
  })
  .catch((err) => console.log(err));

football.matchesOfPerson(16275, { limit: 10 })
  .then((resp) => {
    writeFile("matches_of_person", resp.data);
  })
  .catch((err) => console.log(err));
