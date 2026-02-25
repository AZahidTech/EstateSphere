import React from "react";
import { societyOwnerNotices } from "../../data/index.jsx";

const notices = societyOwnerNotices;

const SocietyOwnerCommunityFeed = () => (
    <div className="bg-white rounded-2xl p-5 border border-[#e9ecf3] w-full lg:w-[320px]">
        <div className="dash-section-header">
            <h2 className="flex items-center gap-1.5 text-[16px] font-bold text-[#1e2535]">
                <span>📌</span> Society Notices
            </h2>
        </div>
        <div className="flex flex-col gap-4">
            {notices.map((f, i) => (
                <div key={i} className="flex gap-3 items-start">
                    <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[13px] font-bold ${f.color}`}>{f.initials}</div>
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <span className="text-[13px] font-bold text-[#1e2535]">{f.name}</span>
                            <span className="text-[11px] text-[#7b8399]">{f.time}</span>
                        </div>
                        <p className="text-[12px] text-[#7b8399] mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                </div>
            ))}
        </div>
        <button className="w-full mt-4 py-2.5 bg-[#f5f7fb] border border-[#e9ecf3] rounded-[10px] text-[#7b8399] text-[13px] font-semibold cursor-pointer hover:border-blue-400 transition-colors">
            Post New Notice
        </button>
    </div>
);

export default SocietyOwnerCommunityFeed;
