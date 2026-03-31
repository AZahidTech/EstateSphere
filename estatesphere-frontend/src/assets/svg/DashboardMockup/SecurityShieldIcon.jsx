import React from 'react';

const SecurityShieldIcon = ({ className = "w-6 h-6", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" {...props}>
            <path d="M10 2L3 5V9C3 13.5 6 17.5 10 18.5C14 17.5 17 13.5 17 9V5L10 2Z" fill="currentColor" />
            <path d="M7 10L9 12L13 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default SecurityShieldIcon;
