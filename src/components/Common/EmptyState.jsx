import React from "react";
import { Ghost } from "lucide-react";

const EmptyState = ({ 
  icon = <Ghost className="w-16 h-16 text-[#B8B8B8]" />, 
  title = "No posts yet", 
  description = "When someone you follow posts, their posts will appear here." 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center animate-in fade-in duration-500">
      <div className="relative mb-6">
        <div className="bg-[#F2F2F2] rounded-full p-8 transition-transform hover:scale-105 duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-[#1E1E1E] text-2xl font-bold mb-3 tracking-tight">
        {title}
      </h3>
      
      <p className="text-[#999999] text-base max-w-[320px] leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;
