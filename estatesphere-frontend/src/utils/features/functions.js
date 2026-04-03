export const validateSignupForm = (formData) => {
    const newErrors = {};

    if (formData.fullName.length < 3) {
        newErrors.fullName = 'Name must be at least 3 characters long';
    } else if (formData.fullName.length > 50) {
        newErrors.fullName = 'Name must be less than 50 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
    }

    if (formData.password.length <= 8) {
        newErrors.password = 'Password must be greater than 8 characters';
    } else if (formData.password.length >= 20) {
        newErrors.password = 'Password must be less than 20 characters';
    }

    if (!formData.role) {
        newErrors.role = 'Please select a role';
    }

    return newErrors;
};

export const getPasswordStrength = (password) => {
    let score = 0;
    if (!password) return { score: 0, label: '', color: 'bg-slate-200', textColor: 'text-slate-400' };

    if (password.length > 5) score++;
    if (password.length > 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

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

export const runTimeValidation = (name, newValue) => {
    let newError = '';
    if (name === 'fullName') {
        if (newValue.length > 0 && newValue.length < 3) newError = 'Name must be at least 3 characters long';
        if (newValue.length > 50) newError = 'Name must be less than 50 characters';
    }
    if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    return newError;
};

export const getRoleColor = (role) => {
    switch (role) {
        case "Super Admin": return "bg-indigo-50 text-indigo-600 border-indigo-100";
        case "Owner":
        case "SocietyOwner": return "bg-purple-50 text-purple-600 border-purple-100";
        case "Resident": return "bg-emerald-50 text-emerald-600 border-emerald-100";
        case "Dealer": return "bg-amber-50 text-amber-600 border-amber-100";
        case "Client": return "bg-rose-50 text-rose-600 border-rose-100";
        default: return "bg-slate-50 text-slate-500 border-slate-100";
    }
};

export const getStatusStyle = (status) => {
    switch (status) {
        case "Pending": return "bg-amber-50 text-amber-600 border-amber-100";
        case "In Progress": return "bg-blue-50 text-blue-600 border-blue-100";
        case "Resolved": return "bg-emerald-50 text-emerald-600 border-emerald-100";
        default: return "bg-slate-50 text-slate-500 border-slate-100";
    }
};

export const getRoleDashboardPath = (role) => {
    switch (role) {
        case "Super Admin": return "/SuperAdmin";
        case "Owner":
        case "SocietyOwner": return "/SocietyOwner";
        case "Resident":    return "/Resident";
        case "Dealer":      return "/Dealer";
        case "Client":      return "/Client";
        default:            return "/";
    }
};
