# football-data-deno

A deno client for interacting with the
[football-data.org api v4](https://www.football-data.org/documentation/quickstart).

## RESTful APIs

```ts
import { Client } from "https://deno.land/x/football_data/mod.ts";

const token = "";
const football = new Client(token);

// list all areas
football.areas()
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));
```

Please see `examples` folder to check for more endpoints.
