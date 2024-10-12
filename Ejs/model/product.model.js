import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    price: {
      type: Number,
      // required: true,
    },
    discountPercentage: { type: Number },
    rating: {
      type: Number,
      min: [0, "wrong rating"],
      max: 5,
      default:0
    },
    stock: {
      type: Number,
      // required: true,
    },
    brand:{
      type: String,
      // required: true,
    },
    category:{
      type: String,
      // required: true,
    },
    thumbnail: {
      type: String,
      // required: true,
    },
    images: [String],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
// const Product =model('Product', productSchema);

export default Product;
