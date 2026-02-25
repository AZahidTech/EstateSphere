import React from "react";
import { clientStats } from "../../data/index.jsx";

const stats = clientStats;

const ClientStatsRow = () => (
    <div className="grid grid-cols-4 gap-3.5">
        {stats.map((s, i) => (
            <div key={i} className="dash-stat-card bg-white border-[#e9ecf3] flex items-center gap-3.5 shadow-sm">
                <div className={`w-[46px] h-[46px] rounded-xl flex items-center justify-center flex-shrink-0 ${s.iconBg} ${s.iconColor}`}>
                    {s.icon}
                </div>
                <div>
                    <span className="text-xs text-[#7b8399] block font-medium">{s.label}</span>
                    <span className="text-[22px] font-bold text-[#1e2535] block mt-0.5">{s.value}</span>
                </div>
            </div>
        ))}
    </div>
);

export default ClientStatsRow;
