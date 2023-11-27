import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const result = await ProductService.createProduct(req.body);

  res.send({
    success: true,
    message: "Product created successfully",
    data: result,
  });
};

const getProducts = async (req: Request, res: Response) => {
  const result = await ProductService.getProducts();
  res.send({
    success: true,
    message: "Product retrieved successfully",
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getProducts,
};
