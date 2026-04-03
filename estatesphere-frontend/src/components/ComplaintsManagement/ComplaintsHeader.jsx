import SearchIcon from "../../assets/svg/common/SearchIcon";

const ComplaintsHeader = () => {
    return (
        <div className="dash-header-section">
            <div>
                <h1 className="dash-title">Community Resolution</h1>
                <p className="dash-subtitle">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    Manage & Resolve Complaints
                </p>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search ticket ID or keyword..."
                        className="search-bar-premium pl-12 w-80"
                    />
                    <div className="absolute left-4 top-3.5 text-slate-300 group-focus-within:text-indigo-500 transition-colors">
                        <SearchIcon className="w-5 h-5" />
                    </div>
                </div>
                <button className="group btn-gradient-premium">
                    <span className="text-xl group-hover:rotate-90 transition-transform duration-300">+</span>
                    New Complaint
                </button>
            </div>
        </div>
    );
};

export default ComplaintsHeader;
