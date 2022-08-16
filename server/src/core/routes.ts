import { checkAuth, updateLastSeen } from "../middlewares";
import socket from "socket.io";
import {
  DialogController,
  MessageController,
  UserController,
} from "../controllers";
import { loginValidation, registerValidation } from "../utils/validations";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

export default (app: express.Express, io: socket.Server) => {
  const User = new UserController(io);
  const Dialog = new DialogController(io);
  const Message = new MessageController(io);

  app.use(bodyParser.json());
  app.use(cors());
  app.use(checkAuth);
  app.use(updateLastSeen);

  app.get("/user/find", User.findUsers);
  app.get("/user/verify", User.verify);
  app.get("/user/me", User.me);
  app.get("/user/:id", User.show);
  app.get("/users", User.index);
  app.post("/user/registration", registerValidation, User.create);
  app.post("/user/login", loginValidation, User.login);
  app.delete("/user/:id", User.delete);

  app.get("/dialogs", Dialog.index);
  app.post("/dialogs", Dialog.create);
  app.delete("/dialogs/:id", Dialog.delete);

  app.get("/messages", Message.index);
  app.post("/messages", Message.create);
  app.delete("/messages/:id", Message.delete);
};
