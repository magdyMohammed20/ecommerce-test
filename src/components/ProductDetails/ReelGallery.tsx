"use client";

import { useState } from "react";

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

const ReelGallery = () => {
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
    <div className="hidden lg:grid gap-2">
      {images.map((image, index) => (
        <div
          key={index}
          className="rounded-lg relative overflow-hidden cursor-pointer w-full h-full"
          onClick={() => handleImageChange(index)}
        >
          <Image
            src={image}
            alt="product"
            width={96}
            height={142.8}
            className="w-full h-full object-cover"
          />
          {index !== activeIndex && (
            <div className="absolute bg-black/40 top-0 w-full h-full"></div>
          )}
        </div>
      ))}
    </div>

    {/* active image */}
    <div className="relative rounded-lg h-full overflow-hidden w-full max-h-[572px]">
      <Image
        src={images[activeIndex]}
        alt="active-image"
        width={515}
        height={500}
        className="h-full w-full object-cover aspect-square"
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
    </div>
  </>
  )
}

export default ReelGallery