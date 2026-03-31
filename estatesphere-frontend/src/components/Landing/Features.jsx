import React from 'react';
import { features } from '../../data/index.jsx';

export default function Features() {
    return (
        <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-600/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-up-fast">
                    <span className="inline-block px-5 py-2 mb-6 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-600/20 rounded-full text-xs font-semibold tracking-wider text-indigo-600">
                        FEATURES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Everything you need to manage your estate
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Powerful tools and features designed for residents, owners, and management teams to work together seamlessly.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden animate-fade-up-fast"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Top Border Gradient (appears on hover) */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Icon */}
                            <div className={`relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-${feature.color}-600/5 to-${feature.color}-600/10 rounded-2xl mb-6 text-${feature.color}-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-${feature.color}-600 transition-colors duration-300`}>
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center p-12 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-2xl border border-indigo-600/10 animate-fade-up-fast" style={{ animationDelay: '0.6s' }}>
                    <p className="text-lg font-semibold text-slate-900 mb-2">
                        Designed for modern communities
                    </p>
                    <p className="text-slate-600">
                        We help <strong className="text-indigo-600 font-bold">1,000+ buildings</strong> worldwide
                    </p>
                </div>
            </div>
        </section>
    );
}
