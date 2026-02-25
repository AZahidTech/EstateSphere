import React from "react";
import { dealerUpcomingMeetings } from "../../data/index.jsx";

const meetings = dealerUpcomingMeetings;

const DealerUpcomingMeetings = () => (
    <div className="bg-white rounded-2xl p-5 border border-[#e9ecf3] w-[280px] shadow-sm">
        <h2 className="text-[15px] font-bold text-[#1e2535] mb-4">Upcoming Meetings</h2>
        <div className="flex flex-col gap-3">
            {meetings.map((m, i) => (
                <div key={i} className={`flex gap-3 items-start ${m.rescheduled ? 'opacity-60' : ''}`}>
                    <div className={`min-w-[44px] rounded-xl px-2 py-1.5 flex flex-col items-center flex-shrink-0 ${m.color}`}>
                        <span className="text-[9px] font-bold text-white/85 uppercase">{m.month}</span>
                        <span className="text-[17px] font-extrabold text-white leading-tight">{m.day}</span>
                    </div>
                    <div>
                        <p className="text-[13.5px] font-bold text-[#1e2535]">{m.name}</p>
                        <p className="text-[12px] text-[#7b8399] mt-[3px] font-medium">{m.detail}</p>
                        {m.rescheduled && <span className="text-[10px] font-bold text-[#7b8399] uppercase tracking-wider block mt-1">Rescheduled</span>}
                    </div>
                </div>
            ))}
        </div>
        <button className="w-full mt-[18px] py-2.5 bg-[#f5f7fb] border border-[#e9ecf3] rounded-[10px] text-indigo-600 text-[13px] font-bold cursor-pointer hover:bg-indigo-50 transition-colors">
            View Calendar
        </button>
    </div>
);

export default DealerUpcomingMeetings;
