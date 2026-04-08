import Joi from "joi";

const registerSchema = Joi.object({
  fullName: Joi.string().required().trim().messages({
    "string.empty": "Full name is required",
    "any.required": "Full name is required",
  }),
  email: Joi.string().email().required().lowercase().trim().messages({
    "string.email": "Please use a valid email",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(8).required().messages({
    "string.min": "Password must be at least 8 characters long",
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
  role: Joi.string()
    .valid("Dealer", "Client", "SocietyOwner", "Resident", "SuperAdmin", "Owner")
    .required()
    .messages({
      "any.only": "Invalid role selected",
      "any.required": "Role is required",
    }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please use a valid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
});

const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please use a valid email",
    "any.required": "Email is required",
  }),
});

const verifyOTPSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please use a valid email",
    "any.required": "Email is required",
  }),
  otp: Joi.string().length(6).required().messages({
    "string.length": "OTP must be 6 digits",
    "any.required": "OTP is required",
  }),
});

const resetPasswordSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please use a valid email",
    "any.required": "Email is required",
  }),
  otp: Joi.string().length(6).required().messages({
    "string.length": "OTP must be 6 digits",
    "any.required": "OTP is required",
  }),
  newPassword: Joi.string().min(8).required().messages({
    "string.min": "Password must be at least 8 characters long",
    "any.required": "New password is required",
  }),
});

export const userValidation = {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  verifyOTPSchema,
  resetPasswordSchema,
};
