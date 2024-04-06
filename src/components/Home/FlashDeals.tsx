"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import HomeSliderBtns from "./HomeSliderBtns";
import SliderBtn from "../SliderBtn/SliderBtn";

import { SaleSvg } from "../../../public/assets/svg/landingPageSvgs";
import ViewAllHeader from "../ViewAllHeader/ViewAllHeader";

const products = [
  {
    id: 1,
    name: "This text is an example that can be replaced..",
    image: "/assets/images/landingPage/product-1.png",
  },
  {
    id: 2,
    name: "This text is an example that can be replaced..",
    image: "/assets/images/landingPage/product-1.png",
  },
  {
    id: 3,
    name: "This text is an example that can be replaced..",
    image: "/assets/images/landingPage/product-1.png",
  },
  {
    id: 4,
    name: "This text is an example that can be replaced..",
    image: "/assets/images/landingPage/product-1.png",
  },
  {
    id: 5,
    name: "This text is an example that can be replaced..",
    image: "/assets/images/landingPage/product-1.png",
  },
  {
    id: 6,
    name: "This text is an example that can be replaced..",
    image: "/assets/images/landingPage/product-1.png",
  },

  {
    id: 7,
    name: "This text is an example that can be replaced..",
    image: "/assets/images/landingPage/product-1.png",
  },
  {
    id: 8,
    name: "This text is an example that can be replaced..",
    image: "/assets/images/landingPage/product-1.png",
  },
  {
    id: 9,
    name: "This text is an example that can be replaced..",
    image: "/assets/images/landingPage/product-1.png",
  },
  {
    id: 10,
    name: "This text is an example that can be replaced..",
    image: "/assets/images/landingPage/product-1.png",
  },
];

const FlashDeals = () => {
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
    <div className="global-padding-y flex flex-col gap-4 md:gap-6 lg:gap-8">
      <ViewAllHeader title="header-1" />

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
            768: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
          }}
          modules={[Mousewheel]}
        >
          <SliderBtn counter={counter} status={status} />
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="w-full max-w-[148px] md:max-w-[224px] lg:max-w-full group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl h-full w-full mb-2">
                <Image
                  src={product.image}
                  alt="product"
                  width={260}
                  height={300}
                  className="w-full h-full aspect-[21/23] group-hover:scale-110 duration-500 ease-in-out object-cover"
                  loading="lazy"
                />
                <div
                  className={`absolute bg-secondary w-[34px] h-[52px] md:w-[46px] md:h-[78px] flex flex-col items-center justify-center gap-2 top-0
                ${
                  locale === "ar" ? "right-0" : "left-0"
                } rounded-ss-2xl rounded-ee-2xl`}
                >
                  <SaleSvg />
                  <p className="text-primary font-bold text-xs md:text-sm">
                    50%
                  </p>
                </div>
              </div>
              <div>
                <Link
                  href="/product/1"
                  className="text-asphalt/70 text-xs md:text-sm hover:underline line-clamp-1"
                >
                  {product.name}
                </Link>
                <p className="price-text">
                  <del className="price-text-del">240.99</del>
                  <span>120.99 {t("SAR")}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <HomeSliderBtns onNext={handleNextSlide} onPrev={handlePrevSlide} className="!top-1/3" />
      </div>
    </div>
  );
};

export default FlashDeals;
