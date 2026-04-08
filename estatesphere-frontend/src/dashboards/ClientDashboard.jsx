import React from "react";
import ClientSidebar from "../components/clientDashboard/ClientSidebar";
import ClientTopbar from "../components/clientDashboard/ClientTopbar";
import ClientStatsRow from "../components/clientDashboard/ClientStatsRow";
import ClientPropertyCards from "../components/clientDashboard/ClientPropertyCards";
import ClientUpcomingTours from "../components/clientDashboard/ClientUpcomingTours";
import ClientNearbyMap from "../components/clientDashboard/ClientNearbyMap";
import ClientNegotiations from "../components/clientDashboard/ClientNegotiations";
import ClientSearchBar from "../components/clientSearchbar/ClientSearchBar";

const ClientDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc] font-sans">
      <ClientSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ClientTopbar />
        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-[28px]">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Market Overview</h1>
              <p className="text-[14px] text-slate-500 mt-1 font-medium">Explore the latest property listings and trends in your area.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 text-[14px] font-bold cursor-pointer hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm">
                Activity Log
              </button>
              <button className="px-6 py-2.5 rounded-xl border-none bg-linear-to-r from-indigo-600 to-purple-600 text-white text-[14px] font-bold cursor-pointer hover:shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-indigo-600/20 active:scale-95">
                + Search New
              </button>
            </div>
          </div>
          
          <ClientSearchBar />

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