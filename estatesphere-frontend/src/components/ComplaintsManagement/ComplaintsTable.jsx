import React from "react";
import { Link } from "react-router-dom";
import { mockComplaints } from "../../data/index.jsx";

const ComplaintsTable = () => {
    const complaints = mockComplaints;

    const getStatusStyle = (status) => {
        switch (status) {
            case "Pending": return "bg-amber-50 text-amber-600 border-amber-100";
            case "In Progress": return "bg-blue-50 text-blue-600 border-blue-100";
            case "Resolved": return "bg-emerald-50 text-emerald-600 border-emerald-100";
            default: return "bg-slate-50 text-slate-500 border-slate-100";
        }
    };

    return (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden">
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
                            <tr key={item.id} className="group bg-slate-50/50 hover:bg-white transition-all duration-300">
                                <td className="px-6 py-5 rounded-l-2xl border-y border-l border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all font-bold text-indigo-600">
                                    <Link to="/ComplaintDetail" className="hover:underline underline-offset-4 decoration-2">
                                        {item.id}
                                    </Link>
                                </td>
                                <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all">
                                    <div>
                                        <p className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{item.subject}</p>
                                        <p className="text-[11px] text-slate-400 font-medium uppercase tracking-widest mt-1 opacity-70">
                                            {item.category} • <span className={item.priority === 'High Priority' ? 'text-rose-500' : ''}>{item.priority}</span>
                                        </p>
                                    </div>
                                </td>
                                <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all">
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
                                <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all text-slate-500 font-bold italic text-sm">
                                    {item.date}
                                </td>
                                <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all">
                                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border shadow-xs ${getStatusStyle(item.status)}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5 rounded-r-2xl border-y border-r border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all text-right">
                                    <div className="flex items-center justify-end gap-3">
                                        <button className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-300 hover:text-indigo-600 hover:border-indigo-400 hover:shadow-md transition-all active:scale-95">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.43 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12.a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </button>
                                        <button className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-300 hover:text-slate-900 hover:border-slate-400 hover:shadow-md transition-all active:scale-95">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                            </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold shadow-lg shadow-indigo-100">1</button>
                    <button className="w-10 h-10 rounded-xl border border-slate-200 text-xs font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">2</button>
                    <button className="w-10 h-10 rounded-xl border border-slate-200 text-xs font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">3</button>
                    <span className="px-2 text-slate-300 font-bold">...</span>
                    <button className="w-10 h-10 rounded-xl border border-slate-200 text-xs font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">26</button>
                    <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComplaintsTable;
