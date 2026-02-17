import React from 'react';

const AnalyticsIcon = ({ className = "w-8 h-8", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" {...props}>
            <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M4 14H28" stroke="currentColor" strokeWidth="2" />
            <circle cx="10" cy="20" r="1.5" fill="currentColor" />
            <circle cx="16" cy="20" r="1.5" fill="currentColor" />
            <circle cx="22" cy="20" r="1.5" fill="currentColor" />
        </svg>
    );
};

export default AnalyticsIcon;
