"use client";

import { useLocale } from "next-intl";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import ViewAllHeader from "../ViewAllHeader/ViewAllHeader";

const brands = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Brands = () => {
  const locale = useLocale();

  return (
    <div className="global-padding-y flex flex-col gap-4 md:gap-6 lg:gap-8">
      <ViewAllHeader title="header-7" />

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
              slidesPerView: 7,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 8,
              spaceBetween: 16,
            },
          }}
          modules={[Mousewheel]}
        >
          {brands.map((brand) => (
            <SwiperSlide
              key={brand}
              className="max-w-[83px] md:max-w-[122px] lg:max-w-full group cursor-pointer border border-silver rounded-full overflow-hidden"
            >
              <Image
                src={"/assets/images/landingPage/brand-img.png"}
                alt="brand"
                width={208}
                height={208}
                className="w-full rounded-full object-cover aspect-square"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
