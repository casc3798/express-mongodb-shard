import { MongoClient } from "mongodb";
import { CREDENTIALS } from "./credentials";

const uri = `mongodb://${CREDENTIALS.DB_HOST}:${CREDENTIALS.DB_PORT}/${CREDENTIALS.DB_NAME}?retryWrites=True&w=majority`;

export const client = new MongoClient(uri);
