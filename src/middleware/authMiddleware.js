import jwt from "jsonwebtoken";
import envs from "../config/env.js";
import User from "../modules/users/model.js";
import Restaurant from "../modules/resturants/model.js";
import Order from "../modules/orders/model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers?.authorization;
    if (!authHeader) {
      return res.status(403).json({
        message: "no auth header",
        statusCode: 403,
      });
    }
    const isBearerToken = authHeader.includes("Bearer ");
    if (!isBearerToken) {
      return res.status(403).json({
        message: "invalid bearer token",
        statusCode: 403,
      });
    }
    const token = authToken.split(" ")[1];
    if (!token) {
      return res.status(403).json({
        message: "no auth token",
        statusCode: 403,
      });
    }
    const payload = jwt.verify(token, envs.JWT_ACCESS_TOKEN_SECRET);
    if (!payload) {
      return res.status(403).json({
        message: "invalid authorization token no payload",
        statusCode: 403,
      });
    }
    const foundUser = await User.findById(payload.userId);
    if (!foundUser) {
      return res.status(403).json({
        message: "your are not authorized",
        statusCode: 403,
      });
    }
    req.user = {
      email: foundUser.email,
      userId: foundUser._id,
      role: payload.role,
    };
    next();
  } catch (error) {
    next(error);
  }
};

export const adminMiddleware = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const foundUser = await User.findById(userId);
    if (!foundUser) {
      return res.status(403).json({
        message: "your are not authorized",
        statusCode: 403,
      });
    }
    const role = foundUser.role;
    if (role !== "admin") {
      return res.status(403).json({
        message: "your are not an admin",
        statusCode: 403,
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

export const ownerMiddleware = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const url = req.url;
    const groupRoute = url.split("/");
    const resources = groupRoute[5];
    const foundUser = await User.findById(userId);
    const role = foundUser.role;

    switch (resources) {
      case "users":
        if (!foundUser && role !== "admin") {
          return res.status(403).json({
            message: "your are not authorized",
            statusCode: 403,
          });
        }
        next();
        break;
      case "foods":
        const foundFoodRestaurant = await Restaurant.findOne({ userId });

        if (!foundFoodRestaurant && role !== "admin") {
          return res.status(403).json({
            message: "out of bound. you cant access this resource",
            statusCode: 403,
          });
        }
        const foundFood = await Food.findOne({
          restaurantId: foundFoodRestaurant._id,
        });

        if (!foundFood && role !== "admin") {
          return res.status(403).json({
            message: "out of bound. you cant access this resource",
            statusCode: 403,
          });
        }
        next();
        break;
      case "restaurants":
        const foundRestaurant = await Restaurant.findOne({ userId });

        if (!foundRestaurant && role !== "admin") {
          return res.status(403).json({
            message: "out of bound. you cant access this resource",
            statusCode: 403,
          });
        }
        next();

        break;
      case "orders":
        const foundOrder = await Order.findOne({ userId });

        if (!foundOrder && role !== "admin") {
          return res.status(403).json({
            message: "out of bound. you cant access this resource",
            statusCode: 403,
          });
        }
        next();
        break;
      default:
        next();
        break;
    }
  } catch (error) {
    next(error);
  }
};
