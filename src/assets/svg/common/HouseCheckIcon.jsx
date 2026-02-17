import React from 'react';

const HouseCheckIcon = ({ className = "w-6 h-6", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
};

export default HouseCheckIcon;
