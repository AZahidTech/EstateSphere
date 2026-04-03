import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin, loginUser } from "../../redux/slices/auth/authThunks";
import { setSelectedRole } from "../../redux/slices/auth/authSlice";
import { getRoleDashboardPath } from "../../utils/features/functions";
import RoleSelectionModal from "../roleSelectionModal/RoleSelectionModal";
import EnvelopeIcon from "../../assets/svg/auth/EnvelopeIcon";
import LockIcon from "../../assets/svg/auth/LockIcon";
import EyeOpenIcon from "../../assets/svg/auth/EyeOpenIcon";
import EyeSlashIcon from "../../assets/svg/auth/EyeSlashIcon";
import GoogleIcon from "../../assets/svg/auth/GoogleIcon";
import AppleIcon from "../../assets/svg/auth/AppleIcon";
import { Link } from "react-router-dom";
import { socialProviders } from "../../data/index.jsx";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [showRoleModal, setShowRoleModal] = useState(false);
  const [availableRoles, setAvailableRoles] = useState([]);

  useEffect(() => {
    if (window.google) {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("google-signin-button"),
        {
          theme: "outline",
          size: "large",
          width: 300,
        }
      );
    }
  }, []);

  const handleRoleSelection = (role) => {
    dispatch(setSelectedRole(role));
    setShowRoleModal(false);
    navigate(getRoleDashboardPath(role));
  };

  const handleGoogleResponse = async (response) => {
    try {
      const result = await dispatch(
        googleLogin({ credential: response.credential, isSignup: false })
      ).unwrap();

      const roles = result.user.roles || [result.user.role];

      if (roles.length > 1) {
        setAvailableRoles(roles);
        setShowRoleModal(true);
      } else {
        const targetRole = roles[0];
        dispatch(setSelectedRole(targetRole));
        alert(`Welcome back, ${result.user.fullName}!`);
        navigate(getRoleDashboardPath(targetRole));
      }
    } catch (err) {
      console.error(err);
      alert(err || "Google login failed!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser({ email, password })).unwrap();

      const roles = result.user.roles || [result.user.role];

      if (roles.length > 1) {
        setAvailableRoles(roles);
        setShowRoleModal(true);
      } else {
        const targetRole = roles[0];
        dispatch(setSelectedRole(targetRole));
        alert(`Welcome back, ${result.user.fullName}!`);
        navigate(getRoleDashboardPath(targetRole));
      }
    } catch (err) {
      console.error(err);
      alert(err || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
      {showRoleModal && (
        <RoleSelectionModal
          roles={availableRoles}
          onSelect={handleRoleSelection}
        />
      )}
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Welcome back
          </h2>
          <p className="text-slate-600">
            Please enter your details to access your dashboard.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
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

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <LockIcon className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3.5 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeOpenIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border-2 border-slate-300 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-600/20 cursor-pointer"
              />
              <span className="ml-2 text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                Remember me for 30 days
              </span>
            </label>
            <Link
              to="/ForgotPassword"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-300 focus:ring-4 focus:ring-indigo-600/20 outline-none disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Signing In…
              </span>
            ) : (
              "Sign In to Dashboard"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-slate-500 uppercase tracking-wider text-xs font-semibold">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-4">
          {socialProviders.map((provider, idx) => (
            <div key={idx} className="relative w-full h-full rounded-xl overflow-hidden">
              {/* Invisible Google Button Layer */}
              {provider.provider === "google" && window.google && (
                <div
                  id="google-signin-button"
                  className="absolute inset-0 z-20 cursor-pointer opacity-[0.01]"
                  style={{ transform: "scale(1.5)", transformOrigin: "center" }}
                ></div>
              )}
              {/* Custom Visable Button */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border-2 border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 group relative z-10"
              >
                {provider.provider === "google" ? (
                  <GoogleIcon className="w-5 h-5" />
                ) : (
                  <AppleIcon className="w-5 h-5" />
                )}
                <span className="font-semibold text-slate-700 group-hover:text-slate-900">
                  {provider.name}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Sign Up Section */}
        <div className="mt-8 space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-500 text-xs font-semibold">
                New to EstateSphere?
              </span>
            </div>
          </div>
          <Link
            to="/Signup"
            className="block w-full py-4 text-center bg-white border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-all duration-300 focus:ring-4 focus:ring-indigo-600/20 outline-none"
          >
            Create New Account
          </Link>
          <p className="text-center text-xs text-slate-500">
            Need enterprise access?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Contact sales
            </a>
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500">
          <a href="#" className="hover:text-slate-700 transition-colors">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="hover:text-slate-700 transition-colors">
            Terms of Service
          </a>
          <span>•</span>
          <a href="#" className="hover:text-slate-700 transition-colors">
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
}
