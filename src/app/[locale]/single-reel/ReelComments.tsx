import { ChangeEvent, useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";

import { ProductClose } from "../../../../public/assets/svg/checkoutSvg";
import {
  AddComment,
  CloseSidebar,
  EmojiIcon,
} from "../../../../public/assets/svg/singleReel";
import Comments from "./Comments";

interface Props {
  onClose: () => void;
}

const emojis = ["👍🏼", "♥️", "💥", "🔥", "🤩", "👌🏼", "🫶🏼", "😍", "👏🏼"];

const ReelComments = ({ onClose }: Props) => {
  const t = useTranslations();
  const [opemEmojis, setOpenEmojis] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [addedComment, setAddedComment] = useState<any>();
  const [id, setId] = useState<number>(99);

  const handleOpenEmojis = () => {
    setOpenEmojis(!opemEmojis);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddEmoji = (emoji: string) => {
    setComment((prevState) => prevState + emoji);
  };

  const handleAddComment = (e: any) => {
    e.preventDefault();
    if (comment) {
      setAddedComment({
        id: id,
        userName: "Abdulrahman Mohammed",
        likes: 0,
        isLiked: false,
        comment: comment,
        image: "/assets/images/profile/comment-img.png",
        replies: [],
      });

      setComment("");
      setOpenEmojis(false);
      setId(id + 1);
    }
  };

  return (
    <div className="lg:w-[554px] h-full fixed lg:static z-50 bg-black/60 w-full">
      <div className="h-full w-full flex gap-6 fixed top-0 md:max-w-[554px]">
        <div className="md:h-full w-full py-8 bg-cloud flex flex-col gap-6 md:relative rounded-t-2xl md:rounded-none h-[80%] fixed bottom-0">
          <div className="px-4 md:px-8">
            <div className="flex items-center justify-between pb-6 border-b border-silver/50">
              <p className="text-20">{t("Comments")}</p>
              <span className="cursor-pointer lg:hidden" onClick={onClose}>
                <ProductClose />
              </span>
            </div>
          </div>

          <Comments addedComment={addedComment} />

          <div className="absolute bottom-0 px-4 pb-6 md:p-8 pt-6 w-full flex flex-col gap-[10px] custom-shadow2 bg-cloud">
            {opemEmojis && (
              <div className="flex items-center justify-end md:flex-nowrap md:gap-5 flex-wrap gap-3">
                {emojis
                  .map((emoji, index) => (
                    <p
                      key={index}
                      className="text-2xl cursor-pointer"
                      onClick={() => handleAddEmoji(emoji)}
                    >
                      {emoji}
                    </p>
                  ))
                  .reverse()}
              </div>
            )}
            <form
              onSubmit={handleAddComment}
              className="flex items-center gap-2"
            >
              <div className="border border-silver w-full max-w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/profile/pro-info.png"
                  alt="profile"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-4 items-center justify-between p-4 rounded-full bg-white w-full">
                <input
                  type="text"
                  value={comment}
                  onChange={handleCommentChange}
                  placeholder={t("write comment")}
                  className="focus:outline-none w-full text-sm text-asphalt placeholder:text-asphalt"
                />
                <span className="cursor-pointer" onClick={handleOpenEmojis}>
                  <EmojiIcon />
                </span>
              </div>

              <button type="submit" className="p-3 bg-primary rounded-full">
                <AddComment />
              </button>
            </form>
          </div>
        </div>
        <p className="cursor-pointer mt-8 hidden lg:block" onClick={onClose}>
          <CloseSidebar />
        </p>
      </div>
    </div>
  );
};

export default ReelComments;
