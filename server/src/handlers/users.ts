import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { User, userStore } from "../models/users";
import jwt from "jsonwebtoken";
import jwtAuth from "./jwtAuth";

dotenv.config();

const store = new userStore();

const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = {
      username: req.body.username,
      password: req.body.password,
    };
    console.log(user);
    const newUser = await store.create(user);
    const token = jwt.sign({ user: newUser }, process.env.JWT_SECRET as string);
    res.json(token);
  } catch (error) {
    console.log(`Error Due to Handler: ${error}`);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await store.show(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const user_routes = (app: express.Application) => {
  app.post("/users", createUser);
  app.get("/users/:id", jwtAuth, getUser);
};

export default user_routes;
