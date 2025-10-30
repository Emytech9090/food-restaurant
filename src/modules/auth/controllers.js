import authservice from "./services.js";
class AuthController {
  signUp = async (req, res, next) => {
    try {
      const { password, email } = req.body;
      const authResponse = authservice.signUp({
        password,
        email,
      });
      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  signIn = async (req, res, next) => {
    try {
      const { password, email } = req.body;
      const authResponse = authservice.signIn({
        password,
        email,
      });
      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  signOut = async (req, res) => {
    try {
      const authResponse = authservice.signOut();
      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  forgotPassword = async (req, res, next) => {
    try {
      const { email } = req.body;
      const authResponse = authservice.forgotPassword({
        email,
      });
      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  resetPassword = async (req, res, next) => {
    try {
      const { email, otp } = req.body;
      const authResponse = authservice.resetPassword({
        email,
        otp,
      });
      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  verifyEmail = async (req, res, next) => {
    try {
      const { email, otp } = req.body;
      const authResponse = authservice.forgotPassword({
        email,
        otp,
      });
      res.status(authResponse.statusCode).json(authResponse);
    } catch (error) {
      next(error);
    }
  };
  verifyOtp = async (req, res) => {
    try {
      const { email, otp } = req.body;
      const authResponse = authservice.forgotPassword({
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
