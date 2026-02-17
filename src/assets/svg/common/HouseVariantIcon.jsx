import React from 'react';

const HouseVariantIcon = ({ className = "w-6 h-6", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M3 9L12 2L21 9V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V9Z" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
};

export default HouseVariantIcon;
