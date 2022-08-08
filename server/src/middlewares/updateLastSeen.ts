import express from "express";
import { UserModel } from "../models";

export default (
  _: express.Request,
  __: express.Response,
  next: express.NextFunction
) => {
  UserModel.findOneAndUpdate(
    { _id: "62f0ff706a13f2635f9676f9" },
    {
      last_seen: new Date(),
    },
    { new: true },
    () => {}
  );
  next();
};
