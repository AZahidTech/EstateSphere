import React from "react";

const AlertTriangleIcon = ({ className = "w-5 h-5" }) => (
    <svg 
        width="17" 
        height="17" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        viewBox="0 0 24 24"
        className={className}
    >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    </svg>
);

export default AlertTriangleIcon;
