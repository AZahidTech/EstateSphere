import React from "react";

const VaultIcon = ({ className = "w-5 h-5" }) => (
    <svg 
        width="17" 
        height="17" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        viewBox="0 0 24 24"
        className={className}
    >
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
);

export default VaultIcon;
