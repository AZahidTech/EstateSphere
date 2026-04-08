import React from "react";
import { complaintsManagementStats } from "../../data/index.jsx";

const ComplaintsStats = () => {
    const stats = complaintsManagementStats;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, index) => (
                <div key={index} className="group premium-stat-card">
                    <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center text-xl shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                            {stat.icon}
                        </div>
                        <span className="bg-slate-50 text-slate-400 text-[10px] font-bold px-2 py-1 rounded-md tracking-widest uppercase">Live</span>
                    </div>
                    <p className="text-slate-400 text-[11px] font-semibold tracking-[0.15em] uppercase">{stat.title}</p>
                    <p className="text-3xl font-bold text-slate-800 mt-2 tracking-tight">{stat.value}</p>
                </div>
            ))}
        </div>
    );
};

export default ComplaintsStats;
