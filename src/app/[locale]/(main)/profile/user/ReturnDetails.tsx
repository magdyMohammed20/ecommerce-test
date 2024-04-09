import { useTranslations } from "next-intl";

import Image from "next/image";

import OrderStepper from "@/components/OrderStepper/OrderStepper";

import {
  MarkedStep,
  MasterCard,
  AcceptOrder,
  ReturnOrder,
} from "../../../../../../public/assets/svg/orders";
import { ArrowDown } from "../../../../../../public/assets/svg/cart";
import GoBackLink from "./GoBackLink";

const stepperData = [
  {
    id: 1,
    name: "Received",
    date: "14 مايو",
    time: "2:00pm",
    icon: <MarkedStep />,
    status: true,
  },
  {
    id: 2,
    name: "Accepted",
    date: "14 مايو",
    time: "2:00pm",
    icon: <AcceptOrder />,
    status: false,
  },
  {
    id: 3,
    name: "Returned",
    date: "14 مايو",
    time: "2:00pm",
    icon: <ReturnOrder />,
    status: false,
  },
];

const products = [
  {
    id: 1,
    name: "Carina Street..",
    image: "/assets/images/cart/product.png",
    price: 120.99,
    size: "xs",
    qty: 1,
    checked: false,
    color: {
      name: "Brown",
      code: "#8F7D7A",
    },
  },
  {
    id: 2,
    name: "Carina Street..",
    image: "/assets/images/cart/product.png",
    price: 120.99,
    size: "xs",
    qty: 1,
    checked: false,
    color: {
      name: "Brown",
      code: "#8F7D7A",
    },
  },
];

const ReturnDetails = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full">
      <GoBackLink title="Order Details" />
      <div className="profile-width-70 flex flex-col gap-4 md:gap-6 px-4 md:px-8 lg:px-0">
        <OrderStepper stepperData={stepperData} />

        <div className="white-container flex flex-col gap-6">
          <p className="text-20">{t("Returned products")}</p>

          <div className="flex flex-col gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex w-full gap-3 md:gap-4 h-[93px] pb-4 border-b border-cloud">
                <div className="min-w-[84px] rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt="product"
                    width={84}
                    height={93}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <p className="text-xs md:text-sm">{product.name}</p>
                  <div className="flex items-center gap-2 p-1 w-fit rounded-full bg-cloud">
                    <div className="flex items-center gap-1 text-asphalt text-xs lg:text-sm">
                      <p
                        className="w-[15px] h-[15px] rounded-full"
                        style={{ background: product.color.code }}></p>
                      <p>{product.color.name}</p>
                      <p className="text-silver">/</p>
                      <p>{product.size}</p>
                    </div>
                    <ArrowDown />
                  </div>
                  <p className="price-text lg:!text-base">
                    <del className="price-text-del">240.99</del>
                    <span>120.99 {t("SAR")}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between w-full text-asphalt">
            <p>{t("Total")}</p>
            <p className="text-18 font-bold">160.78 {t("SAR")}</p>
          </div>
        </div>

        <div className="flex items-center flex-col md:flex-row gap-4 md:gap-6 w-full">
          <div className="white-container !md:p-4">
            <p className="font-bold mb-1">{t("Return method")}</p>
            <p className="text-asphalt text-sm">
              {t("Sending the product through")}
            </p>
          </div>

          <div className="white-container !md:p-4 flex items-center justify-between">
            <div>
              <p className="font-bold mb-1">{t("How to recover the amount")}</p>
              <p className="text-asphalt text-sm">
                {t("Credit Card (434***)")}
              </p>
            </div>
            <MasterCard />
          </div>
        </div>

        <button className="btn-primary !bg-silver/70 !text-asphalt">
          {t("Cancel Order")}
        </button>
      </div>
    </div>
  );
};

export default ReturnDetails;
