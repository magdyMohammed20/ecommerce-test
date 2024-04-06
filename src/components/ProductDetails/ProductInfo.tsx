import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";

import StarRate from "@/components/StarRate/StarRate";

import { CupIconSvg } from "../../../public/assets/svg/product";
import { Arrow16 } from "../../../public/assets/svg/categoryBarSvgs";
import { AddBtn, MinusBtn } from "../../../public/assets/svg/cart";

const product = {
  name: "Hermes",
  desc: "Women's casual sports shoes fashion lace-up",
  price: "120.99",
  sizes: [36, 37, 38, 39,],
  images: [
    "/assets/images/product/product-1.png",
    "/assets/images/product/product-2.png",
    "/assets/images/product/product-3.png",
    "/assets/images/product/product-4.png",
  ],
};

const ProductInfo = ({ isCart }: { isCart?: boolean }) => {
  const locale = useLocale();
  const t = useTranslations();
  const [selectedImage, setselectedImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0]);

  const handleImageChange = (index: number) => {
    setselectedImage(index);
  };

  const handleSizeChange = (size: number) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="pb-6 border-b border-cloud flex flex-col gap-4">
        {/* top container */}
        <div className="pb-4 border-b border-cloud flex justify-between items-start">
          <div className="flex flex-col gap-1 text-asphalt">
            <div className="px-2 py-[2px] bg-cloud w-fit rounded-full font-bold text-[10px] md:text-xs">
              # {t(product.name)}
            </div>
            <StarRate rate={5} starSize={18} />
            <p className="text-sm md:text-base line-clamp-1">{t(product.desc)}</p>
          </div>

          <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
            <p className="text-xs md:text-sm">{t("More details")}</p>
            <span className="ltr:rotate-180 p-1 bg-cloud rounded-full">
              <Arrow16 />
            </span>
          </div>
        </div>

        {/* bottom container */}
        <div className="flex items-center justify-between">
          {/* product price  */}
          <p className="text-primary text-base lg:text-[22px] font-bold flex items-center gap-1">
            {product.price} {t("SAR")}
            <span className="text-asphalt text-[10px] lg:text-xs font-normal">
              ({t("VAT included")})
            </span>
          </p>

          {/* trend */}
          <div
            className={`px-2 py-[2px] flex items-center gap-[2px] text-primary text-[10px] lg:text-xs rounded-full w-fit
            ${locale === "ar" ? "trend-bg-ar" : "trend-bg"}
            `}
          >
            <CupIconSvg />
            <p className="font-bold">{t("#2 bestseller")}</p>
            <p>{t("this week")}</p>
          </div>
        </div>
      </div>

      {/* color */}
      <div className="flex flex-col gap-2">
        <p className="text-primary font-bold text-sm md:text-base">
          {t("Select color:")}
        </p>
        <div className="flex flex-wrap">
          {product.images.map((image: any, index: number) => (
            <div
              key={index}
              className={`p-[6px] border rounded-lg cursor-pointer
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
                className="w-8 md:w-[64px] h-8 md:h-[64px] object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* sizes */}
      <div className="flex flex-col gap-2">
        <p className="text-primary font-bold text-sm md:text-base">
          {t("Select Size:")}
        </p>
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

      {isCart && (
        <div className="flex flex-col gap-2">
          <p className="text-primary font-bold text-sm md:text-base">
            {t("Quantity:")}
          </p>
          <div className="px-2 py-2 bg-cloud w-fit flex items-center gap-1 md:gap-3 rounded-full text-asphalt overflow-hidden">
            <p
              className="cursor-pointer"
            >
              <MinusBtn />
            </p>
            <p className="px-2 md:px-3 border border-silver/50 border-b-0 border-t-0">
              1
            </p>
            <p
              className="cursor-pointer"
            >
              <AddBtn />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
