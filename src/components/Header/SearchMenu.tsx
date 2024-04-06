"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";
import {
  ExitIconSvg,
  FireIconSvg,
  RotateIconSvg,
  SearchedIconSvg,
  StarIconSvg,
} from "../../../public/assets/svg/searchMenu";

const data = [
  {
    id: 1,
    name: "Ghaith Marwan",
    image: "/assets/images/hero/icon-1.png",
  },
  {
    id: 2,
    name: "bag",
    image: "",
  },
  {
    id: 3,
    name: "Osama Marwa",
    image: "/assets/images/hero/icon-2.png",
  },
  {
    id: 4,
    name: "Hermes",
    image: "",
  },
];

const recommended = [
  {
    id: 1,
    name: "Cosmetics",
  },
  {
    id: 2,
    name: "shoes",
  },
  {
    id: 3,
    name: "accessories",
  },
  {
    id: 4,
    name: "clothes",
  },
  {
    id: 5,
    name: "Sports sets",
  },
  {
    id: 6,
    name: "clothes",
  },
  {
    id: 7,
    name: "Sports sets",
  },
];

const most = [
  {
    id: 1,
    name: "Cosmetics",
  },
  {
    id: 2,
    name: "shoes",
  },
  {
    id: 3,
    name: "accessories",
  },
  {
    id: 4,
    name: "clothes",
  },
];

const SearchMenu = () => {
  const t = useTranslations();

  return (
    <div className="absolute z-20 h-[85vh] overflow-scroll hide-scrollbar max-h-[648px] top-[55px] lg:top-[63px] bg-cloud w-full p-6 flex flex-col gap-4 left-0 md:rounded-[16px] md:border border-silver">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-full text-sm font-bold">
          <div className="flex items-center gap-1">
            <RotateIconSvg />
            <p className="text-primary text-base">{t("Histroy")}</p>
          </div>
          <p className="text-asphalt">{t("Delete all history")}</p>
        </div>

        <div className="bg-white w-full rounded-[12px]">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-b-silver/30 p-3"
            >
              <div className="flex items-center gap-2">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt="follower"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] rounded-full"
                    
                    loading="lazy"
                  />
                ) : (
                  <div className="bg-cloud w-[30px] h-[30px] rounded-full flex items-center justify-center">
                    <SearchedIconSvg />
                  </div>
                )}

                <p className="text-asphalt font-bold text-sm">{item.name}</p>
              </div>
              <span className="cursor-pointer opacity-40">
              <ExitIconSvg />
              </span>
            </div>
          ))}

          <p className="text-center text-primary text-[14px] font-bold my-3">
            {t("Show more")}
          </p>
        </div>
      </div>

      <div className="bg-white w-full rounded-[12px] p-4 flex flex-col gap-4 text-sm">
        <div className="flex items-center gap-1">
          <StarIconSvg />
          <p className="text-primary font-bold">{t("Recommended for you")}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {recommended.map((item) => (
            <div key={item.id} className="rounded-full py-2 px-3 bg-cloud">
              <p className="text-asphalt whitespace-nowrap">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white w-full rounded-[12px] p-4 flex flex-col gap-4 text-sm">
        <div className="flex items-center gap-1">
          <FireIconSvg />
          <p className="text-primary font-bold">{t("Popular searches")}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {most.map((item) => (
            <div key={item.id} className="rounded-full py-2 px-3 bg-cloud">
              <p className="text-asphalt whitespace-nowrap">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
