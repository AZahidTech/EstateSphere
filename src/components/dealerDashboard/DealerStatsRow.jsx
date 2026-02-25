import React from "react";
import { dealerStats } from "../../data/index.jsx";

const stats = dealerStats;

const DealerStatsRow = () => (
    <div className="grid grid-cols-4 gap-3.5">
        {stats.map((s, i) => (
            <div key={i} className="dash-stat-card bg-white border-[#e9ecf3] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <div className="w-[42px] h-[42px] rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                        {s.icon}
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-[3px] rounded-[6px] ${s.status === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-[#7b8399]'
                        }`}>
                        {s.change}
                    </span>
                </div>
                <p className="text-[12px] text-[#7b8399] font-medium">{s.label}</p>
                <p className="text-[24px] font-extrabold text-[#1e2535] mt-0.5">{s.value}</p>
            </div>
        ))}
    </div>
);

export default DealerStatsRow;
