"use client";

import React, { useState } from "react";
import UserInfoCard from "./UserInfoCard";
import Reels from "./Reels";
import Tabs from "./Tabs";

const AllMyFilesAndVideos: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all");

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };
  const types = [
    {
      id: 1,
      name: "all",
      value: "all",
    },
    {
      id: 2,
      name: "notifications",
      value: "notifications",
    },
    {
      id: 3,
      name: "sport shoes",
      value: "sport shoes",
    },
  ];
  const reels = [
    {
      id: 1,
      src: "/assets/videos/video1.mp4",
    },
    {
      id: 2,
      src: "/assets/videos/video1.mp4",
    },
    {
      id: 3,
      src: "/assets/videos/video1.mp4",
    },
    {
      id: 4,
      src: "/assets/videos/video1.mp4",
    },
    {
      id: 5,
      src: "/assets/videos/video1.mp4",
    },
    {
      id: 6,
      src: "/assets/videos/video1.mp4",
    },
    {
      id: 7,
      src: "/assets/videos/video1.mp4",
    },
    {
      id: 8,
      src: "/assets/videos/video1.mp4",
    },
    {
      id: 9,
      src: "/assets/videos/video1.mp4",
    },
    {
      id: 10,
      src: "/assets/videos/video1.mp4",
    },
    {
      id: 11,
      src: "/assets/videos/video1.mp4",
    },
    {
      id: 12,
      src: "/assets/videos/video1.mp4",
    },
  ];
  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full p-6 lg:p-0">
      <div className="p-[24px]    flex items-center justify-between rounded-12 gap-4 bg-white w-full">
        <UserInfoCard />
      </div>

      <div className="flex flex-col gap-4">
        <Tabs
          handleTypeChange={handleTypeChange}
          types={types}
          selectedType={selectedType}
        />

        {selectedType == "all" && <Reels reels={reels} />}
        {selectedType == "notifications" && <Reels reels={reels} />}
        {selectedType == "sport shoes" && <Reels reels={reels} />}
      </div>
    </div>
  );
};

export default AllMyFilesAndVideos;
