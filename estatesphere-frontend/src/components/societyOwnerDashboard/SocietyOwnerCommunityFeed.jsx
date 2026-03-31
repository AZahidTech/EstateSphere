import React from "react";
import { societyOwnerNotices } from "../../data/index.jsx";

const notices = societyOwnerNotices;

const SocietyOwnerCommunityFeed = () => (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 w-full lg:w-[360px] flex flex-col h-fit">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
                <span className="text-indigo-600">📌</span> Society Notices
            </h2>
            <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white text-[8px] flex items-center justify-center font-bold">U{i}</div>
                ))}
            </div>
        </div>
        <div className="space-y-6 flex-1">
            {notices.map((f, i) => (
                <div key={i} className="group flex gap-4 items-start relative pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                    <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-xs font-bold text-white shadow-lg ${f.color || 'bg-indigo-500'} group-hover:scale-110 transition-transform`}>
                        {f.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                            <span className="text-sm font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{f.name}</span>
                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded-md ml-2 flex-shrink-0">{f.time}</span>
                        </div>
                        <p className="text-[13px] text-slate-500 mt-1 leading-relaxed font-medium line-clamp-3 group-hover:text-slate-700 transition-colors">{f.desc}</p>
                    </div>
                </div>
            ))}
        </div>
        <button className="w-full mt-10 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-2xl text-[14px] font-bold tracking-widest uppercase cursor-pointer hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 shadow-lg shadow-indigo-100">
            Post New Notice
        </button>
    </div>
);

export default SocietyOwnerCommunityFeed;
