import React from "react";
import AdminSidebar from "../components/superAdminDashboard/AdminSidebar";
import AdminTopbar from "../components/superAdminDashboard/AdminTopbar";
import UserHeader from "../components/userManagement/UserHeader";
import UserStats from "../components/userManagement/UserStats";
import UserTable from "../components/userManagement/UserTable";

const UserManagement = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-[#f8fafc] font-sans">
            <AdminSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminTopbar />
                <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-2">
                    <UserHeader />
                    <UserStats />
                    <UserTable />
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
