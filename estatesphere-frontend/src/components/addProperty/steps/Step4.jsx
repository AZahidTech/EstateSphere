import React, { useState } from "react";
import { FaCloudUploadAlt, FaTrashAlt, FaImage } from "react-icons/fa";

const Step4 = ({ formData, updateData, nextStep, prevStep }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const newImages = Array.from(files).map((file) => ({
      file,
      url: URL.createObjectURL(file), // Generate local preview URL
    }));
    updateData({ images: [...formData.images, ...newImages] });
  };

  const removeImage = (index) => {
    const newImages = [...formData.images];
    URL.revokeObjectURL(newImages[index].url); // Clean up memory
    newImages.splice(index, 1);
    updateData({ images: newImages });
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Upload Images</h3>
        <p className="text-gray-500">Add high-quality photos of your property. First image will be the cover.</p>
      </div>

      <form onSubmit={handleNext} className="space-y-6">
        <div 
            className={`relative flex flex-col items-center justify-center w-full min-h-[250px] p-6 border-2 border-dashed rounded-2xl transition-all duration-300 ease-in-out ${dragActive ? 'border-blue-500 bg-blue-50/50' : 'border-gray-300 hover:bg-gray-50'}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
          <input 
            id="images-upload"
            name="images"
            type="file" 
            multiple 
            accept="image/*" 
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shadow-sm">
                 <FaCloudUploadAlt className="w-8 h-8" />
            </div>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
        </div>

        {formData.images && formData.images.length > 0 && (
          <div className="mt-8">
             <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                 <FaImage className="text-gray-400"/> Selected Images ({formData.images.length})
             </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {formData.images.map((image, idx) => (
                <div key={idx} className="relative group rounded-xl overflow-hidden shadow-sm border border-gray-200 aspect-square">
                  <img src={image.url} alt={`preview-${idx}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); removeImage(idx); }}
                      className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                  {idx === 0 && (
                      <span className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-md shadow-sm">COVER</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between pt-6 border-t border-gray-100 mt-8">
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
            Review Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step4;
