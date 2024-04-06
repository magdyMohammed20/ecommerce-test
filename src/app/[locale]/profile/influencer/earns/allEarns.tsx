"use client";

import React, { useState } from "react";
import InfluencerProfitRequestDetailsModal from "@/components/InfluencerProfitRequestDetailsModal/InfluencerProfitRequestDetailsModal";
import Banner from "./EarnsBanner";
import MoveRequests from "./MoveEarnsOrders";

interface DataItem {
  id: number;
  price: number;
  status: number;
}

const AllEarns: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleCreateModal = () => {
    setOpenModal(!openModal);
  };

  const data: DataItem[] = [
    {
      id: 1,
      price: 1000,
      status: 0,
    },
    {
      id: 2,
      price: 4000,
      status: 1,
    },
    {
      id: 3,
      price: 2000,
      status: 2,
    },
    {
      id: 4,
      price: 2000,
      status: 3,
    },
    {
      id: 1,
      price: 1000,
      status: 0,
    },
    {
      id: 2,
      price: 4000,
      status: 1,
    },
    {
      id: 3,
      price: 2000,
      status: 2,
    },
    {
      id: 4,
      price: 2000,
      status: 3,
    },
  ];

  return (
    <div className="grid grid-cols-1 w-full gap-[16px] md:gap-[32px] mt-6 lg:mt-0 md:mb-8 px-4 md:px-8 lg:px-0">
      <Banner />
      <MoveRequests items={data} toggleCreateModal={toggleCreateModal} />
      {openModal && (
        <InfluencerProfitRequestDetailsModal onClose={toggleCreateModal} />
      )}
    </div>
  );
};

export default AllEarns;
