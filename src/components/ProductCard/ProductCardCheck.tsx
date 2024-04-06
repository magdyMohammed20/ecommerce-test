"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Checkbox } from "@mui/material";

import StarRate from "../StarRate/StarRate";

import { WatchReelSvg16 } from "../../../public/assets/svg/landingPageSvgs";
import {
  FilterUnCheckBoxShadow,
  FilterCheckBox,
} from "../../../public/assets/svg/searchSvgs";

import "swiper/css/pagination";

interface Product {
  product: {
    name: string;
    image: string[];
    id: number;
  };
  selectedIds: number[];
  onChange: (id:number) => void;
}

const ProductCardCheck = ({ product, selectedIds, onChange }: Product) => {
  const t = useTranslations();

  return (
    <div className="w-full p-2 bg-white rounded-xl broder border-cloud flex flex-col gap-2">
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
                className="w-full h-full object-cover aspect-square"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute px-2 top-2 flex justify-between w-full z-10">
          <Checkbox
            checked={selectedIds.includes(product.id)}
            className="!p-0"
            icon={<FilterUnCheckBoxShadow />}
            checkedIcon={<FilterCheckBox />}
            onChange={() => onChange(product.id)}
          />
          <div className="p-2 rounded-full bg-primary cursor-pointer">
            <WatchReelSvg16 />
          </div>
        </div>
      </div>
      <div className="px-1 flex flex-col gap-1 lg:gap-2">
        <div className="py-[2px] px-2 rounded-full bg-cloud w-fit">
          <p className="text-primary text-[10px] lg:text-xs font-bold opacity-70">
            # {t("Beauty Tools")}
          </p>
        </div>
        <StarRate rate={5} starSize={18} />
        <p className="text-asphalt/70 text-[12px] whitespace-nowrap lg:whitespace-normal overflow-hidden">
          {product.name}
        </p>
        <p className="text-14 font-bold">120.99 {t("SAR")}</p>
      </div>
    </div>
  );
};

export default ProductCardCheck;
