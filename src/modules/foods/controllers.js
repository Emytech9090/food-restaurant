import foodService from "./services.js";

class FoodController {
  getAll = async (req, res, next) => {
    try {
      const { page, limit, sort, orderBy } = req.query;
      const foodResponse = foodService.getAll({
        query: { page, limit, sort, orderBy },
      });
      res.status(foodResponse.statusCode).json(foodResponse);
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const { foodId } = req.params;
      const foodResponse = foodService.getOne({
        foodId,
      });
      res.status(foodResponse.statusCode).json(foodResponse);
    } catch (error) {
      next(error);
    }
  };

  updateOne = async (req, res, next) => {
    try {
      const { foodId } = req.params;
      const foodResponse = foodService.updateOne({
        foodId,
      });
      res.status(foodResponse.statusCode).json(foodResponse);
    } catch (error) {
      next(error);
    }
  };
  updateAll = async (req, res, next) => {
    try {
      const { foodIds } = req.body;
      const foodResponse = foodService.updateAll({
        foodIds,
      });
      res.status(foodResponse.statusCode).json(foodResponse);
    } catch (error) {
      next(error);
    }
  };

  deleteOne = async (req, res, next) => {
    try {
      const { foodId } = req.params;
      const foodResponse = foodService.updateOne({
        foodId,
      });
      res.status(foodResponse.statusCode).json(foodResponse);
    } catch (error) {
      next(error);
    }
  };
  deleteAll = async (req, req, next) => {
    try {
      const { foodIds } = req.body;
      const foodResponse = foodService.updateAll({
        foodIds,
      });
      res.status(foodResponse.statusCode).json(foodResponse);
    } catch (error) {
      next(error);
    }
  };
}

const foodController = new FoodController();
export default foodController;
