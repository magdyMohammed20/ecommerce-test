import { useLocale, useTranslations } from "next-intl";

import NotificationContainer from "./NotificationContainer";

import {
  CheckedSVG,
  CommentSvg,
  FireSvg,
  LoveReact,
} from "../../../../../../../public/assets/svg/influencerNotifications";
import ReadyVideo from "./ReadyVideo";
import {
  MoneySVG,
  TimerSVG,
} from "../../../../../../../public/assets/svg/influencer";
import AdditionalInfo from "./AdditionalInfo";
import { ProductArrowLeft } from "../../../../../../../public/assets/svg/checkoutSvg";
import Image from "next/image";
import { BookmarkSvg } from "../../../../../../../public/assets/svg/influencerNotifications";
import CommentArea from "./CommentArea";
import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";
import DropDown from "@/components/DropDown/DropDown";
import { useEffect, useState } from "react";

const images = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
];

const data = {
  label: "show",
  items: [
    {
      id: 0,
      name: "all",
    },
    {
      id: 1,
      name: "Promotional clips",
    },
    {
      id: 2,
      name: "Product sales",
    },
    {
      id: 3,
      name: "Marketing requests",
    },
    {
      id: 4,
      name: "Money transfers",
    },
    {
      id: 5,
      name: "Followers",
    },
    {
      id: 6,
      name: "Reacts",
    },
  ],
};
const NewNotifications = () => {
  const t = useTranslations();
  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setDocumentWidth(window.innerWidth);
      }, 200); // Adjust debounce delay as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start">
        <DropDown
          notFw={documentWidth <= 430 ? false : true}
          data={data}
          different={true}
          showSelected={documentWidth < 768}
        />
      </div>
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
          name="$500 has been transferred to your account, enjoy your winnings"
          isNew
          icon={<MoneySVG color="#5A46FA" />}
        />

        <NotificationContainer isNew removeGap={true}>
          <div className="flex items-center justify-between ">
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
                <span className="font-bold text-[14px]">{t("malak")}</span>.
                {t("follow you")}
              </span>
            </div>

            <button className="px-[16px] py-[8px] md:px-[16px] font-bold md:py-[8px] text-[14px] md:text-[14px]  flex items-center rounded-full text-center bg-primary text-white  justify-center">
              {t("Follow Back")}
            </button>
          </div>
        </NotificationContainer>

        <NotificationContainer isNew removeGap={true}>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-[8px] flex-1">
              <div className="relative">
                <div className=" w-[32px] h-[32px] rounded-full overflow-hidden ">
                  <Image
                    alt="User"
                    src={"/assets/images/product/product-1.png"}
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />

                  <span className="absolute  bottom-0 left-0 bg-[#5A46FA] p-[3px]  rounded-full border border-white z-[999]">
                    <BookmarkSvg />
                  </span>
                </div>
              </div>

              <span className="text-asphalt text-[14px] whitespace-nowrap">
                {" "}
                <span className="font-bold text-[14px]">{t("manar")}</span>{" "}
                {t("save post")}
              </span>
            </div>

            <div className="w-full max-w-[45px] md:max-w-[31px] md:h-[45px] h-[65px]  rounded-lg overflow-hidden">
              <Image
                alt="product"
                src="/assets/images/product/product-1.png"
                width={54}
                height={66}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </NotificationContainer>

        <NotificationContainer isNew removeGap={true}>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-[8px] flex-1">
              <div className="relative">
                <div className=" w-[32px] h-[32px] rounded-full overflow-hidden ">
                  <Image
                    alt="User"
                    src={"/assets/images/product/product-1.png"}
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />

                  <span className="absolute flex justify-center items-center  bottom-0 -left-0 bg-[#FA285A] w-[14px] h-[14px]  rounded-full border border-white z-[999]">
                    <LoveReact />
                  </span>
                </div>
              </div>

              <span className="text-asphalt text-[14px] whitespace-nowrap">
                {" "}
                <span className="font-bold text-[14px]">{t("manar")}</span>{" "}
                {t("like post")}
              </span>
            </div>

            <div className="w-full max-w-[45px] h-[65px] md:max-w-[31px] md:h-[45px] rounded-lg overflow-hidden">
              <Image
                alt="product"
                src="/assets/images/product/product-1.png"
                width={54}
                height={66}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </NotificationContainer>

        <NotificationContainer isNew removeGap={true}>
          <div className="flex flex-col gap-[12px] ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px] flex-1">
                <div className="relative">
                  <div className=" w-[32px] h-[32px] rounded-full overflow-hidden ">
                    <Image
                      alt="User"
                      src={"/assets/images/product/product-1.png"}
                      width={32}
                      height={32}
                      className="w-full h-full"
                    />

                    <span className="absolute flex justify-center items-center  bottom-0 -left-0 bg-[#5A46FA] w-[14px] h-[14px]  rounded-full border border-white z-40">
                      <CommentSvg />
                    </span>
                  </div>
                </div>

                <span className="text-asphalt text-[14px] whitespace-nowrap">
                  {" "}
                  <span className="font-bold text-[14px]">
                    {t("manar")}
                  </span>{" "}
                  {t("commented")} :
                </span>
              </div>

              <div className="w-full max-w-[45px] h-[65px] md:max-w-[31px] md:h-[45px] rounded-lg overflow-hidden">
                <Image
                  alt="product"
                  src="/assets/images/product/product-1.png"
                  width={54}
                  height={66}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <CommentArea />
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
                className={`absolute top-1/2 transform -translate-y-1/2 ${
                  useLocale() == "en" ? "right-[45%]" : "left-[45%]"
                }`}>
                <GroupAvatars images={images} imageSize={26} />
              </div>
              <div className="w-full max-w-[45px] h-[65px]  md:max-w-[31px] md:h-[45px] rounded-lg  overflow-hidden">
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
      </div>
    </div>
  );
};

export default NewNotifications;
