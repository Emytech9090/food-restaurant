import { Router } from "express";
import orderController from "./controllers.js";
const orderRouter = Router();

orderRouter.post("/add-order", orderController.addOrder);
orderRouter.get("/all", orderController.getAll);
orderRouter.get("/:orderId", orderController.getOne);
orderRouter.patch("/:orderId", orderController.updateOne);
orderRouter.delete("/:orderId", orderController.deleteOne);

export default orderRouter;
