"use client";

import React, { useState } from "react";
import Banner from "./Banner";
import Statistics from "./Statistics";
import MoveRequests from "./MoveOrders";
import InfluencerProfitModal from "@/components/InfluencerProfitModal/InfluencerProfitModal";
import ChartStats from "./ChartStats";

interface Item {
  id: number;
  price: number;
  status: number;
}
const MainProfits = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  const items: Item[] = [
    {
      id: 1,
      price: 1000,
      status: 0,
    },
    {
      id: 2,
      price: 2000,
      status: 1,
    },
  ];

  const toggleCreateModal = () => {
    setOpenCreateModal(!openCreateModal);
  };
  return (
    <div className="flex flex-col gap-[24px] md:gap-[32px] w-full mt-6 lg:mt-0 md:mb-8 px-4 md:px-8 lg:px-0">
      <div className="flex flex-col gap-[8px] md:gap-[16px]">
        <Banner toggleCreateModal={() => toggleCreateModal()} />
        <Statistics />
      </div>
      <MoveRequests items={items} />
      {openCreateModal && <InfluencerProfitModal onClose={toggleCreateModal} />}
      <ChartStats />
    </div>
  );
};

export default MainProfits;
