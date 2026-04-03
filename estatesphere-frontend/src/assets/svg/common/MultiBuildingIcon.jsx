import React from "react";

const MultiBuildingIcon = ({ className = "w-5 h-5" }) => (
    <svg 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className={className}
    >
        <rect x="2" y="7" width="9" height="14" rx="1" />
        <rect x="13" y="3" width="9" height="18" rx="1" />
    </svg>
);

export default MultiBuildingIcon;
