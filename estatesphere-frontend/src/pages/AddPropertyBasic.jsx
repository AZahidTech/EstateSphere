import React from "react";
import { Link } from "react-router-dom";
import closeIcon from "../assets/svg/BasicInfo/close.svg";
import ProgressSteps from "../components/AddProperty/ProgressSteps";
import BasicInfoDetails from "../components/AddProperty/BasicInfoDetails";

const AddPropertyBasic = () => {
    return (
        <div className="min-h-screen bg-[#f5f7fb]/80 backdrop-blur-sm flex items-center justify-center p-6 font-sans">
            <div className="bg-white w-full max-w-3xl rounded-[32px] shadow-2xl border border-white overflow-hidden animate-in fade-in zoom-in duration-500">
                {/* Header */}
                <div className="px-10 py-8 flex items-center justify-between border-b border-gray-50 bg-gray-50/50">
                    <div>
                        <h1 className="text-2xl font-bold text-[#1e2535]">Add New Property</h1>
                        <p className="text-[#7b8399] text-sm font-medium mt-1">Fill in the primary details of your listing.</p>
                    </div>
                    <Link to="/SuperAdmin" className="p-2 hover:bg-gray-100 rounded-full transition-colors order-last">
                        <img src={closeIcon} alt="Close" className="w-6 h-6 text-gray-400" />
                    </Link>
                </div>

                <div className="p-10">
                    <ProgressSteps currentStep={1} />

                    <BasicInfoDetails />

                    {/* Footer Actions */}
                    <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-100">
                        <Link to="/SuperAdmin" className="px-8 py-3 text-gray-500 font-bold text-sm hover:bg-gray-50 rounded-xl transition-all">
                            Cancel
                        </Link>
                        <Link to="/AddPropertyMedia" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-95 group text-center">
                            Next Step
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPropertyBasic;
