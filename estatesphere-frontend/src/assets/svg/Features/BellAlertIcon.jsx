import React from 'react';

const BellAlertIcon = ({ className = "w-8 h-8", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" {...props}>
            <path d="M16 6L6 12V22L16 28L26 22V12L16 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 16L26 10M16 16L6 10M16 16V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default BellAlertIcon;
