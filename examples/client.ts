import { Client } from "../src/client.ts";

const token = Deno.env.get("FOOT_BALL_TOKEN") as string;

export const football = new Client(token);
