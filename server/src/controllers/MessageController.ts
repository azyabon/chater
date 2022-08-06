import express from "express";
import { MessageModel } from "../models";

class MessageController {
  index(req: express.Request, res: express.Response): void {
    const dialogId = req.query.dialog;

    MessageModel.find({ dialog: dialogId })
      .populate(["dialog"])
      .exec(function (err, messages) {
        if (err) {
          return res.status(404).json({
            message: "Message not found",
          });
        }
        return res.json(messages);
      });
  }

  create(req: express.Request, res: express.Response): void {
    const userId = "62ed4a3e2f4333d1695a4c25";

    const postData = {
      text: req.body.text,
      user: userId,
      dialog: req.body.dialogId,
    };
    const message = new MessageModel(postData);
    message
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
    MessageModel.findOneAndRemove({ _id: id })
      .then((message: any) => {
        if (message) {
          res.json({
            message: `Message deleted`,
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

export default MessageController;
