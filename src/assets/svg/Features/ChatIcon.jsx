import React from 'react';

const ChatIcon = ({ className = "w-8 h-8", ...props }) => {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" {...props}>
            <path d="M8 12L16 8L24 12M8 12L16 16M8 12V20L16 24M24 12L16 16M24 12V20L16 24M16 16V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ChatIcon;
