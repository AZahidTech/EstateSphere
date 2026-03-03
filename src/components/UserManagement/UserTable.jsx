import React from "react";
import { mockUsers } from "../../data/index.jsx";

const UserTable = () => {
    const users = mockUsers;

    const getRoleColor = (role) => {
        switch (role) {
            case "Super Admin": return "bg-indigo-50 text-indigo-600 border-indigo-100";
            case "Owner": return "bg-purple-50 text-purple-600 border-purple-100";
            case "Resident": return "bg-emerald-50 text-emerald-600 border-emerald-100";
            case "Dealer": return "bg-amber-50 text-amber-600 border-amber-100";
            case "Client": return "bg-rose-50 text-rose-600 border-rose-100";
            default: return "bg-slate-50 text-slate-500 border-slate-100";
        }
    };

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden mt-8">
            <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50/20">
                <div className="relative flex-1 max-w-md group">
                    <input
                        type="text"
                        placeholder="Search by name, email or ID..."
                        className="w-full pl-12 pr-6 py-3.5 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-8 focus:ring-indigo-600/5 focus:border-indigo-600/20 transition-all duration-300 text-sm placeholder:text-slate-300 shadow-sm"
                    />
                    <div className="absolute left-4 top-3.5 text-slate-300 group-focus-within:text-indigo-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <select className="bg-white border border-slate-100 rounded-xl px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 focus:outline-none focus:ring-4 focus:ring-indigo-600/5 shadow-sm">
                        <option>Role: All</option>
                    </select>
                    <select className="bg-white border border-slate-100 rounded-xl px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 focus:outline-none focus:ring-4 focus:ring-indigo-600/5 shadow-sm">
                        <option>Status: All</option>
                    </select>
                    <button className="text-slate-400 hover:text-indigo-600 text-[11px] font-bold uppercase tracking-widest px-4 transition-colors">Reset</button>
                </div>
            </div>

            <div className="overflow-x-auto px-4">
                <table className="w-full text-left border-separate border-spacing-y-4">
                    <thead>
                        <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-6">
                            <th className="px-6 pb-2">Full Identity</th>
                            <th className="px-6 pb-2">Platform Role</th>
                            <th className="px-6 pb-2">Registration</th>
                            <th className="px-6 pb-2">State</th>
                            <th className="px-6 pb-2 text-right">Settings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="group bg-slate-50/50 hover:bg-white transition-all duration-300">
                                <td className="px-6 py-5 rounded-l-3xl border-y border-l border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-indigo-100 shadow-lg group-hover:scale-110 transition-transform">
                                            {user.avatar}
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors tracking-tight truncate">{user.name}</p>
                                            <p className="text-[11px] text-slate-400 font-medium truncate">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 transition-all">
                                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border shadow-xs ${getRoleColor(user.role)}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 transition-all text-slate-500 font-bold italic text-sm">
                                    {user.joined}
                                </td>
                                <td className="px-6 py-5 border-y border-slate-50 group-hover:border-slate-100 transition-all">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-1.5 h-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`}></span>
                                        <span className={`text-[11px] font-bold uppercase tracking-widest ${user.status === "Active" ? "text-emerald-600" : "text-slate-400"}`}>{user.status}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-5 rounded-r-3xl border-y border-r border-slate-50 group-hover:border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-100/50 transition-all text-right">
                                    <div className="flex items-center justify-end gap-3">
                                        <button className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-300 hover:text-indigo-600 hover:border-indigo-400 hover:shadow-md transition-all active:scale-95">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </button>
                                        <button className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-300 hover:text-rose-600 hover:border-rose-400 hover:shadow-md transition-all active:scale-95">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-10 border-t border-slate-50 flex items-center justify-between bg-slate-50/20">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Showing 5 of 1,240 platform users</p>
                <div className="flex items-center gap-2">
                    <button className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all disabled:opacity-30">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-linear-to-r from-indigo-600 to-purple-700 text-white text-sm font-bold shadow-lg shadow-indigo-100">1</button>
                    <button className="w-12 h-12 rounded-2xl border border-slate-200 text-sm font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">2</button>
                    <button className="w-12 h-12 rounded-2xl border border-slate-200 text-sm font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">3</button>
                    <span className="px-3 text-slate-300 font-bold">...</span>
                    <button className="w-12 h-12 rounded-2xl border border-slate-200 text-sm font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">248</button>
                    <button className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
