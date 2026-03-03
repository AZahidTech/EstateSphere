import React from "react";

const UserHeader = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Identity Governance</h1>
                <p className="text-slate-400 text-xs font-semibold mt-1 uppercase tracking-[0.15em] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    Manage Platform Users
                </p>
            </div>
            <button className="bg-linear-to-r from-indigo-600 to-purple-600 hover:shadow-2xl hover:shadow-indigo-200 text-white px-8 py-3.5 rounded-2xl font-bold text-sm tracking-wide flex items-center gap-3 transition-all duration-300 shadow-xl shadow-indigo-100 active:scale-95 group">
                <span className="text-xl group-hover:rotate-90 transition-transform duration-300">+</span>
                Create Identity
            </button>
        </div>
    );
};

export default UserHeader;
