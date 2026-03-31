import React from "react";

const ComplaintsHeader = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Community Resolution</h1>
                <p className="text-slate-400 text-xs font-semibold mt-1 uppercase tracking-[0.15em] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    Manage & Resolve Complaints
                </p>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search ticket ID or keyword..."
                        className="pl-12 pr-6 py-3.5 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600/20 text-sm w-80 shadow-xl shadow-slate-100/50 placeholder:text-slate-300 transition-all duration-300"
                    />
                    <div className="absolute left-4 top-3.5 text-slate-300 group-focus-within:text-indigo-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>
                <button className="bg-linear-to-r from-indigo-600 to-purple-600 hover:shadow-2xl hover:shadow-indigo-200 text-white px-8 py-3.5 rounded-2xl font-bold text-sm tracking-wide flex items-center gap-3 transition-all duration-300 shadow-xl shadow-indigo-100 active:scale-95 group">
                    <span className="text-xl group-hover:rotate-90 transition-transform duration-300">+</span>
                    New Complaint
                </button>
            </div>
        </div>
    );
};

export default ComplaintsHeader;
