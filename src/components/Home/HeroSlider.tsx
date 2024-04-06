"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations, useLocale } from "next-intl";

import "swiper/css";
import { Mousewheel } from "swiper/modules";

import Image from "next/image";
import {
  BannerFire16,
  SliderArrowSvg,
} from "../../../public/assets/svg/landingPageSvgs";
import HeroSliderBtn from "./HeroSliderBtn";
import StarRate from "../StarRate/StarRate";

const reels = [
  {
    id: 1,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
    image: "/assets/images/hero/icon-1.png",
  },
  {
    id: 2,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
    image: "/assets/images/hero/icon-1.png",
  },
  {
    id: 3,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
    image: "/assets/images/hero/icon-1.png",
  },
  {
    id: 4,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
    image: "/assets/images/hero/icon-1.png",
  },
  {
    id: 5,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
    image: "/assets/images/hero/icon-1.png",
  },
  {
    id: 6,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
    image: "/assets/images/hero/icon-1.png",
  },
  {
    id: 7,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
    image: "/assets/images/hero/icon-1.png",
  },
  {
    id: 8,
    name: "Ghaith Marwan",
    video: "/assets/videos/video1.mp4",
    image: "/assets/images/hero/icon-1.png",
  },
];

const HeroSlider = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [counter, setCounter] = useState<number>(0);

  const handleNextSlide = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="h-full pb-8 lg:pb-0 w-full overflow-hidden global-padding-l-r lg:px-0 flex items-center gap-6 lg:absolute top-0 ltr:right-0 rtl:left-0 lg:max-w-[40vw]">
      <div
        className={`bg-[#01010C66] rounded-full p-3 cursor-pointer lg:block hidden
        ${locale === "en" && "rotate-180"}`}
        onClick={handleNextSlide}
      >
        <SliderArrowSvg />
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={12}
        loop={true}
        breakpoints={{
          765: { spaceBetween: 16 },
          1024: { spaceBetween: 24 },
        }}
        mousewheel={true}
        modules={[Mousewheel]}
      >
        <HeroSliderBtn counter={counter} />
        {reels.map((reel) => (
          <SwiperSlide
            key={reel.id}
            className="max-w-[308px] md:max-w-[380px] lg:max-w-[436px] group cursor-pointer"
          >
            <div className="relative min-h-[476px] md:min-h-[543px] lg:min-h-[621px] rounded-2xl flex flex-col items-center p-3 md:p-4 lg:p-6 justify-end gap-4">
              <video
                src={reel.video}
                loop
                autoPlay
                muted
                className="object-cover absolute h-full w-full top-0 left-0 bottom-0 -z-10 right-0 rounded-2xl"
              ></video>
              <div
                className={`bg-black/25 rounded-full border border-white/20 p-1 flex items-center gap-1
              ${locale === "ar" ? "pl-4" : "pr-4"}
              `}
              >
                <Image
                  src={reel.image}
                  alt="reel"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px] rounded-full border border-cloud"
                  loading="lazy"
                />
                <p className="text-white text-xs font-bold">{reel.name}</p>
              </div>
              <div className="p-4 bg-black/25 rounded-xl flex flex-col gap-2 text-white w-full">
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] leading-4">#TheOrdinary</p>
                    <StarRate rate={5} starSize={14} />
                  </div>
                  <p className="text-sm text-start line-clamp-1 lg:text-base font-bold leading-5">
                    Facial serum containing niacinamide
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="py-1 px-2 bg-cloud/20 rounded-full flex items-center gap-1">
                    <p className="w-4 h-4 rounded-full bg-[#E07900]"></p>
                    <p className="w-4 h-4 rounded-full bg-[#01010C]"></p>
                    <p className="w-4 h-4 rounded-full bg-[#F2F5F8]"></p>
                    <p className="text-sm font-bold">5</p>
                  </div>
                  <button className="rounded-full bg-secondary py-2 px-3 text-primary text-xs font-bold flex items-center gap-1">
                    <BannerFire16 />
                    <p>{t("Order it now")}</p>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
