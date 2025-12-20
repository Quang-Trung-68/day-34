import { Avatar, AvatarFallback, AvatarImage } from "@/components/Common/ui/avatar";
import { Button } from "@/components/Common/ui/button";
import { Input } from "@/components/Common/ui/input";
import { Search as SearchIcon, X } from "lucide-react";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  // Mock Data
  const suggestedUsers = [
    {
      id: 1,
      username: "tech_guru",
      name: "Tech Guru",
      avatar: "https://github.com/shadcn.png",
      followers: "125K"
    },
    {
      id: 2,
      username: "design_daily",
      name: "Design Daily",
      avatar: "https://github.com/shadcn.png",
      followers: "89K"
    },
    {
      id: 3,
      username: "coding_life",
      name: "Coding Life",
      avatar: "https://github.com/shadcn.png",
      followers: "230K"
    },
    {
      id: 4,
      username: "react_official",
      name: "React",
      avatar: "https://github.com/shadcn.png",
      followers: "1.2M"
    },
    {
        id: 5,
        username: "tailwindcss",
        name: "Tailwind CSS",
        avatar: "https://github.com/shadcn.png",
        followers: "800K"
    }
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[rgb(250,250,250)]">
      <div className="flex w-full flex-col">
        {/* Sticky Header Container */}
        <div className="sticky top-0 z-50 bg-[#FAFAFA]">
          {/* Header Title Bar */}
          <div className="flex items-center justify-between p-4 text-lg font-bold">
            <div className="w-10"></div>
            <span className="text-[15px] font-bold text-black">Search</span>
            <div className="w-10"></div>
          </div>

           {/* Visible Border connecting the masks */}
           <div className="bg-border absolute right-5 -bottom-px left-5 z-10 h-0.5" />

          {/* Hanging Masks */}
          <div className="pointer-events-none absolute top-full left-0 h-6 w-6">
            <div
              className="h-full w-full"
              style={{
                background:
                  "radial-gradient(circle at bottom right, transparent 70%, var(--border) 70%, var(--border) calc(70% + 1px), #FAFAFA calc(70% + 1px))",
              }}
            />
          </div>
          <div className="absolute top-full right-6 left-6 h-1 bg-transparent" />
          <div className="pointer-events-none absolute top-full right-0 h-6 w-6">
            <div
              className="h-full w-full"
              style={{
                background:
                  "radial-gradient(circle at bottom left, transparent 70%, var(--border) 70%, var(--border) calc(70% + 1px), #FAFAFA calc(70% + 1px))",
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-0 flex min-h-screen w-full flex-col bg-white">
          {/* Left Border Line */}
          <div className="bg-border absolute top-0 bottom-0 left-0 z-10 w-px" />
          {/* Right Border Line */}
          <div className="bg-border absolute top-0 bottom-0 right-0 z-10 w-px" />

          <div className="flex flex-col p-4 gap-4">
            {/* Search Bar */}
            <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input 
                    placeholder="Search" 
                    className="pl-10 bg-gray-100 border-0 rounded-xl h-10 focus-visible:ring-0"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="mt-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Suggested for you</h3>
                <div className="flex flex-col gap-4">
                    {suggestedUsers.map(user => (
                        <div key={user.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="size-10 border border-gray-200">
                                    <AvatarImage src={user.avatar} />
                                    <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                         <span className="font-semibold text-sm text-black">{user.username}</span>
                                         <span className="h-3 w-3 rounded-full bg-blue-500 flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" fill="white" className="w-2 h-2"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                         </span>
                                    </div>
                                    <span className="text-gray-500 text-sm">{user.name}</span>
                                    <span className="text-black text-xs mt-1">{user.followers} followers</span>
                                </div>
                            </div>
                            <Button variant="outline" className="h-8 rounded-lg px-5 text-sm font-semibold border-gray-300">
                                Follow
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
             
             {/* Load More/End */}
             <Button variant="ghost" className="mt-4 w-full text-blue-500 text-sm font-semibold">
                See more suggestions
             </Button>

          </div>
        </div>
      </div>
    </div>
  );
}
