import { getPagination } from "../../utils/index.js";
import Restaurant from "./model.js";

class RestaurantService {
  addRestaurant = async ({ name, description, price, restaurantId }) => {
    const isFieldValid = [name, description, price, restaurantId].every(
      Boolean
    );

    if (!isFieldValid) {
      return {
        statusCode: 400,
        message: "validate fields. bad request",
      };
    }
    const foundRestaurant = await Restaurant.findOne({
      restaurantId,
      name,
    });
    if (foundRestaurant) {
      return {
        statusCode: 404,
        message: "restaurant with same title already exist for this restaurant",
      };
    }
    await Restaurant.create({ name, description, price, restaurantId });

    return {
      statusCode: 200,
      message: "restaurant created successfully",
    };
  };
  getAll = async ({ page, limit, sort, orderBy }) => {
    const currentPage = parseInt(page);
    const skip = (page - 1) * limit;
    const totalCount = await Restaurant.countDocuments({});
    const sorted = sort === "asc" ? 1 : -1;
    const pagination = getPagination(totalCount, currentPage, limit);
    const restaurants = await Restaurant.find()
      .limit(limit)
      .skip(skip)
      .sort({ [orderBy]: sorted });
    return {
      statusCode: 200,
      message: "restaurant fetched successfully",
      data: {
        pagination,
        restaurants,
      },
    };
  };
  getOne = async ({ restaurantId }) => {
    const restaurant = await Restaurant.findOne({ _id: restaurantId });
    if (!restaurant) {
      return {
        statusCode: 404,
        message: "restaurant not found",
      };
    }
    return {
      statusCode: 200,
      message: "successfull",
      data: { restaurant },
    };
  };
  updateOne = async ({ restaurantId, data }) => {
    const restaurant = await Restaurant.findOne({ _id: restaurantId });
    if (!restaurant) {
      return {
        statusCode: 404,
        message: "restaurant not found",
      };
    }
    console.log(data);
    await Restaurant.findByIdAndUpdate(
      restaurantId,
      { $set: data },
      { new: true } // returns updated document
    );
    return {
      statusCode: 200,
      message: "successfull",
      data: { restaurantId },
    };
  };

  deleteOne = async ({ restaurantId }) => {
    const restaurant = await Restaurant.findOne({ _id: restaurantId });
    if (!restaurant) {
      return {
        statusCode: 404,
        message: "restaurant not found",
      };
    }
    await Restaurant.deleteOne({ _id: restaurantId });
    return {
      statusCode: 200,
      message: "successfull",
    };
  };
}

const restaurantService = new RestaurantService();
export default restaurantService;
