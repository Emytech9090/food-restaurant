import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  foodId: {
    type: String,
    ref: "Food",
  },
  restaurantId: {
    type: String,
    ref: "Restaurant",
  },
  amount: {
    type: Number,
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
