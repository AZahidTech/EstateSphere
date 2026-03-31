import React from 'react';

const UsersIcon = ({ className = "w-8 h-8", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" {...props}>
            <rect x="4" y="4" width="10" height="10" rx="2" fill="currentColor" opacity="0.2" />
            <rect x="4" y="18" width="10" height="10" rx="2" fill="currentColor" />
            <rect x="18" y="4" width="10" height="10" rx="2" fill="currentColor" />
            <rect x="18" y="18" width="10" height="10" rx="2" fill="currentColor" opacity="0.2" />
        </svg>
    );
};

export default UsersIcon;
