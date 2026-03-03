import React from "react";
import ClockIcon from "../../assets/svg/client/ClockIcon";
import PlusIcon from "../../assets/svg/common/PlusIcon";
import { clientUpcomingTours } from "../../data/index.jsx";

const tours = clientUpcomingTours;

const ClientUpcomingTours = () => (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-100/50">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Upcoming Tours</h2>
            <button className="text-indigo-600 text-xs font-bold hover:underline">View All</button>
        </div>
        <div className="flex flex-col gap-4">
            {tours.map((t, i) => (
                <div key={i} className="group flex gap-4 bg-slate-50/50 rounded-2xl p-4 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col items-center justify-center min-w-[50px] border-r border-slate-200 pr-4">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.month}</span>
                        <span className="text-2xl font-black text-slate-900">{t.day}</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-[14px] font-bold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">{t.title}</p>
                        <div className="flex items-center gap-1.5 text-[12px] text-slate-500 mt-1 font-medium">
                            <ClockIcon className="w-3.5 h-3.5" />{t.time}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${t.agentColor || 'bg-indigo-500'}`}></div>
                            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{t.agent}</span>
                        </div>
                    </div>
                </div>
            ))}
            <button className="flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 rounded-2xl p-5 text-slate-400 text-sm font-bold bg-slate-50/50 hover:bg-white hover:border-indigo-400 hover:text-indigo-600 transition-all group">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <PlusIcon className="w-4 h-4" />
                </div>
                Schedule a Tour
            </button>
        </div>
    </div>
);

export default ClientUpcomingTours;
