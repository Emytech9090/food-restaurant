import { compareSync, hashSync } from "bcryptjs";
import User from "../users/model.js";
import jwt from "jsonwebtoken";
import envs from "../../config/env.js";
import { generateOtp } from "../../utils/index.js";
import sendEmail from "../../services/sendEmail.js";
class Authservice {
  signUp = async ({ password, email, setCookie }) => {
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
    const otp = generateOtp();
    setCookie("otp", otp, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    await sendEmail({
      subject: "Email Verification",
      to: email,
      template: "otp",
      data: { otp },
    });
    return {
      statusCode: 200,
      message: "sign up successful",
    };
  };
  signIn = async ({ email, password }) => {
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
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return {
        statusCode: 400,
        message: "User with this email does not exist",
      };
    }

    const isMatched = compareSync(password, foundUser.password);
    if (!isMatched) {
      return {
        statusCode: 403,
        message: "Wrong password, try again",
      };
    }

    const accessToken = jwt.sign(
      {
        userId: foundUser.id,
        role: foundUser.role,
        email: foundUser.email,
      },
      envs.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    // await sendEmail({
    //   subject: "Welcome to food man",
    //   to: email,
    //   htmlTemplate: "login",
    //   data: { email },
    // });
    return {
      data: { accessToken },
      statusCode: 200,
      message: "logged in successfully",
    };
  };
  signOut = async () => {
    return {
      message: "sign out successfully",
      statusCode: 200,
    };
  };
  forgotPassword = async ({ email, setCookie }) => {
    if (!email) {
      return {
        statusCode: 400,
        message: "email is require to reset password",
      };
    }
    const otp = generateOtp();

    setCookie("email_otp", otp, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    await sendEmail({
      subject: "Reset password",
      to: email,
      template: "forgot_password",
      data: { otp },
    });

    return {
      statusCode: 200,
      message: "forgot password proccessed successfully",
    };
  };
  resetPassword = async ({ secret, otp, email, password }) => {
    if (!password) {
      return {
        statusCode: 400,
        message: "Password is require to reset your password",
      };
    }
    if (!email) {
      return {
        statusCode: 400,
        message: "Email is require to reset your password",
      };
    }
    if (!otp) {
      return {
        statusCode: 400,
        message: "OTP is require to reset your password",
      };
    }

    if (!secret) {
      return {
        statusCode: 400,
        message: "Invalid reset password process",
      };
    }

    if (secret !== otp) {
      return { statusCode: 400, message: "Invalid OTP" };
    }
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return {
        statusCode: 400,
        message: "User with this email does not exist",
      };
    }

    const hashedPassword = hashSync(password, 12);
    await User.updateOne({ email }, { password: hashedPassword });

    return {
      statusCode: 200,
      message: "password reset successful",
    };
  };

  verifyEmail = async (email, otp, secret) => {
    if (!email) {
      return {
        statusCode: 400,
        message: "Email is required",
      };
    }
    if (!otp) {
      return {
        statusCode: 400,
        message: "OTP is required",
      };
    }
    if (!secret) {
      return {
        statusCode: 400,
        message: "OTP is required",
      };
    }
    if (secret !== otp) {
      return { statusCode: 400, message: "Invalid OTP" };
    }
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return {
        statusCode: 404,
        message: "This does not exist",
      };
    }

    await User.updateOne({ email }, { isEmailVerified: true });
  };

  verifyOtp = async (email, otp) => {
    if (!email) {
      return {
        statusCode: 400,
        message: "Email is required",
      };
    }
    if (!otp) {
      return {
        statusCode: 400,
        message: "OTP is required",
      };
    }
    if (!secret) {
      return {
        statusCode: 400,
        message: "OTP is required",
      };
    }
    if (secret !== otp) {
      return { statusCode: 400, message: "Invalid OTP" };
    }
    return {
      statusCode: 200,
      message: "otp verified",
    };
  };
}

const authservice = new Authservice();
export default authservice;
