import orderService from "./services.js";

class RestaurantController {
  getAll = async (req, res, next) => {
    try {
      const { page, limit, sort, orderBy } = req.query;
      const orderResponse = orderService.getAll({
        query: { page, limit, sort, orderBy },
      });
      res.status(orderResponse.statusCode).json(orderResponse);
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const { orderId } = req.params;
      const orderResponse = orderService.getOne({
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
      const orderResponse = orderService.updateOne({
        orderId,
      });
      res.status(orderResponse.statusCode).json(orderResponse);
    } catch (error) {
      next(error);
    }
  };
  updateAll = async (req, res, next) => {
    try {
      const { orderIds } = req.body;
      const orderResponse = orderService.updateAll({
        orderIds,
      });
      res.status(orderResponse.statusCode).json(orderResponse);
    } catch (error) {
      next(error);
    }
  };

  deleteOne = async (req, res, next) => {
    try {
      const { orderId } = req.params;
      const orderResponse = orderService.updateOne({
        orderId,
      });
      res.status(orderResponse.statusCode).json(orderResponse);
    } catch (error) {
      next(error);
    }
  };
  deleteAll = async (req, res, next) => {
    try {
      const { orderIds } = req.body;
      const orderResponse = orderService.updateAll({
        orderIds,
      });
      res.status(orderResponse.statusCode).json(orderResponse);
    } catch (error) {
      next(error);
    }
  };
}

const orderController = new RestaurantController();
export default orderController;
