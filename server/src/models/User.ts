import mongoose, { Schema } from "mongoose";
import isEmail from "validator/lib/isEmail";
import { generatePasswordHash } from "../utils";

export interface IUser extends Document {
  email: string;
  fullName: string;
  password: string;
  confirmed?: boolean;
  avatar?: string;
  confirm_hash?: string;
  last_seen?: Date;
}

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
    last_seen: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre<IUser>("save", async function (next) {
  const user: any = this;

  if (!user.isModified("password")) return next();

  user.password = await generatePasswordHash(user.password);
  user.confirm_hash = await generatePasswordHash(new Date().toString());
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
