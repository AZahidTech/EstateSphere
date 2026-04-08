import { HiChevronDown } from 'react-icons/hi';
import { AREA_RANGES } from './index';

const AreaRangeSelect = ({ areaRange, setAreaRange, isOpen, setIsOpen }) => {
    return (
        <div className="relative flex-1">
            <button
                type="button"
                onClick={() => setIsOpen(isOpen === 'area' ? null : 'area')}
                className="w-full flex flex-col items-start px-4 py-2 bg-white group h-[58px] justify-center text-left"
            >
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">AREA (MARLA)</span>
                <div className="w-full flex items-center justify-between gap-1 overflow-hidden">
                    <span className="text-base font-semibold text-slate-800 truncate">
                        {areaRange.min || areaRange.max ? `${areaRange.min || 0} - ${areaRange.max || 'Any'}` : 'Any Area'}
                    </span>
                    <HiChevronDown className={`text-slate-500 transition-transform duration-200 text-xl ${isOpen === 'area' ? 'rotate-180' : ''}`} />
                </div>
            </button>

            {isOpen === 'area' && (
                <div className="absolute z-[100] w-80 mt-1 bg-white shadow-2xl p-4 animate-dropdown font-sans left-0 md:left-auto md:right-0">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">MIN AREA</p>
                            <div className="space-y-0.5 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                                {AREA_RANGES.min.map((a) => (
                                    <button
                                        key={a.value}
                                        type="button"
                                        onClick={() => setAreaRange({ ...areaRange, min: a.label })}
                                        className={`w-full text-left px-3 py-2 text-xs transition-colors ${areaRange.min === a.label ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        {a.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">MAX AREA</p>
                            <div className="space-y-0.5 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                                {AREA_RANGES.max.map((a) => (
                                    <button
                                        key={a.value}
                                        type="button"
                                        onClick={() => setAreaRange({ ...areaRange, max: a.label })}
                                        className={`w-full text-left px-3 py-2 text-xs transition-colors ${areaRange.max === a.label ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        {a.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AreaRangeSelect;
