import express from "express";
import envs from "./config/env.js";
import { connectToBD } from "./config/db.js";
import cors from "cors";
import appRouter from "./routes/index.js";
import corsOption from "./config/cors.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(cors(corsOption));
app.use(appRouter);
app.use(errorHandler);
app.listen(envs.PORT, () => {
  connectToBD();
});
