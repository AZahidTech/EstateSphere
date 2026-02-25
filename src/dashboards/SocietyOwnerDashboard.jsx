import React from "react";
import SocietyOwnerSidebar from "../components/societyOwnerDashboard/SocietyOwnerSidebar";
import SocietyOwnerTopbar from "../components/societyOwnerDashboard/SocietyOwnerTopbar";
import SocietyOwnerStatsRow from "../components/societyOwnerDashboard/SocietyOwnerStatsRow";
import SocietyOwnerPaymentsTable from "../components/societyOwnerDashboard/SocietyOwnerPaymentsTable";
import SocietyOwnerCommunityFeed from "../components/societyOwnerDashboard/SocietyOwnerCommunityFeed";
import SocietyOwnerQuickActions from "../components/societyOwnerDashboard/SocietyOwnerQuickActions";

const SocietyOwnerDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f7fb] font-sans">
      <SocietyOwnerSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <SocietyOwnerTopbar />
        <div className="flex-1 overflow-y-auto p-7 flex flex-col gap-5">
          <SocietyOwnerStatsRow />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-[18px] items-start">
            <SocietyOwnerPaymentsTable />
            <SocietyOwnerCommunityFeed />
          </div>
          <SocietyOwnerQuickActions />
        </div>
      </div>
    </div>
  );
};

export default SocietyOwnerDashboard;