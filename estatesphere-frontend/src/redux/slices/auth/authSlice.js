import { createSlice } from "@reduxjs/toolkit";
import { googleLogin, loginUser, forgotPasswordThunk, verifyOTPThunk, resetPasswordThunk } from "./authThunks";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  selectedRole: localStorage.getItem("selectedRole") || null,
  loading: false,
  error: null,
  otpStatus: 'idle', // 'idle' | 'sending' | 'sent' | 'verifying' | 'verified' | 'resetting' | 'reset-success'
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.selectedRole = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("selectedRole");
    },
    setSelectedRole: (state, action) => {
      state.selectedRole = action.payload;
      localStorage.setItem("selectedRole", action.payload);
    },
    clearError: (state) => {
      state.error = null;
    },
    resetOtpStatus: (state) => {
      state.otpStatus = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.selectedRole = null; // Clear any previous role selection
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.removeItem("selectedRole");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.selectedRole = null; // Clear any previous role selection
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.removeItem("selectedRole");
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Forgot Password
      .addCase(forgotPasswordThunk.pending, (state) => {
        state.loading = true;
        state.otpStatus = 'sending';
        state.error = null;
      })
      .addCase(forgotPasswordThunk.fulfilled, (state) => {
        state.loading = false;
        state.otpStatus = 'sent';
      })
      .addCase(forgotPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.otpStatus = 'idle';
        state.error = action.payload;
      })

      // Verify OTP
      .addCase(verifyOTPThunk.pending, (state) => {
        state.loading = true;
        state.otpStatus = 'verifying';
        state.error = null;
      })
      .addCase(verifyOTPThunk.fulfilled, (state) => {
        state.loading = false;
        state.otpStatus = 'verified';
      })
      .addCase(verifyOTPThunk.rejected, (state, action) => {
        state.loading = false;
        state.otpStatus = 'sent';
        state.error = action.payload;
      })

      // Reset Password
      .addCase(resetPasswordThunk.pending, (state) => {
        state.loading = true;
        state.otpStatus = 'resetting';
        state.error = null;
      })
      .addCase(resetPasswordThunk.fulfilled, (state) => {
        state.loading = false;
        state.otpStatus = 'reset-success';
      })
      .addCase(resetPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.otpStatus = 'verified';
        state.error = action.payload;
      });
  },
});

export const { logout, setSelectedRole, clearError, resetOtpStatus } = authSlice.actions;

export default authSlice.reducer;
