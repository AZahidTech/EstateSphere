import React from 'react';

const PlayCircleIcon = ({ className = "w-5 h-5", ...props }) => {
    return (
        <svg className={className} fill="none" viewBox="0 0 20 20" {...props}>
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M8 6L14 10L8 14V6Z" fill="currentColor" />
        </svg>
    );
};

export default PlayCircleIcon;
