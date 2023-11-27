import { ProductService } from "./product.service";

const getProducts = async () => {
  const result = await ProductService.getProducts();
  return {
    success: true,
    message: "Product retrieved successfully",
    data: result,
  };
};
