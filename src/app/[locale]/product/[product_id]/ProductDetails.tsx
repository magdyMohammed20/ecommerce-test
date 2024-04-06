"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { ArrowDown24 } from "../../../../../public/assets/svg/categoryBarSvgs";

const tipsData = [
  {
    id: 1,
    name: "Care instructions",
    desc: "tip-1",
  },
  {
    id: 2,
    name: "additional information",
    desc: "tip-2",
  },
];

const table = [
  {
    id: 1,
    name: "Style",
    value: "Plain",
  },
  {
    id: 2,
    name: "Heel size",
    value: "Short heel (1–4 cm)",
  },
  {
    id: 3,
    name: "Heel type",
    value: "Flat",
  },
  {
    id: 4,
    name: "color",
    value: "beige",
  },
  {
    id: 5,
    name: "Closure type",
    value: "Laces",
  },
];

const loop = [1, 2];

const ProductDetails = () => {
  const t = useTranslations();
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  const handleShowMore = () => {
    setIsShowMore((prevState) => !prevState);
  };

  return (
    <div className="global-slider-padding">
      <div
        className={`bg-white p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-6 lg:gap-8 lg:rounded-xl relative overflow-hidden ${
          isShowMore ? "h-full" : "h-[334px]"
        }`}
      >
        <p className="text-28">{t("Product Details")}</p>

        <div className="grid lg:grid-cols-2 gap-4 capitalize">
          {loop.map((container) => (
            <div key={container} className="w-full rounded-lg overflow-hidden">
              {table.map((item, index) => (
                <div
                  key={item.id}
                  className={`grid grid-cols-2 items-center text-center border-silver/50 text-asphalt ${
                    index % 2 === 0 ? "bg-cloud" : "bg-cloud/50"
                  } ${index !== table.length - 1 && "border-b"}`}
                >
                  <p className="text-sm border-silver/50 rtl:border-l ltr:border-r py-4">
                    {t(item.name)}
                  </p>
                  <p className="font-bold">{t(item.value)}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-[88px]">
          {tipsData.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <p className="font-bold capitalize">{t(item.name)}</p>
              <p className="text-asphalt text-16">{t(item.desc)}</p>
            </div>
          ))}
        </div>

        <div
          className={`absolute w-full bottom-0 left-0 right-0 h-[182px] flex items-end justify-center pb-8 z-20 ${
            !isShowMore && "show-more-bg"
          }`}
        >
          <div
            onClick={handleShowMore}
            className="w-fit cursor-pointer bg-cloud rounded-full flex gap-1 p-4"
          >
            <p className="text-asphalt font-bold">
              {isShowMore ? t("Show less") : t("Show more")}
            </p>
            <span className={`${isShowMore && "rotate-180"}`}>
              <ArrowDown24 />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
