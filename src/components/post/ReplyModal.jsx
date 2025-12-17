import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/Common/ui/dialog";
import { Button } from "@/components/Common/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/Common/ui/avatar";
import { ScrollArea } from "@/components/Common/ui/scroll-area";
import {
  MoreHorizontal,
  Image as ImageIcon,
  FileText,
  MapPin,
  Smile,
  AlignLeft,
  ChevronRight,
  Grid3x3,
} from "lucide-react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Cookies from "js-cookie";
import { formatTime } from "@/utils/formatTime";
import ReplyOptionsDropdown from "../Common/DropdownMenu/ReplyOptionsDropdown";
import { Textarea } from "../Common/ui/textarea";

const Modal = NiceModal.create(({ user, content, updated_at }) => {
  const modal = useModal();

  const handleCancel = () => {
    modal.hide();
  };

  const handlePost = () => {
    modal.hide();
  };

  const usernameAuth = JSON.parse(Cookies.get("userInfo")).username;
  const { username } = user;

  const [replyQuote, setReplyQuote] = useState("anyone");
  const [reviewApprove, setReviewApprove] = useState(false);

  const [replyText, setReplyText] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setReplyText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <Dialog open={modal.visible} onOpenChange={handleCancel}>
      <DialogContent
        aria-describedby={undefined}
        showCloseButton={false}
        className="flex h-[90vh] flex-col gap-0 overflow-hidden rounded-2xl bg-white p-0 text-black sm:h-auto sm:max-h-[85vh] sm:max-w-[600px]"
      >
        {/* --- Header --- */}
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 border-b border-gray-200 px-4 py-3">
          <Button
            variant="ghost"
            className="h-auto cursor-pointer p-1 text-base font-normal text-black hover:bg-transparent"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <DialogTitle className="flex-1 text-center text-base font-bold">
            Reply
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-auto cursor-pointer p-0 hover:bg-transparent"
          >
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </DialogHeader>

        {/* --- Body (Scrollable) --- */}
        <ScrollArea className="flex-1 px-4 py-4">
          <div className="flex gap-3">
            {/* Cột trái: Avatar + Đường kẻ nối */}
            <div className="flex shrink-0 flex-col items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={user?.avatar || "https://github.com/shadcn.png"}
                  alt={username}
                />
                <AvatarFallback className="bg-green-600 text-xs text-white">
                  {username?.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              {/* Đường kẻ dọc (Thread Line) - dài hơn */}
              <div className="my-2 w-0.5 flex-1 bg-gray-300"></div>

              <Avatar className="h-7 w-7 opacity-50">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={usernameAuth}
                />
                <AvatarFallback className="bg-gray-200 text-[10px] text-gray-500">
                  {usernameAuth?.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Cột phải: Nội dung chính */}
            <div className="flex-1 pb-1">
              {/* Original Post Header */}
              <div className="mb-2 flex items-center gap-2">
                <span className="text-[15px] font-semibold">{username}</span>
                <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                <span className="text-sm font-semibold text-gray-600">
                  工程師日常
                </span>
                <span className="text-sm text-gray-400">
                  {formatTime(updated_at)}
                </span>
              </div>

              {/* Original Post Content */}
              <div className="mb-3">
                <p className="mb-2 text-[15px] leading-relaxed text-gray-900">
                  {content}
                </p>

                {/* Code Block (nếu có)
                {codeContent && (
                  <div className="overflow-hidden rounded-lg bg-black p-4">
                    <pre className="font-mono text-sm leading-relaxed text-green-400">
                      {codeContent}
                    </pre>
                  </div>
                )} */}
              </div>

              {/* Reply Section */}
              <div className="mt-6">
                {/* Reply User Info */}
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-[15px] font-semibold">
                    {usernameAuth}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  <button className="text-sm text-gray-400 hover:text-gray-600">
                    Add a topic
                  </button>
                </div>

                {/* Reply Text Placeholder */}
                <div className="mb-3">
                  <Textarea
                    ref={textareaRef}
                    value={replyText}
                    onChange={handleInput}
                    rows={1}
                    className={
                      "min-h-10 w-100 resize-none border-0 p-0.5 text-gray-500 shadow-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                    }
                    placeholder={`Reply to ${"user..."}...`}
                  />
                </div>

                {/* Action Icons */}
                <div className="flex gap-5 text-gray-400">
                  <ImageIcon className="h-5 w-5 cursor-pointer hover:text-gray-700" />
                  <FileText className="h-5 w-5 cursor-pointer hover:text-gray-700" />
                  <Smile className="h-5 w-5 cursor-pointer hover:text-gray-700" />
                  <AlignLeft className="h-5 w-5 cursor-pointer hover:text-gray-700" />
                  <Grid3x3 className="h-5 w-5 cursor-pointer hover:text-gray-700" />
                  <MapPin className="h-5 w-5 cursor-pointer hover:text-gray-700" />
                </div>
              </div>

              {/* Add to thread placeholder */}
              <div className="mt-6 flex items-center gap-2">
                <Avatar className="h-7 w-7 opacity-50">
                  <AvatarFallback className="bg-gray-200 text-[10px] text-gray-500">
                    {usernameAuth?.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-400">Add to thread</span>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* --- Footer --- */}
        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3">
          <ReplyOptionsDropdown
            replyQuote={replyQuote}
            setReplyQuote={setReplyQuote}
            reviewApprove={reviewApprove}
            setReviewApprove={setReviewApprove}
          >
            <button
              className={`flex cursor-pointer items-center gap-2 text-sm font-semibold ${reviewApprove ? "text-gray-900" : "text-gray-400"}`}
            >
              <Grid3x3 className="h-4 w-4" />
              <span>Reply options</span>
            </button>
          </ReplyOptionsDropdown>

          <Button
            className="cursor-pointer rounded-full bg-black px-6 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            onClick={handlePost}
          >
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
});

export const ReplyModal = {
  open: (props) => NiceModal.show(Modal, props),
  close: () => NiceModal.hide(Modal),
};
