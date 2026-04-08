import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },

    roles: {
      type: [String],
      enum: [
        "Dealer",
        "Client",
        "SocietyOwner",
        "Resident",
        "SuperAdmin",
        "Owner",
      ],
      default: ["Client"],
    },

    role: {
      type: String,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    resetPasswordOTP: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  { timestamps: true, strict: false },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//  Compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
