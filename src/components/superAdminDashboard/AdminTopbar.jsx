import React from "react";
import SearchIcon from "../../assets/svg/common/SearchIcon";
import BellIcon from "../../assets/svg/common/BellIcon";
import PlusIcon from "../../assets/svg/common/PlusIcon";

const AdminTopbar = () => {
    return (
        <header className="flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 w-[400px] focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-600/5 focus-within:border-indigo-600/20 transition-all duration-200">
                <SearchIcon className="text-slate-400 flex-shrink-0" />
                <input
                    className="bg-transparent border-none outline-none text-[14px] text-slate-900 flex-1 placeholder:text-slate-400"
                    placeholder="Search for societies, users, or tickets..."
                />
            </div>

            <div className="flex items-center gap-6 ml-auto">
                <button className="relative w-11 h-11 rounded-xl border border-slate-200 bg-white text-slate-600 flex items-center justify-center cursor-pointer hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm">
                    <BellIcon />
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
                    <div className="text-right">
                        <p className="text-[14px] font-bold text-slate-900">Ahmad Ali</p>
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Super Admin</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[15px] font-bold shadow-sm ring-2 ring-slate-100">
                        A
                    </div>
                </div>

                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl border-none bg-linear-to-r from-indigo-600 to-purple-600 text-white text-[14px] font-bold shadow-md shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 cursor-pointer">
                    <PlusIcon strokeWidth={3} /> Add Society
                </button>
            </div>
        </header>
    );
};

export default AdminTopbar;
