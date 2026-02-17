import React from 'react';

const ArrowLeftDoubleIcon = ({ className = "w-4 h-4", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 14 14" fill="none" {...props}>
            <path d="M5 2L2 7L5 12M9 2L12 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ArrowLeftDoubleIcon;
