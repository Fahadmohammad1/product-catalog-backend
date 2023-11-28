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
  const result = await ProductService.getProducts(req.query);
  res.send({
    success: true,
    message: "Products retrieved successfully",
    data: result,
  });
};

const getSingleProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.getSingleProduct(parseInt(id));

  res.send({
    success: true,
    message: "Product retrieved successfully",
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getProducts,
  getSingleProducts,
};
