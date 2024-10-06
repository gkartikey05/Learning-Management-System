import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";
import JWT from "jsonwebtoken";

const userSchema = new Schema(
  {
    fullName: {
      type: "String",
      required: [true, "Name is required"],
      minLength: [5, "Name must be atleast 5 characters long"],
      maxLength: [30, "Name must be atleast 30 characters long"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: "String",
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      unique: [true, "Email already exists"],
      match: [
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: "String",
      required: [true, "Password is required"],
      minLength: [8, "Password must be atleast 8 characters long"],
      trim: true,
      select: false,
    },
    avatar: {
      public_id: {
        type: "String",
      },
      secure_url: {
        type: "String",
      },
    },
    role: {
      type: "String",
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcryptjs.hash(this.password, 10);
  return next();
});

userSchema.methods = {
  generateJWTToken: async function () {
    return JWT.sign(
      {
        id: this._id,
        email: this.email,
        subscription: this.subscription,
        role: this.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPRIRY,
      }
    );
  },
  comparePassword: async function (plainTextPassword) {
    return await bcryptjs.compare(plainTextPassword, this.password);
  },
};

const User = model("users", userSchema);

export default User;
