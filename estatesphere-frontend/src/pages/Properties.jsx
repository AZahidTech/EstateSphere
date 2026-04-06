import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ClientPropertyCards from "../components/clientDashboard/ClientPropertyCards";

const Properties = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Browse Properties</h1>
          <p className="mt-3 text-lg text-slate-600">Discover premium real estate listings across the EstateSphere community.</p>
        </div>
        
        {/* Reuse the Property Card component as a listing view */}
        <div className="grid grid-cols-1 gap-10">
           <ClientPropertyCards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
