import { Router } from "express";
import foodController from "./controllers.js";
import {
  authMiddleware,
  ownerMiddleware,
} from "../../middleware/authMiddleware.js";
const foodRouter = Router();

foodRouter.post("/add-food", authMiddleware, foodController.addFood);
foodRouter.get("/all", foodController.getAll);
foodRouter.get("/all/:restaurantId", foodController.getAllRestaurantFood);
foodRouter.get("/:foodId", foodController.getOne);
foodRouter.patch(
  "/:foodId",
  authMiddleware,
  ownerMiddleware,
  foodController.updateOne
);
foodRouter.delete(
  "/:foodId",
  authMiddleware,
  ownerMiddleware,
  foodController.deleteOne
);

export default foodRouter;
