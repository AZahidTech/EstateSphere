import React from 'react';

const BuildingRectsIcon = ({ className = "w-6 h-6", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" {...props}>
            <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" />
        </svg>
    );
};

export default BuildingRectsIcon;
