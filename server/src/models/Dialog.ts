import mongoose, { Schema } from "mongoose";

export interface IDialog extends Document {
  partner: {
    type: Schema.Types.ObjectId;
    ref: string;
    required: boolean;
  };
  author: {
    type: Schema.Types.ObjectId;
    ref: string;
    required: boolean;
  };
  lastMessage: {
    type: Schema.Types.ObjectId;
    ref: string;
  };
}

const DialogSchema = new Schema(
  {
    partner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message" },
  },
  {
    timestamps: true,
  }
);

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);

export default DialogModel;
