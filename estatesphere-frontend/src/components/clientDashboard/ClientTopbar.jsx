import React from "react";
import { useSelector } from "react-redux";
import SearchIcon from "../../assets/svg/common/SearchIcon";
import BellIcon from "../../assets/svg/common/BellIcon";

const ClientTopbar = () => {
    const user = useSelector((state) => state.auth.user);
    const firstName = user?.fullName?.split(" ")[0] || "Client";

    return (
        <header className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
            <div className="flex flex-col">
                <h1 className="text-xl font-bold text-slate-900">Good morning, {firstName}! 👋</h1>
                <p className="text-[13px] text-slate-500 font-medium mt-0.5">
                    {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 w-[420px] focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-600/5 focus-within:border-indigo-600/20 transition-all duration-200">
                    <SearchIcon className="text-slate-400 flex-shrink-0" />
                    <input
                        className="bg-transparent border-none outline-none text-[14px] text-slate-900 flex-1 placeholder:text-slate-400"
                        placeholder="Search for properties, areas, or agents..."
                    />
                </div>

                <button className="relative w-11 h-11 rounded-xl border border-slate-200 bg-white text-slate-600 flex items-center justify-center cursor-pointer hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm">
                    <BellIcon />
                    <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white shadow-sm"></span>
                </button>

                <button className="px-6 py-2.5 rounded-xl border-none bg-linear-to-r from-indigo-600 to-purple-600 text-white text-[14px] font-bold cursor-pointer hover:shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-indigo-600/20 active:scale-95">
                    List Your Home
                </button>
            </div>
        </header>
    );
};

export default ClientTopbar;
