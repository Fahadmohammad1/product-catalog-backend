import express from "express";
import { ProductRoutes } from "../modules/product/product.route";
import { AuthRoutes } from "../modules/auth/auth.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    routes: AuthRoutes,
  },
  {
    path: "/product",
    routes: ProductRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
