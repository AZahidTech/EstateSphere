import React from "react";
import { useSelector } from "react-redux";
import BellIcon from "../../assets/svg/common/BellIcon";
import PlusIcon from "../../assets/svg/common/PlusIcon";

const DealerTopbar = () => {
    const user = useSelector((state) => state.auth.user);
    const firstName = user?.fullName?.split(" ")[0] || "Agent";

    return (
        <header className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
            <div className="flex flex-col">
                <h1 className="text-xl font-bold text-slate-900">Good morning, {firstName}! 👋</h1>
                <p className="text-[13px] text-slate-500 font-medium mt-0.5">
                    {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative w-11 h-11 rounded-xl border border-slate-200 bg-white text-slate-600 flex items-center justify-center cursor-pointer hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm">
                    <BellIcon />
                    <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white shadow-sm"></span>
                </button>

                <button className="px-6 py-2.5 rounded-xl border-none bg-linear-to-r from-indigo-600 to-purple-600 text-white text-[14px] font-bold cursor-pointer hover:shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-indigo-600/20 active:scale-95 flex items-center gap-2">
                    <PlusIcon strokeWidth={3} className="w-4 h-4" /> Create Listing
                </button>
            </div>
        </header>
    );
};

export default DealerTopbar;
