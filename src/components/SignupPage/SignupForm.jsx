import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../../assets/svg/Auth/GoogleIcon';
import EyeSlashIcon from '../../assets/svg/Auth/EyeSlashIcon';
import EyeOpenIcon from '../../assets/svg/Auth/EyeOpenIcon';
import ChevronDownIcon from '../../assets/svg/common/ChevronDownIcon';

export default function SignupForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        role: '',
        termsAccepted: false
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Full Name Validation
        if (formData.fullName.length < 3) {
            newErrors.fullName = 'Name must be at least 3 characters long';
        } else if (formData.fullName.length > 50) {
            newErrors.fullName = 'Name must be less than 50 characters';
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password Validation
        if (formData.password.length <= 8) {
            newErrors.password = 'Password must be greater than 8 characters';
        } else if (formData.password.length >= 20) {
            newErrors.password = 'Password must be less than 20 characters';
        }

        // Role Validation
        if (!formData.role) {
            newErrors.role = 'Please select a role';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            // Proceed with signup logic
        }
    };

    const getPasswordStrength = (password) => {
        let score = 0;
        if (password.length > 5) score++;
        if (password.length > 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        // Cap score at 4
        if (score > 4) score = 4;

        switch (score) {
            case 0:
            case 1:
                return { score: 1, label: 'WEAK', color: 'bg-red-500', textColor: 'text-red-500' };
            case 2:
                return { score: 2, label: 'FAIR', color: 'bg-orange-500', textColor: 'text-orange-500' };
            case 3:
                return { score: 3, label: 'MODERATE', color: 'bg-blue-500', textColor: 'text-blue-500' };
            case 4:
                return { score: 4, label: 'STRONG', color: 'bg-green-500', textColor: 'text-green-500' };
            default:
                return { score: 0, label: '', color: 'bg-slate-200', textColor: 'text-slate-400' };
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue
        });

        // Runtime Validation
        let newError = '';
        if (name === 'fullName') {
            if (newValue.length > 0 && newValue.length < 3) newError = 'Name must be at least 3 characters long';
            if (newValue.length > 50) newError = 'Name must be less than 50 characters';
        }
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // Only show email error if length > 0 and it's invalid
            // To avoid annoyance, maybe check length > 5 or just strict regex
            if (newValue.length > 0 && !emailRegex.test(newValue)) newError = 'Please enter a valid email address';
        }
        if (name === 'password') {
            if (newValue.length > 0) {
                if (newValue.length <= 8) newError = 'Password must be greater than 8 characters';
                if (newValue.length >= 20) newError = 'Password must be less than 20 characters';
            }
        }
        if (name === 'role') {
            if (!newValue) newError = 'Please select a role';
        }

        setErrors(prev => ({ ...prev, [name]: newError }));
    };

    return (
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 bg-white overflow-y-auto">
            <div className="w-full max-w-md">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Get Started</h2>
                    <p className="text-slate-500">Create your EstateSphere account today.</p>
                </div>

                {/* Social Signup */}
                <button className="w-full flex items-center justify-center gap-3 px-4 py-3 mb-6 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                    <GoogleIcon className="w-5 h-5" />
                    <span className="text-slate-700 font-medium">Sign up with Google</span>
                </button>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-400">Or continue with</span>
                    </div>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                {showPassword ? (
                                    <EyeSlashIcon className="w-5 h-5" />
                                ) : (
                                    <EyeOpenIcon className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        {/* Password Strength Indicator */}
                        {formData.password && (
                            <>
                                <div className="flex gap-1 mt-2">
                                    {[1, 2, 3, 4].map((level) => (
                                        <div
                                            key={level}
                                            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${level <= getPasswordStrength(formData.password).score
                                                ? getPasswordStrength(formData.password).color
                                                : 'bg-slate-200'
                                                }`}
                                        ></div>
                                    ))}
                                </div>
                                <p className={`text-xs mt-1 font-medium ${getPasswordStrength(formData.password).textColor}`}>
                                    {getPasswordStrength(formData.password).label}
                                </p>
                            </>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Select Role</label>
                        <div className="relative">
                            <select
                                name="role"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none text-slate-700"
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Who are you?</option>
                                <option value="resident">Resident</option>
                                <option value="owner">Society Owner</option>
                                <option value="admin">Admin</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                <ChevronDownIcon className="w-4 h-4" />
                            </div>
                        </div>
                        {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                className="w-4 h-4 border-slate-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                            />
                        </div>
                        <label htmlFor="terms" className="text-sm text-slate-500 cursor-pointer select-none">
                            I agree to the <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>.
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={!formData.termsAccepted}
                        className={`w-full py-3.5 font-semibold rounded-xl shadow-lg transition-all duration-300 ${formData.termsAccepted
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-0.5 focus:ring-4 focus:ring-indigo-600/20'
                            : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                            }`}
                    >
                        Create Account
                    </button>

                    <p className="text-center text-sm text-slate-500 mt-6">
                        Already have an account? <Link to="/Login" className="text-blue-600 font-semibold hover:text-blue-700">Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
