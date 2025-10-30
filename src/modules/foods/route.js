import { Router } from "express";
import foodController from "./controllers.js";
const foodRouter = Router();

foodRouter.get("/all", foodController.getAll);
foodRouter.get("/:foodId", foodController.getOne);
foodRouter.patch("/all", foodController.updateAll);
foodRouter.patch("/:foodId", foodController.updateOne);
foodRouter.delete("/all", foodController.deleteAll);
foodRouter.delete("/:foodId", foodController.deleteOne);

export default foodRouter;
