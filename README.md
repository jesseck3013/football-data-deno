# football-data-deno

A deno client for interacting with the
[football-data.org api v4](https://www.football-data.org/documentation/quickstart).


## Install Package
```sh
deno add jsr:@freekick/football-data-client
```

## RESTful APIs

```ts
import { Client } from "@freekick/football-data-client";

const token = "";
const football = new Client(token);

// list all areas
football.areas()
  .then(console.log)
  .catch((err) => console.log(err));
```

Please see `examples` folder to check for more endpoints.
