import React from "react";
import { dealerStats } from "../../data/index.jsx";

const stats = dealerStats;

const DealerStatsRow = () => (
    <div className="grid grid-cols-4 gap-5">
        {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${s.iconBg || 'bg-indigo-600'} ${s.shadow || 'shadow-indigo-100'} transform group-hover:rotate-3 group-hover:scale-110 transition-transform duration-300`}>
                        {s.icon}
                    </div>
                    {s.change && (
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs tracking-wider ${s.status === 'up' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-50 text-slate-400 border border-slate-100'}`}>
                            {s.change}
                        </span>
                    )}
                </div>
                <p className="text-[13px] text-slate-500 font-semibold uppercase tracking-wider">{s.label}</p>
                <p className="text-3xl font-bold text-slate-800 mt-1">{s.value}</p>
            </div>
        ))}
    </div>
);

export default DealerStatsRow;
