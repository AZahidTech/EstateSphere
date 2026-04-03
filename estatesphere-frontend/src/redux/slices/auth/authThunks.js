import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });
      return res.data; // expects { user, token }
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.message || "Login failed");
      }
      return rejectWithValue(err.message || "An unexpected error occurred");
    }
  }
);

export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (payload, { rejectWithValue }) => {
    const credential = typeof payload === "string" ? payload : payload.credential;
    const role = typeof payload === "string" ? undefined : payload.role;
    const isSignup = typeof payload === "string" ? false : payload.isSignup ?? false;

    try {
      const res = await axios.post("http://localhost:3000/api/auth/google", {
        credential,
        role,
        isSignup,
      });
      return res.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.message || "Google authentication failed");
      }
      return rejectWithValue(err.message || "An unexpected error occurred");
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", userData);
      return res.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.message || "Registration failed");
      }
      return rejectWithValue(err.message || "An unexpected error occurred");
    }
  }
);
