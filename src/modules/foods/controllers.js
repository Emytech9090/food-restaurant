import foodService from "./services.js";

class FoodController {
  addFood = async (req, res, next) => {
    try {
      const { name, description, price, restaurantId } = req.body;
      const foodResponse = await foodService.addFood({
        name,
        description,
        price,
        restaurantId,
      });
      res.status(foodResponse.statusCode).json(foodResponse);
    } catch (error) {
      next(error);
    }
  };
  getAll = async (req, res, next) => {
    try {
      const { page, limit, sort, orderBy } = req.query;
      const foodResponse = await foodService.getAll({
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort,
        orderBy,
      });
      res.status(foodResponse.statusCode).json(foodResponse);
    } catch (error) {
      next(error);
    }
  };
  getAllRestaurantFood = async (req, res, next) => {
    try {
      const { page, limit, sort, orderBy } = req.query;
      const { restaurantId } = req.params;
      const foodResponse = await foodService.getAllRestaurantFood({
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort,
        orderBy,
        restaurantId,
      });
      res.status(foodResponse.statusCode).json(foodResponse);
    } catch (error) {
      next(error);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const { foodId } = req.params;
      const foodResponse = await foodService.getOne({
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
      const data = req.body;
      const foodResponse = await foodService.updateOne({
        foodId,
        data,
      });
      res.status(foodResponse.statusCode).json(foodResponse);
    } catch (error) {
      next(error);
    }
  };

  deleteOne = async (req, res, next) => {
    try {
      const { foodId } = req.params;
      const foodResponse = await foodService.deleteOne({
        foodId,
      });
      res.status(foodResponse.statusCode).json(foodResponse);
    } catch (error) {
      next(error);
    }
  };
}

const foodController = new FoodController();
export default foodController;
