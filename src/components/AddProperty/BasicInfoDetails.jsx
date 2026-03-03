import React from "react";
import mapIcon from "../../assets/svg/BasicInfo/map.svg";
import { propertyTypes } from "../../data/index.jsx";

const BasicInfoDetails = () => {
    return (
        <div className="space-y-6">
            <div>
                <label className="block text-[#1e2535] text-sm font-semibold mb-2">
                    Property Title <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    placeholder="e.g. Modern Lakeside Villa with Private Dock"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-[#1e2535] text-sm font-semibold mb-2">
                        Property Type <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none transition-all">
                        {propertyTypes.map((type, idx) => (
                            <option key={idx}>{type}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-[#1e2535] text-sm font-semibold mb-2">
                        Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter full address"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                        <img src={mapIcon} alt="Map" className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center mb-2">
                    <label className="block text-[#1e2535] text-sm font-semibold">Description</label>
                    <span className="text-[11px] text-[#7b8399] font-medium uppercase tracking-wider">0 / 2000 characters</span>
                </div>
                <textarea
                    placeholder="Describe the property's unique selling points, amenities, and surroundings..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 h-40 resize-none transition-all"
                ></textarea>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-40 border border-gray-100 group shadow-sm">
                <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800)' }}></div>
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] flex items-center justify-center">
                    <button className="bg-white/90 hover:bg-white text-[#1e2535] px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-xl">
                        <img src={mapIcon} alt="Map" className="w-4 h-4" />
                        Verify Location on Map
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BasicInfoDetails;
