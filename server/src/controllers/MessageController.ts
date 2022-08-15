import express from "express";
import { DialogModel, MessageModel } from "../models";
import socket from "socket.io";

class MessageController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: express.Request, res: express.Response): void => {
    const dialogId = req.query.dialog;

    MessageModel.find({ dialog: dialogId })
      .populate(["dialog", "user"])
      .exec(function (err, messages) {
        if (err) {
          return res.status(404).json({
            message: "Message not found",
          });
        }
        return res.json(messages);
      });
  };

  create = (req: express.Request, res: express.Response): void => {
    const userId = req.user._id;

    const postData = {
      text: req.body.text,
      user: userId,
      dialog: req.body.dialogId,
    };
    const message = new MessageModel(postData);
    message
      .save()
      .then((obj: any): any => {
        obj.populate(["dialog", "user"], (err: any, message: any) => {
          if (err) {
            return res.status(500).json({
              message: err,
            });
          }

          DialogModel.findOneAndUpdate(
            { _id: postData.dialog },
            { lastMessage: message._id },
            { upsert: true },
            function (err: any) {
              if (err) {
                return res.status(500).json({
                  status: "error",
                  message: err,
                });
              }
            }
          );

          res.json(message);
          this.io.emit("SERVER:MESSAGE_CREATED", message);
        });
      })
      .catch((reason) => {
        res.json(reason);
      });
  };

  delete = (req: express.Request, res: express.Response): void => {
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
  };
}

export default MessageController;
