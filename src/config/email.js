import nodemailer from "nodemailer";
import envs from "./env.js";
const transporter = nodemailer.createTransport({
  service: envs.EMAIL_SERVICE,
  host: envs.EMAIL_HOST,
  port: envs.EMAIL_USER,
  secure: envs.NODE_ENV === "production",
  auth: {
    user: envs.EMAIL_USER,
    pass: envs.EMAIL_PASS,
  },
});
export default transporter;
