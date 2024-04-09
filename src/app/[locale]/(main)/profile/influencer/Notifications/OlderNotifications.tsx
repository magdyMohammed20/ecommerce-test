import { useLocale, useTranslations } from "next-intl";
import NotificationContainer from "./NotificationContainer";
import {
  CardSvg,
  PersonBlue,
} from "../../../../../../../public/assets/svg/notifications";
import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";
import Image from "next/image";
import {
  MoneySVG,
  TimerSVG,
} from "../../../../../../../public/assets/svg/influencer";

import { VerticalLine } from "../../../../../../../public/assets/svg/influencerNotifications";

const images = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
];
const OlderNotifications = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-2">
      <p className="text-16 font-bold">{t("older_2")}</p>

      <div className="flex flex-col gap-3">
        <NotificationContainer
          name="$500 has been transferred to your account, enjoy your winnings"
          isNew
          icon={<MoneySVG color="#5A46FA" />}
        />

        <NotificationContainer
          name="$500 has been transferred to your account, enjoy your winnings"
          isNew
          icon={<MoneySVG color="#5A46FA" />}
        />

        <NotificationContainer
          name="transfer_order"
          isNew
          icon={<MoneySVG color="#5A46FA" />}>
          <div className="py-[12px] px-[8px] flex items-center gap-4 rounded-xl bg-cloud md:justify-between">
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
          name="Your order is now in your hands 🥳!"
          desc="no hesitate"
          isNew
          icon={<MoneySVG color="#5A46FA" />}
        />

        <NotificationContainer isNew removeGap={true}>
          <div className="flex items-center gap-[8px] flex-1">
            <div className="w-full max-w-[26px] h-[26px] rounded-full overflow-hidden">
              <Image
                alt="User"
                src={"/assets/images/product/product-1.png"}
                width={52}
                height={52}
                className="w-full h-full"
              />
            </div>
            <span className="text-asphalt text-[14px] whitespace-nowrap">
              {" "}
              <span className="font-bold text-[14px]">{t("malak")}</span>
              {t("follow you")}
            </span>
          </div>
        </NotificationContainer>

        <NotificationContainer isNew removeGap={true}>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-[8px] flex-1">
              <div>
                <div className=" w-[32px] h-[32px] rounded-full overflow-hidden ">
                  <Image
                    alt="User"
                    src={"/assets/images/product/product-1.png"}
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </div>
              </div>

              <span className="text-asphalt text-[14px] whitespace-nowrap">
                {" "}
                <span className="font-bold text-[14px]">{t("manar")}</span>{" "}
                {t("buy a product")}.
              </span>
            </div>

            <div className="relative">
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 left-[45%] ${
                  useLocale() == "en" ? "right-[45%]" : "left-[45%]"
                }`}>
                <GroupAvatars images={images} imageSize={26} />
              </div>
              <div className="w-full max-w-[45px] h-[65px] rounded-lg  overflow-hidden">
                <Image
                  alt="product"
                  src="/assets/images/product/product-1.png"
                  width={54}
                  height={66}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
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
                      locale == "en" ? "-translate-x-7" : "translate-x-7"
                    }`}>
                    <GroupAvatars
                      images={["/assets/images/product/product-2.png"]}
                      imageSize={45}
                    />
                  </div>
                </div>
                <div
                  className={`transform  ${
                    locale == "en" ? "-translate-x-5" : "translate-x-5"
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
          name="sara invite"
          icon={<PersonBlue />}
          hasSmallImgs={true}></NotificationContainer>
      </div>
    </div>
  );
};

export default OlderNotifications;
