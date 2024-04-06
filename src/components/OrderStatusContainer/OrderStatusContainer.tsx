import { useTranslations } from "next-intl";

import {
  AllOrders,
  CancelledOrders,
  CurrentOrders,
  PreviousOrders,
} from "../../../public/assets/svg/orders";

interface Props {
  name: string;
  status: string;
  activeStatus: string;
  icon: any;
  onChange: (status: string) => void;
}

const OrderStatus = ({ name, status, icon, activeStatus, onChange }: Props) => {
  return (
    <div
      className={`${
        status !== "cancelled" &&
        "md:ltr:pr-8 md:ltr:border-r md:rtl:pl-8 md:rtl:border-l border-cloud"
      }`}
    >
      <div
        onClick={() => onChange(status)}
        className={`flex items-center gap-3 p-1 ltr:pr-4 rtl:pl-4 rounded-full cursor-pointer ${
          activeStatus === status ? "bg-cloud text-primary" : "text-asphalt"
        }`}
      >
        <div
          className={`p-2 rounded-full ${
            activeStatus === status ? "bg-primary" : "bg-cloud"
          }`}
        >
          {icon}
        </div>
        <p className="font-bold text-sm md:text-base">{name}</p>
      </div>
    </div>
  );
};

interface PageProps {
  activeStatus: string;
  onChange: (status: string) => void;
}

const OrderStatusContainer = ({ activeStatus, onChange }: PageProps) => {
  const t = useTranslations();
  return (
    <div className="bg-white py-2 p-[21px] overflow-scroll hide-scrollbar md:px-6 lg:rounded-lg flex items-center gap-3 md:gap-8 whitespace-nowrap">
      <OrderStatus
        name={t("All")}
        status="all"
        activeStatus={activeStatus}
        onChange={onChange}
        icon={
          <AllOrders color={activeStatus === "all" ? "white" : "#455560"} />
        }
      />
      <OrderStatus
        name={t("Current")}
        status="current"
        activeStatus={activeStatus}
        onChange={onChange}
        icon={
          <CurrentOrders
            color={activeStatus === "current" ? "white" : "#455560"}
          />
        }
      />
      <OrderStatus
        name={t("Previous")}
        status="previous"
        activeStatus={activeStatus}
        onChange={onChange}
        icon={
          <PreviousOrders
            color={activeStatus === "previous" ? "white" : "#455560"}
          />
        }
      />
      <OrderStatus
        name={t("Cancelled")}
        status="cancelled"
        activeStatus={activeStatus}
        onChange={onChange}
        icon={
          <CancelledOrders
            color={activeStatus === "cancelled" ? "white" : "#455560"}
          />
        }
      />
    </div>
  );
};

export default OrderStatusContainer;
