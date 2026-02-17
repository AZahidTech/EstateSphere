import React, { useState } from 'react';
import ChevronDownIcon from '../../assets/svg/common/ChevronDownIcon';
import MenuIcon from '../../assets/svg/Navbar/MenuIcon';
import XIcon from '../../assets/svg/Navbar/XIcon';
import { Link } from 'react-router-dom';
import Logo_Without_Name from "../../assets/Logo/Logo_Without_Name.png";

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center transition-all duration-300">
              <img src={Logo_Without_Name} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              EstateSphere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="flex items-center gap-1 text-slate-700 hover:text-indigo-600 font-medium transition-colors"
              >
                Products
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductsOpen && (
                <div
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 animate-dropdown"
                >
                  <Link to="#" className="block px-4 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    Property Management
                  </Link>
                  <Link to="#" className="block px-4 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    Billing & Payments
                  </Link>
                  <Link to="#" className="block px-4 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    Community Portal
                  </Link>
                  <Link to="#" className="block px-4 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    Analytics Dashboard
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="flex items-center gap-1 text-slate-700 hover:text-indigo-600 font-medium transition-colors"
              >
                Solutions
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSolutionsOpen && (
                <div
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 animate-dropdown"
                >
                  <Link to="#" className="block px-4 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    For Residents
                  </Link>
                  <Link to="#" className="block px-4 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    For Property Managers
                  </Link>
                  <Link to="#" className="block px-4 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    For Developers
                  </Link>
                  <Link to="#" className="block px-4 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    For Enterprises
                  </Link>
                </div>
              )}
            </div>

            <Link to="#" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link to="#" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/Login"
              className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/Signup"
              className="px-6 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6 text-slate-700" />
            ) : (
              <MenuIcon className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white animate-dropdown">
          <div className="px-4 py-4 space-y-3">
            <Link to="#" className="block px-4 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
              Products
            </Link>
            <Link to="#" className="block px-4 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
              Solutions
            </Link>
            <Link to="#" className="block px-4 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
              Pricing
            </Link>
            <Link to="#" className="block px-4 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
              About
            </Link>
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <Link
                to="/Login"
                className="block px-4 py-2 text-center text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium"
              >
                Log In
              </Link>
              <Link
                to="/Signup"
                className="block px-4 py-2.5 text-center bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}


    </nav>
  );
}
