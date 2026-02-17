import React from 'react';

const LinkedInIcon = ({ className = "w-4 h-4", ...props }) => {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
};

export default LinkedInIcon;
