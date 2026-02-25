import React from "react";
import WrenchIcon from "../../assets/svg/resident/WrenchIcon";
import CarIcon from "../../assets/svg/resident/CarIcon";

const ResidentQuickActions = () => (
    <div className="grid grid-cols-2 gap-5">
        {/* Maintenance Card */}
        <div className="bg-linear-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 flex items-center justify-between overflow-hidden relative shadow-xl shadow-indigo-200 group">
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-white tracking-tight">Maintenance Request</h3>
                <p className="text-[14px] text-white/80 mt-2 max-w-[240px] leading-relaxed font-medium">Report issues in your unit or common areas for quick resolution.</p>
                <button className="mt-6 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[14px] font-bold cursor-pointer hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 shadow-lg">
                    Raise Request
                </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-15 text-white transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                <WrenchIcon style={{ width: 140, height: 140 }} />
            </div>
        </div>

        {/* Guest Card */}
        <div className="bg-white rounded-3xl p-8 flex items-center justify-between border border-slate-200 shadow-xl shadow-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Pre-Approve a Guest</h3>
                <p className="text-[14px] text-slate-500 mt-2 max-w-[240px] leading-relaxed font-medium">Notify security about expected visitors to ensure seamless entry.</p>
                <button className="mt-6 px-6 py-3 rounded-xl bg-slate-900 text-white text-[14px] font-bold cursor-pointer hover:shadow-xl hover:shadow-slate-200 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 shadow-md">
                    Add Guest
                </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-5 text-slate-900 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                <CarIcon style={{ width: 140, height: 140 }} />
            </div>
            {/* Subtle highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-indigo-500/5 to-purple-500/5 rounded-full -mr-16 -mt-16"></div>
        </div>
    </div>
);

export default ResidentQuickActions;
