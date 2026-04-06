import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { googleLogin, registerUser } from '../../redux/slices/auth/authThunks';
import { logout, setSelectedRole } from '../../redux/slices/auth/authSlice';
import { validateSignupForm, getPasswordStrength, runTimeValidation, getRoleDashboardPath } from '../../utils/features/functions';
import RoleSelectionModal from '../roleSelectionModal/RoleSelectionModal';
import GoogleIcon from '../../assets/svg/auth/GoogleIcon';
import EyeSlashIcon from '../../assets/svg/auth/EyeSlashIcon';
import EyeOpenIcon from '../../assets/svg/auth/EyeOpenIcon';
import ChevronDownIcon from '../../assets/svg/common/ChevronDownIcon';
import { signupRoles } from '../../data/index.jsx';

export default function SignupForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        role: '',
        termsAccepted: false
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const [showRoleModal, setShowRoleModal] = useState(false);
    const [availableRoles, setAvailableRoles] = useState([]);

    const formDataRef = useRef(formData);
    useEffect(() => {
        formDataRef.current = formData;
    }, [formData]);

    const googleInitialized = useRef(false);

    useEffect(() => {
        if (window.google) {
            if (!googleInitialized.current) {
                google.accounts.id.initialize({
                    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                    callback: handleGoogleResponse,
                });
                googleInitialized.current = true;
            }

            if (formData.role) {
                const btnContainer = document.getElementById("googleSignUpDiv");
                if (btnContainer) {
                    google.accounts.id.renderButton(
                        btnContainer,
                        {
                            theme: "outline",
                            size: "large",
                            width: "400",
                            shape: "rectangular",
                        }
                    );
                }
            }
        }
    }, [formData.role]);



    const handleRoleSelection = (role) => {
        dispatch(setSelectedRole(role));
        setShowRoleModal(false);
        navigate(getRoleDashboardPath(role));
    };

    const handleGoogleResponse = async (response) => {
        const selectedRole = formDataRef.current.role;

        if (!selectedRole) {
            alert("Please select a Role from the dropdown before signing up with Google.");
            return;
        }

        try {
            const result = await dispatch(
                googleLogin({ credential: response.credential, role: selectedRole, isSignup: true })
            ).unwrap();

            alert(`${result.message || "Account updated!"} Please log in to access your dashboard.`);
            dispatch(logout());
            navigate("/Login");
        } catch (err) {
            if (err && (err.includes("already exists") || err.includes("log in instead"))) {
                try {
                    const retryResult = await dispatch(
                        googleLogin({ credential: response.credential, role: selectedRole, isSignup: false })
                    ).unwrap();

                    alert(`${retryResult.message || "Role added!"} Please log in to access your dashboard.`);
                    dispatch(logout());
                    navigate("/Login");
                } catch (retryErr) {
                    console.error(retryErr);
                    alert(retryErr || "Google authentication failed!");
                }
            } else {
                console.error(err);
                alert(err || "Google signup failed!");
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateSignupForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const result = await dispatch(registerUser({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                    role: formData.role
                })).unwrap();

                alert(result.message || "Registration successful! Please log in.");
                dispatch(logout());
                navigate("/Login");
            } catch (err) {
                console.error(err);
                alert(err || "Registration failed!");
            }
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue
        });

        const newError = runTimeValidation(name, newValue);

        setErrors(prev => ({ ...prev, [name]: newError }));
    };

    return (
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 bg-white overflow-y-auto">
            {showRoleModal && (
                <RoleSelectionModal
                    roles={availableRoles}
                    onSelect={handleRoleSelection}
                />
            )}
            <div className="w-full max-w-md">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Get Started</h2>
                    <p className="text-slate-500">Create your EstateSphere account today.</p>
                </div>

                <div className="relative w-full mb-6 min-h-[54px]">
                    {formData.role ? (
                        <div className="relative w-full h-full animate-in fade-in duration-300">
                            <div className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border-2 border-slate-200 rounded-xl bg-white hover:bg-slate-50 transition-all duration-200">
                                <GoogleIcon className="w-5 h-5" />
                                <span className="font-semibold text-slate-700">
                                    Google
                                </span>
                            </div>

                            <div
                                id="googleSignUpDiv"
                                className="absolute inset-0 z-20 opacity-[0.01] cursor-pointer [&>div]:w-full [&>div]:h-full"
                            ></div>
                        </div>
                    ) : (
                        <div
                            className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50 cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
                            onClick={() => {
                                alert("Please select a Role from the dropdown before signing up with Google.");
                            }}
                        >
                            <GoogleIcon className="w-5 h-5 grayscale opacity-50" />
                            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Select Role to Sign-up</span>
                        </div>
                    )}
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-400">Or continue with</span>
                    </div>
                </div>

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
                                {signupRoles.map((role) => (
                                    <option key={role.value} value={role.value}>{role.label}</option>
                                ))}
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
