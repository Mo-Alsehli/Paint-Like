import { Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const jwtAuth = (req: Request, res: Response, next: Function) => {
  try {
    const authorizationHead = req.headers.authorization;
    if (!authorizationHead || !authorizationHead.startsWith("Bearer")) {
      res.send("No Token Provided");
    } else {
      const token = authorizationHead?.split(" ")[1] as string;
      const result = jwt.verify(token, process.env.JWT_SECRET as string);
      res.send(result);
    }
    next();
  } catch (error) {
    res.status(401);
    res.json(`Access denied, Invalid token. ${error}`);
    console.log(error);
  }
};
export default jwtAuth;
