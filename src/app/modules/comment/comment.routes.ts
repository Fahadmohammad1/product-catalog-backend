import express from "express";
import { CommentController } from "./comment.controller";

const router = express.Router();

router.get("/", CommentController.getComments);
router.post("/", CommentController.addComment);

export const CommentRoutes = router;
