const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product price"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter product category"],
  },

  stock: {
    type: Number,
    required: [true, "Please Enter product stock"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = new mongoose.model("product", productSchema);

module.exports = Product;
