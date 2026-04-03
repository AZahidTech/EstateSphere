import React from "react";
import { mockUsers } from "../../data/index.jsx";
import { getRoleColor } from "../../utils/features/functions";
import SearchIcon from "../../assets/svg/common/SearchIcon";
import EditIcon from "../../assets/svg/common/EditIcon";
import TrashIcon from "../../assets/svg/common/TrashIcon";
import ChevronLeftIcon from "../../assets/svg/common/ChevronLeftIcon";
import ChevronRightIcon from "../../assets/svg/common/ChevronRightIcon";

const UserTable = () => {
    const users = mockUsers;

    return (
        <div className="dash-card mt-8">
            <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50/20">
                <div className="relative flex-1 max-w-md group">
                    <input
                        type="text"
                        placeholder="Search by name, email or ID..."
                        className="search-bar-premium pl-12"
                    />
                    <div className="absolute left-4 top-3.5 text-slate-300 group-focus-within:text-indigo-600 transition-colors">
                        <SearchIcon className="w-5 h-5" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <select className="dash-select">
                        <option>Role: All</option>
                    </select>
                    <select className="dash-select">
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
                            <tr key={user.id} className="group premium-table-row">
                                <td className="premium-table-td-first">
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
                                <td className="premium-table-td-mid">
                                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border shadow-xs ${getRoleColor(user.role)}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="premium-table-td-mid text-slate-500 font-bold italic text-sm">
                                    {user.joined}
                                </td>
                                <td className="premium-table-td-mid">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-1.5 h-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`}></span>
                                        <span className={`text-[11px] font-bold uppercase tracking-widest ${user.status === "Active" ? "text-emerald-600" : "text-slate-400"}`}>{user.status}</span>
                                    </div>
                                </td>
                                <td className="premium-table-td-last">
                                    <div className="flex items-center justify-end gap-3">
                                        <button className="icon-btn-outline">
                                            <EditIcon />
                                        </button>
                                        <button className="icon-btn-outline hover:text-rose-600 hover:border-rose-400">
                                            <TrashIcon />
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
                        <ChevronLeftIcon />
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-linear-to-r from-indigo-600 to-purple-700 text-white text-sm font-bold shadow-lg shadow-indigo-100">1</button>
                    <button className="w-12 h-12 rounded-2xl border border-slate-200 text-sm font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">2</button>
                    <button className="w-12 h-12 rounded-2xl border border-slate-200 text-sm font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">3</button>
                    <span className="px-3 text-slate-300 font-bold">...</span>
                    <button className="w-12 h-12 rounded-2xl border border-slate-200 text-sm font-bold text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">248</button>
                    <button className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-indigo-600 hover:border-indigo-400 transition-all">
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
