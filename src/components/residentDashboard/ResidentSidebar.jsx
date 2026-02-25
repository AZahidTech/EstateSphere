import React from "react";
import { residentNavItems } from "../../data/index.jsx";

const navItems = residentNavItems;

const ResidentSidebar = () => (
    <aside className="w-[240px] min-w-[240px] bg-white border-r border-slate-200 flex flex-col h-screen shadow-sm">
        <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-200">
                <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">EstateSphere</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
            {navItems.map((item, i) => (
                <button
                    key={i}
                    className={`group flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 font-medium text-[14px]
            ${item.active
                            ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-100"
                            : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"}`}
                >
                    <span className={`transition-colors duration-200 ${item.active ? "text-white" : "text-slate-400 group-hover:text-indigo-600"}`}>
                        {item.icon}
                    </span>
                    {item.label}
                </button>
            ))}
        </nav>

        <div className="p-4 mt-auto">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[15px] font-bold shadow-sm ring-2 ring-white flex-shrink-0">
                    M
                </div>
                <div className="overflow-hidden">
                    <p className="text-[14px] font-bold text-slate-900 truncate">Maryam</p>
                    <p className="text-[11px] text-slate-500 font-medium">Resident · Block A</p>
                </div>
            </div>
        </div>
    </aside>
);

export default ResidentSidebar;
