import restaurantService from "./services.js";

class RestaurantController {
  addRestaurant = async (req, res, next) => {
    try {
      const { name, description } = req.body;
      const restaurantResponse = await restaurantService.addRestaurant({
        name,
        description,
      });
      res.status(restaurantResponse.statusCode).json(restaurantResponse);
    } catch (error) {
      next(error);
    }
  };
  getAll = async (req, res, next) => {
    try {
      const { page, limit, sort, restaurantBy } = req.query;
      const restaurantResponse = await restaurantService.getAll({
        query: { page, limit, sort, restaurantBy },
      });
      res.status(restaurantResponse.statusCode).json(restaurantResponse);
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const { restaurantId } = req.params;
      const restaurantResponse = restaurantService.getOne({
        restaurantId,
      });
      res.status(restaurantResponse.statusCode).json(restaurantResponse);
    } catch (error) {
      next(error);
    }
  };

  updateOne = async (req, res, next) => {
    try {
      const { restaurantId } = req.params;
      const restaurantResponse = restaurantService.updateOne({
        restaurantId,
      });
      res.status(restaurantResponse.statusCode).json(restaurantResponse);
    } catch (error) {
      next(error);
    }
  };
  updateAll = async (req, res, next) => {
    try {
      const { restaurantIds } = req.body;
      const restaurantResponse = restaurantService.updateAll({
        restaurantIds,
      });
      res.status(restaurantResponse.statusCode).json(restaurantResponse);
    } catch (error) {
      next(error);
    }
  };

  deleteOne = async (req, res, next) => {
    try {
      const { restaurantId } = req.params;
      const restaurantResponse = restaurantService.updateOne({
        restaurantId,
      });
      res.status(restaurantResponse.statusCode).json(restaurantResponse);
    } catch (error) {
      next(error);
    }
  };
  deleteAll = async (req, res, next) => {
    try {
      const { restaurantIds } = req.body;
      const restaurantResponse = restaurantService.updateAll({
        restaurantIds,
      });
      res.status(restaurantResponse.statusCode).json(restaurantResponse);
    } catch (error) {
      next(error);
    }
  };
}

const restaurantController = new RestaurantController();
export default restaurantController;
