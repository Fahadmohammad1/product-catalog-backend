import { comments } from "../../../db/schema";
import { db } from "../../../server";

const addComment = async (data) => {
  const result = await db.insert(comments).values(data);

  return result;
};

const getComments = async () => {
  const result = await db.query.comments.findMany({});

  return result;
};

export const CommentService = {
  addComment,
  getComments,
};
