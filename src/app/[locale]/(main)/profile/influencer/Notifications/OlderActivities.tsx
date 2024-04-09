import { useLocale, useTranslations } from "next-intl";
import NotificationContainer from "./NotificationContainer";
import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";
import Image from "next/image";

import {
  CommentSvg,
  LoveReact,
} from "../../../../../../../public/assets/svg/influencerNotifications";
import CommentArea from "./CommentArea";
import { useState } from "react";
import LikesModal from "./LikesModal";

const images = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
];
const OlderActivities = () => {
  const t = useTranslations();
  const locale = useLocale();

  const [openSuccess, setOpenSuccess] = useState(false);

  const handleSuccessMenu = () => {
    setOpenSuccess(!openSuccess);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-16 font-bold">{t("older_2")}</p>
      {openSuccess && <LikesModal onClose={handleSuccessMenu} />}
      <div className="flex flex-col gap-3">
        <NotificationContainer removeGap isNew>
          <div className="flex flex-col gap-[12px] ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[16px] flex-1">
                <div className="relative">
                  <div className=" w-[32px] h-[32px] rounded-full overflow-hidden ">
                    <Image
                      alt="User"
                      src={"/assets/images/product/product-1.png"}
                      width={32}
                      height={32}
                      className="w-full h-full"
                    />
                  </div>

                  <div className=" w-[32px] h-[32px] rounded-full  absolute -bottom-2 -left-2">
                    <Image
                      alt="User"
                      src={"/assets/images/influencer/user.png"}
                      width={32}
                      height={32}
                      className="w-full h-full"
                    />

                    <span className="absolute flex justify-center items-center  bottom-0 -left-0 bg-[#5A46FA] w-[14px] h-[14px]  rounded-full border border-white z-[700]">
                      <CommentSvg />
                    </span>
                  </div>
                </div>

                <span className="text-asphalt text-[14px] ">{t("omar")}</span>
              </div>

              <div className="w-full max-w-[45px] h-[65px] md:max-w-[31px] md:h-[45px] rounded-lg  overflow-hidden">
                <Image
                  alt="product"
                  src="/assets/images/product/product-1.png"
                  width={45}
                  height={65}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </NotificationContainer>
        <NotificationContainer
          removeGap
          isNew
          isReact={true}
          onClose={handleSuccessMenu}>
          <div className="flex flex-col gap-[12px] ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[16px] flex-1">
                <div className="relative">
                  <div className=" w-[32px] h-[32px] rounded-full overflow-hidden ">
                    <Image
                      alt="User"
                      src={"/assets/images/product/product-1.png"}
                      width={32}
                      height={32}
                      className="w-full h-full"
                    />
                  </div>

                  <div className=" w-[32px] h-[32px] rounded-full  absolute -bottom-2 -left-2">
                    <Image
                      alt="User"
                      src={"/assets/images/influencer/user.png"}
                      width={32}
                      height={32}
                      className="w-full h-full"
                    />

                    <span className="absolute flex justify-center items-center  bottom-0 -left-0 bg-[#FA285A] w-[14px] h-[14px]  rounded-full border border-white z-[700]">
                      <LoveReact />
                    </span>
                  </div>
                </div>

                <span className="text-asphalt text-[14px] ">{t("omar_2")}</span>
              </div>

              <div className="w-full max-w-[45px] h-[65px] md:max-w-[31px] md:h-[45px] rounded-lg  overflow-hidden">
                <Image
                  alt="product"
                  src="/assets/images/product/product-1.png"
                  width={45}
                  height={65}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </NotificationContainer>
        <NotificationContainer
          removeGap
          isNew
          isReact={true}
          onClose={handleSuccessMenu}>
          <div className="flex flex-col gap-[12px] ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[16px] flex-1">
                <div className="relative">
                  <div className=" w-[32px] h-[32px] rounded-full overflow-hidden ">
                    <Image
                      alt="User"
                      src={"/assets/images/product/product-1.png"}
                      width={32}
                      height={32}
                      className="w-full h-full"
                    />
                  </div>

                  <div className=" w-[32px] h-[32px] rounded-full  absolute -bottom-2 -left-2">
                    <Image
                      alt="User"
                      src={"/assets/images/influencer/user.png"}
                      width={32}
                      height={32}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <span className="text-asphalt text-[14px] pl-[50px]">
                  {t("omar_2")}
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
          </div>
        </NotificationContainer>
        <NotificationContainer
          removeGap
          isNew
          isReact={true}
          onClose={handleSuccessMenu}>
          <div className="flex flex-col gap-[12px] ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[16px] flex-1">
                <div className="relative">
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

                <span className="text-asphalt text-[14px] pl-[50px]">
                  {t("omar")}
                </span>
              </div>

              <div className="relative">
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
          </div>
        </NotificationContainer>
        <NotificationContainer isNew removeGap>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-[16px] flex-1">
              <div className="relative">
                <div className=" w-[32px] h-[32px] rounded-full overflow-hidden ">
                  <Image
                    alt="User"
                    src={"/assets/images/product/product-1.png"}
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </div>

                <div className=" w-[32px] h-[32px] rounded-full  absolute -bottom-2 -left-2">
                  <Image
                    alt="User"
                    src={"/assets/images/influencer/user.png"}
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </div>
              </div>

              <span className="text-asphalt text-[14px] pl-[60px] text-wrap">
                {" "}
                <span className="font-bold text-[14px] ">
                  {t("manar")}
                </span>{" "}
                <span> {t("omar_2")}</span>
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
            <CommentArea isDiff={true} />
          </div>
        </NotificationContainer>
      </div>
    </div>
  );
};

export default OlderActivities;
