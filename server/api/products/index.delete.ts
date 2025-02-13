import { Product } from "~/server/models/product.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        await mongoose.connect("mongodb://localhost:27017/shop");
        await Product.deleteOne({id:body.id})
      } catch (e) {
        console.error(e);
      }
});
