import React from "react";
import { FaCheckCircle, FaEdit } from "react-icons/fa";

const Step5 = ({ formData, prevStep, submitForm }) => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8 text-center sm:text-left">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Review & Submit</h3>
        <p className="text-gray-500">Please review all the information before final submission.</p>
      </div>

      <div className="space-y-6">
        {/* Basic Details Summary */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group transition-all duration-300 hover:shadow-md hover:border-blue-100">
           <button onClick={() => prevStep(1)} className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-50 p-2 rounded-full hidden sm:block">
               <FaEdit />
           </button>
          <h4 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Basic Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <div><span className="block text-xs text-gray-500 font-semibold mb-1">TITLE</span><p className="font-medium text-gray-800">{formData.title || "N/A"}</p></div>
            <div><span className="block text-xs text-gray-500 font-semibold mb-1">TYPE</span><p className="font-medium text-gray-800">{formData.propertyType}</p></div>
            <div><span className="block text-xs text-gray-500 font-semibold mb-1">PRICE</span><p className="font-medium text-green-600">${formData.price || "0"}</p></div>
            <div><span className="block text-xs text-gray-500 font-semibold mb-1">AREA</span><p className="font-medium text-gray-800">{formData.area || "0"} sq ft</p></div>
            <div className="sm:col-span-2"><span className="block text-xs text-gray-500 font-semibold mb-1">DESCRIPTION</span><p className="text-sm text-gray-600">{formData.description || "No description provided."}</p></div>
          </div>
        </div>

        {/* Location Summary */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group transition-all duration-300 hover:shadow-md hover:border-blue-100">
           <button onClick={() => prevStep()} className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-50 p-2 rounded-full hidden sm:block">
               <FaEdit />
           </button>
          <h4 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Location</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <div className="sm:col-span-2"><span className="block text-xs text-gray-500 font-semibold mb-1">ADDRESS</span><p className="font-medium text-gray-800">{formData.address || "N/A"}</p></div>
            <div><span className="block text-xs text-gray-500 font-semibold mb-1">CITY</span><p className="font-medium text-gray-800">{formData.city || "N/A"}</p></div>
            <div><span className="block text-xs text-gray-500 font-semibold mb-1">STATE & ZIP</span><p className="font-medium text-gray-800">{formData.state || "N/A"} {formData.zipCode}</p></div>
          </div>
        </div>

        {/* Features Summary */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group transition-all duration-300 hover:shadow-md hover:border-blue-100">
          <h4 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Property Features</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-4">
            <div><span className="block text-xs text-gray-500 font-semibold mb-1">BEDROOMS</span><p className="font-medium text-gray-800">{formData.bedrooms || "0"}</p></div>
            <div><span className="block text-xs text-gray-500 font-semibold mb-1">BATHROOMS</span><p className="font-medium text-gray-800">{formData.bathrooms || "0"}</p></div>
            <div><span className="block text-xs text-gray-500 font-semibold mb-1">PARKING</span><p className="font-medium text-gray-800">{formData.parkingSpaces || "0"}</p></div>
            <div><span className="block text-xs text-gray-500 font-semibold mb-1">FURNISHING</span><p className="font-medium text-gray-800">{formData.furnishingStatus}</p></div>
            <div><span className="block text-xs text-gray-500 font-semibold mb-1">YEAR BUILT</span><p className="font-medium text-gray-800">{formData.yearBuilt || "N/A"}</p></div>
          </div>
        </div>

        {/* Images Summary */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group transition-all duration-300 hover:shadow-md hover:border-blue-100">
          <h4 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Images ({formData.images?.length || 0})</h4>
          {formData.images && formData.images.length > 0 ? (
              <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                  {formData.images.map((img, idx) => (
                      <div key={idx} className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-gray-200 shadow-sm relative">
                           {idx === 0 && <div className="absolute top-0 left-0 bg-blue-600 text-white text-[8px] px-1 py-0.5 rounded-br font-bold">COVER</div>}
                           <img src={img.url} alt="property thumbnail" className="w-full h-full object-cover" />
                      </div>
                  ))}
              </div>
          ) : (
              <p className="text-sm text-gray-500 italic">No images uploaded.</p>
          )}
        </div>

        <div className="flex justify-between pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2"
          >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Back
          </button>
          
          <button
            type="button"
            onClick={submitForm}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.23)] hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
          >
            Submit Listing
            <FaCheckCircle className="w-5 h-5"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
