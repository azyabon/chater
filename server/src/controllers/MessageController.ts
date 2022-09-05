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
    const userId = req.user._id;

    MessageModel.updateMany(
      {
        dialog: dialogId,
        user: { $ne: userId },
      },
      { isRead: true },
      null,
      (err: any) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: err,
          });
        }
      }
    );

    MessageModel.find({ dialog: dialogId })
      .populate(["dialog", "user", "attachments"])
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
      attachments: req.body.attachments,
    };
    const message = new MessageModel(postData);
    message
      .save()
      .then((obj: any): any => {
        obj.populate(
          ["dialog", "user", "attachments"],
          (err: any, message: any) => {
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
          }
        );
      })
      .catch((reason) => {
        res.json(reason);
      });
  };

  delete = (req: express.Request, res: express.Response): void => {
    const id: any = req.query.id;
    const userId: string = req.user._id;

    MessageModel.findById(id, (err: any, message: any) => {
      if (err || !message) {
        return res.status(404).json({
          status: "error",
          message: "Message not found",
        });
      }

      if (message.user.toString() === userId) {
        const dialogId = message.dialog;
        message.remove();

        MessageModel.findOne(
          { dialog: dialogId },
          {},
          { sort: { createdAt: -1 } },
          (err, lastMessage) => {
            if (err) {
              res.status(500).json({
                status: "error",
                message: err,
              });
            }

            DialogModel.findById(dialogId, (err: any, dialog: any) => {
              if (err) {
                res.status(500).json({
                  status: "error",
                  message: err,
                });
              }

              if (!dialog) {
                return res.status(404).json({
                  status: "not found",
                  message: err,
                });
              }

              dialog.lastMessage = lastMessage;
              dialog.save();
            });
          }
        );

        return res.json({
          status: "success",
          message: "Message deleted",
        });
      } else {
        return res.status(403).json({
          status: "error",
          message: "Not have permission",
        });
      }
    });
  };
}

export default MessageController;
