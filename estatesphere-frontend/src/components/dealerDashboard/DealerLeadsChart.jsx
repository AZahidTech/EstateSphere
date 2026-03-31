import React from "react";
import { dealerLeadsSummary } from "../../data/index.jsx";

const { days, inbound, email } = dealerLeadsSummary;

const DealerLeadsChart = () => (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col">
        <div className="flex items-start justify-between mb-10">
            <div>
                <h2 className="text-xl font-bold text-slate-800 tracking-tight">Leads Overview</h2>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">WEEKLY TREND ANALYSIS</p>
            </div>
            <select className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 text-xs font-semibold outline-none cursor-pointer hover:border-indigo-400 focus:ring-4 focus:ring-indigo-600/5 transition-all">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
            </select>
        </div>
        <div className="flex-1 flex items-end gap-4 h-[220px] pb-2 border-b border-slate-50 overflow-hidden px-2">
            {days.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group">
                    <div className="w-full flex items-end gap-1.5 justify-center h-[180px] mb-4">
                        <div
                            className="w-2.5 bg-linear-to-t from-indigo-600 to-indigo-400 rounded-t-full shadow-[0_-4px_12px_rgba(79,70,229,0.2)] transition-all duration-500 group-hover:opacity-90 cursor-pointer"
                            style={{ height: `${(inbound[i] / 80) * 100}%` }}
                            title={`Inbound: ${inbound[i]}`}
                        />
                        <div
                            className="w-2.5 bg-linear-to-t from-purple-500 to-purple-300 rounded-t-full shadow-[0_-4px_12px_rgba(168,85,247,0.2)] transition-all duration-500 group-hover:opacity-90 cursor-pointer"
                            style={{ height: `${(email[i] / 80) * 100}%` }}
                            title={`Email: ${email[i]}`}
                        />
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{d}</span>
                </div>
            ))}
        </div>
        <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-sm shadow-indigo-200"></div>
                <span className="text-[12px] text-slate-500 font-bold uppercase tracking-wider">Inbound Calls</span>
            </div>
            <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-purple-200 shadow-sm shadow-purple-100"></div>
                <span className="text-[12px] text-slate-500 font-bold uppercase tracking-wider">Email Inquiries</span>
            </div>
        </div>
    </div>
);

export default DealerLeadsChart;
