import React from "react";
import { FaMapMarkerAlt, FaCity, FaMap, FaMailBulk } from "react-icons/fa";

const Step2 = ({ formData, updateData, nextStep, prevStep, selectedRole, user }) => {
  const isSocietyOwner = selectedRole === "SocietyOwner";

  const handleChange = (e) => {
    updateData({ [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Location Information</h3>
        <p className="text-gray-500">Tell us where your property is situated.</p>
      </div>

      {isSocietyOwner && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-amber-800">Society Owner Restriction</p>
            <p className="text-xs text-amber-700">As a Society Owner, you are restricted to listing properties within your own registered society.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleNext} className="space-y-6">
        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">Street Address *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="text-gray-400" />
            </div>
            <input
              id="address"
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              disabled={isSocietyOwner}
              placeholder={isSocietyOwner ? "Restricted to your society's address" : "e.g. 123 Main Street, Apt 4B"}
              className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${isSocietyOwner ? 'bg-gray-100 cursor-not-allowed text-gray-500' : 'bg-gray-50 hover:bg-white'}`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCity className="text-gray-400" />
                </div>
                <input
                id="city"
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                disabled={isSocietyOwner}
                placeholder="City name"
                className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${isSocietyOwner ? 'bg-gray-100 cursor-not-allowed text-gray-500' : 'bg-gray-50 hover:bg-white'}`}
                />
            </div>
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">State / Province *</label>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMap className="text-gray-400" />
                </div>
                <input
                id="state"
                type="text"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                disabled={isSocietyOwner}
                placeholder="State or region"
                className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${isSocietyOwner ? 'bg-gray-100 cursor-not-allowed text-gray-500' : 'bg-gray-50 hover:bg-white'}`}
                />
            </div>
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">Zip / Postal Code *</label>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMailBulk className="text-gray-400" />
                </div>
                <input
                id="zipCode"
                type="text"
                name="zipCode"
                required
                value={formData.zipCode}
                onChange={handleChange}
                disabled={isSocietyOwner}
                placeholder="Postalcode"
                className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${isSocietyOwner ? 'bg-gray-100 cursor-not-allowed text-gray-500' : 'bg-gray-50 hover:bg-white'}`}
                />
            </div>
          </div>
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
            type="submit"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
          >
            Next Step
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
