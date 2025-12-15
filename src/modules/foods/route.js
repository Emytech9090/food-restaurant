import { Router } from "express";
import foodController from "./controllers.js";
const foodRouter = Router();

foodRouter.post("/add-food", foodController.addFood);
foodRouter.get("/all", foodController.getAll);
foodRouter.get("/all/:restaurantId", foodController.getAllRestaurantFood);
foodRouter.get("/:foodId", foodController.getOne);
foodRouter.patch("/:foodId", foodController.updateOne);
foodRouter.delete("/:foodId", foodController.deleteOne);

export default foodRouter;
