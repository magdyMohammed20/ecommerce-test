"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import Image from "next/image";

import StarRate from "@/components/StarRate/StarRate";
import SliderBtn from "@/components/SliderBtn/SliderBtn";

import {
  Arrow24,
  ArrowRightIconSvg,
} from "../../../../../../public/assets/svg/categoryBarSvgs";

const reviews = [
  {
    id: 1,
    name: "Ahlam Mohamed",
    date: "May 31, 2023",
    images: [1, 2, 3],
    rate: 5,
  },
  {
    id: 2,
    name: "Ahlam Mohamed",
    date: "May 31, 2023",
    images: [1, 2, 3],
    rate: 4,
  },
  {
    id: 3,
    name: "Ahlam Mohamed",
    date: "May 31, 2023",
    images: [1, 2, 3],
    rate: 5,
  },
  {
    id: 4,
    name: "Ahlam Mohamed",
    date: "May 31, 2023",
    images: [1, 2, 3],
    rate: 2,
  },
  {
    id: 5,
    name: "Ahlam Mohamed",
    date: "May 31, 2023",
    images: [1, 2, 3],
    rate: 1,
  },
  {
    id: 6,
    name: "Ahlam Mohamed",
    date: "May 31, 2023",
    images: [1, 2, 3],
    rate: 5,
  },
  {
    id: 7,
    name: "Ahlam Mohamed",
    date: "May 31, 2023",
    images: [1, 2, 3],
    rate: 3,
  },
  {
    id: 8,
    name: "Ahlam Mohamed",
    date: "May 31, 2023",
    images: [1, 2, 3],
    rate: 5,
  },
  {
    id: 9,
    name: "Ahlam Mohamed",
    date: "May 31, 2023",
    images: [1, 2, 3],
    rate: 5,
  },
  {
    id: 10,
    name: "Ahlam Mohamed",
    date: "May 31, 2023",
    images: [1, 2, 3],
    rate: 5,
  },
];

const images = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Reviews = () => {
  const t = useTranslations();
  const [counter, setCounter] = useState<number>(0);
  const [status, setStatus] = useState<string>("");
  const [counterImages, setCounterImages] = useState<number>(0);
  const [statusImages, setStatusImages] = useState<string>("");

  const handleNextSlide = () => {
    setStatus("next");
    setCounter(counter + 1);
  };

  const handlePrevSlide = () => {
    setStatus("prev");
    setCounter(counter + 1);
  };

  const handleImagesNextSlide = () => {
    setStatusImages("next");
    setCounterImages(counterImages + 1);
  };

  const handleImagesPrevSlide = () => {
    setStatusImages("prev");
    setCounterImages(counterImages + 1);
  };

  return (
    <div className="global-slider-padding">
      <div className="bg-white lg:rounded-xl py-4 md:py-6 lg:p-8 rtl:pr-4 rtl:md:pr-8 ltr:pl-4 ltr:md:pl-8 flex flex-col gap-4 md:gap-6 lg:gap-8">
        <div className="flex items-center justify-between">
          <p className="text-primary text-28 font-bold">
            {t("Customer review")}
          </p>
          <div className="flex items-center gap-4 cursor-pointer mx-4 md:mx-8 lg:mx-0">
            <div
              className="rounded-full p-[6px] md:p-3 bg-cloud rotate-180"
              onClick={handlePrevSlide}>
              <ArrowRightIconSvg />
            </div>
            <div
              className="rounded-full p-[6px] md:p-3 bg-cloud"
              onClick={handleNextSlide}>
              <ArrowRightIconSvg />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-4 md:pb-6 lg:pb-8 border-b border-cloud">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 md:gap-4">
              <p className="text-28">4.5</p>
              <span className="hidden md:block">
                <StarRate rate={4.5} starSize={24} />
              </span>
              <span className="md:hidden">
                <StarRate rate={4.5} starSize={14} />
              </span>
            </div>
            <div className="flex items-center gap-2 text-asphalt text-16">
              <p className="ltr:pr-2 rtl:pl-2 ltr:border-r rtl:border-l border-r-asphalt/20">
                988 {t("ratings")}
              </p>
              <p>68 {t("reviews")}</p>
            </div>
          </div>

          <Swiper
            slidesPerView={"auto"}
            spaceBetween={8}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              765: { slidesPerView: "auto", spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            mousewheel={true}
            modules={[Mousewheel]}
            className="w-full h-full">
            <SliderBtn counter={counter} status={status} />
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                className="max-w-[309px] md:max-w-[344px] lg:max-w-full group cursor-pointer">
                <div className="bg-cloud p-3 md:p-4 flex flex-col gap-4 rounded-xl">
                  <div className="flex flex-col gap-2">
                    <StarRate rate={review.rate} starSize={18} />
                    <div className="flex items-center gap-2 text-asphalt text-xs md:text-sm">
                      <p className="ltr:pr-2 rtl:pl-2 ltr:border-r rtl:border-l border-r-asphalt/20">
                        {t(review.name)}
                      </p>
                      <p>{t(review.date)}</p>
                    </div>
                  </div>

                  <p className="text-primary max-w-[380px] text-sm md:text-base">
                    {t(
                      "This text is an example of text that can be replaced in the same space"
                    )}
                    .
                  </p>

                  <div className="flex items-center gap-2">
                    {review.images.map((image) => (
                      <Image
                        key={image}
                        src={"/assets/images/product/product-1.png"}
                        alt="product"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover rounded"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 md:gap-4 text-asphalt text-sm pt-2 md:pt-4 border-t border-silver/70">
                    <p>
                      {t("Size")}:{" "}
                      <span className="font-bold text-primary">
                        {t("suitable")}
                      </span>
                    </p>
                    <p className="px-2 md:px-4 border-silver border-x">
                      {t("Weight")}:{" "}
                      <span className="font-bold text-primary">45kg</span>
                    </p>
                    <p>
                      {t("Length")}:{" "}
                      <span className="font-bold text-primary">170cm</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative w-full">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={8}
            mousewheel={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              765: { slidesPerView: "auto", spaceBetween: 12 },
              1024: { slidesPerView: 10, spaceBetween: 16 },
            }}
            modules={[Mousewheel]}
            className="w-full h-full">
            <SliderBtn counter={counterImages} status={statusImages} />
            {images.map((image) => (
              <SwiperSlide
                key={image}
                className="max-w-[68px] md:max-w-[106px] lg:max-w-full cursor-pointer rounded-lg overflow-hidden">
                <Image
                  src={"/assets/images/product/product-1.png"}
                  alt="brand"
                  width={113}
                  height={113}
                  className="w-full h-full object-cover aspect-square"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <span
            onClick={handleImagesPrevSlide}
            className="absolute top-1/3 xl:top-1/2 -right-7 z-40 cursor-pointer hidden lg:block">
            <Arrow24 />
          </span>
          <span
            onClick={handleImagesNextSlide}
            className="absolute top-1/3 xl:top-1/2 -left-7 z-40 cursor-pointer rotate-180 hidden lg:block">
            <Arrow24 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
