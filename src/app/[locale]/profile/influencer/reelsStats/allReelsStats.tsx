"use client";

import { useTranslations } from "next-intl";
import ReelsSlider from "./ReelsSlider";
import ReelsStatsInfo from "./ReelsStatsInfo";
import ReactChart from "./ReactChart";
import Views from "./Views";
import ReelsReacts from "./ReelsReacts";
import Products from "./Products";

const AllReelsStats: React.FC = () => {
  const t = useTranslations();

  return (
    <div>
      <div className="flex-col w-full  mt-6 lg:mt-0 md:mb-8 px-4 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 ">
          <div className="grid grid-cols-1 gap-[24px] md:gap-[32px] ">
            <div className=" hidden  bg-white rounded-[12px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] lg:flex items-center justify-between">
              <div className="flex items-center gap-x-[8px]  h-[56px] ">
                <span className="font-[700] text-[20px]">
                  {t("reels-stats")}
                </span>
              </div>
            </div>

            <ReelsSlider />
            <ReelsStatsInfo />
            <ReactChart />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[24px] xl:gap-[24px]">
              <Views />
              <ReelsReacts />
            </div>

            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReelsStats;
