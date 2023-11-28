import { SQL, and, eq, gte, ilike, like, lte } from "drizzle-orm";
import { products } from "../../../db/schema";
import { db } from "../../../server";
import { IProduct } from "./product.interface";

const createProduct = async (data: IProduct) => {
  const result = await db.insert(products).values(data);

  return result;
};

const getProducts = async (filtersData: Record<string, unknown>) => {
  const { search, ...filters } = filtersData;

  const whereConditions: SQL[] = [];

  if (search) {
    const result = await db
      .select()
      .from(products)
      .where(ilike(products.name, `%${search}%`));
    return result;
  }

  if (filters.category) {
    whereConditions.push(like(products.category, `%${filters.category}%`));
  }

  if (filters.minPrice) {
    const convertedPrice = parseInt(filters.minPrice as string);
    whereConditions.push(gte(products.price, convertedPrice));
  }

  if (filters.maxPrice) {
    const convertedPrice = parseInt(filters.maxPrice as string);
    whereConditions.push(lte(products.price, convertedPrice));
  }

  if (filters.rating) {
    const parsedRating = parseInt(filters.rating as string);
    whereConditions.push(eq(products.rating, parsedRating));
  }

  const result = await db
    .select()
    .from(products)
    .where(and(...whereConditions));

  return result;
};

const getSingleProduct = async () => {
  const result = await db.query.products.findFirst({});

  return result;
};

export const ProductService = {
  createProduct,
  getProducts,
  getSingleProduct,
};
