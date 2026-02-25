import React from "react";
import LocationPinIcon from "../../assets/svg/client/LocationPinIcon";
import BedIcon from "../../assets/svg/client/BedIcon";
import BathIcon from "../../assets/svg/client/BathIcon";
import SquareIcon from "../../assets/svg/client/SquareIcon";
import HeartIcon from "../../assets/svg/client/HeartIcon";
import ChevronRightIcon from "../../assets/svg/common/ChevronRightIcon";
import { clientRecommendedProperties } from "../../data/index.jsx";

const props = clientRecommendedProperties;

const ClientPropertyCards = () => (
    <div className="bg-white rounded-2xl p-5 border border-[#e9ecf3] shadow-sm">
        <div className="dash-section-header">
            <div className="flex items-center gap-2.5">
                <h2 className="text-[16px] font-bold text-[#1e2535]">Recommended Properties</h2>
                <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-[6px] tracking-wide">NEW</span>
            </div>
            <button className="bg-transparent border-none text-indigo-600 text-[13px] font-semibold cursor-pointer">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
            {props.map((p, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden border border-[#e9ecf3] hover:-translate-y-0.5 transition-transform duration-200 shadow-sm">
                    <div className="relative">
                        <img src={p.img} alt={p.title} className="w-full h-[160px] object-cover block" />
                        <span className={`absolute top-2.5 left-2.5 ${p.badgeCls} text-white text-[10px] font-bold px-2 py-1 rounded-[6px] tracking-wide`}>{p.badge}</span>
                        <button className="absolute top-2.5 right-2.5 w-[30px] h-[30px] rounded-full bg-white/20 backdrop-blur-md border-none text-white cursor-pointer flex items-center justify-center">
                            <HeartIcon />
                        </button>
                    </div>
                    <div className="p-3.5">
                        <p className="text-[14px] font-bold text-[#1e2535]">{p.title}</p>
                        <div className="flex items-center gap-1 text-xs text-[#7b8399] mt-1">
                            <LocationPinIcon />{p.loc}
                        </div>
                        <div className="flex gap-3 mt-2 text-xs text-[#7b8399]">
                            <span className="flex items-center gap-1"><BedIcon />{p.beds} Beds</span>
                            <span className="flex items-center gap-1"><BathIcon />{p.baths} Baths</span>
                            <span className="flex items-center gap-1"><SquareIcon />{p.sqft} ft²</span>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            <span className={`text-[16px] font-extrabold ${p.priceCls}`}>{p.price}</span>
                            <button className="w-[30px] h-[30px] rounded-full bg-indigo-600 border-none text-white cursor-pointer flex items-center justify-center">
                                <ChevronRightIcon />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ClientPropertyCards;
