import React from 'react';

const ArrowUpIcon = ({ className = "w-4 h-4", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 12 12" fill="none" {...props}>
            <path d="M2 8L6 4L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ArrowUpIcon;
