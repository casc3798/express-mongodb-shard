import dotenv from "dotenv";
dotenv.config();

export const CREDENTIALS = {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
};
