import React from "react";
import WrenchIcon from "../../assets/svg/resident/WrenchIcon";
import CarIcon from "../../assets/svg/resident/CarIcon";

const SocietyOwnerQuickActions = () => (
    <div className="grid grid-cols-2 gap-5">
        {/* Management Card */}
        <div className="bg-slate-900 rounded-3xl p-8 flex items-center justify-between overflow-hidden relative shadow-xl shadow-slate-200 group">
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-white tracking-tight">Maintenance Overview</h3>
                <p className="text-[14px] text-white/60 mt-2 max-w-[240px] leading-relaxed font-medium">View all open work orders and staff performance metrics.</p>
                <button className="mt-6 px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 border-none text-white text-[14px] font-bold cursor-pointer hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 shadow-md">
                    Open Console
                </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 text-white transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
                <WrenchIcon style={{ width: 140, height: 140 }} />
            </div>
        </div>

        {/* Visitor Card */}
        <div className="bg-white rounded-3xl p-8 flex items-center justify-between border border-slate-200 shadow-xl shadow-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Visitor Analytics</h3>
                <p className="text-[14px] text-slate-500 mt-2 max-w-[240px] leading-relaxed font-medium">Track visitor flow trends and security logs for the past 30 days.</p>
                <button className="mt-6 px-6 py-3 rounded-xl bg-white border-2 border-slate-900 text-slate-900 text-[14px] font-bold cursor-pointer hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 transition-all duration-300 active:scale-95 shadow-md shadow-slate-200">
                    View Reports
                </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-5 text-slate-900 transform group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-500">
                <CarIcon style={{ width: 140, height: 140 }} />
            </div>
        </div>
    </div>
);

export default SocietyOwnerQuickActions;
