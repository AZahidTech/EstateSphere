import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { forgotPasswordThunk, verifyOTPThunk, resetPasswordThunk } from "../../redux/slices/auth/authThunks";
import { resetOtpStatus, clearError } from "../../redux/slices/auth/authSlice";
import EnvelopeIcon from "../../assets/svg/auth/EnvelopeIcon";
import LockIcon from "../../assets/svg/auth/LockIcon";
import EyeOpenIcon from "../../assets/svg/auth/EyeOpenIcon";
import EyeSlashIcon from "../../assets/svg/auth/EyeSlashIcon";

export default function ForgotPasswordForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, otpStatus } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // Reset OTP status when component unmounts
    return () => {
      dispatch(resetOtpStatus());
    };
  }, [dispatch]);

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      await dispatch(forgotPasswordThunk(email)).unwrap();
    } catch (err) {
      console.error(err);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      await dispatch(verifyOTPThunk({ email, otp })).unwrap();
    } catch (err) {
      console.error(err);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await dispatch(resetPasswordThunk({ email, otp, newPassword })).unwrap();
      alert("Password reset successful! Please login with your new password.");
      navigate("/Login");
    } catch (err) {
      console.error(err);
    }
  };

  const renderStep = () => {
    switch (otpStatus) {
      case "idle":
      case "sending":
        return (
          <form onSubmit={handleSendOTP} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <EnvelopeIcon className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-300 focus:ring-4 focus:ring-indigo-600/20 outline-none disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending OTP..." : "Send Verification OTP"}
            </button>
          </form>
        );

      case "sent":
      case "verifying":
        return (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6">
              <p className="text-sm text-indigo-700">
                An OTP has been sent to <strong>{email}</strong>. Please enter it below to verify your account.
              </p>
            </div>
            <div>
              <label htmlFor="otp" className="block text-sm font-semibold text-slate-700 mb-2">
                One-Time Password (OTP)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LockIcon className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400 tracking-[0.5em] font-bold text-center"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-300 focus:ring-4 focus:ring-indigo-600/20 outline-none disabled:opacity-60"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              <button
                type="button"
                onClick={() => dispatch(resetOtpStatus())}
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors text-center"
              >
                Change Email Address
              </button>
            </div>
          </form>
        );

      case "verified":
      case "resetting":
        return (
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-6">
              <p className="text-sm text-emerald-700">
                OTP verified successfully! Now you can reset your password.
              </p>
            </div>
            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-semibold text-slate-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LockIcon className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all duration-200 text-slate-900"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400"
                >
                   {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeOpenIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LockIcon className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all duration-200 text-slate-900"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400"
                >
                   {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeOpenIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-300 focus:ring-4 focus:ring-indigo-600/20 outline-none disabled:opacity-60"
            >
              {loading ? "Resetting..." : "Reset Password & Login"}
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-2xl mb-6">
                <LockIcon className="w-8 h-8 text-indigo-600" />
            </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            {otpStatus === 'verified' ? 'Reset Password' : (otpStatus === 'sent' ? 'Verify OTP' : 'Forgot Password')}
          </h2>
          <p className="text-slate-600">
            {otpStatus === 'verified' 
                ? 'Create a strong, unique password to secure your account.' 
                : (otpStatus === 'sent' 
                    ? 'Enter the 6-digit code we just sent to your email.' 
                    : 'No worries, we\'ll send you reset instructions.')}
          </p>
        </div>

        {/* Error Message */}
        {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl">
                <p className="text-sm text-red-600 text-center font-medium">{error}</p>
            </div>
        )}

        {/* Dynamic Form Content */}
        {renderStep()}

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <Link
            to="/Login"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
