import mongoose, { Schema } from "mongoose";

export interface IFile extends Document {
  filename: string;
  size: number;
  ext: string;
  url: string;
  message: string;
  user: string;
}

const FileSchema = new Schema(
  {
    filename: String,
    size: Number,
    ext: String,
    url: String,
    message: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const FileModel = mongoose.model<IFile>("File", FileSchema);

export default FileModel;
