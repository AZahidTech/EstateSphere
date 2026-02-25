import React from "react";
import { adminRecentActivities } from "../../data/index.jsx";

const activities = adminRecentActivities;

const cols = "1.8fr 1fr 1.2fr 1.2fr 0.8fr";

const AdminRecentActivity = () => {
    return (
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-100">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">Recent Activity</h2>
                    <p className="text-[13px] text-slate-500 font-medium mt-1">Real-time log of administrative actions across societies.</p>
                </div>
                <button className="px-5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-[13px] font-bold hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer shadow-xs">
                    View Audit Log
                </button>
            </div>

            <div className="overflow-x-auto">
                <div className="grid gap-4 text-[11px] font-black text-slate-400 uppercase tracking-widest pb-4 border-b border-slate-100 mb-2 px-2" style={{ gridTemplateColumns: cols, minWidth: "900px" }}>
                    <span>ACTION & DESCRIPTION</span>
                    <span>SOCIETY</span>
                    <span>ADMINISTRATOR</span>
                    <span>TIMESTAMP</span>
                    <span>STATUS</span>
                </div>

                <div className="space-y-1">
                    {activities.map((a, i) => (
                        <div key={i} className="grid gap-4 items-center py-4 px-2 rounded-2xl hover:bg-slate-50 transition-colors duration-200 border-b border-slate-50 last:border-0" style={{ gridTemplateColumns: cols, minWidth: "900px" }}>
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg shadow-xs ${a.iconBg}`}>
                                    {a.icon}
                                </div>
                                <span className="text-[14px] font-bold text-slate-900">{a.action}</span>
                            </div>

                            <span className="text-[13px] text-slate-600 font-medium">{a.society}</span>

                            <div className="flex items-center gap-3 text-[13px] text-slate-900">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[12px] font-black text-slate-900 ring-2 ring-white shadow-xs">
                                    {a.admin.name.charAt(0)}
                                </div>
                                <span className="font-bold">{a.admin.name}</span>
                            </div>

                            <span className="text-[13px] text-slate-500 font-bold italic tracking-tight">{a.timestamp}</span>

                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest text-center w-fit shadow-xs ${a.statusClass}`}>
                                {a.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminRecentActivity;
