import { Router } from "express";
import authController from "./controllers.js";

const authRouter = Router();

authRouter.post("/sign-up", authController.signUp);
authRouter.post("/sign-in", authController.signIn);
authRouter.post("/sign-out", authController.signOut);
authRouter.post("/forgot-password", authController.forgotPassword);
authRouter.post("/verify-email", authController.verifyEmail);
authRouter.post("/verify-otp", authController.verifyOtp);

export default authRouter;
