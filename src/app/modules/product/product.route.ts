import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.get("/", ProductController.getProducts);
router.post("/", ProductController.createProduct);

export const ProductRoutes = router;
