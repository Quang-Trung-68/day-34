import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Heart as LikeIcon,
  MessageCircle as ReplyIcon,
  Ellipsis as MoreIcon,
  Repeat2 as Repeat2Icon,
  Send as SendIcon,
} from "lucide-react";

function PostItem({
  urlAvatar,
  author,
  speech,
  urlImage,
  lastTime,
  countInteraction,
}) {
  const { countLike, countReply, countRepeat, countSend } = countInteraction;

  return (
    <div className="flex flex-col border-b p-3">
      <div className="flex gap-2">
        <div>
          <Avatar className="size-9">
            <AvatarImage src={urlAvatar} />
            <AvatarFallback>{author}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <div className="content flex justify-between">
            <div className="flex-1">
              <div className="author flex items-center gap-2">
                <div className="font-semibold">{author}</div>
                <div className="text-sm text-gray-500">{lastTime}</div>
              </div>
              {speech && <div className="speech mt-1 text-sm">{speech}</div>}
            </div>
            <div>
              <MoreIcon className="size-5 text-gray-500" />
            </div>
          </div>

          {urlImage && (
            <div className="overflow-hidden rounded-lg">
              <img src={urlImage} className="w-full" alt={speech} />
            </div>
          )}

          <div className="interaction flex gap-4 text-gray-600">
            <div className="flex cursor-pointer items-center gap-1 hover:text-red-500">
              <LikeIcon className="size-5" />
              <span className="text-sm">{countLike}</span>
            </div>

            <div className="flex cursor-pointer items-center gap-1 hover:text-blue-500">
              <ReplyIcon className="size-5" />
              <span className="text-sm">{countReply}</span>
            </div>

            <div className="flex cursor-pointer items-center gap-1 hover:text-green-500">
              <Repeat2Icon className="size-5" />
              <span className="text-sm">{countRepeat}</span>
            </div>

            <div className="flex cursor-pointer items-center gap-1 hover:text-purple-500">
              <SendIcon className="size-5" />
              <span className="text-sm">{countSend}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
