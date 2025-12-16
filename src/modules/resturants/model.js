import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },

  location: {
    type: {
      country: String,
      state: String,
      city: String,
      address: String,
    },
  },
  rating: {
    type: Number,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
