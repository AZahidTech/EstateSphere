// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
// username:{
//     type: String,
//     required: true,
//     unique: true
// },
// email:{
//     type: String,
//     required: true,
//     unique: true
// },
// password:{
//     type: String,
//     required: true

// },
// role:{
//     type: String,
//     enum:['client','dealer','societyOwner','resident','admin'],
//     default:'client'
// }

// })
// const userModel = mongoose.model('User', userSchema)
// module.exports = userModel;
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["Dealer", "Client", "SocietyOwner", "Resident", "SuperAdmin"],
      default: "Client", // default for new users
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// 🔐 Hash password before save
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });
userSchema.pre("save", async function () {
  // agar password modified nahi hai, return kar do
  if (!this.isModified("password")) return;

  // password hash karo
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  // ab next() ki zarurat nahi, save automatically continue ho jaayega
});

// 🔑 Compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;