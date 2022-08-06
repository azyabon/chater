import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import {
  DialogController,
  MessageController,
  UserController,
} from "./controllers";

const app = express();

app.use(bodyParser.json());

const User = new UserController();
const Dialog = new DialogController();
const Messages = new MessageController();

app.get("/user/:id", User.show);
app.get("/user/me", User.me);
app.get("/users", User.index);
app.post("/user/registration", User.create);
app.delete("/user/:id", User.delete);

app.get("/dialogs", Dialog.index);
app.post("/dialogs", Dialog.create);
app.delete("/dialogs/:id", Dialog.delete);

app.get("/messages", Messages.index);
app.post("/messages", Messages.create);
app.delete("/messages/:id", Messages.delete);

mongoose.connect("mongodb://localhost:27017/chater");

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
