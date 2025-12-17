import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/Common/ui/dialog";
import { Button } from "@/components/Common/ui/button";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Common/ui/avatar";
import { formatTime } from "@/utils/formatTime";
import {
  Heart as LikeIcon,
  MessageCircle as ReplyIcon,
  Repeat2 as Repeat2Icon,
  Send as SendIcon,
  Check as CheckIcon,
  ChevronDown,
  Copy as CopyIcon,
  Download as DownloadIcon,
} from "lucide-react";

// Mock Interaction Bar specifically for the image preview
const PreviewInteractionBar = ({ likes_count, replies_count, showMetrics }) => {
  if (!showMetrics) return null;

  return (
    <div className="flex gap-4 text-gray-600 mt-2">
      <div className="flex items-center gap-1">
        <LikeIcon className="size-4.5" />
        <span className="text-sm">{likes_count || 8}</span>
      </div>
      <div className="flex items-center gap-1">
        <ReplyIcon className="size-4.5" />
        <span className="text-sm">{replies_count || 18}</span>
      </div>
      <div className="flex items-center gap-1">
        <Repeat2Icon className="size-4.5" />
      </div>
      <div className="flex items-center gap-1">
        <SendIcon className="size-4.5" />
      </div>
    </div>
  );
};

const BACKGROUND_OPTIONS = [
  { id: "white", color: "#ffffff", border: "border-gray-200" },
  { id: "black", color: "#000000" },
  { id: "blue", color: "#3b82f6" }, // Example blue
  { id: "gradient", gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)" }, // Example gradient
];

const Modal = NiceModal.create(({ user, content, updated_at, likes_count, replies_count }) => {
  const modal = useModal();
  const [selectedBg, setSelectedBg] = useState("white");
  const [showMetrics, setShowMetrics] = useState(true);

  const handleCancel = () => {
    modal.hide();
  };

  const handleCopy = () => {
    console.log("Copying image...");
    // Logic to capture and copy image would go here
  };

  const currentBg = BACKGROUND_OPTIONS.find(opt => opt.id === selectedBg) || BACKGROUND_OPTIONS[0];

  return (
    <Dialog open={modal.visible} onOpenChange={handleCancel}>
      <DialogContent showCloseButton={false} className="p-0 gap-0 max-w-[650px] bg-white rounded-3xl overflow-hidden border-none shadow-2xl">
        <DialogTitle className="sr-only">Copy as image</DialogTitle>
        
        {/* Preview Area */}
        <div 
          className="relative min-h-[400px] flex items-center justify-center p-8 transition-colors duration-300"
          style={{ 
            background: currentBg.gradient || currentBg.color,
          }}
        >
          {/* Card */}
          <div className="w-full bg-white rounded-3xl p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <Avatar className="size-9 border border-gray-100">
                 <AvatarImage src={user?.avatar_url || "https://github.com/shadcn.png"} />
                <AvatarFallback>{user?.username?.[0] || "U"}</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-semibold">{user?.username || "username"}</span>
                <span className="text-gray-300">›</span>
                <span className="text-gray-400">threads</span>
                <span className="text-gray-400 ml-1">{updated_at ? formatTime(updated_at) : "3h"}</span>
              </div>
            </div>

            {/* Content */}
            <div className="text-[15px] leading-relaxed text-gray-900 mb-4 whitespace-pre-wrap">
              {content || "No content provided."}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-2">
               <PreviewInteractionBar 
                  likes_count={likes_count} 
                  replies_count={replies_count} 
                  showMetrics={showMetrics} 
               />
               
               {/* Watermark/Logo */}
               <div className="ml-auto">
                 <svg aria-label="Threads" role="img" viewBox="0 0 192 192" className="size-6 fill-black opacity-80">
                    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4485 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.12 145.8 142.501 158.708C131.182 170.28 114.698 177.255 95.8846 177.255C46.9853 177.255 7.21973 137.489 7.21973 88.5877C7.21973 39.6865 46.9853 -0.0792236 95.8846 -0.0792236C109.588 -0.0792236 122.582 2.82727 134.139 8.15422C136.257 9.13117 137.784 11.2359 137.893 13.595L138.169 19.5532C138.303 22.4279 136.216 24.9654 133.376 25.5683C122.435 27.8912 109.805 24.3639 98.6755 24.1627L98.0567 24.1517C97.7788 24.1466 97.4998 24.1441 97.222 24.1441C57.6534 24.1439 25.464 56.3333 25.464 95.9019C25.464 135.47 57.6534 167.66 97.222 167.66C112.571 167.66 125.795 161.761 134.809 152.096C144.897 141.277 144.406 127.34 140.751 118.816C137.065 110.219 130.419 104.341 122.33 99.4582C121.298 90.0441 117.962 81.3653 112.923 75.1878C110.428 72.1302 106.772 70.3807 101.996 70.3503C101.954 70.35 101.91 70.35 101.868 70.35C97.108 70.35 91.0772 72.1932 87.8919 79.7997L84.9754 86.7634C84.3499 88.2568 85.0601 89.9675 86.5534 90.5929C87.675 91.0628 88.9419 90.7397 89.6749 89.7719C91.4394 87.4431 93.3087 87.0505 94.6293 86.993C95.148 86.9704 95.6425 87.0264 96.0945 87.1643C102.392 89.0838 107.411 96.8407 109.911 107.036C107.087 107.13 103.957 107.382 100.412 107.828C84.0044 109.891 76.5367 116.143 76.242 121.282C76.0147 125.247 78.8471 129.567 84.6644 133.15C90.3533 136.654 97.498 137.564 102.584 137.283C116.188 136.533 123.656 124.965 125.86 116.632C126.831 112.96 127.352 109.111 127.425 105.152L130.641 106.878C131.789 107.493 133.092 107.069 133.708 105.921C134.323 104.773 133.899 103.342 132.751 102.726L130.65 101.599C132.427 96.5398 134.008 89.8936 135.044 83.1813C136.148 84.4534 137.22 85.7483 138.257 87.067C139.066 88.0963 140.567 88.4719 141.674 87.8931L141.537 88.9883ZM101.996 128.528C99.2558 128.679 94.673 127.91 90.966 125.627C87.2797 123.356 84.7797 120.395 84.9702 117.072C85.1227 114.412 89.4124 113.844 91.1378 113.627C96.2255 112.987 101.621 112.556 107.545 112.196C105.82 122.956 103.351 128.455 101.996 128.528Z"></path>
                 </svg>
               </div>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="p-4 flex items-center justify-between bg-white z-10 relative">
          <div className="flex items-center gap-4">
             {/* Background Selector */}
            <div className="flex gap-2 p-1 bg-gray-100 rounded-full">
               {BACKGROUND_OPTIONS.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => setSelectedBg(bg.id)}
                    className={`size-6 rounded-full border-2 transition-all ${bg.id === selectedBg ? 'border-black scale-110' : 'border-transparent hover:scale-110'} ${bg.border || ''}`}
                    style={{ background: bg.gradient || bg.color }}
                    aria-label={`Select background ${bg.id}`}
                  />
               ))}
               <button className="flex items-center justify-center size-6 rounded-full bg-white border border-gray-200">
                  <span className="text-[10px] text-gray-400 font-bold">+</span>
               </button>
            </div>
            
            {/* Show Metrics Toggle */}
            <div 
               className="flex items-center gap-2 cursor-pointer select-none"
               onClick={() => setShowMetrics(!showMetrics)}
            >
               <div className={`size-5 rounded-full flex items-center justify-center transition-colors ${showMetrics ? 'bg-black text-white' : 'bg-gray-200 text-transparent'}`}>
                  <CheckIcon size={12} strokeWidth={4} />
               </div>
               <span className="text-sm font-semibold">Show metrics</span>
            </div>
          </div>

           <div className="flex items-center gap-2">
             {/* Size Dropdown (Static for now) */}
             <Button variant="outline" className="h-9 px-3 rounded-xl border-gray-200 hover:bg-gray-50 text-sm font-semibold text-gray-700">
               Auto <ChevronDown className="ml-2 size-4 text-gray-400" />
             </Button>

             {/* Action Buttons */}
             <Button variant="outline" size="icon" className="size-9 rounded-xl border-gray-200">
                <DownloadIcon className="size-4.5" />
             </Button>

             <Button 
                className="h-9 rounded-xl px-4 bg-black hover:bg-gray-800 text-white font-semibold text-sm"
                onClick={handleCopy}
             >
                <CopyIcon className="mr-2 size-4" />
                Copy
             </Button>
           </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

export const CopyAsImageModal = {
  open: (props) => NiceModal.show(Modal, props),
  close: () => NiceModal.hide(Modal),
};
