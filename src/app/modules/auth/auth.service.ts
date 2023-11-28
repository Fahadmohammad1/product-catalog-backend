import { eq } from "drizzle-orm";
import { users } from "../../../db/schema";
import { db } from "../../../server";
import { IUser } from "./auth.interface";

const signUp = async (userData: IUser) => {
  const findUser = await db
    .select()
    .from(users)
    .where(eq(users.email, userData.email));

  let result = null;
  if (findUser.length) {
    result = { message: "Email already in use" };
  } else {
    result = await db.insert(users).values(userData);
  }

  return result;
};

const login = async (loginData: { email: string; password: string }) => {
  const findUser = await db
    .select()
    .from(users)
    .where(eq(users.email, loginData.email));

  if (findUser && findUser[0].password !== loginData.password) {
    return { message: "password is incorrect" };
  } else {
    return { message: "login successfull" };
  }
};

export const AuthService = {
  signUp,
  login,
};
