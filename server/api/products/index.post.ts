import { Product } from "~/server/models/product.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        await mongoose.connect("mongodb://localhost:27017/shop");

        const product = new Product({
          title: body.title,
          description: body.description,
          price: body.price,
          category: body.category,
          image: body.image,
          isMine: body.isMine,
          asNew: body.asNew})

        await product.save()
      } catch (e) {
        console.error(e);
      }
});
