import express from "express";
import envs from "./config/env.js";

const app = express();

app.listen(envs.PORT, () => {});
