// const  express = require('express');

// const router = express.Router();

// router.post('/register')

// module.exports = router;
import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controllers.js";

const router = express.Router();

// 🔑 Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;