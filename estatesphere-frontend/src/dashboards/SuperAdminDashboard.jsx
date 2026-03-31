import React from "react";
import AdminSidebar from "../components/superAdminDashboard/AdminSidebar";
import AdminTopbar from "../components/superAdminDashboard/AdminTopbar";
import AdminStatsRow from "../components/superAdminDashboard/AdminStatsRow";
import AdminAnalyticsSection from "../components/superAdminDashboard/AdminAnalyticsSection";
import AdminRecentActivity from "../components/superAdminDashboard/AdminRecentActivity";

const SuperAdminDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc] font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminTopbar />
        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-10">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight uppercase">System Command</h1>
              <p className="text-[12px] text-slate-500 mt-1 font-semibold tracking-widest uppercase opacity-70">Global infrastructure monitoring</p>
            </div>
          </div>
          <AdminStatsRow />
          <AdminAnalyticsSection />
          <AdminRecentActivity />
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;