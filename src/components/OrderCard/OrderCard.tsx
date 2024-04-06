import { useLocale, useTranslations } from "next-intl";

import Link from "next/link";
import Image from "next/image";

import {
  CancelledIcon,
  CompletedIcon,
  DeliverIcon,
  PrepareIcon,
} from "../../../public/assets/svg/orders";
import { Arrow16 } from "../../../public/assets/svg/categoryBarSvgs";

interface Props {
  type: string;
  order: {
    id: string;
    total: number;
    date: string;
    products: {
      count: number;
      images: string[];
    };
    status?: string;
  };
  openAddReview?: () => void;
}

const OrderCard = ({ order, type, openAddReview }: Props) => {
  const locale = useLocale();
  const t = useTranslations();
  const link =
    type === "review"
      ? "#"
      : type === "order"
      ? "/profile?tab=order_details"
      : "/profile?tab=return_details";

  return (
    <Link
      href={link}
      className="bg-white p-4 md:p-6 flex flex-col gap-4 w-full rounded-xl">
      {type !== "review" && (
        <div className="flex items-center justify-between">
          <p className="text-asphalt font-bold">
            {t("Order number")} {order.id}#
          </p>
          <div
            className={`px-3 py-2 rounded-full flex items-center text-xs font-bold 
        ${
          order.status === "prepare"
            ? "bg-asphalt/10 text-asphalt"
            : order.status === "delivering"
            ? "bg-[#ED873F]/10 text-[#ED873F]"
            : order.status === "completed"
            ? "bg-[#4D9A37]/10 text-[#4D9A37]"
            : "bg-[#E42E59]/10 text-[#E42E59]"
        }
        `}>
            {order.status === "prepare" ? (
              <PrepareIcon />
            ) : order.status === "delivering" ? (
              <DeliverIcon />
            ) : order.status === "completed" ? (
              <CompletedIcon />
            ) : (
              <CancelledIcon />
            )}
            <p className="mx-1">
              {order.status === "prepare"
                ? type === "return"
                  ? t("Under review")
                  : t("Being prepared")
                : order.status === "delivering"
                ? type === "return"
                  ? t("The request accepted")
                  : t("Under delivery")
                : order.status === "completed"
                ? type === "return"
                  ? t("Returned")
                  : t("The order delivered")
                : type === "return"
                ? t("the request rejected")
                : t("The request canceled")}
            </p>
          </div>
        </div>
      )}

      <div className="p-3 bg-[#F2F5F880]/50 flex items-center gap-4 justify-between rounded-xl text-xs md:text-sm text-asphalt h-full">
        <div className="w-full flex flex-col gap-2">
          <p className="text-asphalt/70">{t("Products Count:")}</p>
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {order.products.images.map((image, index) => (
                <div
                  key={index}
                  className={`rounded-full w-8 h-8 overflow-hidden border border-cloud ${
                    index !== 0 && "rtl:-mr-4 ltr:-ml-4"
                  }`}>
                  <Image
                    src={image}
                    alt="product"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="font-bold">{order.products.count}+</p>
          </div>
        </div>

        <div className="flex flex-col w-full h-[54px] px-4 border-silver/30 border-r border-l justify-between">
          <p className="text-asphalt/70">{t("Total:")}</p>
          <p className="font-bold">
            {order.total} {t("SAR")}
          </p>
        </div>

        <div className="flex flex-col w-full h-[54px] justify-between">
          <p className="text-asphalt/70">{t("Order Date:")}</p>
          <p className="font-bold">{order.date}</p>
        </div>
      </div>

      {type === "review" && (
        <div
          className={`p-1 flex w-full items-center justify-between rounded-full ${
            locale === "ar" ? "order-gradient-ar" : "order-gradient"
          }`}
          onClick={openAddReview}>
          <div className="flex items-center gap-3">
            <div className="rounded-full p-1 star-bg">
              <Image
                src="/assets/images/profile/smile.png"
                alt="img"
                width={24}
                height={24}
                className="w-6 h-6 mx-auto"
              />
            </div>
            <p className="text-xs md:text-sm font-bold">
              {t("Rate the order and get 98 points")}
            </p>
          </div>
          <span className="cursor-pointer ltr:rotate-180">
            <Arrow16 />
          </span>
        </div>
      )}
    </Link>
  );
};

export default OrderCard;
