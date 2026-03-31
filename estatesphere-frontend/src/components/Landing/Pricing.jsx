import React, { useState } from 'react';
import CheckCircleIcon from '../../assets/svg/common/CheckCircleIcon';
import { plans } from '../../data/index.jsx'

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);



    return (
        <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-up-fast">
                    <span className="inline-block px-5 py-2 mb-6 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-600/20 rounded-full text-xs font-semibold tracking-wider text-indigo-600">
                        PRICING PLANS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Flexible plans for every scale
                    </h2>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className={`text-sm font-semibold transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
                            Yearly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative w-16 h-8 rounded-full transition-all duration-300 ${isYearly ? 'bg-indigo-600' : 'bg-slate-300'
                                }`}
                        >
                            <div
                                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-0'
                                    }`}
                            ></div>
                        </button>
                        <span className={`text-sm font-semibold transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
                            Yearly
                            <span className="ml-2 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                                Save 20%
                            </span>
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-3xl border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-up-fast ${plan.popular
                                ? 'border-indigo-600 shadow-xl shadow-indigo-600/20'
                                : 'border-slate-200 hover:border-indigo-600/50'
                                }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="p-8">
                                {/* Plan Header */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                    <p className="text-slate-600 text-sm">{plan.description}</p>
                                </div>

                                {/* Price */}
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-extrabold text-slate-900">
                                            ${isYearly ? plan.price.yearly : plan.price.monthly}
                                        </span>
                                        <span className="text-slate-500 text-sm">
                                            /{isYearly ? 'year' : 'month'}
                                        </span>
                                    </div>
                                    {isYearly && plan.price.monthly > 0 && (
                                        <p className="text-sm text-emerald-600 font-semibold mt-2">
                                            Save ${(plan.price.monthly * 12 - plan.price.yearly)} per year
                                        </p>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-0.5'
                                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200 border-2 border-slate-200 hover:border-indigo-600'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="text-center text-sm text-slate-600 animate-fade-up-fast" style={{ animationDelay: '0.3s' }}>
                    <p>
                        Prices exclude taxes. Need a custom solution for 100+ units?{' '}
                        <a href="#" className="text-indigo-600 font-semibold hover:underline">
                            Get in touch
                        </a>
                    </p>
                </div>
            </div>


        </section>
    );
}
