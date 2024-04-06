import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";

import { Checkbox } from "@mui/material";

import { ReelWatchSvg } from "../../../../../../../public/assets/svg/product";
import { MerchantEye } from "../../../../../../../public/assets/svg/searchMenu";
import {
  FlashIcon,
  HashTag,
} from "../../../../../../../public/assets/svg/marketingRequests";
import { ArrowSvg } from "../../../../../../../public/assets/svg/sidebar";
import {
  FilterCheckBox,
  FilterUnCheckBox,
} from "../../../../../../../public/assets/svg/searchSvgs";
import { Arrow16 } from "../../../../../../../public/assets/svg/categoryBarSvgs";

const data = [
  {
    id: 1,
    name: "حذاء رياضي Carina Street Blossom..",
    image: "/assets/images/product/product-1.png",
    checked: false,
  },
  {
    id: 2,
    name: "حذاء رياضي Carina Street Blossom..",
    image: "/assets/images/product/product-1.png",
    checked: false,
  },
  {
    id: 3,
    name: "حذاء رياضي Carina Street Blossom..",
    image: "/assets/images/product/product-1.png",
    checked: false,
  },
  {
    id: 4,
    name: "حذاء رياضي Carina Street Blossom..",
    image: "/assets/images/product/product-1.png",
    checked: false,
  },
];

interface Props {
  selectedReel: string;
  openCategory: () => void;
  selectedCategories: string[];
}

const ReelInfo = ({
  selectedReel,
  openCategory,
  selectedCategories,
}: Props) => {
  const t = useTranslations();
  const [products, setProducts] = useState(data);

  const handleProductChange = (id: number) => {
    setProducts((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };

  return (
    <div className="p-4 md:p-8 grid lg:grid-cols-3 gap-4 md:gap-6 rounded-12 bg-white">
      <div className="relative h-fit w-full max-w-[314px] mx-auto rounded-12 overflow-hidden">
        <video className="w-full">
          <source src={selectedReel} type="video/mp4" />
        </video>
        <div className="absolute inset-0 p-2 md:p-4 w-full h-full bg-black/20 z-20">
          <div className="flex flex-col justify-between h-full items-end">
            <span className="p-2 md:p-3 rounded-full bg-primary/40 cursor-pointer">
              <span className="hidden md:block">
                <MerchantEye width="20" height="20" color="white" />
              </span>
              <span className="md:hidden">
                <MerchantEye width="16" height="16" color="white" />
              </span>
            </span>
            <span className="hidden md:block">
              <ReelWatchSvg width="24" height="24" />
            </span>
            <span className="md:hidden">
              <ReelWatchSvg width="16" height="16" />
            </span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-6 lg:rtl:pr-6 lg:rtl:border-r lg:ltr:pl-6 lg:ltr:border-l border-cloud">
        <div className="p-3 px-4 flex flex-col gap-1 rounded-12 bg-cloud">
          <p className="text-asphalt text-[10px] md:text-sm">
            {t("Description")}
          </p>
          <textarea
            className="bg-transparent border-none text-sm md:text-base focus:outline-none resize-none h-[100px] hide-scrollbar md:min-w-[576px]"
            placeholder={t(
              "Write what's on your mind and don't forget to add the hashtag!"
            )}
          ></textarea>
        </div>

        <div className="py-6 border-y border-cloud flex items-center justify-between">
          <div className="flex items-start gap-2">
            <HashTag />
            <div className="flex flex-col gap-1">
              <p className="font-bold">{t("Add categories")}</p>
              {selectedCategories.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  {selectedCategories.map((item, index) => (
                    <div
                      key={index}
                      className="py-1 px-2 rounded-full bg-cloud text-asphalt text-xs"
                    >
                      #{t(item)}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-asphalt text-xs">
                  {t("Helps match Reels clip to the right viewers")}
                </p>
              )}
            </div>
          </div>

          <span
            onClick={openCategory}
            className="p-1 rounded-full bg-cloud ltr:rotate-180 cursor-pointer"
          >
            <span className="hidden md:block">
              <ArrowSvg />
            </span>
            <span className="md:hidden">
              <Arrow16 />
            </span>
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <FlashIcon />
            <p className="font-bold">{t("The product you are promoting")}</p>
          </div>

          <div className="grid xl:grid-cols-2 gap-4">
            {products.map((item) => (
              <div
                key={item.id}
                onClick={() => handleProductChange(item.id)}
                className="p-3 flex items-start justify-between gap-4 rounded-lg bg-cloud/50 cursor-pointer"
              >
                <div className="flex items-start gap-2">
                  <div className="w-[67px] h-[75px] rounded-lg overflow-hidden">
                    <Image
                      alt="product"
                      src={item.image}
                      width={67}
                      height={75}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="px-2 py-[2px] rounded-full w-fit bg-silver/70 text-black/70 font-bold text-xs">
                      # {t("Hermes")}
                    </div>
                    <p className="text-asphalt text-sm">{item.name}</p>
                  </div>
                </div>

                <Checkbox
                  checked={item.checked}
                  className="!p-0"
                  icon={<FilterUnCheckBox />}
                  checkedIcon={<FilterCheckBox />}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelInfo;
