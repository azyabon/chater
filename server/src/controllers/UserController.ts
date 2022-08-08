import express from "express";
import { UserModel } from "../models";
import { createJWTToken } from "../utils";
import { IUser } from "../models/User";
import { validationResult, Result, ValidationError } from "express-validator";
import bcrypt from "bcrypt";

class UserController {
  show(req: express.Request, res: express.Response): void {
    const id: string = req.params.id;
    UserModel.findById(id, (err: any, user: IUser) => {
      if (err) {
        return res.status(404).json({
          message: "User not found",
        });
      } else {
        res.json(user);
      }
    });
  }

  index(_: express.Request, res: express.Response): void {
    UserModel.find({})
      .then((users: any) => {
        res.json(users);
      })
      .catch((err: any) => {
        res.json({
          message: err,
        });
      });
  }

  me(req: express.Request, res: express.Response) {
    const id: string = req.user._id;
    UserModel.findById(id, (err: any, user: IUser) => {
      if (err || !user) {
        return res.status(404).json({
          message: "User not found",
        });
      } else {
        res.json(user);
      }
    });
  }

  create(req: express.Request, res: express.Response): void {
    const postData = {
      email: req.body.email,
      fullName: req.body.fullName,
      password: req.body.password,
    };

    const errors: Result<ValidationError> = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    } else {
      const user = new UserModel(postData);
      user
        .save()
        .then((obj: any): any => {
          res.json(obj);
        })
        .catch((reason) => {
          res.json(reason);
        });
    }
  }

  login(req: express.Request, res: express.Response) {
    const postData = {
      email: req.body.email,
      password: req.body.password,
    };

    const errors: Result<ValidationError> = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    } else {
      UserModel.findOne({ email: postData.email }, (err: any, user: IUser) => {
        if (err || !user) {
          return res.status(404).json({
            message: "Incorrect email",
          });
        }

        if (bcrypt.compareSync(postData.password, user.password)) {
          const token = createJWTToken(user);
          res.json({
            status: "success",
            token,
          });
        } else {
          res.status(404).json({
            message: "Incorrect password",
          });
        }
      });
    }
  }

  delete(req: express.Request, res: express.Response): void {
    const id: string = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then((user: any) => {
        if (user) {
          res.json({
            message: `User ${user.fullName} deleted`,
          });
        } else {
          res.status(404).json({
            status: "error",
          });
        }
      })
      .catch((err: any) => {
        res.status(404).json({
          message: err,
        });
      });
  }
}

export default UserController;
