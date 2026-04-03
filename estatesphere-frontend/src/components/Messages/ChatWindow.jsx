import React from "react";
import { chatMessages } from "../../data/index.jsx";
import VideoCameraIcon from "../../assets/svg/common/VideoCameraIcon";
import PhoneIcon from "../../assets/svg/common/PhoneIcon";
import MoreVerticalIcon from "../../assets/svg/common/MoreVerticalIcon";
import PlusIcon from "../../assets/svg/common/PlusIcon";
import FaceSmileIcon from "../../assets/svg/common/FaceSmileIcon";
import PaperAirplaneIcon from "../../assets/svg/common/PaperAirplaneIcon";

const ChatWindow = () => {
    const messages = chatMessages;

    return (
        <div className="flex-1 flex flex-col bg-slate-50/50">
            {/* Header */}
            <div className="h-24 border-b border-slate-100 flex items-center justify-between px-10 bg-white/80 backdrop-blur-xl sticky top-0 z-10">
                <div className="flex items-center gap-6">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-100 text-lg">SJ</div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-3 border-white rounded-full"></div>
                    </div>
                    <div>
                        <h2 className="text-slate-800 font-bold text-lg tracking-tight">Sarah Jenkins</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="capsule-badge capsule-badge-indigo">Tenant</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Active Now</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all duration-300">
                        <VideoCameraIcon />
                    </button>
                    <button className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all duration-300">
                        <PhoneIcon />
                    </button>
                    <div className="w-px h-8 bg-slate-100 mx-2"></div>
                    <button className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-2xl transition-all duration-300">
                        <MoreVerticalIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
 
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-12 space-y-10 flex flex-col">
                <div className="flex justify-center mb-10 relative">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                    <span className="capsule-badge relative px-6 py-2 shadow-lg !rounded-2xl border-slate-100">TODAY</span>
                </div>

                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.type === 'incoming' ? 'justify-start' : 'justify-end'} group`}>
                        <div className={`max-w-[70%] flex gap-5 ${msg.type === 'outgoing' ? 'flex-row-reverse' : ''}`}>
                            {msg.type === 'incoming' && (
                                <div className={`w-10 h-10 rounded-xl flex-shrink-0 mt-auto shadow-lg flex items-center justify-center text-[10px] font-bold text-white ${msg.color || 'bg-indigo-600'}`}>
                                    {msg.user.charAt(0)}
                                </div>
                            )}
                            <div className="space-y-2">
                                <div className={`px-8 py-5 rounded-[2.5rem] text-[15px] leading-relaxed shadow-xl ${msg.type === 'incoming' ? 'bg-white text-slate-900 rounded-bl-none border border-slate-100 shadow-slate-200/20' : 'bg-linear-to-br from-indigo-600 to-purple-700 text-white rounded-br-none shadow-indigo-600/20'}`}>
                                    {msg.content}
                                </div>
                                <div className={`flex items-center gap-3 mt-1 px-1 ${msg.type === 'outgoing' ? 'justify-end' : ''}`}>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{msg.time}</span>
                                    {msg.status === 'read' && <span className="text-indigo-500 text-[11px] font-bold">✓✓</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex items-center gap-5 mt-4">
                    <p className="text-indigo-500 text-[11px] font-bold tracking-widest uppercase ml-14 animate-pulse flex items-center gap-2">
                        <span className="flex gap-1"><span className="w-1 h-1 bg-current rounded-full"></span><span className="w-1 h-1 bg-current rounded-full"></span><span className="w-1 h-1 bg-current rounded-full"></span></span>
                        Sarah is typing
                    </p>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-10 bg-white border-t border-slate-50">
                <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-3 flex items-center gap-3 shadow-inner-xl focus-within:ring-8 focus-within:ring-indigo-600/5 focus-within:bg-white focus-within:border-indigo-600/20 transition-all duration-500">
                    <button className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all duration-300">
                        <PlusIcon className="w-6 h-6" />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-2xl transition-all duration-300">
                        <FaceSmileIcon className="w-6 h-6" />
                    </button>
                    <input
                        type="text"
                        placeholder="Type your message to Sarah..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 font-bold text-[15px] px-4 placeholder:text-slate-300"
                    />
                    <button className="bg-linear-to-br from-indigo-600 to-purple-700 hover:shadow-2xl hover:shadow-indigo-300 text-white w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl shadow-indigo-100 active:scale-90 group">
                        <PaperAirplaneIcon className="w-6 h-6 -rotate-45 translate-x-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
                <div className="flex items-center gap-6 mt-4 opacity-50">
                    <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">● SHIFT + ENTER FOR NEW LINE</p>
                    <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">● FILES UP TO 25MB</p>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
