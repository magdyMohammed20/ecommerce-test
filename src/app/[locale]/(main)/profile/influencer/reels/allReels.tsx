"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import UpperFilter from "./UpperFilter";
import Reels from "./Reels";

const AllReels: React.FC = () => {
  const t = useTranslations();

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
  ];
  return (
    <div>
      <div className="grid grid-cols-1 w-full gap-[24px] md:gap-[32px]  mt-6 lg:mt-0 md:mb-8 px-4 md:px-8 lg:px-0">
        <div className="justify-between items-center gap-[8px] md:gap-[16px]  overflow-hidden grid grid-cols-1   ">
          <div className="flex flex-col  gap-[16px] md:gap-[24px]">
            <div className="hidden lg:flex justify-between items-center gap-x-6 overflow-hidden bg-white py-[16px] px-[24px]  rounded-lg  w-full h-[88px] ">
              <div className="flex items-center gap-3">
                <div>
                  <h2 className="text-[20px] font-[700] tracking-[-0.6px]">
                    {t("influencer-reels")}
                  </h2>
                </div>
              </div>
            </div>

            <UpperFilter />
            <Reels reels={reels} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReels;
