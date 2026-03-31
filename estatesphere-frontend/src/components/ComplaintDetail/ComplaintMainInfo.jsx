import React from "react";
import { complaintMainInfoSteps } from "../../data/index.jsx";

const ComplaintMainInfo = () => {
    const steps = complaintMainInfoSteps;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            {/* Progress Bar */}
            <div className="p-8 border-b border-gray-50 bg-gray-50/30">
                <div className="relative flex justify-between">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 -z-0"></div>
                    <div className="absolute top-1/2 left-0 w-1/3 h-0.5 bg-blue-500 -translate-y-1/2 -z-0 transition-all duration-500"></div>
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-colors shadow-sm ${step.done ? "bg-blue-500 text-white" : step.active ? "bg-blue-600 text-white border-4 border-blue-100 ring-2 ring-blue-500" : "bg-white text-gray-400 border border-gray-300"}`}>
                                {step.done ? "✓" : idx + 1}
                            </div>
                            <span className={`text-[10.5px] font-bold uppercase tracking-wide ${step.active || step.done ? "text-gray-900" : "text-gray-400"}`}>{step.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-xl font-bold text-[#1e2535]">Complaint Information</h2>
                    <span className="text-[#7b8399] text-[11px] font-medium uppercase tracking-wider">Submitted Oct 24, 2023 at 10:45 AM</span>
                </div>

                <div className="space-y-6">
                    <div>
                        <p className="text-[#7b8399] text-[11px] font-bold uppercase tracking-wider mb-2">Issue Category</p>
                        <p className="text-gray-900 font-semibold text-sm">Plumbing & Water Supply</p>
                    </div>

                    <div>
                        <p className="text-[#7b8399] text-[11px] font-bold uppercase tracking-wider mb-2">Title</p>
                        <p className="text-gray-900 font-bold text-lg">Major water leakage in the kitchen ceiling</p>
                    </div>

                    <div>
                        <p className="text-[#7b8399] text-[11px] font-bold uppercase tracking-wider mb-2">Description</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Since this morning, there's a significant water leak coming from the ceiling directly above the kitchen island.
                            It appears to be getting worse and the paint is starting to bubble. It seems like it might be coming from
                            the unit directly above (Unit 5B). I have placed a bucket for now, but immediate attention is required
                            to prevent electrical damage.
                        </p>
                    </div>

                    <div>
                        <p className="text-[#7b8399] text-[11px] font-bold uppercase tracking-wider mb-3">Evidence & Attachments</p>
                        <div className="flex flex-wrap gap-4">
                            <div className="w-32 h-32 rounded-xl border border-gray-200 bg-gray-100 overflow-hidden cursor-pointer hover:border-blue-400 transition-colors">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=200)' }}></div>
                            </div>
                            <div className="w-32 h-32 rounded-xl border border-gray-200 bg-gray-100 overflow-hidden cursor-pointer hover:border-blue-400 transition-colors">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1595844730298-b960ff98fee0?auto=format&fit=crop&q=80&w=200)' }}></div>
                            </div>
                            <div className="w-32 h-32 rounded-xl border border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:bg-gray-100 transition-colors">
                                <div className="text-blue-500 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">REPORT.PDF</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplaintMainInfo;
