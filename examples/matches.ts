import { football } from "./client.ts";
import { writeFile } from "./write_data.ts";

football.matches({ "dateFrom": "2024-09-21", "dateTo": "2024-09-22" })
  .then((resp) => {
    writeFile("matches", resp.data);
  })
  .catch((err) => console.log(err));
