import React from "react";
import { Link } from "react-router-dom";
import successIcon from "../../assets/svg/successState/success.svg";

const SuccessStateDetails = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-10 animate-in zoom-in-95 duration-700">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 ring-8 ring-green-50 shadow-xl">
                <img src={successIcon} alt="Success" className="w-12 h-12 text-green-600" />
            </div>

            <h2 className="text-4xl font-black text-[#1e2535] mb-4">Success!</h2>
            <p className="text-[#7b8399] text-lg font-medium max-w-sm leading-relaxed">
                Your property has been successfully listed and is now visible to clients.
            </p>

            <div className="mt-12 w-full max-w-sm bg-gray-50/50 border border-gray-100 rounded-2xl p-4 flex items-center gap-4 group hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&q=80&w=200"
                        alt="Property"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
                <div className="flex-1 text-left">
                    <h4 className="font-bold text-[#1e2535] text-sm">The Grand Horizon Estates</h4>
                    <div className="flex items-center gap-1 text-[11px] text-[#7b8399] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        Beverly Hills, California
                    </div>
                </div>
                <div className="px-2 py-1 bg-green-50 text-green-600 rounded-md text-[9px] font-black uppercase tracking-widest border border-green-100">Live</div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link to="/AddPropertyReview" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/20 active:scale-95 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.43 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    View Listing
                </Link>
                <Link to="/SuperAdmin" className="bg-white border border-gray-200 text-[#1e2535] px-10 py-4 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm active:scale-95 text-center flex items-center justify-center">
                    Back to Dashboard
                </Link>
            </div>

            <p className="mt-10 text-[11px] font-bold text-[#7b8399] uppercase tracking-widest">
                Need to make a change? <Link to="/AddPropertyBasic" className="text-blue-600 hover:underline underline-offset-4 decoration-2">Edit Listing</Link>
            </p>
        </div>
    );
};

export default SuccessStateDetails;
