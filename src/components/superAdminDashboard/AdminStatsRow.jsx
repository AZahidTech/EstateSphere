import React from "react";
import { adminStats } from "../../data/index.jsx";

const stats = adminStats;

const AdminStatsRow = () => {
    return (
        <div className="grid grid-cols-4 gap-5">
            {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${s.iconBg} ${s.shadow} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                            {s.icon}
                        </div>
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs ${s.up ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-rose-50 text-rose-600 border border-rose-100"}`}>
                            {s.up ? "↗" : "↘"} {s.change}
                        </span>
                    </div>
                    <div>
                        <p className="text-[13px] text-slate-500 font-bold uppercase tracking-wider">{s.label}</p>
                        <p className="text-3xl font-black text-slate-900 mt-1">{s.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminStatsRow;
