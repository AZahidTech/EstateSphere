import React from "react";
import PhoneCallIcon from "../../assets/svg/dealer/PhoneCallIcon";
import MailIcon from "../../assets/svg/client/MailIcon";
import FlagIcon from "../../assets/svg/dealer/FlagIcon";
import { dealerRecentInquiries } from "../../data/index.jsx";

const inquiries = dealerRecentInquiries;

const cols = "2fr 1.5fr 1fr 1fr 1fr 0.8fr";

const DealerRecentInquiries = () => (
    <div className="bg-white rounded-2xl p-[22px] border border-[#e9ecf3] shadow-sm">
        <div className="dash-section-header">
            <h2 className="text-[16px] font-bold text-[#1e2535]">Recent Client Inquiries</h2>
            <button className="bg-transparent border-none text-indigo-600 text-[13px] font-semibold cursor-pointer">View All</button>
        </div>
        <div className="overflow-x-auto">
            <div className="dash-table-head border-[#e9ecf3] text-[#7b8399]" style={{ gridTemplateColumns: cols, minWidth: "800px" }}>
                <span>CLIENT</span><span>PROPERTY</span><span>SOURCE</span><span>TYPE</span><span>STATUS</span><span>RECEIVED</span>
            </div>
            {inquiries.map((n, i) => (
                <div key={i} className="dash-table-row border-[#e9ecf3]" style={{ gridTemplateColumns: cols, minWidth: "800px" }}>
                    <div className="flex items-center gap-2.5">
                        <div className={`w-[34px] h-[34px] rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0 ${n.avatarCls}`}>
                            {n.avatar}
                        </div>
                        <div>
                            <p className="text-[13px] font-bold text-[#1e2535] uppercase">{n.client}</p>
                            <p className="text-[11px] text-[#7b8399] font-medium">{n.email}</p>
                        </div>
                    </div>
                    <span className="text-[13px] text-[#1e2535] font-medium">{n.property}</span>
                    <div className="flex items-center gap-1.5 text-[13px] text-[#1e2535]">
                        {n.source === 'Phone' ? <PhoneCallIcon className="w-3.5 h-3.5 text-[#7b8399]" /> : <MailIcon className="w-3.5 h-3.5 text-[#7b8399]" />}
                        {n.source}
                    </div>
                    <span className="text-[13px] text-[#1e2535]">{n.type}</span>
                    <span className={`dash-badge w-fit ${n.statusCls}`}>{n.status}</span>
                    <div className="flex items-center justify-between gap-1.5">
                        <span className="text-[12px] text-[#7b8399] italic font-medium">{n.time}</span>
                        <button className="bg-transparent border-none text-[#cbd5e1] hover:text-[#7b8399] transition-colors cursor-pointer"><FlagIcon /></button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default DealerRecentInquiries;
