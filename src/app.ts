import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";

import routes from "./app/routes/routes";

const app: Application = express();

app.use(
  cors({
    origin: "*",
  })
);

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use("/", (req, res) => {
  res.send("Working fine");
});

export default app;
