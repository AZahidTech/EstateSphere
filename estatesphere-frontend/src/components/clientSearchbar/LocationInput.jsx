
const LocationInput = ({ location, setLocation }) => {
    return (
        <div className="relative flex-[2.5] min-w-[250px]">
            <div className="relative h-[58px] bg-white px-4 py-2 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">LOCATION</span>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Search Location or Area..."
                    className="w-full bg-transparent outline-none text-base font-semibold text-slate-800 placeholder:text-slate-300 placeholder:font-normal"
                />
            </div>
        </div>
    );
};

export default LocationInput;
