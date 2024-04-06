import VideoComponent from "./VideoComponent";
import Link from "next/link";
import { Arrow16 } from "../../../../../../public/assets/svg/categoryBarSvgs";
import { useTranslations } from "next-intl";
import { TrendingReelsHeaderIcon } from "../../../../../../public/assets/svg/influencerStatistics";
import React from "react";

interface Props {
  documentWidth: number;
}
const TrendVideos: React.FC<Props> = ({ documentWidth }) => {
  const t = useTranslations();

  return (
    <div className="bg-white rounded-xl p-[16px] md:p-[24px]  flex flex-col gap-6 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-[4px]">
          <TrendingReelsHeaderIcon />
          <p className="text-[16px] md:text-[20px] font-[700] transform translate-y-[2px]">
            {" "}
            {t("trending videos")}
          </p>
        </div>
        <Link
          href="/profile?tab=list"
          className="flex items-center gap-2 cursor-pointer">
          <p className="text-[12px] md:text-[14px]  ">{t("View all")}</p>
          <div className="rounded-full bg-cloud p-1 ltr:rotate-180">
            <Arrow16 />
          </div>
        </Link>
      </div>

      <div
        className={`  grid  gap-x-[4px] md:gap-x-[8px]  mt-[4px] 
          
          ${
            documentWidth > 1024
              ? "grid-cols-5"
              : documentWidth > 430
              ? "grid-cols-4"
              : "grid-cols-3"
          }
          `}>
        <VideoComponent src="/assets/videos/video1.mp4" />
        <VideoComponent src="/assets/videos/video1.mp4" />
        <VideoComponent src="/assets/videos/video1.mp4" />

        {documentWidth > 430 && (
          <VideoComponent src="/assets/videos/video1.mp4" />
        )}
        {documentWidth > 1024 && (
          <VideoComponent src="/assets/videos/video1.mp4" />
        )}
      </div>
    </div>
  );
};

export default TrendVideos;
