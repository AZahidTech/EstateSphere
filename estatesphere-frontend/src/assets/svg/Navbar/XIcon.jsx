import React from 'react';

const XIcon = ({ className = "w-6 h-6", ...props }) => {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
};

export default XIcon;
