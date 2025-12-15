import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  restaurantId: {
    type: mongoose.Types.ObjectId,
    ref: "Restaurant",
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
