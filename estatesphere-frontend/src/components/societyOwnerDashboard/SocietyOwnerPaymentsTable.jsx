import React from "react";
import DownloadIcon from "../../assets/svg/common/DownloadIcon";
import { societyOwnerCollections } from "../../data/index.jsx";

const payments = societyOwnerCollections;

const SocietyOwnerPaymentsTable = () => (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 flex-1">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">Recent Collections</h2>
            <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">REAL-TIME DATA</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
        </div>
        <div className="overflow-x-auto px-2">
            <table className="w-full text-left border-separate border-spacing-y-4">
                <thead>
                    <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        <th className="px-6 pb-2">Transaction ID</th>
                        <th className="px-6 pb-2">Resident / Member</th>
                        <th className="px-6 pb-2">Unit Details</th>
                        <th className="px-6 pb-2">Payment Type</th>
                        <th className="px-6 pb-2">Amount</th>
                        <th className="px-6 pb-2 text-right">Receipt</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((p, i) => (
                        <tr key={i} className="group bg-slate-50/50 hover:bg-white transition-all duration-300">
                            <td className="px-6 py-5 rounded-l-2xl border-y border-l border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all font-bold text-slate-800">
                                {p.id}
                            </td>
                            <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all font-bold text-slate-900 group-hover:text-indigo-600">
                                {p.resident}
                            </td>
                            <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all text-slate-500 font-medium">
                                {p.unit}
                            </td>
                            <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 transition-all">
                                <span className="text-[10px] font-bold px-3 py-1 bg-white border border-slate-200 text-slate-400 uppercase tracking-widest rounded-md">{p.type}</span>
                            </td>
                            <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 transition-all">
                                <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">{p.amount}</span>
                            </td>
                            <td className="px-6 py-5 rounded-r-2xl border-y border-r border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all text-right">
                                <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 hover:border-indigo-400 hover:shadow-md transition-all active:scale-95">
                                    <DownloadIcon className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default SocietyOwnerPaymentsTable;
