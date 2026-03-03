import React from "react";
import { Link } from "react-router-dom";

const ComplaintHeader = ({ id, status, priority }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
                <Link to="/ComplaintsManagement" className="text-gray-400 hover:text-blue-600 text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 mb-2 transition-colors">
                    ← Back to complaints
                </Link>
                <p className="text-[#7b8399] text-xs font-semibold tracking-[0.15em] mb-2">TCKT-2025-084</p>
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Elevator B-2 Malfunction</h1>
                <div className="flex items-center gap-3 mt-3">
                    <span className="bg-rose-50 text-rose-600 text-[10px] font-bold uppercase px-2.5 py-1 rounded-md tracking-widest border border-rose-100 flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                        High Priority
                    </span>
                    <span className="bg-amber-50 text-amber-600 text-[10px] font-bold uppercase px-2.5 py-1 rounded-md tracking-widest border border-amber-100 shadow-sm">In Progress</span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 bg-yellow-50 text-yellow-600 rounded-full text-[11px] font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    Under Review
                </span>
            </div>
        </div>
    );
};

export default ComplaintHeader;
