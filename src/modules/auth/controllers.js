import authservice from "./services.js";
class AuthController {
  signUp = async (req, res, next) => {
    try {
      const { password, email } = req.body;
      const authResponse = await authservice.signUp({
        password,
        email,
        setCookie: res.cookie.bind(res),
      });

      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  signIn = async (req, res, next) => {
    try {
      const { password, email } = req.body;
      const authResponse = await authservice.signIn({
        password,
        email,
      });
      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  signOut = async (req, res, next) => {
    try {
      const authResponse = await authservice.signOut();
      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  forgotPassword = async (req, res, next) => {
    try {
      const { email } = req.body;
      const authResponse = await authservice.forgotPassword({
        email,
        setCookie: res.cookie.bind(res),
      });

      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  resetPassword = async (req, res, next) => {
    try {
      const { email, otp, password } = req.body;
      const secret = req.cookies.email_otp;
      const authResponse = await authservice.resetPassword({
        email,
        password,
        otp,
        secret,
      });
      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  x;
  verifyEmail = async (req, res, next) => {
    try {
      const { email, otp } = req.body;
      const secret = req.cookies?.otp;

      const authResponse = await authservice.verifyEmail({
        email,
        otp,
        secret,
      });
      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  verifyOtp = async (req, res) => {
    try {
      const { email, otp } = req.body;
      const authResponse = await authservice.forgotPassword({
        email,
        otp,
      });
      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
}

const authController = new AuthController();
export default authController;
