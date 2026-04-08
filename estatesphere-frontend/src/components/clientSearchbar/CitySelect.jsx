import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { CITIES } from './index';

const CitySelect = ({ selectedCity, setSelectedCity, isOpen, setIsOpen }) => {
    return (
        <div className="relative flex-1 min-w-[150px]">
            <button
                type="button"
                onClick={() => setIsOpen(isOpen === 'city' ? null : 'city')}
                className="w-full flex flex-col items-start px-4 py-2 bg-white group h-[58px] justify-center"
            >
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">CITY</span>
                <div className="w-full flex items-center justify-between gap-1 overflow-hidden">
                    <span className="text-base font-semibold text-slate-800 truncate">
                        {selectedCity || "Select City"}
                    </span>
                    <HiChevronDown className={`text-slate-500 transition-transform duration-200 text-xl ${isOpen === 'city' ? 'rotate-180' : ''}`} />
                </div>
            </button>

            {isOpen === 'city' && (
                <div className="absolute z-[100] w-full mt-1 bg-white border border-slate-100 shadow-2xl py-2 max-h-60 overflow-y-auto animate-dropdown custom-scrollbar text-left font-sans">
                    {CITIES.map((city) => (
                        <button
                            key={city}
                            type="button"
                            onClick={() => {
                                setSelectedCity(city);
                                setIsOpen(null);
                            }}
                            className={`w-full text-left px-5 py-2.5 text-sm transition-colors duration-150
                                ${selectedCity === city 
                                    ? 'bg-indigo-50 text-indigo-600 font-bold border-l-4 border-indigo-600' 
                                    : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            {city}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CitySelect;
