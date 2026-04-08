import React from "react";
import ArrowRightIcon from '../../assets/svg/common/ArrowRightIcon';
import PlayCircleIcon from '../../assets/svg/hero/PlayCircleIcon';
import { trustedSocieties } from "../../data/index.jsx";
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-16 md:px-8 md:py-24 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-gradient-radial from-indigo-600/8 to-transparent rounded-full animate-float"></div>
      <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-purple-600/6 to-transparent rounded-full animate-float-reverse"></div>

      <div className="relative z-10 max-w-6xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-600/20 rounded-full animate-slide-down">
          <span className="text-base animate-sparkle">✨</span>
          <span className="text-xs font-semibold tracking-wider bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            INTRODUCING VERSION 2.0
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-slate-900 leading-tight animate-fade-up">
          The Future of{" "}
          <span className="relative inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 bg-clip-text text-transparent">
            Society Management
            <span className="absolute bottom-[-8px] left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-30"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up-delay-1">
          Streamline operations, automate billing, and enhance community living
          with our all-in-one real estate management platform designed for the
          modern era.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up-delay-2">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-[3] transition-transform duration-500"></div>
          </button>

          <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl border-2 border-slate-200 hover:border-indigo-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            <PlayCircleIcon className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Trust Badge */}
        <div className="animate-fade-up-delay-3">
          <p className="text-xs font-semibold tracking-widest text-slate-400 mb-6">
            TRUSTED BY 500+ LUXURY SOCIETIES WORLDWIDE
          </p>
          <div className="flex flex-wrap gap-6 md:gap-10 justify-center items-center">
            {trustedSocieties.map((company, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-all duration-300 hover:-translate-y-1 px-4 py-2 rounded-lg hover:bg-indigo-600/5"
              >
                {company.icon}
                <span className="text-sm font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
