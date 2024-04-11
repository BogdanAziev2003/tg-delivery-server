import pg from "pg";

export const pool = new pg.Pool({
  user: "gen_user",
  password: "B.Aziev-03",
  host: "94.241.169.9",
  port: "5432",
  database: "good_food",
});

export const rioPool = new pg.Pool({
  user: "gen_user",
  password: "B.Aziev-03",
  host: "94.241.169.9",
  port: "5432",
  database: "rio",
});

export const sushiPool = new pg.Pool({
  user: "gen_user",
  password: "B.Aziev-03",
  host: "94.241.169.9",
  port: "5432",
  database: "sushi_bar",
});

export const icecreamPool = new pg.Pool({
  user: "gen_user",
  password: "B.Aziev-03",
  host: "94.241.169.9",
  port: "5432",
  database: "icecream",
});
