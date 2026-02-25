import React from "react";
import AdminSidebar from "../components/superAdminDashboard/AdminSidebar";
import AdminTopbar from "../components/superAdminDashboard/AdminTopbar";
import AdminStatsRow from "../components/superAdminDashboard/AdminStatsRow";
import AdminAnalyticsSection from "../components/superAdminDashboard/AdminAnalyticsSection";
import AdminRecentActivity from "../components/superAdminDashboard/AdminRecentActivity";

const SuperAdminDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f7fb] font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminTopbar />
        <div className="flex-1 overflow-y-auto p-7 flex flex-col gap-5">
          <div className="mb-1">
            <h1 className="text-[22px] font-bold text-[#1e2535]">Dashboard Overview</h1>
            <p className="text-[13.5px] text-[#7b8399] mt-1">Welcome back! Here's what's happening across all societies today.</p>
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