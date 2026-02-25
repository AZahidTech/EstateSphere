import React from "react";
import ClockIcon from "../../assets/svg/client/ClockIcon";
import PlusIcon from "../../assets/svg/common/PlusIcon";
import { clientUpcomingTours } from "../../data/index.jsx";

const tours = clientUpcomingTours;

const ClientUpcomingTours = () => (
    <div className="bg-white rounded-2  xl p-[18px] border border-[#e9ecf3] shadow-sm">
        <div className="dash-section-header">
            <h2 className="text-[15px] font-bold text-[#1e2535]">Upcoming Tours</h2>
            <button className="bg-transparent border-none text-indigo-600 text-[13px] font-semibold cursor-pointer">View All</button>
        </div>
        <div className="flex flex-col gap-2.5">
            {tours.map((t, i) => (
                <div key={i} className="flex gap-3 bg-[#f8fafc] rounded-xl p-3 border border-[#e9ecf3]">
                    <div className="flex flex-col items-center justify-center min-w-[42px] border-r border-[#e9ecf3] pr-2">
                        <span className="text-[10px] font-bold text-[#7b8399] uppercase">{t.month}</span>
                        <span className="text-[20px] font-extrabold text-[#1e2535]">{t.day}</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-[13px] font-bold text-[#1e2535]">{t.title}</p>
                        <div className="flex items-center gap-1 text-[11.5px] text-[#7b8399] mt-0.5">
                            <ClockIcon />{t.time}
                        </div>
                        <div className="flex items-center gap-1.5 mt-1.5">
                            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${t.agentColor}`}></span>
                            <span className="text-[11.5px] text-[#7b8399] font-medium">{t.agent}</span>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex flex-col items-center justify-center gap-1.5 border border-dashed border-[#cbd5e1] rounded-xl p-3.5 text-[#7b8399] text-[12.5px] bg-[#f8fafc]">
                <button className="w-7 h-7 rounded-full border border-dashed border-[#7b8399] bg-transparent text-[#7b8399] cursor-pointer flex items-center justify-center">
                    <PlusIcon />
                </button>
                Schedule a Tour
            </div>
        </div>
    </div>
);

export default ClientUpcomingTours;
