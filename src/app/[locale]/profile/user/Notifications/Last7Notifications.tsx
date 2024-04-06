import { useTranslations } from "next-intl";

import CouponContainer from "./CouponContainer";
import RemainingProduct from "./RemainingProduct";
import NotificationContainer from "./NotificationContainer";

const images1 = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
];

const images2 = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
];

import {
  BoxBlue,
  FlashBlue,
  PersonBlue,
  UserSearch,
} from "../../../../../../public/assets/svg/notifications";

const Last7Notifications = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-16 font-bold">{t("Last 7 days")}</p>

      <div className="flex flex-col gap-3">
        <NotificationContainer name="notification_4" icon={<FlashBlue />}>
          <CouponContainer />
        </NotificationContainer>

        <NotificationContainer
          name="notification_5"
          icon={<PersonBlue />}
          hasSmallImgs={true}
          images={images1}>
          <div className="p-3 flex items-center justify-between bg-cloud rounded-12">
            <div className="flex items-center gap-2">
              <UserSearch />

              <div className="text-asphalt text-sm font-bold flex flex-col gap-[2px]">
                <p>{t("Easy to find your friends!")}</p>
                <p className="opacity-70 font-normal text-xs">
                  {t("Allow access to contacts to find my friends")}
                </p>
              </div>
            </div>

            <button className="py-[8px] px-[16px] text-[12px] bg-silver/70 rounded-full text-xs text-asphalt font-bold lg:hidden xl:flex">
              {t("Allow")}
            </button>
          </div>
        </NotificationContainer>

        <NotificationContainer
          hasSmallImgs={true}
          images={images2}
          name="notification_6"
          icon={<BoxBlue />}>
          <RemainingProduct />
        </NotificationContainer>
      </div>
    </div>
  );
};

export default Last7Notifications;
