"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { DownSVG, UpSVG } from "../../../public/assets/svg/influencer";
import { ChevronLeftSVG } from "../../../public/assets/svg/influencerStatistics";
import React from "react";
import Link from "next/link";
import { ArrowRightIconSvg } from "../../../public/assets/svg/categoryBarSvgs";

interface IconProps {
  icon: string;
  cardTitle: string;
  percentage: string;
  price: string;
  isUp: boolean;
  linkExist: boolean;
  link: string;
}
const StatisticsCard: React.FC<IconProps> = ({
  icon,
  cardTitle,
  percentage,
  price,
  isUp,
  linkExist,
  link,
}) => {
  const t = useTranslations();
  const lang = useLocale();
  return (
    <Link
      href={`${link ? `/profile?tab=${link}` : ""}`}
      className="block  cursor-pointer ">
      <div className="flex items-center  py-[16px] px-[16px] md:p-[24px] lg:p-[16px] bg-white rounded-[8px] md:rounded-[12px] ">
        <div className="flex items-center gap-[16px] flex-1">
          <div className="flex flex-1 md:flex-auto items-center justify-end gap-[8px] md:gap-[16px]">
            <div className="w-[50px] h-[50px] text-center hidden md:flex">
              <div className=" p-[9.636px] bg-cloud rounded-full  flex h-[44px] w-[44px] md:h-[50px] md:w-[50px] justify-center items-center gap-[18.182px]">
                <Image
                  width={55}
                  layout="responsive"
                  height={55}
                  src={icon}
                  alt="cta"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-[8px] md:gap-[4px] w-full">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-[12px] lg:text-[16px] text-gray-500">
                  {" "}
                  {t(cardTitle)}{" "}
                </h2>
              </div>

              <div className="flex gap-[4px] ">
                <span className=" text-[20px] font-[700] ">{price}</span>

                {isUp ? (
                  <span
                    className={`mt-0.5 ${
                      isUp ? "text-green-600" : "text-red-600"
                    } flex gap-[4px] md:gap-1 items-center`}>
                    <UpSVG />
                    <span className="text-[12px] lg:text-[14px]">
                      {percentage}
                    </span>
                  </span>
                ) : (
                  <span
                    className={`mt-0.5 ${
                      isUp ? "text-green-600" : "text-red-600"
                    } flex gap-[4px] md:gap-1 items-center`}>
                    <DownSVG />
                    <span className="text-[12px] lg:text-[14px]">
                      {percentage}
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex  sm:self-center">
          {linkExist && (
            <div className="flex bg-cloud  w-[24px] h-[24px] rounded-[80px] justify-center items-center">
              {lang == "en" ? <ArrowRightIconSvg /> : <ChevronLeftSVG />}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default StatisticsCard;
