import express from "express";
import { ProductRoutes } from "../modules/product/product.route";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { CommentRoutes } from "../modules/comment/comment.routes";

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
  {
    path: "/comment",
    routes: CommentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
