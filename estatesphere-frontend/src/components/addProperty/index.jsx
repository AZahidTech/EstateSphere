import React, { useState } from "react";
import { useSelector } from "react-redux";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import { FaArrowLeft } from "react-icons/fa";

const AddPropertyController = () => {
  const { selectedRole, user } = useSelector((state) => state.auth);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    propertyType: "Apartment",
    price: "",
    area: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    bedrooms: "",
    bathrooms: "",
    parkingSpaces: "",
    yearBuilt: "",
    furnishingStatus: "Unfurnished",
    images: [],
  });

  const updateData = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  React.useEffect(() => {
    if (selectedRole === "SocietyOwner" && user?.society) {
      setFormData((prev) => ({
        ...prev,
        address: user.society.address || prev.address,
        city: user.society.city || prev.city,
        state: user.society.state || prev.state,
        zipCode: user.society.zipCode || prev.zipCode,
      }));
    }
  }, [selectedRole, user]);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = (step) => {
    if (step && typeof step === "number") {
      setCurrentStep(step);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const submitForm = async () => {
    console.log("Submitting single API request with data:", formData);
    try {
      alert("Property Added Successfully!");
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} updateData={updateData} nextStep={nextStep} selectedRole={selectedRole} user={user} />;
      case 2:
        return <Step2 formData={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} selectedRole={selectedRole} user={user} />;
      case 3:
        return <Step3 formData={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} selectedRole={selectedRole} user={user} />;
      case 4:
        return <Step4 formData={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} selectedRole={selectedRole} user={user} />;
      case 5:
        return <Step5 formData={formData} prevStep={prevStep} submitForm={submitForm} selectedRole={selectedRole} user={user} />;
      default:
        return <Step1 formData={formData} updateData={updateData} nextStep={nextStep} selectedRole={selectedRole} user={user} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-10 text-white">
          <div className="flex items-center justify-between">
            {currentStep > 1 ? (
              <button onClick={prevStep} className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                <FaArrowLeft className="w-5 h-5" />
              </button>
            ) : (
              <div className="w-9" aria-hidden="true"></div>
            )}
            <div className="text-center flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Add New Property</h2>
              <p className="mt-2 text-blue-100 font-medium">Step {currentStep} of {totalSteps}</p>
            </div>
            <div className="w-9" aria-hidden="true"></div>
          </div>

          <div className="mt-8 flex items-center justify-between max-w-2xl mx-auto relative">
            <div className="absolute left-0 top-1/2 -mt-0.5 w-full h-1 bg-blue-400/30 rounded-full z-0"></div>

            <div
              className="absolute left-0 top-1/2 -mt-0.5 h-1 bg-white rounded-full z-0 transition-all duration-500 ease-in-out"
              style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>

            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="relative z-10 flex flex-col items-center group">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${currentStep >= step ? 'bg-white text-blue-700 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] scale-110' : 'bg-blue-800 border-blue-400 text-blue-200'}`}>
                  {step}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between max-w-2xl mx-auto mt-3 px-2 text-xs font-semibold text-blue-100 hidden sm:flex">
            <span className={`text-center w-16 ${currentStep >= 1 ? 'text-white' : ''}`}>Basic Info</span>
            <span className={`text-center w-16 ${currentStep >= 2 ? 'text-white' : ''}`}>Location</span>
            <span className={`text-center w-16 ${currentStep >= 3 ? 'text-white' : ''}`}>Features</span>
            <span className={`text-center w-16 ${currentStep >= 4 ? 'text-white' : ''}`}>Images</span>
            <span className={`text-center w-16 ${currentStep >= 5 ? 'text-white' : ''}`}>Review</span>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default AddPropertyController;
