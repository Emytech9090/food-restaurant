import userService from "./services.js";

class UserController {
  getAll = async (req, res, next) => {
    try {
      const { page, limit, sort, orderBy } = req.query;
      const userResponse = await userService.getAll({
        page,
        limit,
        sort,
        orderBy,
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const userResponse = await userService.getOne({
        userId,
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };
  getSession = async (req, res, next) => {
    try {
      const { userId } = req.user;
      const userResponse = await userService.getSession({
        userId,
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };

  updateOne = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { firstName, lastName, email } = req.body;

      const userResponse = await userService.updateOne({
        userId,
        data: { firstName, lastName, email },
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };

  updateSession = async (req, res, next) => {
    try {
      const { userId } = req.user;
      const { firstName, lastName, email } = req.body;
      const userResponse = await userService.updateSession({
        userId,
        data: { firstName, lastName, email },
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };

  deleteOne = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const userResponse = await userService.deleteOne({
        userId,
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };

  deleteSession = async (req, res, next) => {
    try {
      const { userId } = req.user;
      const userResponse = await userService.deleteSession({
        userId,
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };
}

const userController = new UserController();
export default userController;
