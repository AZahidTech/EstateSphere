import React from 'react';

const ArrowRightIcon = ({ className = "w-4 h-4", ...props }) => {
    return (
        <svg className={className} fill="none" viewBox="0 0 16 16" {...props}>
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ArrowRightIcon;
