import React from "react";
import SearchIcon from "../../assets/svg/common/SearchIcon";
import BellIcon from "../../assets/svg/common/BellIcon";

const ClientTopbar = () => (
    <header className="flex items-center gap-4 px-7 py-3.5 bg-white border-b border-[#e9ecf3]">
        <div className="flex items-center gap-2.5 flex-1 max-w-[480px] bg-[#f5f7fb] border border-[#e9ecf3] rounded-[10px] px-3.5 py-2.5">
            <SearchIcon className="text-[#7b8399] flex-shrink-0" />
            <input className="bg-transparent border-none outline-none text-[#1e2535] text-[13.5px] w-full placeholder:text-[#7b8399]" placeholder="Search for properties, areas, or agents..." />
        </div>
        <div className="flex items-center gap-3 ml-auto">
            <button className="w-9 h-9 rounded-full border border-[#e9ecf3] bg-white text-[#1e2535] flex items-center justify-center cursor-pointer hover:bg-[#f5f7fb]">
                <BellIcon />
            </button>
            <button className="px-[18px] py-[9px] rounded-[10px] border-none bg-indigo-600 text-white text-[13.5px] font-semibold cursor-pointer hover:opacity-90 transition-opacity">
                List Your Home
            </button>
        </div>
    </header>
);

export default ClientTopbar;
