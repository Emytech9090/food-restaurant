import { hashSync } from "bcryptjs";
import User from "../users/model.js";

class Authservice {
  signUp = async ({ password, email }) => {
    if (!password) {
      return {
        statusCode: 400,
        message: "Password is require to sign up",
      };
    }
    if (!email) {
      return {
        statusCode: 400,
        message: "Email is require to sign up",
      };
    }
    const hashedPassword = hashSync(password, 12);
    const foundUser = await User.findOne({
      email,
    });
    if (foundUser) {
      return {
        statusCode: 409,
        message: "User alread exist",
      };
    }
    const user = await User.create({ email, password: hashedPassword });

    if (!user) {
      return {
        statusCode: 500,
        message: "User was not created",
      };
    }
  };
  signIn = async () => {};
  signOut = async () => {};
  forgotPassword = async () => {};
  verifyEmail = async () => {};
  verifyOtp = async () => {};
}

const authservice = new Authservice();
export default authservice;
