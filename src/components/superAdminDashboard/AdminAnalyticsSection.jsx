import React from "react";
import InfoIcon from "../../assets/svg/superAdmin/InfoIcon";
import { adminAnalyticsData, adminSupportDistribution } from "../../data/index.jsx";

const { months, actual, targets, maxVal } = adminAnalyticsData;
const supportItems = adminSupportDistribution;

const AdminAnalyticsSection = () => {
    return (
        <div className="grid grid-cols-[1fr_320px] gap-5 items-start">
            {/* Bar Chart */}
            <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-100 group">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Revenue Analytics</h2>
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-1">MONTHLY SUBSCRIPTION GROWTH</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1.5 text-[12px] text-slate-500 font-bold">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> Actual
                        </span>
                        <span className="flex items-center gap-1.5 text-[12px] text-slate-500 font-bold ml-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-200"></span> Target
                        </span>
                    </div>
                </div>

                <div className="flex items-end gap-5 h-[200px] border-b border-slate-100 pb-2">
                    {months.map((m, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-3">
                            <div className="flex gap-1.5 items-end w-full justify-center">
                                <div
                                    className="w-[18px] bg-linear-to-t from-indigo-700 to-indigo-500 rounded-t-lg shadow-lg shadow-indigo-100 transition-all duration-500 group-hover:opacity-90 cursor-help"
                                    style={{ height: `${(actual[i] / maxVal) * 200}px` }}
                                    title={`Actual: $${actual[i]}`}
                                />
                                <div
                                    className="w-[18px] bg-indigo-100 rounded-t-lg transition-all duration-500 hover:bg-indigo-200 cursor-help"
                                    style={{ height: `${(targets[i] / maxVal) * 200}px` }}
                                    title={`Target: $${targets[i]}`}
                                />
                            </div>
                            <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">{m}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Support Distribution */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-slate-900 tracking-tight">Support Tickets</h2>
                    <span className="p-1.5 bg-slate-50 rounded-lg text-slate-400 hover:text-slate-900 cursor-pointer transition-colors shadow-xs border border-slate-100">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                    </span>
                </div>

                <div className="space-y-6">
                    {supportItems.map((item, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[14px] text-slate-700 font-bold">{item.label}</span>
                                <span className="text-[14px] text-slate-900 font-black">{item.pct}%</span>
                            </div>
                            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner p-[1px]">
                                <div
                                    className={`h-full rounded-full transition-all duration-700 ease-out shadow-xs ${item.color}`}
                                    style={{ width: `${item.pct}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-start gap-4 bg-indigo-50/50 rounded-2xl p-4 mt-8 border border-indigo-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                        <InfoIcon className="w-5 h-5" />
                    </div>
                    <p className="text-[13px] text-slate-700 leading-relaxed font-medium mt-0.5">
                        Performance is <strong className="text-indigo-700 font-black">12% higher</strong> this month compared to the previous period.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminAnalyticsSection;
