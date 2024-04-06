"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";

import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import StarRate from "../StarRate/StarRate";

import {
  Color1Svg,
  Color2Svg,
  Color3Svg,
  WatchReelSvg,
  WatchReelSvg16,
  WishListSvg,
} from "../../../public/assets/svg/landingPageSvgs";
import { UpSVG } from "../../../public/assets/svg/influencer";
import { CupIconSvg } from "../../../public/assets/svg/product";
import { AddList24 } from "../../../public/assets/svg/categoryBarSvgs";

import "swiper/css/pagination";

interface Product {
  product: {
    name: string;
    image: string[];
  };
  isAdd?: boolean;
  isStats?: boolean;
}

const ProductCard = ({ product, isAdd, isStats }: Product) => {
  const locale = useLocale();
  const t = useTranslations();
  const [counter, setCounter] = useState<number>(0);
  const [isFirstVisible, setIsFirstVisible] = useState<boolean>(false);

  useEffect(() => {
    setCounter(counter + 1);
    const interval = setInterval(() => {
      setIsFirstVisible((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-2 lg:p-3 bg-white rounded-xl broder border-cloud flex flex-col gap-2 lg:gap-3">
      <div className="w-full relative">
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="w-full h-full"
        >
          {product.image.map((image, index) => (
            <SwiperSlide
              key={index}
              className="rounded-lg mx-h-[335px] overflow-hidden"
            >
              <Image
                src={image}
                alt="product"
                width={316}
                height={329}
                className="w-full h-full object-cover aspect-[15/17]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {!isStats && (
          <div className="absolute right-3 bottom-3 flex flex-col items-center gap-1 p-[2px] lg:p-1 bg-white/50 rounded-full z-10">
            <Color1Svg />
            <Color2Svg />
            <Color3Svg />
            <p className="text-[#555555] font-bold text-xs">5</p>
          </div>
        )}
        {!isStats && (
          <div className="absolute left-3 top-3 flex flex-col gap-1 z-10">
            <div className="hidden lg:block p-[10px] rounded-full bg-cloud cursor-pointer">
              <WishListSvg color="#455560" />
            </div>
            <div className="p-2 lg:p-[10px] flex items-center justify-center rounded-full bg-primary cursor-pointer">
              {isAdd ? (
                <AddList24 />
              ) : (
                <Link href={"/single-reel"}>
                  <span className="hidden lg:block">
                    <WatchReelSvg />
                  </span>
                  <span className="lg:hidden">
                    <WatchReelSvg16 />
                  </span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="px-1 flex flex-col gap-1 lg:gap-2">
        {!isStats && (
          <div className="flex items-center justify-between">
            <div className="py-[2px] px-2 rounded-full bg-cloud">
              <p className="text-primary text-[10px] lg:text-xs font-bold opacity-70">
                # {t("Beauty Tools")}
              </p>
            </div>
            <div className="hidden lg:block overflow-hidden">
              {isFirstVisible ? (
                <motion.div
                  key={counter}
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`px-2 py-[2px] flex items-center gap-[2px] text-primary text-[10px] lg:text-xs rounded-full w-fit
            ${locale === "ar" ? "trend-bg-ar" : "trend-bg"}
            `}
                >
                  <CupIconSvg />
                  <p className="font-bold">{t("#2 bestseller")}..</p>
                </motion.div>
              ) : (
                <motion.div
                  key={counter + 1}
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-[21px]"
                >
                  <StarRate rate={5} starSize={18} />
                </motion.div>
              )}
            </div>
          </div>
        )}
        {!isStats && (
          <div className="flex items-center justify-between lg:hidden">
            <StarRate rate={5} starSize={14} />
            <WishListSvg color="#01010C" />
          </div>
        )}
        <Link
          href="/product/1"
          className="text-asphalt/70 text-[10px] lg:text-sm hover:underline whitespace-nowrap lg:whitespace-normal overflow-hidden"
        >
          {product.name}
        </Link>
        {!isStats ? (
          <div className="flex items-center justify-between mb-1">
            <p className="price-text lg:!text-base">
              <del className="price-text-del">240.99</del>
              <span>120.99 {t("SAR")}</span>
            </p>
            <div className="bg-secondary py-[2px] px-1 lg:px-2 rounded-[4px]">
              <p className="text-primary text-[10px] lg:text-sm font-bold">
                50%
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <p className="text-18 font-bold">2500 {t("Buyer")}</p>
            <p className="flex items-end text-[#17BF8D] text-xs">
              <UpSVG /> 24%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
