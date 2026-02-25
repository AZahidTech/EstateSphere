import React from "react";
import { dealerLeadsSummary } from "../../data/index.jsx";

const { days, inbound, email } = dealerLeadsSummary;

const DealerLeadsChart = () => (
    <div className="bg-white rounded-2xl p-[22px] border border-[#e9ecf3] flex-1 shadow-sm">
        <div className="flex items-center justify-between mb-5">
            <h2 className="text-[16px] font-bold text-[#1e2535]">Leads Overview</h2>
            <select className="px-3.5 py-1.5 rounded-lg bg-[#f5f7fb] border border-[#e9ecf3] text-[#7b8399] text-[12px] outline-none cursor-pointer hover:border-indigo-400">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
            </select>
        </div>
        <div className="flex items-end gap-3 h-[180px] pb-1 border-b border-[#f1f5f9]">
            {days.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5 ">
                    <div className="flex gap-[3px] items-end w-full justify-center">
                        <div
                            className="dash-bar bg-indigo-500 w-[14px]"
                            style={{ height: `${(inbound[i] / 100) * 160}px` }}
                            title={`Inbound: ${inbound[i]}`}
                        ></div>
                        <div
                            className="dash-bar bg-indigo-200 w-[14px]"
                            style={{ height: `${(email[i] / 100) * 160}px` }}
                            title={`Email: ${email[i]}`}
                        ></div>
                    </div>
                    <span className="text-[10px] text-[#7b8399] mt-1.5 font-bold uppercase">{d}</span>
                </div>
            ))}
        </div>
        <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                <span className="text-[12px] text-[#7b8399] font-medium">Inbound Calls</span>
            </div>
            <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-200"></span>
                <span className="text-[12px] text-[#7b8399] font-medium">Email Inquiries</span>
            </div>
        </div>
    </div>
);

export default DealerLeadsChart;
