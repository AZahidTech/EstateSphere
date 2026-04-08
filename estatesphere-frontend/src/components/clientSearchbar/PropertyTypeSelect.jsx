import { HiChevronDown } from 'react-icons/hi';
import { PROPERTY_TYPES } from './index';

const PropertyTypeSelect = ({ category, setCategory, subcategory, setSubcategory, isOpen, setIsOpen }) => {
    return (
        <div className="relative flex-1">
            <button
                type="button"
                onClick={() => setIsOpen(isOpen === 'type' ? null : 'type')}
                className="w-full flex flex-col items-start px-4 py-2 bg-white group h-[58px] justify-center text-left"
            >
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">PROPERTY TYPE</span>
                <div className="w-full flex items-center justify-between gap-1 overflow-hidden">
                    <span className="text-base font-semibold text-slate-800 truncate">
                        {subcategory || category}
                    </span>
                    <HiChevronDown className={`text-slate-500 transition-transform duration-200 text-xl ${isOpen === 'type' ? 'rotate-180' : ''}`} />
                </div>
            </button>

            {isOpen === 'type' && (
                <div className="absolute z-[100] w-72 mt-1 bg-white shadow-2xl py-2 animate-dropdown font-sans left-0 overflow-hidden">
                    <div className="flex border-b border-slate-50 mb-2 px-2">
                        {Object.keys(PROPERTY_TYPES).map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => {
                                    setCategory(cat);
                                    setSubcategory('');
                                }}
                                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider transition-all ${category === cat ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="max-h-60 overflow-y-auto px-2 custom-scrollbar">
                        {PROPERTY_TYPES[category].map((sub) => (
                            <button
                                key={sub}
                                type="button"
                                onClick={() => {
                                    setSubcategory(sub);
                                    setIsOpen(null);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${subcategory === sub ? 'bg-indigo-50 text-indigo-600 font-bold border-l-4 border-indigo-600' : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                            >
                                {sub}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyTypeSelect;
