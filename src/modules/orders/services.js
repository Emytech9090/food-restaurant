import { getPagination } from "../../utils/index.js";
import Food from "../foods/model.js";
import Order from "./model.js";

class OrderService {
  addOrder = async ({ restaurantId, foodId }) => {
    const isFieldValid = [restaurantId, foodId].every(Boolean);

    if (!isFieldValid) {
      return {
        statusCode: 400,
        message: "validate fields. bad request",
      };
    }
    const foundFood = await Food.findOne({
      _id: foodId,
      restaurantId,
    });
    if (!foundFood) {
      return {
        statusCode: 404,
        message: "food not found",
      };
    }
    const amount = foundFood.price;
    const discount = foundFood.discount;
    const order = await Order.create({
      amount,
      discount,
      foodId,
      restaurantId,
    });

    return {
      statusCode: 200,
      message: "order created successfully",
      order,
    };
  };
  getAll = async ({ page, limit, sort, orderBy }) => {
    const currentPage = parseInt(page);
    const skip = (page - 1) * limit;
    const totalCount = await Order.countDocuments({});
    const sorted = sort === "asc" ? 1 : -1;
    const pagination = getPagination(totalCount, currentPage, limit);
    const orders = await Order.find()
      .limit(limit)
      .skip(skip)
      .sort({ [orderBy]: sorted });
    return {
      statusCode: 200,
      message: "order fetched successfully",
      data: {
        pagination,
        orders,
      },
    };
  };

  getOne = async ({ orderId }) => {
    const order = await Order.findOne({ _id: orderId });
    if (!order) {
      return {
        statusCode: 404,
        message: "order not found",
      };
    }
    return {
      statusCode: 200,
      message: "successfull",
      data: { order },
    };
  };
  updateOne = async ({ orderId, data }) => {
    const order = await Order.findOne({ _id: orderId });
    if (!order) {
      return {
        statusCode: 404,
        message: "order not found",
      };
    }
    console.log(data);
    await Order.findByIdAndUpdate(
      orderId,
      { $set: data },
      { new: true } // returns updated document
    );
    return {
      statusCode: 200,
      message: "successfull",
      data: { orderId },
    };
  };

  deleteOne = async ({ orderId }) => {
    const order = await Order.findOne({ _id: orderId });
    if (!order) {
      return {
        statusCode: 404,
        message: "order not found",
      };
    }
    await Order.deleteOne({ _id: orderId });
    return {
      statusCode: 200,
      message: "successfull",
    };
  };
}

const orderService = new OrderService();
export default orderService;
