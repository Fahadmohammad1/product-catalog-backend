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

//   const login = async (loginData) => {
//     const findUser = await db
//       .selectDistinct({ email: loginData.email })
//       .from(users);

//     console.log(findUser);

//     // if(findUser.password) {

//     // }

//     // const result = await db.query.users.findFirst({});
//   };

export const AuthController = {
  signUp,
};
