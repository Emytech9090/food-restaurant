import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
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

const Food = mongoose.model("Food", foodSchema);
export default Food;
