import React, { useState } from "react";
import { Link } from "react-router-dom";
import SuccessStateDetails from "../components/AddProperty/SuccessStateDetails";

const AddPropertySuccess = () => {
    const [showToast, setShowToast] = useState(true);

    return (
        <div className="min-h-screen bg-[#f5f7fb]/80 backdrop-blur-sm flex items-center justify-center p-6 font-sans">
            {/* Success Toast / Badge in Corner */}
            {showToast && (
                <div className="fixed top-8 right-8 bg-white border border-green-100 rounded-2xl p-4 flex items-center gap-4 shadow-2xl animate-in slide-in-from-right-8 duration-500 z-50">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100 font-bold">✓</div>
                    <div>
                        <p className="text-sm font-bold text-[#1e2535]">Property Published Successfully</p>
                        <p className="text-[#a0aec0] text-[11px] font-medium">Live on marketplace</p>
                    </div>
                    <button onClick={() => setShowToast(false)} className="ml-4 text-gray-300 hover:text-gray-500">✕</button>
                </div>
            )}

            <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] border border-white p-12 overflow-hidden animate-in zoom-in-95 duration-700">
                {/* Overriding SuccessStateDetails internal buttons or adjusting them if possible. 
            Since SuccessStateDetails is a separate component, I should probably update it too. */}
                <SuccessStateDetails />
            </div>
        </div>
    );
};

export default AddPropertySuccess;
