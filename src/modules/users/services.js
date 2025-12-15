import { getPagination } from "../../utils/index.js";
import User from "./model.js";

class UserService {
  getAll = async ({ page, limit, sort, orderBy }) => {
    const currentPage = parseInt(page);
    const skip = (page - 1) * limit;
    const totalCount = await User.countDocuments({});
    const sorted = sort === "asc" ? 1 : -1;
    const pagination = getPagination(totalCount, currentPage, limit);
    const users = await User.find()
      .limit(limit)
      .skip(skip)
      .sort({ [orderBy]: sorted });
    return {
      statusCode: 200,
      message: "user fetched successfully",
      data: {
        pagination,
        users,
      },
    };
  };

  getOne = async ({ userId }) => {
    const user = await User.findOne({ _id: userId }).select("-password");
    if (!user) {
      return {
        statusCode: 404,
        message: "user not found",
      };
    }
    const {} = user;
    return {
      statusCode: 200,
      message: "successfull",
      data: { user },
    };
  };

  getSession = async ({ userId }) => {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return {
        statusCode: 404,
        message: "user not found",
      };
    }
    return {
      statusCode: 200,
      message: "successfull",
      data: { userId: user._id },
    };
  };
  updateSession = async ({ userId, data }) => {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return {
        statusCode: 404,
        message: "user not found",
      };
    }
    console.log(data);
    await User.findByIdAndUpdate(
      userId,
      { $set: data },
      { new: true } // returns updated document
    );
    return {
      statusCode: 200,
      message: "successfull",
      data: { userId },
    };
  };
  updateOne = async ({ userId, data }) => {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return {
        statusCode: 404,
        message: "user not found",
      };
    }
    console.log(data);
    await User.findByIdAndUpdate(
      userId,
      { $set: data },
      { new: true } // returns updated document
    );
    return {
      statusCode: 200,
      message: "successfull",
      data: { userId },
    };
  };

  deleteOne = async ({ userId }) => {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return {
        statusCode: 404,
        message: "user not found",
      };
    }
    await User.deleteOne({ _id: userId });
    return {
      statusCode: 200,
      message: "successfull",
    };
  };

  deleteOne = async ({ userId }) => {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return {
        statusCode: 404,
        message: "user not found",
      };
    }
    await User.deleteOne({ _id: userId });
    return {
      statusCode: 200,
      message: "successfull",
    };
  };

  deleteSession = async ({ userId }) => {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return {
        statusCode: 404,
        message: "user not found",
      };
    }
    await User.deleteOne({ _id: userId });
    return {
      statusCode: 200,
      message: "successfull",
    };
  };
}
const userService = new UserService();
export default userService;
