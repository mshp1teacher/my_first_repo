import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  isMine: Boolean,
  asNew: Boolean
}, { 
  timestamps: true 
});
  
export const Product = model("Product", ProductSchema);