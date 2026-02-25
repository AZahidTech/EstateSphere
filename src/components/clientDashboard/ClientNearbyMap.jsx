import React from "react";
import MapPinIcon from "../../assets/svg/client/MapPinIcon";

const amenities = [
    { name: "Metro Station", dist: "0.3 mi" },
    { name: "Whole Foods", dist: "0.5 mi" },
    { name: "City Park", dist: "0.7 mi" },
    { name: "Elementary School", dist: "1.1 mi" },
];

const ClientNearbyMap = () => (
    <div className="bg-white rounded-2xl border border-[#e9ecf3] overflow-hidden shadow-sm">
        <div className="h-[110px] bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] flex items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-[0_0_0_8px_rgba(79,70,229,0.1)]">
                <MapPinIcon />
            </div>
        </div>
        <div className="p-3.5">
            <p className="text-[13px] font-bold text-[#1e2535] mb-2">Nearby Amenities</p>
            {amenities.map((a, i) => (
                <div key={i} className="flex justify-between text-[12.5px] text-[#7b8399] mt-1.5 first:mt-0">
                    <span className="font-medium">{a.name}</span>
                    <span className="text-[#1e2535] font-bold">{a.dist}</span>
                </div>
            ))}
        </div>
    </div>
);

export default ClientNearbyMap;
