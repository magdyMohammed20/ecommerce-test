import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";

import RatingEmojis from "./RatingEmojis";
import StarContainer from "./StarContainer";

import { Checkbox } from "@mui/material";

import {
  UnCheckboxIcon,
  CheckboxIcon,
  ImagesUploader,
} from "../../../public/assets/svg/checkoutSvg";

const data = [
  {
    id: 1,
    name: "Large",
    value: "large",
  },
  {
    id: 2,
    name: "Fit",
    value: "fit",
  },
  {
    id: 3,
    name: "Small",
    value: "small",
  },
];

const AddProductReview = () => {
  const t = useTranslations();
  const [productRate, setProductRate] = useState<string>("");
  const [productSize, setProductSize] = useState<string>("");

  const handleProductRateChange = (rate: string) => {
    setProductRate(rate);
  };

  const handleProductSizeChange = (size: string) => {
    setProductSize(size);
  };

  return (
    <div className="bg-white rounded-xl w-full flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
      <div className="flex gap-4 pb-4 lg:pb-6 border-b border-cloud">
        <Image
          alt="product"
          src="/assets/images/product/product-1.png"
          width={84}
          height={92}
          className="rounded-lg w-[70px] md:w-[84px] h-[86px] md:h-[92px] object-cover"
        />
        <div className="flex flex-col justify-between text-asphalt">
          <p className=" text-sm">{t("address-3")}</p>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-cloud flex items-center gap-1 p-1 pr-2 text-xs">
              <div className="w-[10px] h-[10px] rounded-full bg-[#8F7D7A]"></div>
              <p>{t("brown")}</p>
              <p className="text-silver">/</p>
              <p>xs</p>
            </div>
            <p className="text-xs">1x</p>
          </div>

          <p className="price-text lg:!text-base">
            <del className="price-text-del">240.99</del>
            <span>120.99 {t("SAR")}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold">{t("Rate the product")}</p>
        <RatingEmojis value={productRate} onChange={handleProductRateChange} />
      </div>

      <div className="flex flex-col gap-2 pb-4 lg:pb-6 border-b border-cloud">
        <div className="bg-cloud px-4 py-3 flex flex-col gap-1 rounded-lg">
          <p className="text-[#455560] text-sm">
            {t("Your comment on the product")}
          </p>
          <textarea
            placeholder={t("Such a high quality product")}
            className="w-full bg-transparent focus:outline-none h-[100px] text-asphalt resize-none"
          />
        </div>
        <StarContainer>
          {t("Earn points for comments over")}{" "}
          <span className="font-bold">{t("Characters")}</span>
        </StarContainer>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-sm">
          <p className="font-bold">
            {t("Size")}:{" "}
            <span className="text-asphalt font-normal text-xs">
              ({t("Optional")})
            </span>
          </p>
          <p className="text-asphalt/70 mt-1">
            {t("You can help others find the right size")}
          </p>
        </div>

        <div className="grid grid-cols-3 w-full gap-2">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full bg-cloud p-2 md:p-4 flex items-center justify-between rounded-xl text-asphalt cursor-pointer text-sm"
              onClick={() => handleProductSizeChange(item.value)}
            >
              <p
                className={`${
                  productSize === item.value && "text-primary font-bold"
                }`}
              >
                {t(item.name)}
              </p>
              <Checkbox
                checked={productSize === item.value ? true : false}
                className="!p-0"
                icon={<UnCheckboxIcon />}
                checkedIcon={<CheckboxIcon />}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-bold text-sm">
          {t("Weight and height")}:{" "}
          <span className="text-asphalt font-normal text-xs">
            ({t("Optional")})
          </span>
        </p>

        <div className="grid grid-cols-2 w-full gap-2">
          <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
            <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
              {t("Weight")}
            </p>
            <input
              type="text"
              className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
              placeholder={t("Such as:") + " 45kg"}
            />
          </div>

          <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
            <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
              {t("Height")}
            </p>
            <input
              type="text"
              className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
              placeholder={t("Such as:") + "140cm"}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-bold text-sm">{t("Add image")}:</p>

        <label htmlFor="product-images">
          <div className="cursor-pointer w-[105px] h-[100px] flex flex-col items-center justify-center bg-cloud gap-2 rounded-lg border-dashed border-asphalt border-[0.4px]">
            <ImagesUploader />
            <p className="text-asphalt/70 text-sm">(3/0)</p>
          </div>
          <input
            type="file"
            id="product-images"
            className="w-full h-full hidden"
          />
        </label>

        <StarContainer>
          {t("Earn")} <span className="font-bold">9 {t("points")}</span>{" "}
          {t("If you upload 3 pictures of the products")}
        </StarContainer>
      </div>
    </div>
  );
};

export default AddProductReview;
