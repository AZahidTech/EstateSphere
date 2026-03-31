import React from "react";

import { addPropertySteps } from "../../data/index.jsx";

const ProgressSteps = ({ currentStep }) => {
    const steps = addPropertySteps;

    return (
        <div className="flex items-center justify-between w-full max-w-2xl mx-auto mb-10 px-4">
            {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                    <div className="flex flex-col items-center relative z-10">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${currentStep > step.id
                                ? "bg-blue-600 text-white"
                                : currentStep === step.id
                                    ? "bg-blue-600 text-white border-4 border-blue-100 ring-2 ring-blue-600"
                                    : "bg-white text-gray-400 border border-gray-200"
                                }`}
                        >
                            {currentStep > step.id ? "✓" : step.id}
                        </div>
                        <span
                            className={`text-[11px] font-bold uppercase tracking-wider mt-3 ${currentStep >= step.id ? "text-blue-600" : "text-gray-400"
                                }`}
                        >
                            {step.label}
                        </span>
                    </div>
                    {index < steps.length - 1 && (
                        <div className="flex-1 h-0.5 bg-gray-100 mx-2 -mt-7 relative">
                            <div
                                className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-500"
                                style={{
                                    width: currentStep > step.id ? "100%" : currentStep === step.id ? "0%" : "0%",
                                }}
                            ></div>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProgressSteps;
