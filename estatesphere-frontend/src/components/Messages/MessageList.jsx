import React from "react";
import { messageChats } from "../../data/index.jsx";

const MessageList = () => {
    const chats = messageChats;

    return (
        <div className="w-96 border-r border-slate-100 bg-white h-full flex flex-col shadow-2xl shadow-slate-100/50 relative z-10">
            <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Messages</h1>
                    <button className="bg-linear-to-r from-indigo-600 to-purple-600 w-10 h-10 rounded-2xl text-white flex items-center justify-center hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 shadow-md shadow-indigo-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>
                </div>

                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search residents or staff..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-12 py-3.5 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:bg-white focus:border-indigo-600/20 transition-all duration-300"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 absolute left-4 top-3.5 text-slate-300 group-focus-within:text-indigo-500 transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-8">
                {chats.map((chat, idx) => (
                    <div
                        key={idx}
                        className={`group flex items-center gap-4 p-4 rounded-3xl cursor-pointer transition-all duration-300 border-2 ${chat.active ? "bg-white border-indigo-600 shadow-xl shadow-indigo-100 scale-[1.02]" : "bg-transparent border-transparent hover:bg-slate-50"}`}
                    >
                        <div className="relative">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white text-sm shadow-lg ${chat.color || 'bg-indigo-600'} ${chat.active ? 'ring-4 ring-indigo-50' : ''}`}>
                                {chat.name.charAt(0)}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-3 border-white rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-1">
                                <p className={`font-bold text-[15px] truncate tracking-tight ${chat.active ? "text-slate-800" : "text-slate-700"}`}>{chat.name}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{chat.time}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-lg tracking-widest uppercase border ${chat.role === 'STAFF' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-indigo-50 text-indigo-600 border-indigo-100'}`}>{chat.role}</span>
                                <p className={`text-[13px] truncate font-semibold ${chat.active ? "text-slate-600" : "text-slate-400"}`}>{chat.message}</p>
                            </div>
                        </div>
                        {chat.unread > 0 && (
                            <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-lg shadow-indigo-200">
                                {chat.unread}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="p-8 border-t border-slate-50 flex items-center gap-4 bg-slate-50/30">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 font-bold shadow-sm ring-4 ring-white">
                    JD
                </div>
                <div className="flex-1 overflow-hidden">
                    <p className="text-slate-800 text-sm font-bold tracking-tight">John Doe</p>
                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">Super Admin</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></div>
            </div>
        </div>
    );
};

export default MessageList;
