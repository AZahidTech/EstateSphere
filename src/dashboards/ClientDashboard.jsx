import React from "react";
import ClientSidebar from "../components/clientDashboard/ClientSidebar";
import ClientTopbar from "../components/clientDashboard/ClientTopbar";
import ClientStatsRow from "../components/clientDashboard/ClientStatsRow";
import ClientPropertyCards from "../components/clientDashboard/ClientPropertyCards";
import ClientUpcomingTours from "../components/clientDashboard/ClientUpcomingTours";
import ClientNearbyMap from "../components/clientDashboard/ClientNearbyMap";
import ClientNegotiations from "../components/clientDashboard/ClientNegotiations";

const ClientDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f7fb] font-sans">
      <ClientSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ClientTopbar />
        <div className="flex-1 overflow-y-auto p-7 flex flex-col gap-[22px]">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-[22px] font-bold text-[#1e2535]">Welcome back, Hamza!</h1>
              <p className="text-[13.5px] text-[#7b8399] mt-1 font-medium">Here's what's happening with your property search today.</p>
            </div>
            <div className="flex gap-2.5">
              <button className="px-[18px] py-[9px] rounded-[10px] bg-white border border-[#e9ecf3] text-[#1e2535] text-[13px] font-bold cursor-pointer hover:bg-[#f5f7fb] shadow-sm">Activity Log</button>
              <button className="px-[18px] py-[9px] rounded-[10px] bg-indigo-600 border-none text-white text-[13px] font-bold cursor-pointer hover:opacity-90 shadow-sm">+ Search New</button>
            </div>
          </div>
          <ClientStatsRow />
          <div className="grid grid-cols-[1fr_310px] gap-[18px] items-start">
            <ClientPropertyCards />
            <div className="flex flex-col gap-3.5">
              <ClientUpcomingTours />
              <ClientNearbyMap />
            </div>
          </div>
          <ClientNegotiations />
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;