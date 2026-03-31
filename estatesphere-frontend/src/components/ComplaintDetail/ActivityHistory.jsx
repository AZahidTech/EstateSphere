import React from "react";
import { activityHistory } from "../../data/index.jsx";

const ActivityItem = ({ user, role, action, comment, time, date, isLast }) => (
    <div className="flex gap-4 group">
        <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full border-2 ${isLast ? "bg-white border-blue-500" : "bg-gray-200 border-white shadow-sm ring-2 ring-gray-100"}`}></div>
            {!isLast && <div className="w-0.5 h-full bg-gray-100"></div>}
        </div>
        <div className="pb-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600 text-[10px]">
                            {user.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-[13px]">{user} <span className="text-[#7b8399] font-medium">({role})</span></p>
                            <p className="text-gray-600 text-[13px]">{action}</p>
                        </div>
                    </div>
                    <span className="text-[#7b8399] text-[11px] font-medium">{time || date}</span>
                </div>
                {comment && (
                    <div className="mt-4 p-4 bg-gray-50/80 rounded-xl border border-blue-100/30 italic text-gray-600 text-xs">
                        "{comment}"
                    </div>
                )}
            </div>
        </div>
    </div>
);

const ActivityHistory = () => {
    const activities = activityHistory;

    return (
        <div className="mt-8">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900 tracking-tight">Activity History</h2>
            </div>
            <div className="max-w-4xl">
                {activities.map((act, idx) => (
                    <ActivityItem key={idx} {...act} isLast={idx === activities.length - 1} />
                ))}
            </div>
        </div>
    );
};

export default ActivityHistory;
