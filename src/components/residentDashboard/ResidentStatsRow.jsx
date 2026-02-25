import React from "react";
import { residentStats } from "../../data/index.jsx";

const stats = residentStats;

const ResidentStatsRow = () => (
    <div className="grid grid-cols-4 gap-5">
        {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${s.iconBg} ${s.shadow} transform group-hover:rotate-3 group-hover:scale-110 transition-transform duration-300`}>
                        {s.icon}
                    </div>
                    {s.badge && <span className={`text-[10px] font-black px-2.5 py-1 rounded-full shadow-xs tracking-wider ${s.badgeCls}`}>{s.badge}</span>}
                </div>
                <p className="text-[13px] text-slate-500 font-bold uppercase tracking-wider">{s.label}</p>
                <p className="text-3xl font-black text-slate-900 mt-1">{s.value}</p>
            </div>
        ))}
    </div>
);

export default ResidentStatsRow;
