import React from "react";
import SocietyOwnerSidebar from "../components/societyOwnerDashboard/SocietyOwnerSidebar";
import SocietyOwnerTopbar from "../components/societyOwnerDashboard/SocietyOwnerTopbar";
import SocietyOwnerStatsRow from "../components/societyOwnerDashboard/SocietyOwnerStatsRow";
import SocietyOwnerPaymentsTable from "../components/societyOwnerDashboard/SocietyOwnerPaymentsTable";
import SocietyOwnerCommunityFeed from "../components/societyOwnerDashboard/SocietyOwnerCommunityFeed";
import SocietyOwnerQuickActions from "../components/societyOwnerDashboard/SocietyOwnerQuickActions";

const SocietyOwnerDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc] font-sans">
      <SocietyOwnerSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <SocietyOwnerTopbar />
        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-10">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight uppercase">Society Command</h1>
              <p className="text-[12px] text-slate-500 mt-1 font-semibold tracking-widest uppercase opacity-70">Oversee community & financial operations</p>
            </div>
          </div>
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