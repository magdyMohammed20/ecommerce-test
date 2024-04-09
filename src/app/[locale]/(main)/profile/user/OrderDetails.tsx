import { useTranslations } from "next-intl";

import Image from "next/image";

import GoBackLink from "./GoBackLink";
import OrderStepper from "@/components/OrderStepper/OrderStepper";
import DeliveryAddress from "@/components/DeliveryAddress/DeliveryAddress";

import {
  MarkedStep,
  ReturnOrder,
  ShippedIcon,
  OnTheWay,
} from "../../../../../../public/assets/svg/orders";
import { ArrowDown } from "../../../../../../public/assets/svg/cart";
import { ApplePayIcon } from "../../../../../../public/assets/svg/checkoutSvg";

const stepperData = [
  {
    id: 1,
    name: "Received Order",
    date: "14 مايو",
    time: "2:00pm",
    icon: <MarkedStep />,
    status: true,
  },
  {
    id: 2,
    name: "Shipped",
    date: "14 مايو",
    time: "2:00pm",
    icon: <ShippedIcon />,
    status: false,
  },
  {
    id: 3,
    name: "On Way",
    date: "14 مايو",
    time: "2:00pm",
    icon: <OnTheWay />,
    status: false,
  },
  {
    id: 4,
    name: "Delivered",
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

const OrderDetails = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full">
      <GoBackLink title="Order Details" />

      <div className="profile-width-70 flex flex-col gap-4 md:gap-6 px-4 md:px-8 lg:px-0">
        <OrderStepper stepperData={stepperData} />

        <DeliveryAddress />

        <div className="white-container flex flex-col gap-4 md:gap-6">
          <p className="text-20">{t("Review products")} (2)</p>

          <div className="flex flex-col gap-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex w-full gap-3 md:gap-4 h-[93px] border-cloud ${
                  index !== products.length - 1 && "pb-4 border-b"
                }`}>
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
        </div>

        <div className="white-container flex flex-col gap-4 md:gap-6">
          <div className="flex items-center justify-between text-20 pb-4 md:pb-6 border-b border-b-cloud">
            <p>
              {t("Total")}{" "}
              <span className="text-asphalt text-xs">
                ({t("VAT included")})
              </span>
            </p>
            <p>160.78 {t("SAR")}</p>
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center justify-between text-sm">
              <p className="text-asphalt">{t("Subtotal")}</p>
              <p>302 {t("SAR")}</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p className="text-asphalt">{t("Shipping fees")}</p>
              <p>19.57 {t("SAR")}</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p className="text-asphalt">{t("Discount")} 50%</p>
              <p className="font-bold text-[#FA285A]">-160.78 {t("SAR")}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between white-container md:!p-4">
          <p className="text-20">{t("Payment Method")}</p>
          <ApplePayIcon />
        </div>

        <button className="btn-primary !bg-silver/70 !text-asphalt">
          {t("Cancel Order")}
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
