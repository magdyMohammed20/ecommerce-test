"use client";

import { useTranslations } from "next-intl";
import ChartStats from "./ChartStats";
import AgesChart from "./AgesChart";
import GenderChart from "./GenderChart";
import BestLocationChart from "./BestLocationChart";
import UpperFilter from "./UpperFilter";
import { UpSVG } from "../../../../../../public/assets/svg/influencer";

const AllStatistics: React.FC = () => {
  const t = useTranslations();

  return (
    <div>
      <div className="flex-col w-full">
        <div className="grid grid-cols-1 ">
          <div className="grid grid-cols-1 gap-y-[16px] md:gap-y-[24px]">
            <div className=" hidden  bg-white rounded-[12px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] lg:flex items-center justify-between">
              <div className="flex items-center gap-x-[8px]  h-[56px] ">
                <span className="font-[700] text-[20px]">
                  {t("total followers")}
                </span>
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
            <UpperFilter />

            <div className="justify-between items-center gap-x-[24px] gap-y-[16px] grid grid-cols-1 xl:grid-cols-2  overflow-hidden ">
              <ChartStats />
              <AgesChart />
            </div>

            <div className="justify-between items-center gap-x-[24px] gap-y-[16px]  grid grid-cols-1 xl:grid-cols-2  overflow-hidden ">
              <BestLocationChart />
              <GenderChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStatistics;
