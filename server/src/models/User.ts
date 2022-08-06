import mongoose, { Schema } from "mongoose";
import isEmail from "validator/lib/isEmail";

export interface IUser extends Document {
  email: string;
  fullName: string;
  password: string;
  confirmed: boolean;
  avatar: string;
  confirm_hash: string;
  last_seen: Date;
}
//TODO: Сделать последнее посещение
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email address is required"],
      validate: [isEmail, "Invalid email"],
      unique: true,
    },
    fullName: {
      type: String,
      required: [true, "FullName is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    avatar: String,
    confirm_hash: String,
    last_seen: Date,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
