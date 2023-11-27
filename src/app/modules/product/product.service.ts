import { products } from "../../../db/schema";
import { db } from "../../../server";
import { IProduct } from "./product.interface";

const createProduct = async (data: IProduct) => {
  const result = await db.insert(products).values(data);

  return result;
};

const getProducts = async () => {
  const result = await db.query.products.findMany({
    with: {
      comments: true,
    },
  });

  return result;
};

export const ProductService = {
  createProduct,
  getProducts,
};
