"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";

import StarRate from "@/components/StarRate/StarRate";

import {
  CameraSvg,
  CupIconSvg,
  Policy1Svg,
  Policy2Svg,
  Policy3Svg,
  PriceArrowSvg,
  RuleIcon,
  ShareIconSvg,
  StoreCartSvg,
  StorePersonSvg,
  StoreStarSvg,
} from "../../../../../public/assets/svg/product";
import { WishListSvg } from "../../../../../public/assets/svg/landingPageSvgs";
import SizeGuide from "./SizeGuide";
import { addCookie } from "@/app/actions";

const product = {
  name: "Hermes",
  desc: "Women's casual sports shoes fashion lace-up",
  price: "120.99",
  reviews: "(15K)",
  sizes: [36, 37, 38, 39, 40],
  images: [
    "/assets/images/product/product-1.png",
    "/assets/images/product/product-2.png",
    "/assets/images/product/product-3.png",
    "/assets/images/product/product-4.png",
    "/assets/images/product/product-5.png",
  ],
  storeName: "Maria's store",
};

const policies = [
  {
    name: "Safe shopping",
    desc: "Your data is always",
    icon: <Policy1Svg />,
  },
  {
    name: "Free returns",
    desc: "Free returns within 15 days",
    icon: <Policy2Svg />,
  },
  {
    name: "Reliable shipping",
    desc: "Free delivery when you purchase products of 100 riyals or more",
    icon: <Policy3Svg />,
  },
];

const ProductInfo = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [showSizes, setShowSizes] = useState<boolean>(false);
  const [selectedImage, setselectedImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0]);

  const handleImageChange = (index: number) => {
    setselectedImage(index);
  };

  const handleSizeChange = (size: number) => {
    setSelectedSize(size);
  };

  const handleShowSizes = () => {
    setShowSizes((prevState) => !prevState);
  };

  const handleAddToCart = async () => {
    // await addCookie("cart", "show");
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full">
      <div className="pb-6 border-b border-b-cloud flex flex-col gap-4 bg-white p-4 md:p-6 lg:p-0">
        {/* product name */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div
              className={`px-2 py-[2px] flex items-center gap-[2px] text-primary text-[10px] lg:text-xs rounded-full w-fit
            ${locale === "ar" ? "trend-bg-ar" : "trend-bg"}
            `}
            >
              <CupIconSvg />
              <p className="font-bold">{t("#2 bestseller")}</p>
              <p>{t("this week")}</p>
            </div>
            <p className="text-primary font-bold">{t(product.name)}</p>
            <p className="text-asphalt text-sm">{t(product.desc)}</p>
          </div>
          <div className="p-3 rounded-full bg-cloud">
            <ShareIconSvg color="#455560" />
          </div>
        </div>
        {/* product price */}
        <div className="p-2 lg:p-4 flex items-center justify-between bg-cloud rounded-lg">
          <p className="text-primary text-base lg:text-[22px] font-bold flex items-center gap-1">
            {product.price} {t("SAR")}
            <span className="text-asphalt text-[10px] lg:text-xs font-normal">
              ({t("VAT included")})
            </span>
          </p>
          <div className="flex items-center gap-1 lg:gap-2">
            <StarRate rate={5} starSize={18} />
            <div className="flex items-center gap-[2px]">
              <p className="text-asphalt text-xs lg:text-base">
                {product.reviews}
              </p>
              <CameraSvg />
            </div>
            <div className="ltr:rotate-180">
              <PriceArrowSvg />
            </div>
          </div>
        </div>
      </div>
      {/* sizes */}
      <div className="flex flex-col gap-2 bg-white p-4 md:p-6 lg:p-0">
        <div className="flex items-center justify-between w-full">
          <p className="text-primary font-bold">{t("Size")}</p>
          <div
            onClick={handleShowSizes}
            className="flex items-center gap-2 cursor-pointer"
          >
            <RuleIcon />
            <p className="text-asphalt/70">{t("Size reference")}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size: any) => (
            <div
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`cursor-pointer py-1 lg:py-2 w-full max-w-[50px] lg:max-w-[66px] text-center rounded-[34px] border
                ${
                  size === selectedSize
                    ? "bg-primary border-primary text-white"
                    : "text-asphalt border-silver"
                }
                `}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      {/* color */}
      <div className="flex flex-col gap-2 bg-white p-4 md:p-6 lg:p-0">
        <p className="text-primary font-bold">{t("Color")}</p>
        <div className="flex flex-wrap gap-2">
          {product.images.map((image: any, index: number) => (
            <div
              key={index}
              className={`w-[72px] h-[72px] p-1 border rounded-lg cursor-pointer
                ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-transparent"
                }
                `}
              onClick={() => handleImageChange(index)}
            >
              <Image
                src={image}
                alt="product-color"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
      {/* add to cart */}
      <div className="!pb-6 border-b border-cloud flex items-center gap-2 bg-white p-4 md:p-6 lg:p-0 fixed bottom-0 lg:static z-40 w-full border-silver/50 border-t lg:border-none">
        <button onClick={handleAddToCart} className="text-white bg-primary rounded-full w-full text-center py-4">
          {t("Add to cart")}
        </button>
        <div className="cursor-pointer p-4 bg-cloud rounded-full">
          <WishListSvg color="#455560" />
        </div>
      </div>
      {/* policies */}
      <div className="lg:bg-cloud rounded-lg p-4 md:p-6 lg:p-4 flex flex-col gap-4 justify-between bg-white">
        {policies.map((policiy: any) => (
          <div key={policiy.name} className="flex items-center gap-2">
            <div className="p-2 bg-asphalt/10 rounded-full">{policiy.icon}</div>
            <div className="flex flex-col gap-1">
              <p className="text-primary text-sm font-bold">
                {t(policiy.name)}
              </p>
              <p className="text-asphalt text-xs">{t(policiy.desc)}</p>
            </div>
          </div>
        ))}
      </div>
      {/* store data */}
      <div className="flex justify-between items-start bg-white p-4 md:p-6 lg:p-0">
        <div className="flex gap-2">
          <div className="rounded-full border border-cloud overflow-hidden">
            <Image
              src={"/assets/images/product/store-img.png"}
              alt="store-image"
              width={44}
              height={44}
              className="object-cover h-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-primary font-bold leading-[27px]">
              {product.storeName}
            </p>
            <div className="flex items-center gap-2 text-asphalt text-xs">
              <div className="flex items-center gap-[2px]">
                <StorePersonSvg />
                <p>1M</p>
              </div>
              <div className="flex items-center gap-[2px]">
                <StoreCartSvg />
                <p>2K</p>
              </div>
              <div className="flex items-center gap-[2px]">
                <StoreStarSvg />
                <p>4.5</p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-primary rounded-full text-white py-2 px-6 text-sx font-bold">
          {t("Follow")}
        </button>
      </div>

      {showSizes && <SizeGuide onClose={handleShowSizes} />}
    </div>
  );
};

export default ProductInfo;
