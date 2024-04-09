import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { LikeIcon, ReplyIcon } from "../../../../public/assets/svg/singleReel";

const commentsData = [
  {
    id: 1,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: true,
    comment: "This text is an example of text that can be replaced",
    image: "/assets/images/profile/comment-img.png",
    replies: [
      {
        id: 1,
        userName: "Abdulrahman Mohammed",
        comment: "This text is an example of text that can be replaced",
        image: "/assets/images/profile/comment-img.png",
        likes: 4,
        isLiked: true,
      },
      {
        id: 2,
        userName: "Abdulrahman Mohammed",
        comment: "comment-1",
        image: "/assets/images/profile/comment-img.png",
        likes: 4,
        isLiked: true,
      },
      {
        id: 3,
        userName: "Abdulrahman Mohammed",
        comment: "This text is an example of text that can be replaced",
        image: "/assets/images/profile/comment-img.png",
        likes: 4,
        isLiked: true,
      },
    ],
  },
  {
    id: 2,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: false,
    comment: "comment-1",
    image: "/assets/images/profile/comment-img.png",
    replies: [],
  },
  {
    id: 3,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: true,
    comment: "comment-1",
    image: "/assets/images/profile/comment-img.png",
    replies: [],
  },
  {
    id: 4,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: true,
    comment: "This text is an example of text that can be replaced",
    image: "/assets/images/profile/comment-img.png",
    replies: [],
  },
  {
    id: 5,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: false,
    comment: "This text is an example of text that can be replaced",
    image: "/assets/images/profile/comment-img.png",
    replies: [],
  },
  {
    id: 6,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: false,
    comment: "This text is an example of text that can be replaced",
    image: "/assets/images/profile/comment-img.png",
    replies: [],
  },
  {
    id: 7,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: false,
    comment: "This text is an example of text that can be replaced",
    image: "/assets/images/profile/comment-img.png",
    replies: [],
  },
  {
    id: 8,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: true,
    comment: "comment-1",
    image: "/assets/images/profile/comment-img.png",
    replies: [],
  },
  {
    id: 9,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: true,
    comment: "comment-1",
    image: "/assets/images/profile/comment-img.png",
    replies: [],
  },
  {
    id: 10,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: true,
    comment: "comment-1",
    image: "/assets/images/profile/comment-img.png",
    replies: [],
  },
  {
    id: 11,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: true,
    comment: "comment-1",
    image: "/assets/images/profile/comment-img.png",
    replies: [],
  },
  {
    id: 12,
    userName: "Abdulrahman Mohammed",
    likes: 4,
    isLiked: true,
    comment: "comment-1",
    image: "/assets/images/profile/comment-img.png",
    replies: [],
  },
];

interface Props {
  addedComment: {
    id: number;
    userName: string;
    likes: number;
    isLiked: boolean;
    comment: string;
    image: string;
    replies: [];
  };
}

const Comments = ({ addedComment }: Props) => {
  const t = useTranslations();
  const [comments, setComments] = useState(commentsData);
  const [activeReply, setActiveReply] = useState<number | null>(null);

  useEffect(() => {
    if (addedComment) {
      const updatedData = [...comments];
      updatedData.push(addedComment);
      setComments(updatedData);
    }
  }, [addedComment]);

  const handleLikedComment = (id: number) => {
    setComments((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          if (item.isLiked) {
            return { ...item, isLiked: false, likes: item.likes - 1 };
          }
          return { ...item, isLiked: true, likes: item.likes + 1 };
        }
        return item;
      })
    );
  };

  const handleActiveReply = (id: number) => {
    setActiveReply(id);
  };

  return (
    <div className="overflow-scroll h-full hide-scrollbar px-4 md:px-8 flex flex-col gap-4 pb-36">
      {comments.map((item) => (
        <div key={item.id} className="flex items-start gap-2">
          <div className="w-full max-w-11 h-11 rounded-full overflow-hidden border border-silver">
            <Image
              src={item.image}
              alt="comment"
              width={44}
              height={44}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 w-fit">
              <div className="bg-white p-3 flex flex-col gap-2 rounded-2xl">
                <p className="font-bold text-sm">{t(item.userName)}</p>
                <p className="text-sm text-asphalt">{t(item.comment)}</p>
              </div>
              <div className="flex items-center justify-between text-asphalt">
                <div className="flex items-center gap-3 text-xs">
                  <p>2 {t("H")}</p>
                  <p
                    onClick={() => handleLikedComment(item.id)}
                    className={`cursor-pointer ${
                      item.isLiked && "font-bold text-primary"
                    }`}
                  >
                    {t("Like")}
                  </p>
                  <p className="cursor-pointer">{t("Reply")}</p>
                </div>

                {item.likes !==0 &&  <div className="px-2 py-[2px] rounded-full bg-white text-sm flex items-center gap-2">
                  <LikeIcon />
                  <p>{item.likes}</p>
                </div>}
              </div>
            </div>
            {item?.replies?.length > 0 &&
              (activeReply !== item.id ? (
                <div
                  className="flex items-center gap-2 text-asphalt text-sm font-bold cursor-pointer"
                  onClick={() => handleActiveReply(item.id)}
                >
                  <ReplyIcon />
                  <p>
                    {t("View all replies")} ({item.replies.length})
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {item.replies?.map((reply) => (
                    <div key={reply.id} className="flex items-start gap-2">
                      <div className="w-full max-w-11 h-11 rounded-full overflow-hidden border border-silver">
                        <Image
                          src={reply.image}
                          alt="comment"
                          width={44}
                          height={44}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-white p-3 flex flex-col gap-2 rounded-2xl">
                          <p className="font-bold">{t(reply.userName)}</p>
                          <p className="text-sm text-asphalt">
                            {t(reply.comment)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-asphalt">
                          <div className="flex items-center gap-3 text-xs">
                            <p>2 {t("H")}</p>
                            <p
                              className={`cursor-pointer ${
                                reply.isLiked && "font-bold text-primary"
                              }`}
                            >
                              {t("Like")}
                            </p>
                            <p className="cursor-pointer">{t("Reply")}</p>
                          </div>

                          <div className="px-2 py-[2px] rounded-full bg-white text-sm flex items-center gap-2">
                            <LikeIcon />
                            <p>{reply.likes}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
