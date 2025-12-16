import orderService from "./services.js";

class RestaurantController {
  addOrder = async (req, res, next) => {
    try {
      const { restaurantId, foodId } = req.body;
      const orderResponse = await orderService.addOrder({
        restaurantId,
        foodId,
      });
      res.status(orderResponse.statusCode).json(orderResponse);
    } catch (error) {
      next(error);
    }
  };
  getAll = async (req, res, next) => {
    try {
      const { page, limit, sort, orderBy } = req.query;
      const orderResponse = await orderService.getAll({
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort,
        orderBy,
      });
      res.status(orderResponse.statusCode).json(orderResponse);
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const { orderId } = req.params;
      const orderResponse = await orderService.getOne({
        orderId,
      });
      res.status(orderResponse.statusCode).json(orderResponse);
    } catch (error) {
      next(error);
    }
  };

  updateOne = async (req, res, next) => {
    try {
      const { orderId } = req.params;
      const orderResponse = await orderService.updateOne({
        orderId,
      });
      res.status(orderResponse.statusCode).json(orderResponse);
    } catch (error) {
      next(error);
    }
  };

  deleteOne = async (req, res, next) => {
    try {
      const { orderId } = req.params;
      const orderResponse = await orderService.updateOne({
        orderId,
      });
      res.status(orderResponse.statusCode).json(orderResponse);
    } catch (error) {
      next(error);
    }
  };
}

const orderController = new RestaurantController();
export default orderController;
