"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";

import {
  ImageArrowLeftSvg,
  ImageArrowRightSvg,
} from "../../../public/assets/svg/product";

const images = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
  "/assets/images/product/product-4.png",
  "/assets/images/product/product-5.png",
];

const ImagesGallery = () => {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleImageChange = (index: number) => {
    setActiveIndex(index);
  };

  const handleNextImage = () => {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  return (
    <>
    {/* all images */}
    <div className="hidden lg:flex flex-col gap-2 w-full max-w-[100px]">
      {images.map((image, index) => (
        <div
          key={index}
          className="rounded-lg relative overflow-hidden cursor-pointer w-full"
          onClick={() => handleImageChange(index)}
        >
          <Image
            src={image}
            alt="product"
            width={96}
            height={142.8}
            className="h-[152.8px] w-full object-cover"
          />
          {index !== activeIndex && (
            <div className="absolute bg-black/30 top-0 w-full h-full"></div>
          )}
        </div>
      ))}
    </div>

    {/* active image */}
    <div className="relative rounded-lg overflow-hidden w-full h-full">
      <Image
        src={images[activeIndex]}
        alt="active-image"
        width={515}
        height={746}
        className=" h-full w-full object-cover aspect-square"
      />
      {/* image arrows */}
      <div className="absolute w-full h-full flex items-center justify-between top-0 px-4">
        <div
          className="cursor-pointer rtl:rotate-180"
          onClick={handlePrevImage}
        >
          <ImageArrowLeftSvg />
        </div>
        <div
          className="cursor-pointer rtl:rotate-180"
          onClick={handleNextImage}
        >
          <ImageArrowRightSvg />
        </div>
      </div>

      <div className="absolute w-full flex items-center bottom-4 mx-auto left-0 right-0 p-1 bg-white rounded-full max-w-fit text-sm">
        <button className="bg-primary px-2 lg:px-4 py-2 text-white rounded-full">
          {t("product-5")}
        </button>
        <p className="px-2 lg:px-4 text-primary py-2">
          {t("Images")} {activeIndex + 1}/{images.length} 📷
        </p>
      </div>
    </div>
  </>
  )
}

export default ImagesGallery