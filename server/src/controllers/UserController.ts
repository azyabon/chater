import express from "express";
import { UserModel } from "../models";

class UserController {
  show(req: express.Request, res: express.Response): void {
    const id: string = req.params.id;
    UserModel.findById(id, (err: any, user: any) => {
      if (err) {
        return res.status(404).json({
          message: "User not found",
        });
      } else {
        res.json(user);
      }
    });
  }

  index(req: express.Request, res: express.Response): void {
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

  me() {
    //TODO: сделать метод возвращающий пользователю информацию о себе
  }

  create(req: express.Request, res: express.Response): void {
    const postData = {
      email: req.body.email,
      fullName: req.body.fullName,
      password: req.body.password,
    };
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
