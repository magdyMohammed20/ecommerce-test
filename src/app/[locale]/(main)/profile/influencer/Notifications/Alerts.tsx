import { useLocale, useTranslations } from "next-intl";
import NotificationContainer from "./NotificationContainer";
import {
  CheckedSVG,
  FireSvg,
  VerticalLine,
} from "../../../../../../../public/assets/svg/influencerNotifications";
import ReadyVideo from "./ReadyVideo";
import {
  MoneySVG,
  TimerSVG,
} from "../../../../../../../public/assets/svg/influencer";
import AdditionalInfo from "./AdditionalInfo";
import { ProductArrowLeft } from "../../../../../../../public/assets/svg/checkoutSvg";
import Image from "next/image";

import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";
import SecondAdditionalInfo from "./SecondAdditionalInfo";
import {
  BoxBlue,
  CardSvg,
} from "../../../../../../../public/assets/svg/notifications";

const images = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
];
const Alerts = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-16 font-bold">{t("new")}</p>
      <div className="flex flex-col gap-3">
        <NotificationContainer
          name="notification_10"
          isChecked={true}
          isNew
          desc="enjoy_follower"
          icon={<CheckedSVG />}>
          <ReadyVideo />
        </NotificationContainer>
        <NotificationContainer
          name="notification_11"
          isPending={true}
          isNew
          desc="notification_12"
          icon={<TimerSVG color="#ED873F" />}>
          <ReadyVideo />
        </NotificationContainer>
        <NotificationContainer
          name="You have a new marketing request"
          isNew
          icon={<FireSvg />}>
          <AdditionalInfo />

          <button className="px-[12px] py-[8px] md:px-[16px] font-bold md:py-[8px] text-[14px] md:text-[14px]  w-full flex items-center rounded-full text-center bg-primary text-white  justify-center">
            {t("Order Details")}
            <ProductArrowLeft
              isWhite={true}
              classNames={`${useLocale() === "en" && "rotate-180"}`}
            />
          </button>
        </NotificationContainer>

        <NotificationContainer
          name="Opportunity has passed"
          desc="desc_1"
          isNew
          icon={<FireSvg />}>
          <SecondAdditionalInfo />

          <button className="px-[12px] py-[8px] md:px-[16px] font-bold md:py-[8px] text-[14px] md:text-[14px]  w-full flex items-center rounded-full text-center bg-primary text-white  justify-center">
            {t("Order Details")}
            <ProductArrowLeft
              isWhite={true}
              classNames={`${useLocale() === "en" && "rotate-180"}`}
            />
          </button>
        </NotificationContainer>
        <NotificationContainer
          name="congsMsg"
          desc="note"
          isNew
          icon={<FireSvg />}
        />
        <NotificationContainer
          name="transfer_order"
          isNew
          icon={<MoneySVG color="#5A46FA" />}>
          <div className="p-3 flex items-center gap-4 rounded-xl bg-cloud md:justify-between">
            <div className="flex items-center gap-[4px]">
              <TimerSVG />
              <span className="text-asphalt text-[12px] mt-0.5">
                {t("underTransfer")}
              </span>
            </div>
            <VerticalLine />
            <div className="flex items-center gap-[4px]">
              <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
                <Image
                  src="/assets/images/influencer/bank.png"
                  width={17}
                  height={15}
                  alt="bank"
                />
              </div>
              <span className="text-asphalt text-[12px] mt-1">
                {t("raghi")}
              </span>
            </div>
            <VerticalLine />
            <div className="flex items-center gap-[4px]">
              <CardSvg />
              <span className="text-asphalt text-[12px] mt-1">****4545</span>
            </div>
          </div>
        </NotificationContainer>
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
      </div>
    </div>
  );
};

export default Alerts;
