import { Router } from "express";
import orderController from "./controllers.js";
const orderRouter = Router();

orderRouter.get("/all", orderController.getAll);
orderRouter.get("/:orderId", orderController.getOne);
orderRouter.patch("/all", orderController.updateAll);
orderRouter.patch("/:orderId", orderController.updateOne);
orderRouter.delete("/all", orderController.deleteAll);
orderRouter.delete("/:orderId", orderController.deleteOne);

export default orderRouter;
