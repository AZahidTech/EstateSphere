import React from 'react';

const CalendarBookingIcon = ({ className = "w-8 h-8", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" {...props}>
            <path d="M16 4V8M16 24V28M8 16H4M28 16H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
};

export default CalendarBookingIcon;
