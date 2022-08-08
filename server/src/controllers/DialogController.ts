import express from "express";
import { DialogModel, MessageModel } from "../models";

class DialogController {
  index(req: express.Request, res: express.Response): void {
    const userId = req.user._id;

    DialogModel.find({ author: userId })
      .populate(["author", "partner"])
      .exec(function (err, dialogs) {
        if (err) {
          return res.status(404).json({
            message: "Dialogs not found",
          });
        }
        return res.json(dialogs);
      });
  }

  create(req: express.Request, res: express.Response): void {
    const postData = {
      author: req.body.author,
      partner: req.body.partner,
    };
    const dialog = new DialogModel(postData);
    dialog
      .save()
      .then((dialogObj: any): any => {
        const message = new MessageModel({
          text: req.body.text,
          dialog: dialogObj._id,
          user: req.body.author,
        });
        message
          .save()
          .then(() => {
            res.json(dialogObj);
          })
          .catch((reason) => {
            res.json(reason);
          });
      })
      .catch((reason) => {
        res.json(reason);
      });
  }

  delete(req: express.Request, res: express.Response): void {
    const id: string = req.params.id;
    DialogModel.findOneAndRemove({ _id: id })
      .then((dialog: any) => {
        if (dialog) {
          res.json({
            message: `Dialog deleted`,
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

export default DialogController;
