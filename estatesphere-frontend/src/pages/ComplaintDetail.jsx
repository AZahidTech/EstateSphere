import React from "react";
import AdminTopbar from "../components/superAdminDashboard/AdminTopbar"; // Reuse topbar
import ComplaintHeader from "../components/complaintDetail/ComplaintHeader";
import ComplaintMainInfo from "../components/complaintDetail/ComplaintMainInfo";
import ComplaintSidebar from "../components/complaintDetail/ComplaintSidebar";
import ActivityHistory from "../components/complaintDetail/ActivityHistory";

const ComplaintDetail = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-[#f5f7fb] font-sans">
            {/* Assuming a simpler layout for detail common in apps where sidebar might be collapsed or hidden */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminTopbar />
                <div className="flex-1 overflow-y-auto px-10 py-8">
                    <ComplaintHeader id="CMP-1024" status="In Progress" priority="High Priority" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <ComplaintMainInfo />
                            <ActivityHistory />
                        </div>
                        <div className="lg:col-span-1">
                            <ComplaintSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplaintDetail;
