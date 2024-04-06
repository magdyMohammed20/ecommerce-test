"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { DownSVG, UpSVG } from "../../../public/assets/svg/influencer";
import { ChevronLeftSVG } from "../../../public/assets/svg/influencerStatistics";
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
const DoubleStatisticsCard: React.FC<IconProps> = ({
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
    /*     <Link
      href={`${link ? `/profile?tab=${link}` : ""}`}
      className="block  cursor-pointer flex-1"> */
    <div className="flex items-center justify-between flex-1">
      <div className="flex items-center gap-[16px] ">
        <div className="flex flex-col items-start  gap-[12px] md:gap-[16px]">
          <div className=" text-center flex">
            <div className="  flex h-[35px] w-[35px] md:h-[38px] md:w-[35px] justify-center items-center gap-[18.182px]">
              <Image
                width={35}
                layout="responsive"
                height={35}
                src={icon}
                alt="cta"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px] md:gap-[4px] ">
            <div className="flex items-center justify-between">
              <h2 className="text-[12px] md:text-[16px] text-asphalt">
                {" "}
                {t(cardTitle)}{" "}
              </h2>

              <div className="flex self-baseline sm:self-center md:hidden">
                {linkExist && (
                  <div className="flex md:bg-cloud  w-[24px] h-[24px] rounded-[80px] justify-center items-center">
                    {lang == "en" ? <ArrowRightIconSvg /> : <ChevronLeftSVG />}
                  </div>
                )}
              </div>
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
                  className={` ${
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
      <div className="md:flex self-baseline sm:self-center hidden">
        {linkExist && (
          <div className="flex md:bg-cloud  w-[24px] h-[24px] rounded-[80px] justify-center items-center">
            {lang == "en" ? <ArrowRightIconSvg /> : <ChevronLeftSVG />}
          </div>
        )}
      </div>
    </div>
    /* </Link> */
  );
};

export default DoubleStatisticsCard;
