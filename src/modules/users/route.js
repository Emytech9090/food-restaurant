import { Router } from "express";
import userController from "./controllers.js";
import {
  adminMiddleware,
  ownerMiddleware,
} from "../../middleware/authMiddleware.js";
const userRouter = Router();

userRouter.get("/all", adminMiddleware, userController.getAll);
userRouter.get("/session", ownerMiddleware, userController.getSession);
userRouter.get("/:userId", userController.getOne);
userRouter.patch("/session", ownerMiddleware, userController.updateSession);
userRouter.patch("/:userId", ownerMiddleware, userController.updateOne);
userRouter.delete("/session", ownerMiddleware, userController.deleteSession);
userRouter.delete("/:userId", ownerMiddleware, userController.deleteOne);

export default userRouter;
