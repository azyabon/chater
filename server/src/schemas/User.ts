import mongoose, { Schema } from "mongoose";
import isEmail from "validator/lib/isEmail";

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
    last_seen: Date,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
