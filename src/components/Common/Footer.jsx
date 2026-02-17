import React, { useState } from 'react';
import TwitterIcon from '../../assets/svg/Footer/TwitterIcon';
import LinkedInIcon from '../../assets/svg/Footer/LinkedInIcon';
import FacebookIcon from '../../assets/svg/Footer/FacebookIcon';
import { Link } from 'react-router-dom';
import Logo_Without_Name from '../../assets/Logo/Logo_Without_Name.png';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribing:', email);
        setEmail('');
    };

    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-10 h-10 flex items-center justify-center transition-all duration-300">
                                <img src={Logo_Without_Name} alt="Logo" className="w-10 h-10" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                EstateSphere
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Empowering real estate professionals with cutting-edge technology to scale their business and simplify property management.
                        </p>

                        {/* Newsletter */}
                        <div>
                            <p className="text-sm font-semibold text-white mb-3">
                                Stay updated with our latest tech
                            </p>
                            <form onSubmit={handleSubscribe} className="flex gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    Integrations
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    Changelog
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    Press
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-slate-500">
                            © 2024 EstateSphere Inc. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6 text-sm">
                            <Link to="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
                                Terms of Service
                            </Link>
                            <Link to="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
                                Cookie Policy
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white transition-all duration-300"
                            >
                                <TwitterIcon className="w-4 h-4" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white transition-all duration-300"
                            >
                                <LinkedInIcon className="w-4 h-4" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white transition-all duration-300"
                            >
                                <FacebookIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
