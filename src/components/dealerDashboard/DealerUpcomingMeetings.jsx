import React from "react";
import { dealerUpcomingMeetings } from "../../data/index.jsx";

const meetings = dealerUpcomingMeetings;

const DealerUpcomingMeetings = () => (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-100/50 w-[280px]">
        <h2 className="text-lg font-bold text-slate-800 tracking-tight mb-6">Upcoming Meetings</h2>
        <div className="flex flex-col gap-5">
            {meetings.map((m, i) => (
                <div key={i} className={`group flex gap-4 items-start transition-all duration-300 ${m.rescheduled ? 'opacity-50' : 'hover:translate-x-1'}`}>
                    <div className={`w-14 h-24 ${m.color} rounded-2xl flex flex-col items-center justify-center shadow-lg transform group-hover:-rotate-3 group-hover:scale-105 transition-all duration-300`}>
                        <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest">{m.month}</span>
                        <span className="text-xl font-bold text-white leading-tight">{m.day}</span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-[14px] font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">{m.name}</p>
                        <p className="text-[12px] text-slate-500 mt-1 font-medium truncate">{m.detail}</p>
                        {m.rescheduled && (
                            <span className="inline-block mt-2 px-2 py-0.5 bg-slate-100 text-[9px] font-semibold text-slate-400 uppercase tracking-[0.1em] rounded-md border border-slate-200">
                                Rescheduled
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
        <button className="w-full mt-8 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-indigo-600 text-[13px] font-bold uppercase tracking-widest shadow-sm hover:bg-white hover:border-indigo-400 hover:shadow-md transition-all active:scale-95">
            Sync Calendar
        </button>
    </div>
);

export default DealerUpcomingMeetings;
