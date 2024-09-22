import { football } from "./client.ts";
import { writeFile } from "./write_data.ts";

football.competitions()
  .then((resp) => {
    writeFile("competitions", resp.data);
  })
  .catch((err) => console.log(err));

football.competition("PL")
  .then((resp) => {
    writeFile("competition_by_id", resp.data);
  })
  .catch((err) => console.log(err));

football.standingsOfCompetition("PL")
  .then((resp) => {
    writeFile("standings_of_competition", resp.data);
  })
  .catch((err) => console.log(err));

football.scorersOfCompetition("PL")
  .then((resp) => {
    writeFile("scorers_of_competitions", resp.data);
  })
  .catch((err) => console.log(err));

football.matchesOfCompetition("PL")
  .then((resp) => {
    writeFile("matches_of_competitions", resp.data);
  })
  .catch((err) => console.log(err));

football.teamsOfCompetition("PL")
  .then((resp) => {
    writeFile("teams_of_competitions", resp.data);
  })
  .catch((err) => console.log(err));
