import React from "react";
import { FaBed, FaBath, FaCar, FaCalendarAlt, FaCouch } from "react-icons/fa";

const Step3 = ({ formData, updateData, nextStep, prevStep }) => {
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
        <h3 className="text-xl font-bold text-gray-800 mb-2">Property Features</h3>
        <p className="text-gray-500">Provide the specific details and amenities of your property.</p>
      </div>

      <form onSubmit={handleNext} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label htmlFor="bedrooms" className="block text-sm font-semibold text-gray-700 mb-2">Bedrooms *</label>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBed className="text-gray-400" />
                </div>
                <input
                id="bedrooms"
                type="number"
                name="bedrooms"
                required
                min="0"
                value={formData.bedrooms}
                onChange={handleChange}
                placeholder="Number of bedrooms"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white"
                />
            </div>
          </div>

          <div>
             <label htmlFor="bathrooms" className="block text-sm font-semibold text-gray-700 mb-2">Bathrooms *</label>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBath className="text-gray-400" />
                </div>
                <input
                id="bathrooms"
                type="number"
                name="bathrooms"
                required
                min="0"
                step="0.5"
                value={formData.bathrooms}
                onChange={handleChange}
                placeholder="Number of bathrooms"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white"
                />
            </div>
          </div>

          <div>
             <label htmlFor="parkingSpaces" className="block text-sm font-semibold text-gray-700 mb-2">Parking Spaces *</label>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCar className="text-gray-400" />
                </div>
                <input
                id="parkingSpaces"
                type="number"
                name="parkingSpaces"
                required
                min="0"
                value={formData.parkingSpaces}
                onChange={handleChange}
                placeholder="Parking spaces"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white"
                />
            </div>
          </div>

          <div>
             <label htmlFor="yearBuilt" className="block text-sm font-semibold text-gray-700 mb-2">Year Built</label>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400" />
                </div>
                <input
                id="yearBuilt"
                type="number"
                name="yearBuilt"
                min="1800"
                max={new Date().getFullYear()}
                value={formData.yearBuilt}
                onChange={handleChange}
                placeholder="e.g. 2020"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white"
                />
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
             <label htmlFor="furnishingStatus" className="block text-sm font-semibold text-gray-700 mb-2">Furnishing Status *</label>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCouch className="text-gray-400" />
                </div>
                <select
                id="furnishingStatus"
                name="furnishingStatus"
                required
                value={formData.furnishingStatus}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white appearance-none"
                >
                <option value="Furnished">Furnished</option>
                <option value="Semi-Furnished">Semi-Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
                </select>
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

export default Step3;
