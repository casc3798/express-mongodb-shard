import { mongoMigrateCli } from "mongo-migrate-ts";

import { CREDENTIALS } from "../credentials";

mongoMigrateCli({
  uri: `mongodb://${CREDENTIALS.DB_HOST}:${CREDENTIALS.DB_PORT}`,
  database: CREDENTIALS.DB_NAME,
  migrationsDir: __dirname,
  migrationsCollection: "migrations_changelog",
});
