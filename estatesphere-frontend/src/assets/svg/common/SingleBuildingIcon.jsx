import React from "react";

const SingleBuildingIcon = ({ className = "w-5 h-5" }) => (
    <svg 
        width="17" 
        height="17" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        viewBox="0 0 24 24"
        className={className}
    >
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <path d="M9 22V12h6v10M9 7h1M14 7h1" />
    </svg>
);

export default SingleBuildingIcon;
