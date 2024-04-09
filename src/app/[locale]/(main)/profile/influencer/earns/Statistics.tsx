"use client";

import { useTranslations } from "next-intl";
import StatisticsCard from "../../../../../../components/InfluencerStatisticsCard/StatisticsCard";

const Statistics = () => {
  const t = useTranslations();

  return (
    <div className="justify-between items-center gap-[8px] lg:gap-x-4 overflow-hidden grid grid-cols-2 ">
      <StatisticsCard
        link=""
        linkExist={false}
        isUp={true}
        cardTitle="marketing earn"
        percentage={"10%"}
        price={"2000"}
        icon={"/assets/images/influencer/money_bag.png"}
      />
      <StatisticsCard
        link=""
        linkExist={false}
        isUp={true}
        cardTitle="Incentives"
        percentage={"10%"}
        price={"2000"}
        icon={"/assets/images/influencer/money.png"}
      />
    </div>
  );
};

export default Statistics;
