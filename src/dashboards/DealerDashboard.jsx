import React from "react";
import DealerSidebar from "../components/dealerDashboard/DealerSidebar";
import DealerTopbar from "../components/dealerDashboard/DealerTopbar";
import DealerStatsRow from "../components/dealerDashboard/DealerStatsRow";
import DealerLeadsChart from "../components/dealerDashboard/DealerLeadsChart";
import DealerUpcomingMeetings from "../components/dealerDashboard/DealerUpcomingMeetings";
import DealerRecentInquiries from "../components/dealerDashboard/DealerRecentInquiries";

const DealerDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc] font-sans text-slate-900">
      <DealerSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DealerTopbar />
        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-10">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight uppercase">Sales Dashboard</h1>
              <p className="text-[12px] text-slate-500 mt-1 font-semibold tracking-widest uppercase opacity-70">Monitor leads & performance metrics</p>
            </div>
          </div>
          <DealerStatsRow />
          <div className="grid grid-cols-[1fr_280px] gap-[18px] items-start">
            <DealerLeadsChart />
            <DealerUpcomingMeetings />
          </div>
          <DealerRecentInquiries />
        </div>
      </div>
    </div>
  );
};

export default DealerDashboard;