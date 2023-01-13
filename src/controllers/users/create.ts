import { Request, Response } from 'express';
// import { User } from "src/schema/userSchema";
// import { userInterface } from "src/interfaces/user";

export async function userCreate(req: Request, res: Response) {
  console.log(req.body);
  res.send('Hello').status(200);
}
