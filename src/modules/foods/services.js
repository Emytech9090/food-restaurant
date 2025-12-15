import { getPagination } from "../../utils/index.js";
import Food from "./model.js";

class FoodService {
  addFood = async ({ name, description, price, restaurantId }) => {
    const isFieldValid = [name, description, price, restaurantId].every(
      Boolean
    );

    if (!isFieldValid) {
      return {
        statusCode: 400,
        message: "validate fields. bad request",
      };
    }
    const foundFood = await Food.findOne({
      restaurantId,
      name,
    });
    if (foundFood) {
      return {
        statusCode: 404,
        message: "food with same title already exist for this restaurant",
      };
    }
    await Food.create({ name, description, price, restaurantId });

    return {
      statusCode: 200,
      message: "food created successfully",
    };
  };
  getAll = async ({ page, limit, sort, orderBy }) => {
    const currentPage = parseInt(page);
    const skip = (page - 1) * limit;
    const totalCount = await Food.countDocuments({});
    const sorted = sort === "asc" ? 1 : -1;
    const pagination = getPagination(totalCount, currentPage, limit);
    const foods = await Food.find()
      .limit(limit)
      .skip(skip)
      .sort({ [orderBy]: sorted });
    return {
      statusCode: 200,
      message: "food fetched successfully",
      data: {
        pagination,
        foods,
      },
    };
  };
  getAllRestaurantFood = async ({
    page,
    limit,
    sort,
    orderBy,
    restaurantId,
  }) => {
    const currentPage = parseInt(page);
    const skip = (page - 1) * limit;
    const totalCount = await Food.countDocuments({});
    const sorted = sort === "asc" ? 1 : -1;
    const pagination = getPagination(totalCount, currentPage, limit);
    const foods = await Food.find({ restaurantId })
      .limit(limit)
      .skip(skip)
      .sort({ [orderBy]: sorted });
    return {
      statusCode: 200,
      message: "food fetched successfully",
      data: {
        pagination,
        foods,
      },
    };
  };

  getOne = async ({ foodId }) => {
    const food = await Food.findOne({ _id: foodId });
    if (!food) {
      return {
        statusCode: 404,
        message: "food not found",
      };
    }
    return {
      statusCode: 200,
      message: "successfull",
      data: { food },
    };
  };
  updateOne = async ({ foodId, data }) => {
    const food = await Food.findOne({ _id: foodId });
    if (!food) {
      return {
        statusCode: 404,
        message: "food not found",
      };
    }
    console.log(data);
    const updatedFood = await Food.findByIdAndUpdate(
      foodId,
      { $set: data },
      { new: true } // returns updated document
    );
    return {
      statusCode: 200,
      message: "successfull",
      data: { foodId },
    };
  };

  deleteOne = async ({ foodId }) => {
    const food = await Food.findOne({ _id: foodId });
    if (!food) {
      return {
        statusCode: 404,
        message: "food not found",
      };
    }
    await Food.deleteOne({ _id: foodId });
    return {
      statusCode: 200,
      message: "successfull",
    };
  };
}

const foodService = new FoodService();
export default foodService;
