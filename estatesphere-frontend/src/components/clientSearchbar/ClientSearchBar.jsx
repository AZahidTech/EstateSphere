import { useState, useRef, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_SEARCH_STATE } from './index';
import CitySelect from './CitySelect';
import LocationInput from './LocationInput';
import PropertyTypeSelect from './PropertyTypeSelect';
import PriceRangeSelect from './PriceRangeSelect';
import AreaRangeSelect from './AreaRangeSelect';
import bgImage from '../../assets/ClientSearchImg.jfif';

const ClientSearchBar = () => {
    const navigate = useNavigate();
    const [purpose, setPurpose] = useState('BUY');
    const [city, setCity] = useState(DEFAULT_SEARCH_STATE.city || 'Lahore');
    const [location, setLocation] = useState(DEFAULT_SEARCH_STATE.location);
    const [category, setCategory] = useState(DEFAULT_SEARCH_STATE.category);
    const [subcategory, setSubcategory] = useState(DEFAULT_SEARCH_STATE.subcategory);
    const [priceRange, setPriceRange] = useState(DEFAULT_SEARCH_STATE.priceRange);
    const [areaRange, setAreaRange] = useState(DEFAULT_SEARCH_STATE.areaRange);
    const [showMore, setShowMore] = useState(false);

    const [activeDropdown, setActiveDropdown] = useState(null);
    const searchBarRef = useRef(null);

    const purposes = ['BUY', 'RENT'];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = () => {
        const queryParams = new URLSearchParams({
            purpose: purpose.toLowerCase(),
            city,
            location,
            category: category.toLowerCase(),
            subcategory: subcategory.toLowerCase(),
            minPrice: priceRange.min,
            maxPrice: priceRange.max,
            minArea: areaRange.min,
            maxArea: areaRange.max,
        });
        navigate(`/listings?${queryParams.toString()}`);
    };

    return (
        <div
            className="w-full relative py-20 px-4 flex flex-col items-center justify-center min-h-[500px] bg-cover bg-center rounded-3xl shadow-2xl"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImage})` }}
            ref={searchBarRef}
        >
            <h1 className="text-white text-3xl md:text-5xl font-semibold mb-10 text-center drop-shadow-xl tracking-tight">
                Search properties for sale in Pakistan
            </h1>

            <div className="flex gap-2 mb-2">
                {purposes.map((p) => (
                    <div key={p} className="relative flex flex-col items-center">
                        <button
                            onClick={() => setPurpose(p)}
                            className={`px-8 py-3 text-[13px] font-bold tracking-wider transition-all duration-300 border border-white/20 rounded-sm min-w-[120px] ${purpose === p
                                ? 'bg-white text-slate-800 border-white'
                                : 'bg-black/30 text-white hover:bg-black/50 backdrop-blur-md'
                                }`}
                        >
                            {p}
                        </button>
                        {purpose === p && (
                            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white absolute -bottom-[8px] z-10 transition-all"></div>
                        )}
                    </div>
                ))}
            </div>

            <div className="w-full max-w-5xl bg-black/40 backdrop-blur-lg p-4 shadow-2xl border border-white/10"> {/* Reduced black transparency */}
                <div className="flex flex-col md:flex-row gap-3">
                    <CitySelect
                        selectedCity={city}
                        setSelectedCity={setCity}
                        isOpen={activeDropdown}
                        setIsOpen={setActiveDropdown}
                    />

                    <LocationInput location={location} setLocation={setLocation} />

                    <button
                        onClick={handleSearch}
                        className="bg-black hover:bg-[#4a3728] text-white font-bold px-10 py-4 text-lg tracking-wider transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px] active:scale-95 border-[3px] border-[#4a3728] shadow-xl shadow-black/70"
                    >
                        FIND
                    </button>
                </div>

                <div className="flex items-center mt-4 text-[11px] font-semibold text-white/90"> {/* Reduced boldness */}
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="flex items-center gap-1.5 hover:text-white transition-colors uppercase tracking-widest py-1"
                    >
                        <HiChevronDown className={`text-sm transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
                        More Options
                    </button>
                </div>

                {showMore && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10 animate-slide-down">
                        <PropertyTypeSelect
                            category={category}
                            setCategory={setCategory}
                            subcategory={subcategory}
                            setSubcategory={setSubcategory}
                            isOpen={activeDropdown}
                            setIsOpen={setActiveDropdown}
                        />

                        <PriceRangeSelect
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            isOpen={activeDropdown}
                            setIsOpen={setActiveDropdown}
                        />

                        <AreaRangeSelect
                            areaRange={areaRange}
                            setAreaRange={setAreaRange}
                            isOpen={activeDropdown}
                            setIsOpen={setActiveDropdown}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientSearchBar;
