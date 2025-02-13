import { Product } from "~/server/models/product.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    let product;
    const id = getRouterParam(event, 'id')
    try {
        await mongoose.connect("mongodb://localhost:27017/shop");
        product = await Product.findOne({id: id});
      } catch (e) {
        console.error(e);
      }

  return product;
});


