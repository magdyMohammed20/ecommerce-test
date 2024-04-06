"use client";

import { useLocale } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";

import ViewAllHeader from "../ViewAllHeader/ViewAllHeader";
import InfluencerCard from "../InfluencerCard/InfluencerCard";

const influencers = [
  {
    id: 1,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 2,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 3,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 4,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 5,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 6,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },

  {
    id: 7,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 8,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 9,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 10,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
];

const SamValleyInfluencers = () => {
  const locale = useLocale();

  return (
    <div className="global-padding-y flex flex-col gap-4 md:gap-6 lg:gap-8">
      <ViewAllHeader title="header-4" />

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
          }}
          className="w-full h-full mySwiper"
        >
          {influencers.map((influencer) => (
            <SwiperSlide
              key={influencer.id}
              className="max-w-[298px] lg:max-w-full"
            >
              <InfluencerCard influencer={influencer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SamValleyInfluencers;
