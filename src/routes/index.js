import { Router } from "express";
import authRouter from "../modules/auth/routes.js";
import userRouter from "../modules/users/route.js";
import orderRouter from "../modules/orders/route.js";
import restaurantRouter from "../modules/resturants/route.js";
import foodRouter from "../modules/foods/route.js";

const appRouter = Router();
const API_PREFIX = "/api/v1";
appRouter.use(`${API_PREFIX}/auth`, authRouter);
appRouter.use(`${API_PREFIX}/users`, userRouter);
appRouter.use(`${API_PREFIX}/foods`, foodRouter);
appRouter.use(`${API_PREFIX}/orders`, orderRouter);
appRouter.use(`${API_PREFIX}/restaurants`, restaurantRouter);

export default appRouter;
