import OrderCard from "@/components/OrderCard/OrderCard";

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

const ReturnOrders = () => {
  return (
    <div className="profile-width-70">
      <div className="px-4 md:px-8 lg:px-0 mt-6 md:mt-8 lg:mt-0 flex flex-col gap-4">
        {orders.map((order, index) => (
          <OrderCard key={index} order={order} type="return" />
        ))}
      </div>
    </div>
  );
};

export default ReturnOrders;
