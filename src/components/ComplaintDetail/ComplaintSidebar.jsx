import React from "react";

const ComplaintSidebar = () => {
    return (
        <div className="space-y-6">
            {/* Update Status Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-5">Update Status</h3>
                <div className="space-y-4">
                    <div>
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">New Status</label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none">
                            <option>In Progress</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">Update Comment</label>
                        <textarea
                            placeholder="Add details about the progress..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 h-24 resize-none"
                        ></textarea>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="visible" className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-400" />
                        <label htmlFor="visible" className="text-xs text-gray-600 font-medium">Visible to Resident</label>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" />
                        </svg>
                        Update Activity
                    </button>
                </div>
            </div>

            {/* Resident Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-5">Resident Information</h3>
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">SJ</div>
                    <div>
                        <p className="font-bold text-gray-900 text-sm">Sarah Jenkins</p>
                        <p className="text-[#7b8399] text-xs">Unit 4B, Emerald Tower</p>
                    </div>
                </div>
                <div className="space-y-2 text-xs text-gray-600 font-medium">
                    <p className="flex items-center gap-2">
                        <span className="text-gray-400">📞</span> +1 (555) 012-3456
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="text-gray-400">✉️</span> s.jenkins@example.com
                    </p>
                </div>
                <button className="w-full mt-5 text-blue-600 font-bold text-xs hover:underline decoration-2 underline-offset-4">View Resident History</button>
            </div>

            {/* Assigned Staff */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">Assigned Staff</p>
                        <p className="font-bold text-gray-900 text-sm">Maintenance Team A</p>
                        <p className="text-[#7b8399] text-[11px]">Lead: David Miller</p>
                    </div>
                </div>
                <button className="text-blue-500 font-bold text-xs hover:underline decoration-2 underline-offset-4">Reassign</button>
            </div>
        </div>
    );
};

export default ComplaintSidebar;
