"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import ReelCard from "@/components/ReelCard/ReelCard";

const reels = [
  {
    id: 1,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 2,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 3,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 4,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 5,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 6,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 7,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 8,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 9,
    video: "/assets/videos/video1.mp4",
  },
];

const data = [
  {
    id: 1,
    name: "sport shoes",
  },
  {
    id: 2,
    name: "sport shoes",
  },
  {
    id: 3,
    name: "sport shoes",
  },
  {
    id: 4,
    name: "sport shoes",
  },
  {
    id: 5,
    name: "sport shoes",
  },
  {
    id: 6,
    name: "sport shoes",
  },
  {
    id: 7,
    name: "sport shoes",
  },
  {
    id: 8,
    name: "sport shoes",
  },
];

const ReelsPage = () => {
  const t = useTranslations();
  const [selectedId, setSelectedId] = useState<number>(1);

  const handleIdChange = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className="py-6 md:py-8 lg:pt-6 lg:pb-20 xl:py-10 flex flex-col gap-4 md:gap-6">
      <div className="overflow-scroll hide-scrollbar global-slider-padding global-padding-l-r">
        <div className="flex items-center gap-3 md:gap-4 whitespace-nowrap">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleIdChange(item.id)}
              className={`py-2 px-4 rounded-full cursor-pointer text-sm
            ${
              selectedId === item.id
                ? "bg-primary text-white font-bold"
                : "bg-silver text-primary opacity-70"
            }
            `}
            >
              {t(item.name)}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 w-full global-padding">
        {reels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </div>
    </div>
  );
};

export default ReelsPage;
