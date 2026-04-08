import { HiChevronDown } from 'react-icons/hi';
import { PRICE_RANGES } from './index';

const PriceRangeSelect = ({ priceRange, setPriceRange, isOpen, setIsOpen }) => {
    return (
        <div className="relative flex-1">
            <button
                type="button"
                onClick={() => setIsOpen(isOpen === 'price' ? null : 'price')}
                className="w-full flex flex-col items-start px-4 py-2 bg-white group h-[58px] justify-center text-left"
            >
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">PRICE (PKR)</span>
                <div className="w-full flex items-center justify-between gap-1 overflow-hidden">
                    <span className="text-base font-semibold text-slate-800 truncate">
                        {priceRange.min || priceRange.max ? `${priceRange.min || 0} - ${priceRange.max || 'Any'}` : 'Any Price'}
                    </span>
                    <HiChevronDown className={`text-slate-500 transition-transform duration-200 text-xl ${isOpen === 'price' ? 'rotate-180' : ''}`} />
                </div>
            </button>

            {isOpen === 'price' && (
                <div className="absolute z-[100] w-80 mt-1 bg-white shadow-2xl p-4 animate-dropdown font-sans left-0 md:left-auto md:right-0">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">MIN PRICE</p>
                            <div className="space-y-0.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                                {PRICE_RANGES.min.map((p) => (
                                    <button
                                        key={p.value}
                                        type="button"
                                        onClick={() => setPriceRange({ ...priceRange, min: p.label })}
                                        className={`w-full text-left px-3 py-2 text-xs transition-colors ${priceRange.min === p.label ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">MAX PRICE</p>
                            <div className="space-y-0.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                                {PRICE_RANGES.max.map((p) => (
                                    <button
                                        key={p.value}
                                        type="button"
                                        onClick={() => setPriceRange({ ...priceRange, max: p.label })}
                                        className={`w-full text-left px-3 py-2 text-xs transition-colors ${priceRange.max === p.label ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        {p.label}
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

export default PriceRangeSelect;
