import { football } from "./client.ts";
import { writeFile } from "./write_data.ts";

football.teams()
  .then((resp) => {
    writeFile("teams", resp.data);
  })
  .catch((err) => console.log(err));

football.team(57)
  .then((resp) => {
    writeFile("team_by_id", resp.data);
  })
  .catch((err) => console.log(err));

football.matchesOfTeam(57, { limit: 5 })
  .then((resp) => {
    writeFile("matches_of_team", resp.data);
  })
  .catch((err) => console.log(err));

football.head2head(497741)
  .then((resp) => {
    writeFile("head2head", resp.data);
  })
  .catch((err) => console.log(err));
