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
    name: "Casual shoes",
  },
  {
    id: 2,
    name: "Sports shoes",
  },
  {
    id: 3,
    name: "Sports shoes",
  },
];

const InfluencerReels = () => {
  const t = useTranslations();
  const [selectedId, setSelectedId] = useState<number>(2);

  const handleIdChange = (value: number) => {
    setSelectedId(value);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex items-center gap-3 md:gap-4 flex-wrap">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => handleIdChange(item.id)}
            className={`py-2 px-4 rounded-full cursor-pointer
          ${
            selectedId === item.id
              ? "text-white bg-primary"
              : "bg-silver/70 text-primary/70"
          }
          `}
          >
            <p className="font-bold text-sm">{t(item.name)}</p>
          </div>
        ))}
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {reels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </div>
    </div>
  );
};

export default InfluencerReels;
