import express from "express";
//import "express-async-errors"
//import "reflect-metadata";
//import "./database";

import { router } from "./routes";
const app = express();

app.use(express.json());

app.use(router);

app.listen(3000);
