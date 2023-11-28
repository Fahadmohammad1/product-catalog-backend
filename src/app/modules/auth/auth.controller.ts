import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const signUp = async (req: Request, res: Response) => {
  const result = await AuthService.signUp(req.body);

  res.send({
    success: true,
    message: "SignUp successfull",
    data: result,
  });
};

const login = async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);

  res.send({
    success: true,
    message: "Login successfull",
    data: result,
  });
};

export const AuthController = {
  signUp,
  login,
};
