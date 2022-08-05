import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import { UserController } from "./controllers";

const app = express();

app.use(bodyParser.json());

const User = new UserController();

app.get("/user/:id", User.show);
app.get("/users", User.index);
app.delete("/user/:id", User.delete);
app.post("/user/registration", User.create);

mongoose.connect("mongodb://localhost:27017/chater");

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
