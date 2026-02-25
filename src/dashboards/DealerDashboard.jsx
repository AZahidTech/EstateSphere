import React from "react";
import DealerSidebar from "../components/dealerDashboard/DealerSidebar";
import DealerTopbar from "../components/dealerDashboard/DealerTopbar";
import DealerStatsRow from "../components/dealerDashboard/DealerStatsRow";
import DealerLeadsChart from "../components/dealerDashboard/DealerLeadsChart";
import DealerUpcomingMeetings from "../components/dealerDashboard/DealerUpcomingMeetings";
import DealerRecentInquiries from "../components/dealerDashboard/DealerRecentInquiries";

const DealerDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f7fb] font-sans text-[#1e2535]">
      <DealerSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DealerTopbar />
        <div className="flex-1 overflow-y-auto p-7 flex flex-col gap-5">
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