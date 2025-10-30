import { Router } from "express";
import authRouter from "../modules/auth/routes.js";
import userRouter from "../modules/users/route.js";
import orderRouter from "../modules/orders/route.js";
import restaurantRouter from "../modules/resturants/route.js";

const appRouter = Router();

appRouter.use("/auth", authRouter);
appRouter.use("/users", userRouter);
appRouter.use("/orders", orderRouter);
appRouter.use("/restaurants", restaurantRouter);

export default appRouter;
