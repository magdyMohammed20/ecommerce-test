import { useLocale, useTranslations } from "next-intl";

import NotificationContainer from "./NotificationContainer";

import {
  CommentSvg,
  FireSvg,
  LoveReact,
} from "../../../../../../public/assets/svg/influencerNotifications";

import Image from "next/image";
import { BookmarkSvg } from "../../../../../../public/assets/svg/influencerNotifications";
import CommentArea from "./CommentArea";
import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";
import OlderActivities from "./OlderActivities";

const images = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
];
const Activities = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col  gap-6 md:gap-4 lg:gap-6 xl:gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-16 font-bold">{t("new")}</p>
        <div>
          <div className="flex flex-col gap-3 ">
            <NotificationContainer isNew removeGap>
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
            <NotificationContainer isNew removeGap>
              <div className="flex ">
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
                    <span className="font-bold text-[14px]">{t("zidan")}</span>.
                    {t("follow you2")}
                  </span>
                </div>
              </div>
            </NotificationContainer>
            <NotificationContainer isNew removeGap>
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
                    <span className="font-bold text-[14px]">
                      {t("manar")}
                    </span>{" "}
                    {t("save post")}
                  </span>
                </div>

                <div className="w-full max-w-[45px] h-[65px] md:max-w-[31px] md:h-[45px] rounded-lg  overflow-hidden">
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
            <NotificationContainer isNew removeGap>
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
                    <span className="font-bold text-[14px]">
                      {t("manar")}
                    </span>{" "}
                    {t("like post")}
                  </span>
                </div>

                <div className="w-full max-w-[45px] h-[65px] md:max-w-[31px] md:h-[45px] rounded-lg  overflow-hidden">
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
            <NotificationContainer isNew removeGap>
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

                        <span className="absolute flex justify-center items-center  bottom-0 -left-0 bg-[#5A46FA] w-[14px] h-[14px]  rounded-full border border-white z-[40]">
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

                  <div className="w-full max-w-[45px] h-[65px] md:max-w-[31px] md:h-[45px] rounded-lg  overflow-hidden">
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
            <NotificationContainer isNew removeGap>
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

                        <span className="absolute flex justify-center items-center  bottom-0 -left-0 bg-[#5A46FA] w-[14px] h-[14px]  rounded-full border border-white z-[40]">
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

                  <div className="w-full max-w-[45px] h-[65px] md:max-w-[31px] md:h-[45px] rounded-lg  overflow-hidden">
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
            <NotificationContainer isNew removeGap>
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
                    <span className="font-bold text-[14px]">
                      {t("manar")}
                    </span>{" "}
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
                  <div className="w-full max-w-[45px] h-[65px] md:max-w-[31px] md:h-[45px] rounded-lg  overflow-hidden">
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
              hasImgInContent
              headerImg="/assets/images/product/product-1.png"
              name="up_to_20"
              isBlue={true}
              desc="great"
              isNew
              icon={<FireSvg color="#5A46FA" />}
            />
          </div>
        </div>
      </div>
      <OlderActivities />
    </div>
  );
};

export default Activities;
