import React from 'react';

const CheckCircleIcon = ({ className = "w-5 h-5", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" {...props}>
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" opacity="0.2" />
            <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default CheckCircleIcon;
