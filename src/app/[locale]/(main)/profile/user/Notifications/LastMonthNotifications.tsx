import { useLocale, useTranslations } from "next-intl";
import RemainingProduct from "./RemainingProduct";
import NotificationContainer from "./NotificationContainer";

const images2 = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
];

import {
  BoxBlue,
  PersonBlue,
} from "../../../../../../../public/assets/svg/notifications";
import Image from "next/image";

import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";

const images = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
  "/assets/images/product/product-4.png",
];
const LastMonthNotifications = () => {
  const t = useTranslations();
  const lang = useLocale();
  return (
    <div className="flex flex-col gap-2">
      <p className="text-16 font-bold">{t("Last Month")}</p>

      <div className="flex flex-col gap-3">
        <NotificationContainer
          hasSmallImgs={true}
          images={images2}
          name="notification_6"
          icon={<BoxBlue />}>
          <RemainingProduct disableDiscount={true} />
        </NotificationContainer>

        <NotificationContainer
          name="invitation"
          icon={<PersonBlue />}
          hasSmallImgs={true}>
          <div className="p-3 flex items-center justify-between bg-cloud rounded-12">
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className=" min-w-[52px] w-[52px] h-[52px] rounded-lg overflow-hidden">
                    <Image
                      alt="product"
                      src="/assets/images/product/product-1.png"
                      width={52}
                      height={52}
                      className="w-full h-full "
                    />
                  </div>

                  <div
                    className={`p-1 flex items-center gap-1  rounded-full transform  ${
                      lang == "en" ? "-translate-x-7" : "translate-x-7"
                    }`}>
                    <GroupAvatars
                      images={["/assets/images/product/product-2.png"]}
                      imageSize={45}
                    />
                  </div>
                </div>
                <div
                  className={`transform  ${
                    lang == "en" ? "-translate-x-5" : "translate-x-5"
                  }
                    `}>
                  <span className="text-[12px] md:text-[14px] font-[700]">
                    {t("mayada")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-[8px]">
              <button className="py-[8px] pr-[16px] pl-[12px] bg-primary rounded-full text-[12px] text-white font-[700]">
                {t("accept")}
              </button>

              <button className="py-[8px] pr-[16px] pl-[12px] bg-silver/70 rounded-full text-[12px] text-asphalt font-[700]">
                {t("reject")}
              </button>
            </div>
          </div>
        </NotificationContainer>

        <NotificationContainer
          name="sara invite"
          icon={<PersonBlue />}
          hasSmallImgs={true}></NotificationContainer>

        <NotificationContainer
          name="order beight arrive now"
          icon={<BoxBlue />}
          hasSmallImgs={true}>
          <div className="p-3 flex items-center justify-between rounded-xl bg-cloud text-asphalt text-xs">
            <p className="font-bold">
              {t("Order number")} <span className="rtl:hidden">#</span>92839
              <span className="ltr:hidden">#</span>
            </p>

            <div className="p-1 flex items-center gap-1 bg-white rounded-full">
              <GroupAvatars images={images} imageSize={26} />
              <p className="w-[22px] font-[700]">+3</p>
            </div>
          </div>
        </NotificationContainer>

        <NotificationContainer
          name="Your Order X Will Finish Soon"
          icon={<BoxBlue />}
          hasSmallImgs={true}>
          <RemainingProduct disableDiscount={true} />
        </NotificationContainer>
      </div>
    </div>
  );
};

export default LastMonthNotifications;
