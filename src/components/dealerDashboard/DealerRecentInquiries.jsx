import React from "react";
import PhoneCallIcon from "../../assets/svg/dealer/PhoneCallIcon";
import MailIcon from "../../assets/svg/client/MailIcon";
import FlagIcon from "../../assets/svg/dealer/FlagIcon";
import { dealerRecentInquiries } from "../../data/index.jsx";

const inquiries = dealerRecentInquiries;

const DealerRecentInquiries = () => (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">Recent Client Inquiries</h2>
            <button className="text-indigo-600 text-sm font-bold hover:underline underline-offset-4 decoration-2">View Pipeline</button>
        </div>
        <div className="overflow-x-auto px-2">
            <table className="w-full text-left border-separate border-spacing-y-4">
                <thead>
                    <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        <th className="px-6 pb-2">Client Details</th>
                        <th className="px-6 pb-2">Property Interested</th>
                        <th className="px-6 pb-2">Source / Type</th>
                        <th className="px-6 pb-2 text-center">Inquiry Status</th>
                        <th className="px-6 pb-2 text-right">Time Received</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiries.map((n, i) => (
                        <tr key={i} className="group bg-slate-50/50 hover:bg-white transition-all duration-300">
                            <td className="px-6 py-5 rounded-l-2xl border-y border-l border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-lg ${n.avatarCls || 'bg-linear-to-br from-indigo-500 to-purple-600'}`}>
                                        {n.avatar || n.client?.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-[15px] font-bold text-slate-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{n.client}</p>
                                        <p className="text-[12px] text-slate-400 font-medium lowercase tracking-tight">{n.email}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all">
                                <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{n.property}</p>
                            </td>
                            <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-[13px] text-slate-700 font-bold uppercase tracking-wide">
                                        {n.source === 'Phone' ? <PhoneCallIcon className="w-3.5 h-3.5 text-indigo-500" /> : <MailIcon className="w-3.5 h-3.5 text-purple-500" />}
                                        {n.source}
                                    </div>
                                    <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">{n.type}</span>
                                </div>
                            </td>
                            <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 transition-all text-center">
                                <span className={`text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-xs ${n.statusCls || 'bg-slate-100 text-slate-500 border border-slate-200'}`}>{n.status}</span>
                            </td>
                            <td className="px-6 py-5 rounded-r-2xl border-y border-r border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all text-right">
                                <div className="flex items-center justify-end gap-4">
                                    <span className="text-[13px] text-slate-500 font-bold italic tracking-tight">{n.time}</span>
                                    <button className="p-2 text-slate-200 hover:text-rose-400 hover:bg-rose-50 rounded-lg transition-all active:scale-90">
                                        <FlagIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default DealerRecentInquiries;
