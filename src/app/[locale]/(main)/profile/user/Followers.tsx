"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";

import {
  FollowingIcon,
  InfluencerIcon,
  MarketIcon,
} from "../../../../../../public/assets/svg/searchSvgs";
import {
  EyeSvg14,
  InfluenceCartSvg14,
  PersonsSvg14,
} from "../../../../../../public/assets/svg/landingPageSvgs";
import {
  StoreCartSvg,
  StorePersonSvg,
  StoreStarSvg,
} from "../../../../../../public/assets/svg/product";

const types = [
  {
    id: 1,
    name: "Influencers",
    value: "influencers",
    icon: {
      light: <InfluencerIcon color="white" />,
      dark: <InfluencerIcon color="#455560" />,
    },
  },
  {
    id: 2,
    name: "Market",
    value: "market",
    icon: {
      light: <MarketIcon color="white" />,
      dark: <MarketIcon color="#455560" />,
    },
  },
];

const influencers = [1, 2, 3, 4, 5, 6, 7, 8];

const Followers = () => {
  const t = useTranslations();
  const [selectedType, setSelectedType] = useState<string>("influencers");

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  return (
    <div className="flex flex-col lg:gap-8 w-full">
      <div className="bg-white py-3 lg:py-4 px-4 md:px-8 lg:px-6 lg:rounded-lg overflow-scroll hide-scrollbar">
        <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
          {types.map((type) => (
            <div
              key={type.id}
              className={`p-1 flex items-center cursor-pointer rounded-full ${
                selectedType === type.value && "bg-cloud"
              }`}
              onClick={() => handleTypeChange(type.value)}>
              <div
                className={`p-2 rounded-full ${
                  selectedType === type.value ? "bg-primary" : "bg-cloud"
                }`}>
                {selectedType === type.value ? type.icon.light : type.icon.dark}
              </div>
              <p
                className={`mx-3 font-bold whitespace-nowrap flex items-center ${
                  selectedType !== type.value && "text-asphalt"
                }`}>
                {t(type.name)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6 md:mt-8 lg:mt-0 px-4 md:px-8 lg:px-0">
        {selectedType === "influencers"
          ? influencers.map((item) => (
              <div
                key={item}
                className="p-4 sm:p-6 flex items-center justify-between bg-white rounded-xl">
                <div className="flex gap-2">
                  <Image
                    src="/assets/images/hero/icon-1.png"
                    alt="influ"
                    width={54}
                    height={54}
                    className="w-[54px] h-[54px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div>
                      <h1 className="text-primary text-sm font-bold">
                        {t("Ghaith Marwan")}
                      </h1>
                      <p className="text-asphalt text-[10px] md:text-xs">
                        @ghaith_marwan
                      </p>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-asphalt text-xs">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <PersonsSvg14 />
                        <p>6.7M</p>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <EyeSvg14 />
                        <p>100M</p>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <InfluenceCartSvg14 />
                        <p>10K</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-cloud py-2 px-3 rounded-full text-asphalt text-sm font-bold flex items-center cursor-pointer">
                  <FollowingIcon />
                  <p className="mx-1">{t("Following")}</p>
                </div>
              </div>
            ))
          : influencers.map((item) => (
              <div
                key={item}
                className="p-4 sm:p-6 flex items-center justify-between bg-white rounded-xl">
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
                    <p className="text-primary font-bold">
                      {t("Maria's store")}
                    </p>
                    <div className="flex items-center gap-1 sm:gap-2 text-asphalt text-xs">
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

                <div className="bg-cloud py-2 px-3 rounded-full text-asphalt text-sm font-bold flex items-center cursor-pointer">
                  <FollowingIcon />
                  <p className="mx-1">{t("Following")}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Followers;
