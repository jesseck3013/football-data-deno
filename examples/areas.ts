import { football } from "./client.ts";
import { writeFile } from "./write_data.ts";

football.areas()
  .then((resp) => {
    writeFile("areas", resp.data);
  })
  .catch((err) => console.log(err));

football.areasById(2077)
  .then((resp) => {
    writeFile("areas_by_id", resp.data);
  })
  .catch((err) => console.log(err));
