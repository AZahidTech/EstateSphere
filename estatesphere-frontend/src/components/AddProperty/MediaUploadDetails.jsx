import React from "react";
import uploadIcon from "../../assets/svg/mediaUpload/upload.svg";
import { addPropertyUploadedFiles } from "../../data/index.jsx";

const MediaUploadDetails = () => {
    const uploadedFiles = addPropertyUploadedFiles;

    return (
        <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <div>
                <h3 className="text-lg font-bold text-[#1e2535]">Upload Property Media</h3>
                <p className="text-[#7b8399] text-sm font-medium mt-1">High quality photos and videos increase engagement by up to 80%.</p>
            </div>

            <div className="border-2 border-dashed border-gray-200 bg-gray-50/50 rounded-[32px] p-12 flex flex-col items-center justify-center text-center group hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    <img src={uploadIcon} alt="Upload" className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <p className="text-[#1e2535] font-bold text-lg">Drag and drop images or videos here</p>
                <p className="text-[#7b8399] text-sm font-medium mt-1">Or click to browse from your computer</p>

                <div className="flex gap-3 mt-6">
                    <span className="capsule-badge">JPG</span>
                    <span className="capsule-badge">PNG</span>
                    <span className="capsule-badge">MP4</span>
                    <span className="capsule-badge capsule-badge-blue">MAX 20MB</span>
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center mb-5">
                    <h4 className="text-[11px] font-bold text-[#7b8399] uppercase tracking-wider">Uploaded Files (4)</h4>
                    <button className="text-blue-600 font-bold text-[11px] uppercase tracking-wider hover:underline">Clear all</button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {uploadedFiles.map((file) => (
                        <div key={file.id} className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm ring-1 ring-gray-100">
                            <img src={file.src} alt="Property" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            {file.isPrimary && (
                                <span className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] font-black uppercase px-2 py-1 rounded-md tracking-widest shadow-lg">Primary</span>
                            )}
                            {file.type === 'video' && (
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center ring-2 ring-white/50 group-hover:bg-white group-hover:scale-110 transition-all">
                                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white group-hover:border-l-blue-600 border-b-[8px] border-b-transparent translate-x-1"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="aspect-square rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-4">
                        <div className="w-full bg-gray-200 h-1 rounded-full mb-3 overflow-hidden">
                            <div className="bg-blue-600 h-full w-[65%] animate-pulse"></div>
                        </div>
                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Uploading 65%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaUploadDetails;
