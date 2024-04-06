"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

import Image from "next/image";

import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import HomeSliderBtns from "./HomeSliderBtns";
import SliderBtn from "../SliderBtn/SliderBtn";
import ViewAllHeader from "../ViewAllHeader/ViewAllHeader";

import {
  BagSvg,
  Star20,
  TrendSvg,
  ViewsSvg,
} from "../../../public/assets/svg/landingPageSvgs";

const reels = [
  {
    id: 1,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 2,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 3,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 4,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 5,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 6,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 7,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 8,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
  },
];

const FlashDeals = () => {
  const locale = useLocale();
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
    <div className="global-padding-y flex flex-col gap-4 md:gap-6 lg:gap-8">
      <ViewAllHeader title="header-2" />

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
            768: { spaceBetween: 16 },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          modules={[Mousewheel]}
        >
          <SliderBtn counter={counter} status={status} />
          {reels.map((reel) => (
            <SwiperSlide
              key={reel.id}
              className="w-full h-full max-w-[293px] lg:max-w-full max-h-[443px] lg:max-h-[458px] xl:min-h-[494px] group cursor-pointer"
            >
              <div className="relative w-full h-full rounded-2xl aspect-video">
                <video
                  src={reel.video}
                  loop
                  autoPlay
                  muted
                  className="object-cover absolute h-full w-full top-0 left-0 bottom-0 -z-10 right-0 rounded-2xl"
                ></video>
                <div className="bg-black/40 flex p-2 lg:p-3 flex-col justify-between w-full h-full min-h-[443px] lg:min-h-[458px] xl:min-h-[494px] relative rounded-2xl">
                  <div
                    className={`absolute top-0 ${
                      locale === "ar" ? "left-6" : "right-6"
                    }`}
                  >
                    <TrendSvg />
                  </div>
                  <div className="rounded-full 2xl py-2 px-3 flex items-center gap-2 text-white text-xs w-fit bg-primary/40 drop-filter">
                    <div className="flex items-center gap-1 z-20">
                      <ViewsSvg />
                      <p>5M</p>
                    </div>
                    <div className="flex items-center gap-1 z-20">
                      <BagSvg />
                      <p>5K</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-white">
                    <div className="rounded-full py-1 px-2 bg-[#01010C]/40 drop-filter text-[10px] font-bold w-fit">
                      {reel.name}
                    </div>
                    <div className="rounded-full p-1 lg:p-[6px] bg-[#01010C]/40 drop-filter text-sm w-full flex items-center gap-1">
                      <Image
                        src={"/assets/images/categoryMenu/item-1.png"}
                        alt="product"
                        width={50}
                        height={48}
                        className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] rounded-full"
                        loading="lazy"
                      />
                      <div className="flex flex-col lg:gap-1 text-[10px] lg:text-xs w-full pr-4">
                        <p>#TheOrdinary</p>
                        <p>Facial serum containing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <HomeSliderBtns onNext={handleNextSlide} onPrev={handlePrevSlide} />
      </div>
    </div>
  );
};

export default FlashDeals;
