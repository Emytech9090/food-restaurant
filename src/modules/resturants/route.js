import { Router } from "express";
import restaurantController from "./controllers.js";
const restaurantRouter = Router();

restaurantRouter.post("/add-restaurant", restaurantController.addRestaurant);
restaurantRouter.get("/all", restaurantController.getAll);
restaurantRouter.get("/:restaurantId", restaurantController.getOne);
restaurantRouter.patch("/all", restaurantController.updateAll);
restaurantRouter.patch("/:restaurantId", restaurantController.updateOne);
restaurantRouter.delete("/all", restaurantController.deleteAll);
restaurantRouter.delete("/:restaurantId", restaurantController.deleteOne);

export default restaurantRouter;
