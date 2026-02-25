import React from "react";
import DownloadIcon from "../../assets/svg/common/DownloadIcon";
import { residentPayments } from "../../data/index.jsx";

const payments = residentPayments;

const cols = "1.5fr 1fr 1fr 0.8fr 0.5fr";

const ResidentPaymentsTable = () => (
    <div className="bg-white rounded-2xl p-5 border border-[#e9ecf3]">
        <div className="dash-section-header">
            <h2 className="text-[16px] font-bold text-[#1e2535]">Recent Payments</h2>
            <button className="bg-transparent border-none text-blue-500 text-[13px] font-semibold cursor-pointer">View All</button>
        </div>
        <div>
            <div className="dash-table-head border-[#e9ecf3] text-[#7b8399]" style={{ gridTemplateColumns: cols }}>
                <span>TXN ID</span><span>TYPE</span><span>DATE</span><span>AMOUNT</span><span></span>
            </div>
            {payments.map((p, i) => (
                <div key={i} className="dash-table-row border-[#e9ecf3]" style={{ gridTemplateColumns: cols }}>
                    <span className="text-[13.5px] font-semibold text-[#1e2535]">{p.id}</span>
                    <span className="text-[13.5px] text-[#1e2535]">{p.type}</span>
                    <span className="text-[13.5px] text-[#1e2535]">{p.date}</span>
                    <span>
                        <span className="bg-green-100 text-green-700 text-[11px] font-bold px-2.5 py-[3px] rounded-[6px] inline-block">{p.amount}</span>
                    </span>
                    <button className="bg-transparent border-none text-[#7b8399] cursor-pointer flex items-center"><DownloadIcon /></button>
                </div>
            ))}
        </div>
    </div>
);

export default ResidentPaymentsTable;
