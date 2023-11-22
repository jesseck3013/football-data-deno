# football-data-deno

A JavaScript client for interacting with the
[football-data.org api v4](https://www.football-data.org/documentation/quickstart).

## Usage

```ts
import { Client } from "https://deno.land/x/football_data/mod.ts";

const token = "";
const football = new Client(token);

football.areas()
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err));
```
