import { Fragment } from "react";
import { useTranslations } from "next-intl";

import {
  OrderDate,
  OrderTime,
} from "../../../public/assets/svg/orders";

interface Props {
  stepperData: {
    name: string;
    id: number;
    icon: any;
    date: string;
    time: string;
    status: boolean;
  }[];
}

const OrderStepper = ({ stepperData }: Props) => {
  const t = useTranslations();

  return (
    <div className="white-container flex flex-col gap-6">
      <p className="text-20">{t("Order Status")}</p>
      <div className="flex justify-between flex-col md:flex-row md:px-10 md:whitespace-nowrap">
        {stepperData.map((item, index) => (
          <Fragment key={item.id}>
            <div
              className="flex items-center flex-row md:flex-col gap-4 text-center w-full"
            >
              <div
                className={`rounded-full p-2 md:p-3 ${
                  item.status ? "bg-primary" : "bg-silver/70"
                }`}
              >
                {item.icon}
              </div>
              <div className="flex items-center justify-between md:flex-col gap-1 w-full">
                <p className={`font-bold ${!item.status && "text-asphalt"}`}>
                  {t(item.name)}
                </p>
                {item.status && (
                  <div className="flex items-center gap-1 text-asphalt text-xs opacity-70">
                    <OrderDate />
                    <p>{item.date}</p>
                    <p className="mx-1 text-silver">|</p>
                    <OrderTime />
                    <p>{item.time}</p>
                  </div>
                )}
              </div>
            </div>
            {index !== stepperData.length - 1 && (
              <div className="h-6 md:h-[1px] bg-silver w-[1px] md:w-full ltr:ml-6 rtl:mr-6 md:mx-0 md:mt-6"></div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default OrderStepper;
