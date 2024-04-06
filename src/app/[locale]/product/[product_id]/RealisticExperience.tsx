"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ReelCard from "@/components/ReelCard/ReelCard";
import SliderBtn from "@/components/SliderBtn/SliderBtn";
import HomeSliderBtns from "@/components/Home/HomeSliderBtns";

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
];

const RealisticExperience = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [counter, setCounter] = useState<number>(0);
  const [status, setStatus] = useState<string>("");

  const handleNextSlide = () => {
    setStatus("next");
    setCounter(counter + 1);
  };

  const handlePrevSlide = () => {
    setStatus("prev");
    setCounter(counter + 1);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
      <div className="flex items-center justify-between w-full font-bold global-padding">
        <p className="text-34">{t("product-4")}</p>
      </div>
      <div
        className={`${
          locale === "ar"
            ? "home-slider-container-ar"
            : "home-slider-container-en"
        }`}
      >
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={12}
          mousewheel={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          modules={[Mousewheel]}
        >
          <SliderBtn counter={counter} status={status} />
          {reels.map((reel) => (
            <SwiperSlide
              key={reel.id}
              className="w-full max-w-[111px] md:max-w-[151px] lg:max-w-full lg:max-h-[500px] group cursor-pointer"
            >
              <ReelCard reel={reel} />
            </SwiperSlide>
          ))}
        </Swiper>
        <HomeSliderBtns onNext={handleNextSlide} onPrev={handlePrevSlide} />
      </div>
    </div>
  );
};

export default RealisticExperience;
