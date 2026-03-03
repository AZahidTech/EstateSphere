import React from "react";
import { reviewPropertyAmenities, reviewLocationDetails } from "../../data/index.jsx";

const ReviewSubmitDetails = () => {
    return (
        <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <div>
                <h3 className="text-xl font-bold text-[#1e2535]">Review & Submit</h3>
                <p className="text-[#7b8399] text-sm font-medium mt-1">Almost there! Please review your listing information before publishing it live.</p>
            </div>

            {/* Preview Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row shadow-blue-500/5">
                <div className="md:w-1/3 aspect-[4/3] md:aspect-auto">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&q=80&w=600"
                        alt="Preview"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 p-8">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h4 className="text-2xl font-bold text-[#1e2535]">Modern Downtown Loft</h4>
                            <p className="flex items-center gap-1.5 text-[#7b8399] text-sm mt-1.5 font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                1245 Harbor View Dr, San Francisco, CA
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl font-black text-blue-600">$450,000</p>
                            <p className="text-[10px] font-bold text-[#7b8399] uppercase tracking-widest mt-1">SALE PRICE</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2">
                            <span className="text-blue-400">🛏</span> 3 Bedrooms
                        </span>
                        <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2">
                            <span className="text-blue-400">🚿</span> 2 Bathrooms
                        </span>
                        <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2">
                            <span className="text-blue-400">📐</span> 1,500 sqft
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-50">
                        <div>
                            <p className="text-[10px] font-bold text-[#7b8399] uppercase tracking-widest mb-4">Property Amenities</p>
                            <ul className="space-y-2.5">
                                {reviewPropertyAmenities.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-[13px] font-semibold text-[#1e2535]">
                                        <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[8px]">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-[#7b8399] uppercase tracking-widest mb-4">Location Details</p>
                            <ul className="space-y-2.5">
                                {reviewLocationDetails.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-[13px] font-semibold text-[#1e2535]">
                                        <span>{item.i}</span>
                                        {item.l}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compliance */}
            <div className="space-y-3 pt-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded-md border-gray-300 text-blue-600 focus:ring-blue-500/20" />
                    <span className="text-sm font-semibold text-[#1e2535] group-hover:text-blue-600 transition-colors">I confirm that all property information provided is accurate and up-to-date.</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded-md border-gray-300 text-blue-600 focus:ring-blue-500/20" />
                    <span className="text-sm font-semibold text-[#1e2535] group-hover:text-blue-600 transition-colors">
                        I agree to the <button className="text-blue-600 hover:underline">EstateSphere Terms of Service</button> and <button className="text-blue-600 hover:underline">Privacy Policy</button>.
                    </span>
                </label>
            </div>
        </div>
    );
};

export default ReviewSubmitDetails;
