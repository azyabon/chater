import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import {
  DialogController,
  MessageController,
  UserController,
} from "./controllers";
import { updateLastSeen, checkAuth } from "./middlewares";
import { loginValidation, registerValidation } from "./utils/validations";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(updateLastSeen);

const User = new UserController();
const Dialog = new DialogController();
const Messages = new MessageController();

app.get("/user/me", checkAuth, User.me);
app.get("/user/:id", checkAuth, User.show);
app.get("/users", checkAuth, User.index);
app.post("/user/registration", registerValidation, User.create);
app.post("/user/login", loginValidation, User.login);
app.delete("/user/:id", checkAuth, User.delete);

app.get("/dialogs", checkAuth, Dialog.index);
app.post("/dialogs", checkAuth, Dialog.create);
app.delete("/dialogs/:id", checkAuth, Dialog.delete);

app.get("/messages", checkAuth, Messages.index);
app.post("/messages", checkAuth, Messages.create);
app.delete("/messages/:id", checkAuth, Messages.delete);

mongoose.connect("mongodb://localhost:27017/chater");

app.listen(process.env.PORT, function () {
  console.log(`Server: http://localhost:${process.env.PORT}`);
});
