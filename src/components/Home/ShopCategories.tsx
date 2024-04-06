"use client";

import { useLocale } from "next-intl";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import ViewAllHeader from "../ViewAllHeader/ViewAllHeader";

const brands = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const ShopCategories = () => {
  const locale = useLocale();

  return (
    <div className="global-padding-y flex flex-col gap-4 md:gap-6 lg:gap-8">
      <ViewAllHeader title="header-5" />

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
            768:{spaceBetween:16},
            1024: {
              slidesPerView: 7,
              spaceBetween:16
            },
            1280: {
              slidesPerView: 8,
              spaceBetween:16
            },
            1536: {
              slidesPerView: 9,
              spaceBetween:16
            },
          }}
          modules={[Mousewheel]}
        >
          {brands.map((brands) => (
            <SwiperSlide
              key={brands}
              className="max-w-[83px] md:max-w-[121px] lg:max-w-full group cursor-pointer"
            >
              <div className="flex flex-col text-center gap-2">
                <Image
                  src={"/assets/images/categoryMenu/cat-1.png"}
                  alt="brand"
                  width={208}
                  height={208}
                  loading="lazy"
                  className="w-full aspect-square rounded-lg lg:rounded-2xl object-cover"
                />
                <p className="text-asphalt text-sm font-bold whitespace-nowrap">
                  Skin-care
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
          spaceBetween={16}
          mousewheel={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 7,
            },
            1280: {
              slidesPerView: 8,
            },
            1536: {
              slidesPerView: 9,
            },
          }}
          modules={[Mousewheel]}
        >
          {brands.map((brands) => (
            <SwiperSlide
              key={brands}
              className="max-w-[83px] md:max-w-[121px] lg:max-w-full group cursor-pointer"
            >
              <div className="flex flex-col text-center gap-2">
                <Image
                  src={"/assets/images/categoryMenu/cat-2.png"}
                  alt="brand"
                  width={208}
                  height={208}
                  loading="lazy"
                  className="w-full aspect-square rounded-lg lg:rounded-2xl object-cover"
                />
                <p className="text-asphalt text-sm font-bold whitespace-nowrap">
                  Skin-care
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShopCategories;
