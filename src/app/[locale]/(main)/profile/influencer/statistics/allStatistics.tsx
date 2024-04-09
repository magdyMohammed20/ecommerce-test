"use client";

import React, { useState, useEffect } from "react";
import StatisticsCard from "../../../../../../components/InfluencerStatisticsCard/StatisticsCard";
import { useTranslations } from "next-intl";
import BestSelling from "./bestSelling";
import TrendVideos from "./TrendVideos";
import AccountActivities from "./AccountActivities";
import DoubleStatisticsCard from "@/components/InfluencerStatisticsCard/DoubleStatisticsCard";

const AllStatistics: React.FC = () => {
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
        <div className="grid grid-cols-1 gap-[16px]">
          <div className="items-center gap-[24px] md:gap-[32px]   overflow-hidden flex  bg-white rounded-[8px] md:rounded-[12px] p-[16px] md:p-[24px] ">
            <DoubleStatisticsCard
              link=""
              linkExist={false}
              isUp={false}
              cardTitle="views"
              percentage={"10%"}
              price={"20M"}
              icon={"/assets/images/influencer/CTA.png"}
            />
            <div className="w-[11px] h-[78px] border-r border-r-cloud z-50 "></div>
            <DoubleStatisticsCard
              link=""
              linkExist={false}
              isUp={false}
              cardTitle="likes"
              percentage={"10%"}
              price={"2000"}
              icon={"/assets/images/influencer/heart.png"}
            />
          </div>
          <div className="justify-between items-center gap-[8px] md:gap-[16px]  overflow-hidden grid grid-cols-1 md:grid-cols-2   ">
            <StatisticsCard
              link="selles"
              linkExist={true}
              isUp={true}
              cardTitle="selles"
              percentage={"10%"}
              price={"2000"}
              icon={"/assets/images/influencer/money.png"}
            />

            <StatisticsCard
              link="followers-stats"
              linkExist={true}
              isUp={true}
              cardTitle="followers"
              percentage={"10%"}
              price={"10M"}
              icon={"/assets/images/influencer/laugh.png"}
            />
          </div>
        </div>
        <BestSelling documentWidth={documentWidth} />
        <TrendVideos documentWidth={documentWidth} />
        <AccountActivities />
      </div>
    </div>
  );
};

export default AllStatistics;
