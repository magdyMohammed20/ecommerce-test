import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import {
  CalenderSVG,
  ClockSVG,
  InfoSVG,
  LoadingSVG,
  SecondCalenderSVG,
  TickCircleSVG,
  TimerSVG,
} from "../../../../../../../public/assets/svg/influencer";

interface Item {
  id?: number;
  price?: number;
  status?: number;
}

interface CardProps {
  item: Item;
  index: number;
  toggleCreateModal?: () => void;
}

const Card: React.FC<CardProps> = ({ item, index, toggleCreateModal }) => {
  const t = useTranslations();
  const lang = useLocale();
  return (
    <div
      key={index}
      className="bg-white rounded-[12px]  cursor-pointer p-[16px] lg:p-[24px]"
      onClick={toggleCreateModal}>
      <div className=" text-gray-700 flex items-center justify-between">
        <h1 className="text-[20px] text-gray-600 font-bold">${item.price}</h1>

        <div
          className={`
            ${item.status === 0 && "bg-slate-100"} 
            ${item.status === 2 && "bg-red-100"} 
            ${item.status === 1 && "bg-green-100"}
            ${item.status === 3 && "bg-orange-100"}
            rounded-full px-[12px] text-xs py-[8px] flex items-center gap-x-2`}>
          {item.status == 1 ? (
            <TickCircleSVG />
          ) : item.status == 0 ? (
            <TimerSVG />
          ) : item.status == 2 ? (
            <InfoSVG />
          ) : (
            <LoadingSVG />
          )}

          <span
            className={`font-bold text-[13px] lg:text-sm ${
              item.status === 0 && "text-slate-600"
            } ${item.status === 2 && "text-red-600"} 
            ${item.status === 3 && "text-orange-600"} 
            ${item.status === 1 && "text-green-700"}
            `}>
            {item?.status === 0 && t("waiting")}
            {item?.status === 1 && t("transfered")}
            {item?.status === 2 && t("canceled")}
            {item?.status === 3 && t("underTransfer")}{" "}
          </span>
        </div>
      </div>

      <div className="mt-[20px] pe-7  pb-4 text-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
            <Image
              src="/assets/images/influencer/bank.png"
              width={17}
              height={15}
              alt="bank"
            />
          </div>
          <span className="text-gray-500 text-sm lg:text-[16px]">
            بنك الراجحى
          </span>
        </div>

        <span className="text-gray-500 text-sm lg:text-[16px]">****4567</span>
      </div>
      <hr />
      <div className="pt-[16px] text-gray-500 flex items-center justify-between mt-0 ">
        <div className="text-[12px] lg:text-[14px]">ID: 12366</div>

        <div className="text-gray-400 flex gap-[8px] items-center">
          <div className="flex items-center gap-[4px]">
            <SecondCalenderSVG />
            <p
              className={`text-[12px] lg:text-[14px] flex items-center  ${
                lang == "en" ? "border-r pr-[12px]" : "border-l pl-[6px]"
              } mt-[4px]  
               
               py-0`}>
              14 {t("may")}، 2023
            </p>
          </div>

          <div className="flex items-center gap-1">
            <ClockSVG />
            <span className="text-[12px] lg:text-[14px] flex items-center gap-2 mt-[4px]">
              2:00pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
