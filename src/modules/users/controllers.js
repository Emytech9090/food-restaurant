import userService from "./services.js";

class UserController {
  getAll = async (req, res, next) => {
    try {
      const { page, limit, sort, orderBy } = req.query;
      const userResponse = userService.getAll({
        query: { page, limit, sort, orderBy },
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const userResponse = userService.getOne({
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
      const userResponse = userService.getSession({
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
      const userResponse = userService.updateOne({
        userId,
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };
  updateAll = async (req, res, next) => {
    try {
      const { userIds } = req.body;
      const userResponse = userService.updateAll({
        userIds,
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };
  updateSession = async (req, res, next) => {
    try {
      const { userId } = req.user;
      const userResponse = userService.updateSession({
        userId,
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };

  deleteOne = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const userResponse = userService.updateOne({
        userId,
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };
  deleteAll = async (req, res, next) => {
    try {
      const { userIds } = req.body;
      const userResponse = userService.updateAll({
        userIds,
      });
      res.status(userResponse.statusCode).json(userResponse);
    } catch (error) {
      next(error);
    }
  };
  deleteSession = async (req, res, next) => {
    try {
      const { userId } = req.user;
      const userResponse = userService.deleteSession({
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
