import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

import Image from "next/image";

import GoBackLink from "../../user/GoBackLink";
import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";
import OrderStatusContainer from "@/components/OrderStatusContainer/OrderStatusContainer";

const images = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
  "/assets/images/product/product-4.png",
];

const data = [1, 2, 3, 4, 5];

interface Props {
  onClick: () => void;
}

const Requests = ({ onClick }: Props) => {
  const locale = useLocale();
  const t = useTranslations();
  const [activeStatus, setActiveStatus] = useState<string>("all");

  const handleStatusChange = (status: string) => {
    setActiveStatus(status);
  };

  return (
    <div className="profile-width-70 flex flex-col gap-6 md:gap-8">
      <div>
        <GoBackLink title="marketing_requests" />

        <OrderStatusContainer
          activeStatus={activeStatus}
          onChange={handleStatusChange}
        />
      </div>

      <div className="grid gap-6 md:gap-4 w-full px-4 md:px-8 lg:px-0">
        {data.map((item) => (
          <div
            key={item}
            onClick={onClick}
            className="p-4 md:p-6 flex flex-col gap-4 rounded-12 bg-white cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  alt="store"
                  src="/assets/images/product/store-img.png"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover border border-cloud"
                />
                <p className="text-16 font-bold">{t("Maria's store")}</p>
              </div>

              <div
                className={`flex items-center gap-1 md:gap-3 rounded-full p-1 md:p-2 lg:min-w-[170px] ${
                  locale === "ar" ? "order-gradient-ar" : "order-gradient"
                }`}
              >
                <div className="rounded-full p-1 star-bg">
                  <Image
                    src="/assets/images/influencer/money.png"
                    alt="img"
                    width={24}
                    height={24}
                    className="w-6 h-6 mx-auto"
                  />
                </div>
                <p className="text-xs md:text-sm text-asphalt whitespace-nowrap">
                  {t("Incentive")}:
                  <span className="font-bold mx-1">500 {t("SAR")}</span>
                </p>
              </div>
            </div>

            <div className="p-3 grid grid-cols-3 items-start rounded-12 bg-cloud text-xs md:text-sm text-asphalt text-start">
              <div className="flex flex-col">
                <p className="opacity-70">{t("Products")}:</p>
                <GroupAvatars images={images} imageSize={26} />
              </div>

              <div className="flex flex-col justify-between h-full border-x border-silver/50 px-4">
                <p className="opacity-70">{t("Commission")}:</p>
                <p className="font-bold">5% {t("rate")}</p>
              </div>

              <div className="flex flex-col justify-between h-full px-4">
                <p className="opacity-70">{t("Order Date")}:</p>
                <p className="font-bold">{t("May 31, 2023")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
