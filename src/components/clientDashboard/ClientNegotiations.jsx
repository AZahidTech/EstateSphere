import React from "react";
import { clientNegotiations } from "../../data/index.jsx";

const negotiations = clientNegotiations;

const ClientNegotiations = () => (
    <div className="bg-white rounded-2xl p-5 border border-[#e9ecf3] shadow-sm">
        <div className="dash-section-header">
            <div className="flex items-center gap-3">
                <h2 className="text-[16px] font-bold text-[#1e2535]">Active Negotiations</h2>
                <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">{negotiations.length} Active</span>
            </div>
            <button className="bg-transparent border-none text-indigo-600 text-[13px] font-semibold cursor-pointer">View All</button>
        </div>
        <div className="overflow-x-auto">
            <div className="dash-table-head border-[#e9ecf3] text-[#7b8399]" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", minWidth: "600px" }}>
                <span>PROPERTY</span><span>ASKING</span><span>YOUR OFFER</span><span>STATUS</span><span>ACTION</span>
            </div>
            {negotiations.map((n, i) => (
                <div key={i} className="dash-table-row border-[#e9ecf3] text-[#1e2535]" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", minWidth: "600px" }}>
                    <div className="flex items-center gap-2.5 font-bold">
                        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${n.color}`}></span>
                        {n.property}
                    </div>
                    <span className="font-semibold">{n.asking}</span>
                    <span className="font-semibold">{n.offer}</span>
                    <span className={`dash-badge w-fit ${n.statusCls}`}>{n.status}</span>
                    <button className="bg-transparent border-none text-indigo-600 text-[13.5px] font-bold cursor-pointer text-left hover:underline">{n.action}</button>
                </div>
            ))}
        </div>
    </div>
);

export default ClientNegotiations;
