import { FileCodeIcon, Images, LinkIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../ui/dropdown-menu";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { CopyAsImageModal } from "@/components/post/CopyAsImageModal";

const ShareDropdown = ({ children }) => {
  const handleCopyLink = () => {
    copyToClipboard("Copied a link");
  };

  const handleCopyAsImageModal = () => {
    CopyAsImageModal.open();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className={"w-fit rounded-3xl border-2 p-2"}>
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem
              className={
                "w-66 rounded-xl px-3 py-3.5 text-[15px] font-semibold"
              }
              showIcon={false}
              onClick={() => handleCopyLink()}
            >
              <span>Copy link</span>
              <span>
                <LinkIcon className="size-5" />
              </span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              className={
                "w-66 rounded-xl px-3 py-3.5 text-[15px] font-semibold"
              }
              showIcon={false}
              onClick={() => handleCopyAsImageModal()}
            >
              <span>Copy as image</span>
              <span>
                <Images className="size-5" />
              </span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              className={
                "w-66 rounded-xl px-3 py-3.5 text-[15px] font-semibold"
              }
              showIcon={false}
            >
              <span>Get embed code</span>
              <span>
                <FileCodeIcon className="size-5" />
              </span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ShareDropdown;
