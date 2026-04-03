import React from "react";

const SearchPlusIcon = ({ className = "w-5 h-5" }) => (
    <svg 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className={className}
    >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        <path d="M10 7v6m-3-3h6" />
    </svg>
);

export default SearchPlusIcon;
