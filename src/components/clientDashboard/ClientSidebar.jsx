import React from "react";
import { clientNavItems } from "../../data/index.jsx";

const navItems = clientNavItems;

const ClientSidebar = () => (
    <aside className="w-[200px] min-w-[200px] bg-white border-r border-[#e9ecf3] flex flex-col">
        <div className="flex items-center gap-2.5 px-5 py-[22px] border-b border-[#e9ecf3]">
            <div className="w-9 h-9 rounded-[10px] bg-indigo-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>
            </div>
            <span className="text-[15px] font-bold text-[#1e2535]">EstateSphere</span>
        </div>

        <nav className="flex-1 flex flex-col gap-0.5 px-3 py-4">
            {navItems.map((item, i) => (
                <button key={i} className={`dash-nav-item ${item.active ? "bg-indigo-50 text-indigo-600" : "text-[#7b8399] hover:bg-[#f5f7fb] hover:text-[#1e2535]"}`}>
                    <span className="flex items-center">{item.icon}</span>
                    {item.label}
                </button>
            ))}
        </nav>

        <div className="flex items-center gap-2.5 px-5 py-4 border-t border-[#e9ecf3]">
            <div className="w-[34px] h-[34px] rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">H</div>
            <div>
                <p className="text-[13px] font-semibold text-[#1e2535]">Hamza</p>
                <p className="text-[11px] text-[#7b8399]">Buyer Account</p>
            </div>
        </div>
    </aside>
);

export default ClientSidebar;
