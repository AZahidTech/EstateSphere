import React from "react";
import AdminSidebar from "../components/superAdminDashboard/AdminSidebar";
import AdminTopbar from "../components/superAdminDashboard/AdminTopbar";
import ComplaintsHeader from "../components/complaintsManagement/ComplaintsHeader";
import ComplaintsStats from "../components/complaintsManagement/ComplaintsStats";
import ComplaintsTable from "../components/complaintsManagement/ComplaintsTable";

const ComplaintsManagement = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-[#f8fafc] font-sans">
            <AdminSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminTopbar />
                <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-2">
                    <ComplaintsHeader />
                    <ComplaintsStats />
                    <ComplaintsTable />
                    <footer className="mt-10 py-6 border-t border-gray-100 text-center">
                        <p className="text-[#a0aec0] text-xs font-medium">© 2023 EstateSphere SaaS Solutions. All rights reserved. Version 2.4.1</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default ComplaintsManagement;
