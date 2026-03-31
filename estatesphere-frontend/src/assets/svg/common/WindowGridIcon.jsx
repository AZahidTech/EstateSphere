import React from 'react';

const WindowGridIcon = ({ className = "w-6 h-6", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" {...props}>
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
};

export default WindowGridIcon;
