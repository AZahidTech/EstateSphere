import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import sendEmail from "../utils/sendEmail.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const generateToken = (user) => {
  return jwt.sign({ id: user._id, roles: user.roles }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      fullName,
      email,
      password,
      roles: [role],
    });

    res.status(201).json({
      message: "User registered successfully",
      token: generateToken(user),
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        roles: user.roles,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (user) {
      const legacyRole = user.get("role");
      let needsMigrationSave = false;

      if (!user.roles) {
        user.roles = [];
        needsMigrationSave = true;
      }

      if (legacyRole && !user.roles.includes(legacyRole)) {
        user.roles.push(legacyRole);
        needsMigrationSave = true;
      }

      if (user.roles.length === 0) {
        user.roles = ["Client"];
        needsMigrationSave = true;
      }

      if (needsMigrationSave) {
        await user.save();
      }
    }

    if (user.provider === "google") {
      return res.status(400).json({
        message: "Please login with Google",
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      token: generateToken(user),
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        roles: user.roles,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const googleAuth = async (req, res) => {
  try {
    const { credential, role, isSignup } = req.body;

    if (!credential) {
      return res.status(400).json({ message: "No credential provided" });
    }

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { name, email, picture } = payload;

    let user = await User.findOne({ email });

    if (user) {
      const legacyRole = user.role;
      let needsMigrationSave = false;

      if (!user.roles) {
        user.roles = [];
        needsMigrationSave = true;
      }

      if (legacyRole && !user.roles.includes(legacyRole)) {
        user.roles.push(legacyRole);
        needsMigrationSave = true;
      }

      if (user.roles.length === 0) {
        user.roles = ["Client"];
        needsMigrationSave = true;
      }

      if (needsMigrationSave) {
        await user.save();
      }
    }

    if (isSignup) {
      if (user) {
        let rolesWasModified = false;

        if (role && !user.roles.includes(role)) {
          user.roles.push(role);
          rolesWasModified = true;
        }

        if (rolesWasModified) {
          await user.save();
        }

        return res.status(200).json({
          message:
            role && !user.roles.includes(role)
              ? `New role "${role}" added to your account!`
              : "Logging you into your account.",
          token: generateToken(user),
          user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            roles: user.roles,
          },
        });
      }

      if (!role) {
        return res
          .status(400)
          .json({ message: "Please select a role before signing up." });
      }

      user = await User.create({
        fullName: name,
        email,
        password: Math.random().toString(36).substring(0, 10),
        roles: [role],
        provider: "google",
        profilePic: picture,
      });

      return res.status(201).json({
        message: "Account created successfully! Welcome to EstateSphere.",
        token: generateToken(user),
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          roles: user.roles,
        },
      });
    } else {
      if (!user) {
        return res.status(404).json({
          message:
            "No account found with this Google email. Please sign up first.",
        });
      }

      let userUpdated = false;

      if (user.provider === "local") {
        user.provider = "google";
        user.profilePic = picture;
        userUpdated = true;
      }

      if (role && !user.roles.includes(role)) {
        user.roles.push(role);
        userUpdated = true;
      }

      if (userUpdated) {
        await user.save();
      }

      return res.status(200).json({
        message: "Google login successful",
        token: generateToken(user),
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          roles: user.roles,
        },
      });
    }
  } catch (error) {
    console.error("Google auth error DETAILS:", error);
    res.status(500).json({
      message: "Google authentication failed. Please try again.",
      error: error.message,
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found with this email" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.resetPasswordOTP = otp;
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
    await user.save();

    const message = `Your EstateSphere password reset OTP is: ${otp}. This code is valid for 10 minutes.`;

    try {
      await sendEmail({
        email: user.email,
        subject: "Password Reset OTP - EstateSphere",
        message,
      });

      res.status(200).json({ message: "OTP sent to your email" });
    } catch (error) {
      user.resetPasswordOTP = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();
      console.error("Email error:", error);
      res.status(500).json({ message: "Email could not be sent" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({
      email,
      resetPasswordOTP: otp,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    res
      .status(200)
      .json({
        message: "OTP verified successfully. You can now reset your password.",
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    const user = await User.findOne({
      email,
      resetPasswordOTP: otp,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid or expired OTP. Please request a new one." });
    }

    user.password = newPassword;
    user.resetPasswordOTP = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
