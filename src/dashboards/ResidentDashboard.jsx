import React from "react";
import ResidentSidebar from "../components/residentDashboard/ResidentSidebar";
import ResidentTopbar from "../components/residentDashboard/ResidentTopbar";
import ResidentStatsRow from "../components/residentDashboard/ResidentStatsRow";
import ResidentPaymentsTable from "../components/residentDashboard/ResidentPaymentsTable";
import ResidentCommunityFeed from "../components/residentDashboard/ResidentCommunityFeed";
import ResidentQuickActions from "../components/residentDashboard/ResidentQuickActions";

const ResidentDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f7fb] font-sans">
      <ResidentSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ResidentTopbar />
        <div className="flex-1 overflow-y-auto p-7 flex flex-col gap-5">
          <ResidentStatsRow />
          <div className="grid grid-cols-[1fr_320px] gap-[18px] items-start">
            <ResidentPaymentsTable />
            <ResidentCommunityFeed />
          </div>
          <ResidentQuickActions />
        </div>
      </div>
    </div>
  );
};

export default ResidentDashboard;