import mongoose, { Schema } from "mongoose";

export interface IMessage extends Document {
  text: {
    type: string;
    required: boolean;
  };
  dialog: {
    type: Schema.Types.ObjectId;
    ref: string;
    required: boolean;
  };
  unread: {
    type: boolean;
    default: boolean;
  };
}

const MessageSchema = new Schema(
  {
    dialog: {
      type: Schema.Types.ObjectId,
      ref: "Dialog",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: Boolean,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    attachments: [{ type: Schema.Types.ObjectId, ref: "File" }],
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
