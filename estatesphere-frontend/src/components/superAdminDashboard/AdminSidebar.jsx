import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { adminNavItems } from "../../data/index.jsx";
import DashboardIcon from "../../assets/svg/common/DashboardIcon";

const navItems = adminNavItems;

const AdminSidebar = () => {
    const location = useLocation();
    const user = useSelector((state) => state.auth.user);
    const fullName = user?.fullName || "Admin";
    const initial = fullName.charAt(0).toUpperCase();

    return (
        <aside className="w-[200px] min-w-[200px] bg-white border-r border-[#e9ecf3] flex flex-col h-screen">
            <div className="flex items-center gap-2.5 px-5 py-[22px] border-b border-[#e9ecf3]">
                <div className="w-9 h-9 rounded-[10px] bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <DashboardIcon stroke="white" width="20" height="20" />
                </div>
                <span className="text-[15px] font-bold text-[#1e2535]">EstateSphere</span>
            </div>

            <nav className="flex-1 flex flex-col gap-0.5 px-3 py-4 overflow-y-auto">
                <p className="px-4 text-[10px] font-bold text-[#7b8399] uppercase tracking-wider mb-2">Management</p>
                {navItems.map((item, i) => {
                    const isActive = location.pathname === item.route;
                    return (
                        <Link
                            key={i}
                            to={item.route || "#"}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all ${isActive ? "bg-indigo-50 text-indigo-600 font-bold" : "text-[#7b8399] hover:bg-[#f5f7fb] hover:text-[#1e2535]"}`}
                        >
                            <span className={`flex items-center ${isActive ? "text-indigo-600" : "text-[#7b8399]"}`}>{item.icon}</span>
                            <span className="flex-1">
                                {item.label}
                                {item.badge && (
                                    <span className="ml-2 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            <div className="px-5 py-4 border-t border-[#e9ecf3]">
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{initial}</div>
                    <div className="overflow-hidden">
                        <p className="text-[13px] font-semibold text-[#1e2535] truncate">{fullName}</p>
                        <p className="text-[11px] text-[#7b8399] truncate">Platform Control</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;
