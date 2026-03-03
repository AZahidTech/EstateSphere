import React from "react";
import { Link } from "react-router-dom";
import closeIcon from "../assets/svg/BasicInfo/close.svg";
import rocketIcon from "../assets/svg/ReviewSubmit/rocket.svg";
import ProgressSteps from "../components/AddProperty/ProgressSteps";
import ReviewSubmitDetails from "../components/AddProperty/ReviewSubmitDetails";

const AddPropertyReview = () => {
    return (
        <div className="min-h-screen bg-[#f5f7fb]/80 backdrop-blur-sm flex items-center justify-center p-6 font-sans">
            <div className="bg-white w-full max-w-4xl rounded-[32px] shadow-2xl border border-white overflow-hidden animate-in slide-in-from-right-10 duration-500">
                <div className="px-10 py-8 flex items-center justify-between border-b border-gray-50 bg-gray-50/50">
                    <div>
                        <h1 className="text-2xl font-bold text-[#1e2535]">Add New Property</h1>
                        <p className="text-[#7b8399] text-sm font-medium mt-1">Final Step : Review your property listing.</p>
                    </div>
                    <Link to="/SuperAdmin" className="p-2 hover:bg-gray-100 rounded-full transition-colors order-last">
                        <img src={closeIcon} alt="Close" className="w-6 h-6 text-gray-400" />
                    </Link>
                </div>

                <div className="p-10">
                    <ProgressSteps currentStep={4} />

                    <ReviewSubmitDetails />

                    <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-100">
                        <Link to="/AddPropertyPricing" className="flex items-center gap-2 px-8 py-3 bg-gray-50 text-gray-500 font-bold text-sm hover:bg-gray-100 rounded-xl transition-all border border-gray-100 text-center">
                            ← Back
                        </Link>
                        <div className="flex items-center gap-6">
                            <Link to="/SuperAdmin" className="text-[13px] font-bold text-[#7b8399] hover:text-[#1e2535] transition-colors uppercase tracking-wider font-sans">Save as Draft</Link>
                            <Link to="/AddPropertySuccess" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-95 group text-center">
                                Publish Property
                                <img src={rocketIcon} alt="Rocket" className="w-4 h-4 brightness-0 invert group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform inline-block ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPropertyReview;
