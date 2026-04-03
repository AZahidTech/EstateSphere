import React from "react";

const UserHeader = () => {
    return (
        <div className="dash-header-section">
            <div>
                <h1 className="dash-title">Identity Governance</h1>
                <p className="dash-subtitle">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    Manage Platform Users
                </p>
            </div>
            <button className="group btn-gradient-premium">
                <span className="text-xl group-hover:rotate-90 transition-transform duration-300">+</span>
                Create Identity
            </button>
        </div>
    );
};

export default UserHeader;
