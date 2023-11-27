import express from "express";
import { ProductRoutes } from "../modules/product/product.route";

const router = express.Router();

const moduleRoutes = [
  // {
  //   path: "/auth",
  //   routes: "",
  // },
  {
    path: "/product",
    routes: ProductRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
