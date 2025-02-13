import { Product } from "~/server/models/product.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    let products;
    try {
        const query = getQuery(event)
        let mongodb_query = {
          ...(query.title!='' && { title:query.title }),
          ...(query.category!='' && { category:query.category }),
        }
        
        let sort_order = 
           {...(query.sort!='' && { sort:{price:query.sort}})}
        
        await mongoose.connect("mongodb://localhost:27017/shop");
        
        products = await Product.find(mongodb_query,sort_order);
        
      } catch (e) {
        console.error(e);
      }
  
  return products;
});



