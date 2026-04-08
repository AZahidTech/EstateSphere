import React from "react";

const UsersCircleIcon = ({ className = "w-5 h-5" }) => (
    <svg 
        width="17" 
        height="17" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        viewBox="0 0 24 24"
        className={className}
    >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
    </svg>
);

export default UsersCircleIcon;
