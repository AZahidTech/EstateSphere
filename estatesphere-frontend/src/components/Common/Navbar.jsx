import React, { useState } from 'react';
import ChevronDownIcon from '../../assets/svg/common/ChevronDownIcon';
import MenuIcon from '../../assets/svg/navbar/MenuIcon';
import XIcon from '../../assets/svg/navbar/XIcon';
import { Link } from 'react-router-dom';
import Logo_Without_Name from "../../assets/logo/Logo_Without_Name.png";

import { navbarLinks } from '../../data/index.jsx';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
            {navbarLinks.map((link, idx) => (
              <div key={idx} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="flex items-center gap-1 text-slate-700 hover:text-indigo-600 font-medium transition-colors py-2"
                    >
                      {link.label}
                      <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>

                    {openDropdown === link.label && (
                      <div
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                        className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 animate-dropdown"
                      >
                        {link.dropdown.map((item, i) => (
                          <Link
                            key={i}
                            to={item.route}
                            className="block px-4 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.route} className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
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
            {navbarLinks.map((link, idx) => (
              <div key={idx}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <p className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest">{link.label}</p>
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.route}
                        className="block px-8 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link to={link.route} className="block px-4 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
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
