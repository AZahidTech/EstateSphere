import React from "react";
import AdminSidebar from "../components/superAdminDashboard/AdminSidebar";
import MessageList from "../components/messages/MessageList";
import ChatWindow from "../components/messages/ChatWindow";

const Messages = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-[#f8fafc] font-sans">
            <AdminSidebar />
            <div className="flex-1 flex overflow-hidden">
                <MessageList />
                <ChatWindow />
            </div>
        </div>
    );
};

export default Messages;
