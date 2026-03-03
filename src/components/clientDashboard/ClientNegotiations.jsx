import React from "react";
import { clientNegotiations } from "../../data/index.jsx";

const negotiations = clientNegotiations;

const ClientNegotiations = () => (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Active Negotiations</h2>
                <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-widest">{negotiations.length} Active</span>
            </div>
            <button className="text-indigo-600 text-sm font-bold hover:underline underline-offset-4 decoration-2">View Full History</button>
        </div>
        <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full text-left border-separate border-spacing-y-3">
                <thead>
                    <tr className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="px-6 pb-2">Property</th>
                        <th className="px-6 pb-2">Asking Price</th>
                        <th className="px-6 pb-2">Your Offer</th>
                        <th className="px-6 pb-2">Status</th>
                        <th className="px-6 pb-2 text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {negotiations.map((n, i) => (
                        <tr key={i} className="group bg-slate-50/50 hover:bg-white transition-all duration-300">
                            <td className="px-6 py-5 rounded-l-2xl border-y border-l border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all">
                                <div className="flex items-center gap-3 font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    <div className={`w-2.5 h-2.5 rounded-full ${n.color || 'bg-indigo-500'} shadow-sm shadow-current`}></div>
                                    {n.property}
                                </div>
                            </td>
                            <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all font-black text-slate-900">
                                {n.asking}
                            </td>
                            <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all font-black text-indigo-600">
                                {n.offer}
                            </td>
                            <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all">
                                <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${n.statusCls || 'bg-slate-100 text-slate-600'}`}>{n.status}</span>
                            </td>
                            <td className="px-6 py-5 rounded-r-2xl border-y border-r border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all text-right">
                                <button className="text-indigo-600 text-[13px] font-black hover:underline underline-offset-4 decoration-2 uppercase tracking-wider">{n.action}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default ClientNegotiations;
