import React from 'react';

const SecurePaymentIcon = ({ className = "w-8 h-8", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" {...props}>
            <rect x="6" y="6" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M12 14L14 16L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default SecurePaymentIcon;
