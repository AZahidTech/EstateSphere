import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// 🔐 Generate Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, roles: user.roles },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// ✅ REGISTER
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

// ✅ LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 🔄 Legacy Migration: Ensure the old 'role' field is merged into the new 'roles' array
    if (user) {
        const legacyRole = user.get('role'); // Get the old string role
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

// ✅ GOOGLE AUTH — handles both Signup and Login via isSignup flag
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

    // 🔄 Legacy Migration: Ensure the old 'role' field is merged into the new 'roles' array
    if (user) {
        const legacyRole = user.role; // Read-only access to legacy string field
        let needsMigrationSave = false;

        // Ensure roles is at least an empty array
        if (!user.roles) {
            user.roles = [];
            needsMigrationSave = true;
        }

        // If legacyRole exists and isn't in the new roles array yet, add it
        if (legacyRole && !user.roles.includes(legacyRole)) {
            user.roles.push(legacyRole);
            needsMigrationSave = true;
        }
        
        // Fallback: If roles is still empty, add default
        if (user.roles.length === 0) {
            user.roles = ["Client"];
            needsMigrationSave = true;
        }

        if (needsMigrationSave) {
            await user.save();
        }
    }

    if (isSignup) {
      // ── SIGNUP PATH ──────────────────────────────────────────────
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
          message: role && !user.roles.includes(role) 
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
        return res.status(400).json({ message: "Please select a role before signing up." });
      }

      // ✅ Create brand-new user with chosen role
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
      // ── LOGIN PATH ───────────────────────────────────────────────
      if (!user) {
        // No account found → tell them to sign up first
        return res.status(404).json({
          message: "No account found with this Google email. Please sign up first.",
        });
      }

      let userUpdated = false;

      // If they originally registered locally, upgrade their provider to google
      if (user.provider === "local") {
        user.provider = "google";
        user.profilePic = picture;
        userUpdated = true;
      }
      
      // If a role was passed during login, make sure it's added
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
      error: error.message 
    });
  }
};