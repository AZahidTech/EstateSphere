import React, { useState } from "react";
import { getRoleColor } from "../../utils/features/functions";
import { roleSelectionCards } from "../../data/index.jsx";

const RoleSelectionModal = ({ roles, onSelect }) => {
    const [selected, setSelected] = useState("");

    if (!roles || roles.length === 0) return null;

    const userRoleChoices = roleSelectionCards.filter(role => 
        roles.includes(role.value) || (role.value === "SocietyOwner" && roles.includes("Owner"))
    );

    const handleContinue = () => {
        if (selected) {
            onSelect(selected);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="px-8 pt-8 pb-6 bg-linear-to-br from-indigo-600/5 to-purple-600/5 border-b border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                        <div className="p-2 bg-indigo-600 rounded-lg text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        Choose Your Profile
                    </h2>
                    <p className="text-slate-500">
                        You have multiple roles associated with this account. Which dashboard would you like to access?
                    </p>
                </div>

                {/* Role List */}
                <div className="p-8 space-y-4">
                    {userRoleChoices.map((role) => {
                        const isSelected = selected === role.value;
                        const roleColor = getRoleColor(role.value);
                        
                        return (
                            <button
                                key={role.value}
                                onClick={() => setSelected(role.value)}
                                className={`${isSelected ? "role-choice-card-selected" : ""} role-choice-card group`}
                            >
                                <div className={`p-3 rounded-xl transition-all duration-200 ${isSelected ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"}`}>
                                    {role.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-900 mb-0.5">{role.label}</h3>
                                    <p className="text-[13px] text-slate-500 line-clamp-1">{role.desc}</p>
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 
                                    ${isSelected ? "border-indigo-600 bg-indigo-600" : "border-slate-200 bg-white"}`}>
                                    {isSelected && (
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex gap-4">
                    <button 
                        onClick={handleContinue}
                        disabled={!selected}
                        className="flex-1 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/20 hover:shadow-2xl hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                        Access Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoleSelectionModal;
