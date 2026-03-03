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
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Recommended Properties</h2>
                <span className="bg-indigo-50 text-indigo-600 text-[10px] font-black px-2.5 py-1 rounded-md tracking-widest border border-indigo-100 uppercase">New</span>
            </div>
            <button className="text-indigo-600 text-sm font-bold hover:underline underline-offset-4 decoration-2">View All Properties</button>
        </div>
        <div className="grid grid-cols-2 gap-6">
            {props.map((p, i) => (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
                    <div className="relative overflow-hidden">
                        <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                        <span className={`absolute top-4 left-4 ${p.badgeCls || 'bg-indigo-600'} text-white text-[10px] font-black px-3 py-1.5 rounded-lg tracking-widest uppercase shadow-lg`}>{p.badge}</span>
                        <button className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white cursor-pointer flex items-center justify-center hover:bg-white hover:text-rose-500 transition-all">
                            <HeartIcon className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="p-6">
                        <p className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{p.title}</p>
                        <div className="flex items-center gap-1.5 text-[13px] text-slate-500 mt-2 font-medium">
                            <LocationPinIcon className="w-4 h-4" />{p.loc}
                        </div>
                        <div className="flex gap-4 mt-5 pt-5 border-t border-slate-50 text-[13px] text-slate-500 font-bold uppercase tracking-wider">
                            <span className="flex items-center gap-2 decoration-indigo-500/30 underline underline-offset-4"><BedIcon className="w-4 h-4 text-indigo-500" />{p.beds} <span className="opacity-50">Beds</span></span>
                            <span className="flex items-center gap-2 decoration-purple-500/30 underline underline-offset-4"><BathIcon className="w-4 h-4 text-purple-500" />{p.baths} <span className="opacity-50">Baths</span></span>
                            <span className="flex items-center gap-2 decoration-cyan-500/30 underline underline-offset-4"><SquareIcon className="w-4 h-4 text-cyan-500" />{p.sqft} <span className="opacity-50">Sqft</span></span>
                        </div>
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-100">
                            <div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Asking Price</span>
                                <span className={`text-2xl font-black ${p.priceCls || 'text-indigo-600'}`}>{p.price}</span>
                            </div>
                            <button className="w-12 h-12 rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 text-white cursor-pointer flex items-center justify-center shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-1 transition-all duration-300 group-last:">
                                <ChevronRightIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ClientPropertyCards;
