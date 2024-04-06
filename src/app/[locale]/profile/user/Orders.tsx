"use client";

import { useState } from "react";

import OrderCard from "@/components/OrderCard/OrderCard";
import OrderStatusContainer from "@/components/OrderStatusContainer/OrderStatusContainer";

const orders = [
  {
    id: "92839",
    status: "prepare",
    total: 160.78,
    date: "31 مايو، 2023",
    products: {
      count: 3,
      images: [
        "/assets/images/orders/pro-1.png",
        "/assets/images/orders/pro-2.png",
        "/assets/images/orders/pro-3.png",
        "/assets/images/orders/pro-4.png",
      ],
    },
  },
  {
    id: "92839",
    status: "delivering",
    total: 160.78,
    date: "31 مايو، 2023",
    products: {
      count: 3,
      images: [
        "/assets/images/orders/pro-1.png",
        "/assets/images/orders/pro-2.png",
        "/assets/images/orders/pro-3.png",
        "/assets/images/orders/pro-4.png",
      ],
    },
  },
  {
    id: "92839",
    status: "completed",
    total: 160.78,
    date: "31 مايو، 2023",
    products: {
      count: 3,
      images: [
        "/assets/images/orders/pro-1.png",
        "/assets/images/orders/pro-2.png",
        "/assets/images/orders/pro-3.png",
        "/assets/images/orders/pro-4.png",
      ],
    },
  },
  {
    id: "92839",
    status: "cancelled",
    total: 160.78,
    date: "31 مايو، 2023",
    products: {
      count: 3,
      images: [
        "/assets/images/orders/pro-1.png",
        "/assets/images/orders/pro-2.png",
        "/assets/images/orders/pro-3.png",
        "/assets/images/orders/pro-4.png",
      ],
    },
  },
];

const Orders = () => {
  const [activeStatus, setActiveStatus] = useState<string>("all");

  const handleStatusChange = (status: string) => {
    setActiveStatus(status);
  };

  return (
    <div className="profile-width-70">
      <OrderStatusContainer
        activeStatus={activeStatus}
        onChange={handleStatusChange}
      />

      <div className="flex flex-col gap-4 mt-6 md:mb-8 px-4 md:px-8 lg:px-0">
        {orders.map((order, index) => (
          <OrderCard key={index} order={order} type="order" />
        ))}
      </div>
    </div>
  );
};

export default Orders;
