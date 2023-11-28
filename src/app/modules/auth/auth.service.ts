import { users } from "../../../db/schema";
import { db } from "../../../server";

const signUp = async (userData) => {
  const result = await db.insert(users).values(userData);

  return result;
};

const login = async (loginData) => {
  const result = await db.query.users.findFirst({});
};

export const AuthService = {
  signUp,
};
