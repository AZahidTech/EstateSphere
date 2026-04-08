import express from "express";
import {
  registerUser,
  loginUser,
  googleAuth,
  forgotPassword,
  verifyOTP,
  resetPassword,
} from "../controllers/auth.controllers.js";
import validate from "../middlewares/validate.middleware.js";
import { userValidation } from "../validations/user.validation.js";

const router = express.Router();

router.post("/register", validate(userValidation.registerSchema), registerUser);
router.post("/login", validate(userValidation.loginSchema), loginUser);
router.post("/google", googleAuth); // Google auth payload is different (credential), can add schema later if needed
router.post(
  "/forgot-password",
  validate(userValidation.forgotPasswordSchema),
  forgotPassword,
);
router.post("/verify-otp", validate(userValidation.verifyOTPSchema), verifyOTP);
router.post(
  "/reset-password",
  validate(userValidation.resetPasswordSchema),
  resetPassword,
);

export default router;
