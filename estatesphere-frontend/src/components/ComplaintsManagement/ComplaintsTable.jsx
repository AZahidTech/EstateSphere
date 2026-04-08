import React from "react";
import { Link } from "react-router-dom";
import { mockComplaints } from "../../data/index.jsx";
import { getStatusStyle } from "../../utils/features/functions";
import EyeIcon from "../../assets/svg/common/EyeIcon";
import MoreVerticalIcon from "../../assets/svg/common/MoreVerticalIcon";
import ChevronLeftIcon from "../../assets/svg/common/ChevronLeftIcon";
import ChevronRightIcon from "../../assets/svg/common/ChevronRightIcon";

const ComplaintsTable = () => {
    const complaints = mockComplaints;

    return (
        <div className="dash-card">
            <div className="overflow-x-auto px-2">
                <table className="w-full text-left border-separate border-spacing-y-4">
                    <thead>
                        <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-6">
                            <th className="px-6 pb-2">Ticket Details</th>
                            <th className="px-6 pb-2">Subject & Category</th>
                            <th className="px-6 pb-2">Submitted By</th>
                            <th className="px-6 pb-2">Submission Date</th>
                            <th className="px-6 pb-2">Status</th>
                            <th className="px-6 pb-2 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complaints.map((item) => (
                            <tr key={item.id} className="group premium-table-row">
                                <td className="premium-table-td-first font-bold text-indigo-600">
                                    <Link to="/ComplaintDetail" className="hover:underline underline-offset-4 decoration-2">
                                        {item.id}
                                    </Link>
                                </td>
                                <td className="premium-table-td-mid">
                                    <div>
                                        <p className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{item.subject}</p>
                                        <p className="text-[11px] text-slate-400 font-medium uppercase tracking-widest mt-1 opacity-70">
                                            {item.category} • <span className={item.priority === 'High Priority' ? 'text-rose-500' : ''}>{item.priority}</span>
                                        </p>
                                    </div>
                                </td>
                                <td className="premium-table-td-mid">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-xs ring-2 ring-white shadow-sm">
                                            {item.user.charAt(0)}
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors tracking-tight truncate">{item.user}</p>
                                            {/* Assuming a 'unit' property might be added to item later if needed for the diff's structure */}
                                            {/* <p className="text-[11px] text-slate-400 font-medium truncate">{item.unit}</p> */}
                                        </div>
                                    </div>
                                </td>
                                <td className="premium-table-td-mid text-slate-500 font-bold italic text-sm">
                                    {item.date}
                                </td>
                                <td className="premium-table-td-mid">
                                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border shadow-xs ${getStatusStyle(item.status)}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="premium-table-td-last">
                                    <div className="flex items-center justify-end gap-3">
                                        <button className="icon-btn-outline">
                                            <EyeIcon />
                                        </button>
                                        <button className="icon-btn-outline hover:text-slate-900 hover:border-slate-400">
                                            <MoreVerticalIcon />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-8 border-t border-slate-50 flex items-center justify-between bg-slate-50/20">
                <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Showing 5 of 128 results</p>
                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all disabled:opacity-30">
                        <ChevronLeftIcon className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold shadow-lg shadow-indigo-100">1</button>
                    <button className="w-10 h-10 rounded-xl border border-slate-200 text-xs font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">2</button>
                    <button className="w-10 h-10 rounded-xl border border-slate-200 text-xs font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">3</button>
                    <span className="px-2 text-slate-300 font-bold">...</span>
                    <button className="w-10 h-10 rounded-xl border border-slate-200 text-xs font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">26</button>
                    <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">
                        <ChevronRightIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComplaintsTable;
