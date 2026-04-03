import React from "react";
import { useSelector } from "react-redux";
import SearchIcon from "../../assets/svg/common/SearchIcon";
import BellIcon from "../../assets/svg/common/BellIcon";
import PlusIcon from "../../assets/svg/common/PlusIcon";

const AdminTopbar = () => {
    const { user, selectedRole } = useSelector((state) => state.auth);
    const fullName = user?.fullName || "Admin";
    const roleDisplay = selectedRole || (Array.isArray(user?.role) ? user.role[0] : user?.role) || "Super Admin";
    const initial = fullName.charAt(0).toUpperCase();

    return (
        <header className="topbar-header">
            <div className="relative group w-[400px]">
                <input
                    className="search-bar-premium pl-12"
                    placeholder="Search for societies, users, or tickets..."
                />
                <div className="absolute left-4 top-3.5 text-slate-300 group-focus-within:text-indigo-600 transition-colors">
                    <SearchIcon className="w-5 h-5" />
                </div>
            </div>
 
            <div className="flex items-center gap-6 ml-auto">
                <button className="relative w-11 h-11 rounded-xl border border-slate-200 bg-white text-slate-600 flex items-center justify-center cursor-pointer hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm">
                    <BellIcon />
                </button>
 
                <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
                    <div className="text-right">
                        <p className="text-[14px] font-bold text-slate-900">{fullName}</p>
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">{roleDisplay}</p>
                    </div>
                    <div className="avatar-gradient">
                        {initial}
                    </div>
                </div>
 
                <button className="group btn-gradient-premium px-6 py-2.5 rounded-xl shadow-md font-bold text-[14px]">
                    <PlusIcon strokeWidth={3} className="w-4 h-4" /> Add Society
                </button>
            </div>
        </header>
    );
};

export default AdminTopbar;
