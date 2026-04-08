import React from "react";

const DashboardIcon = ({ className = "w-5 h-5", stroke = "currentColor", width = "18", height = "18" }) => (
    <svg 
        width={width}
        height={height}
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={stroke}
        strokeWidth="2" 
        className={className}
    >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
);

export default DashboardIcon;
