import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/Common/ui/avatar";
import { Input } from "@/components/Common/ui/input";
import { Textarea } from "@/components/Common/ui/textarea";
import { ReplyModal } from "@/components/post/ReplyModal";

import {
  Ellipsis as MoreIcon,
  Maximize2 as ExpandIcon,
  ArrowUp as SendReplyIcon,
} from "lucide-react";
import { forwardRef, useImperativeHandle, useState, useRef } from "react";

const QuickReplyModal = forwardRef(({ user, content, updated_at }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setReplyText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  useImperativeHandle(ref, () => ({
    toggle: () => setIsOpen((prev) => !prev),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const handleReplyModal = () => {
    ReplyModal.open({ user, content, updated_at });
  };

  return (
    <>
      {isOpen && (
        <div className={"mt-2 border-0"}>
          <div className="flex gap-2">
            <div>
              <Avatar className="size-9">
                <AvatarImage
                  src={
                    "https://i.pravatar.cc/150?img=" +
                    Math.floor(Math.random() * 10)
                  }
                />
                <AvatarFallback>{"You"}</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <div className="content flex justify-between">
                <div className="flex-1">
                  <div className="username flex items-center gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-semibold">You</span>
                      <span className={"text-gray-500"}>{">"}</span>
                      <Input
                        type={"text"}
                        className={
                          "border-0 text-gray-500 shadow-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                        }
                        placeholder={"Add a topic..."}
                      />
                    </div>
                  </div>

                  <div className="body mt-1 flex items-center justify-between text-sm">
                    <div>
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
                    <div className="flex items-center justify-center gap-2">
                      <div
                        onClick={handleReplyModal}
                        className="flex size-8 cursor-pointer items-center justify-center rounded-[50%] bg-gray-100 hover:scale-110"
                      >
                        <ExpandIcon className="size-4 stroke-2" />
                      </div>
                      {replyText && (
                        <div className="flex size-8 cursor-pointer items-center justify-center rounded-[50%] bg-black hover:scale-110">
                          <SendReplyIcon className="size-4 stroke-2 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <MoreIcon className="size-5 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default QuickReplyModal;
