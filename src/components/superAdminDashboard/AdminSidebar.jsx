import React from "react";
import SettingsIcon from "../../assets/svg/superAdmin/SettingsIcon";
import LogoutIcon from "../../assets/svg/superAdmin/LogoutIcon";
import { adminNavItems } from "../../data/index.jsx";

const navItems = adminNavItems;

const AdminSidebar = () => (
    <aside className="w-[240px] min-w-[240px] bg-white border-r border-slate-200 flex flex-col h-screen shadow-sm">
        <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-linear-to-r from-teal-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-teal-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">EstateSphere</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
            <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 italic">Management</p>
            {navItems.map((item, i) => (
                <button
                    key={i}
                    className={`group flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 font-medium text-[14px]
            ${item.active
                            ? "bg-slate-900 text-white shadow-xl shadow-slate-200"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
                >
                    <span className={`transition-colors duration-200 ${item.active ? "text-white" : "text-slate-400 group-hover:text-slate-900"}`}>
                        {item.icon}
                    </span>
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge && (
                        <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-[8px] py-[2px] rounded-full shadow-sm shadow-red-200 animate-pulse">
                            {item.badge}
                        </span>
                    )}
                </button>
            ))}
        </nav>

        <div className="p-4 space-y-1 border-t border-slate-100 bg-slate-50/50">
            <button className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all text-[14px] font-medium border border-transparent hover:border-slate-200">
                <SettingsIcon />
                Settings
            </button>
            <button className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-red-500 hover:bg-red-50 hover:shadow-sm transition-all text-[14px] font-medium border border-transparent hover:border-red-100">
                <LogoutIcon />
                Logout
            </button>
        </div>
    </aside>
);

export default AdminSidebar;
