import express from "express";
import { verifyJWTToken } from "../utils";

export default (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  if (
    req.path === "/user/login" ||
    req.path === "/user/registration" ||
    req.path === "/user/verify"
  ) {
    return next();
  }

  const token: any = req.headers.token;

  verifyJWTToken(token)
    .then((user: any) => {
      req.user = user.data._doc;
      next();
    })
    .catch(() => {
      res.status(403).json({
        message: "Invalid auth token provided.",
      });
    });
};
