import React from "react";
import walletIcon from "../../assets/svg/pricingFeatures/wallet.svg";

import { propertyAmenitiesList } from "../../data/index.jsx";

const PricingFeaturesDetails = () => {
    const amenities = propertyAmenitiesList;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in slide-in-from-right-4 duration-500">
            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <img src={walletIcon} alt="Price" className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1e2535]">Financial Details</h3>
                </div>

                <div>
                    <label className="block text-[#1e2535] text-sm font-semibold mb-2">Monthly Listing Price</label>
                    <div className="relative">
                        <div className="absolute left-4 top-3.5 text-gray-400 text-sm">$</div>
                        <input
                            type="text"
                            placeholder="0.00"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-bold"
                        />
                        <div className="absolute right-4 top-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">USD</div>
                    </div>
                </div>

                <div>
                    <label className="block text-[#1e2535] text-sm font-semibold mb-2">Security Deposit</label>
                    <div className="relative">
                        <div className="absolute left-4 top-3.5 text-gray-400 text-sm">$</div>
                        <input
                            type="text"
                            placeholder="0.00"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>
                    <p className="text-[11px] text-[#7b8399] italic mt-2">Standard recommendation is 1-2 months of rent.</p>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm shadow-blue-500/5 mt-8">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs flex-shrink-0 font-bold">i</div>
                    <div>
                        <p className="text-[12px] text-blue-900 leading-relaxed font-medium">
                            EstateSphere calculates a suggested price based on <b>local market trends</b> and property size.
                            <button className="text-blue-600 font-bold ml-1 hover:underline">View analysis</button>
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#1e2535]">Amenities & Features</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {amenities.map((item, idx) => (
                        <label key={idx} className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${item.checked ? "bg-white border-blue-200 shadow-sm shadow-blue-500/10" : "bg-gray-50/50 border-gray-100 opacity-60 hover:opacity-100"}`}>
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${item.checked ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300"}`}>
                                {item.checked && <span className="text-[10px]">✓</span>}
                            </div>
                            <span className={`text-[13px] font-semibold ${item.checked ? "text-[#1e2535]" : "text-[#7b8399]"}`}>{item.label}</span>
                        </label>
                    ))}
                </div>

                <button className="w-full mt-4 border-2 border-dashed border-gray-100 rounded-xl py-4 text-[11px] font-bold text-[#7b8399] uppercase tracking-wider hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/30 transition-all flex items-center justify-center gap-2">
                    <span className="text-base">+</span>
                    Add Custom Feature
                </button>
            </div>
        </div>
    );
};

export default PricingFeaturesDetails;
