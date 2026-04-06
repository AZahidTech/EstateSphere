import express from "express";
import {
  registerUser,
  loginUser,
  googleAuth,
  forgotPassword,
  verifyOTP,
  resetPassword,
} from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google", googleAuth);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetPassword);

export default router;
