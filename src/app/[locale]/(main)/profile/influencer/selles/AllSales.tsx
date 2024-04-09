"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import BestSelling from "./BestSelling";
import UpperFilter from "./UpperFilter";
import HorizontalBarGraphs from "./HorizontalBarGraphs";
import { UpSVG } from "../../../../../../../public/assets/svg/influencer";

const AllSales: React.FC = () => {
  const t = useTranslations();

  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setDocumentWidth(window.innerWidth);
      }, 200); // Adjust debounce delay as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 w-full gap-[24px] md:gap-[32px] mt-6 lg:mt-0 md:mb-8 px-4 md:px-8 lg:px-0">
        <div className=" hidden  bg-white rounded-[12px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] lg:flex items-center justify-between">
          <div className="flex items-center gap-x-[8px]  h-[56px] ">
            <span className="font-[700] text-[20px]">{t("selles")}</span>
          </div>

          <div className="flex flex-col items-center  mt-1">
            <span className="text-[16px] lg:text-[20px] font-[700] mt-0.5">
              10M
            </span>

            {
              <span
                className="mt-0.5 
                 text-green-600
                 flex gap-[4px] md:gap-1 items-center">
                <UpSVG />
                <span className="text-[12px] lg:text-[14px]">26%</span>
              </span>
            }
          </div>
        </div>
        <UpperFilter documentWidth={documentWidth} />
        <BestSelling documentWidth={documentWidth} />
        <HorizontalBarGraphs documentWidth={documentWidth} />
      </div>
    </div>
  );
};

export default AllSales;
