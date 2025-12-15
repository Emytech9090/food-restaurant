import { Router } from "express";
import userController from "./controllers.js";
const userRouter = Router();

userRouter.get("/all", userController.getAll);
userRouter.get("/session", userController.getSession);
userRouter.get("/:userId", userController.getOne);
userRouter.patch("/session", userController.updateSession);
userRouter.patch("/:userId", userController.updateOne);
userRouter.delete("/session", userController.deleteSession);
userRouter.delete("/:userId", userController.deleteOne);

export default userRouter;
