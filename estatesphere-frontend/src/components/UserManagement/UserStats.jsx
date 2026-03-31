import React from "react";
import { userManagementStats } from "../../data/index.jsx";

const StatCard = ({ title, value, icon, trend, trendValue, color, iconContent }) => (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl transition-all duration-300 group">
        <div className="flex items-start justify-between mb-4">
            <div className={`w-14 h-14 rounded-2xl ${color} bg-opacity-10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {iconContent || icon}
            </div>
            {trend && (
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-xs tracking-wider uppercase border ${trend === "up" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"}`}>
                    {trend === "up" ? "▲" : "▼"} {trendValue}
                </span>
            )}
        </div>
        <div>
            <p className="text-slate-400 text-[10px] font-semibold tracking-wider uppercase">{title}</p>
            <p className="text-3xl font-bold text-slate-800 mt-2 tracking-tight">{value}</p>
        </div>
    </div>
);

const UserStats = () => {
    const stats = userManagementStats;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
};

export default UserStats;
