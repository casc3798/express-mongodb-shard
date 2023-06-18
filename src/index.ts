import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";

import { client } from "./database/client";

const app: Express = express();
const port = process.env.PORT;

app.get("/", async (req: Request, res: Response) => {
  try {
    console.log("ACA");
    const database = client.db("petsdb");
    const petCollection = database.collection("pet");
    // Query for a movie that has the title 'Back to the Future'
    const pet = await petCollection.findOne({ name: "Tail" });
    console.log(pet);
    if (!pet) {
      console.log("NO pet");
    }
    res.json({ message: "ok" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
