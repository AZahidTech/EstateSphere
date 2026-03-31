import React from 'react';
import BuildingLogoIcon from '../../assets/svg/common/BuildingLogoIcon';
import SignupBg from '../../assets/Signup/Signup.jpg';

export default function SignupHero() {
    return (
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-blue-900">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={SignupBg}
                    alt="Modern building"
                    className="w-full h-full object-cover"
                />
                {/* Overlays for readability and style */}
                <div className="absolute inset-0 bg-blue-600/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full px-16 py-12 text-white">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <BuildingLogoIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold">EstateSphere</span>
                </div>

                {/* Main Text */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-6 leading-tight">
                        Join the<br />
                        community of<br />
                        500+ societies.
                    </h1>
                    <p className="text-blue-100 text-lg mb-8 max-w-md">
                        The all-in-one platform for modern real estate management. Seamlessly manage residents, accounts, and operations in one place.
                    </p>

                    {/* Avatars */}
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-500 bg-gray-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-medium">Join 2,000+ professionals today</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-xs text-blue-200">
                    &copy; 2024 EstateSphere Inc. All rights reserved.
                </div>
            </div>
        </div>
    );
}
