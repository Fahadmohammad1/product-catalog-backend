import { Request, Response } from "express";
import { CommentService } from "./comment.service";

const addComment = async (req: Request, res: Response) => {
  const result = await CommentService.addComment(req.body);

  res.send({
    success: true,
    message: "Comment added",
    data: result,
  });
};

const getComments = async (req: Request, res: Response) => {
  const result = await CommentService.getComments();

  res.send({
    success: true,
    message: "Comments retrieved successfully",
    data: result,
  });
};

export const CommentController = {
  addComment,
  getComments,
};
