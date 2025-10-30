import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },

  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  category: {
    type: String,
  },
  ingredients: {
    type: [String],
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
