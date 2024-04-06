import { useLocale, useTranslations } from "next-intl";
import NotificationContainer from "./NotificationContainer";

import {
  BoxBlue,
  SamMarket,
  SamvalleyLogo,
} from "../../../../../../public/assets/svg/notifications";
import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";
import Image from "next/image";
import UserProductReviewCard from "./UserProductReviewCard";

import { ProductArrowLeft } from "../../../../../../public/assets/svg/checkoutSvg";
import { CartIconSvgWhite } from "../../../../../../public/assets/svg/headerSvgs";
import Link from "next/link";
import FanwsCard from "./FanwsCard";

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
      <p className="text-16 font-bold">{t("older")}</p>

      <div className="flex flex-col gap-3">
        <NotificationContainer
          desc="warning"
          name="order canceled"
          icon={<BoxBlue />}>
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

        {/*        <NotificationContainer
          hasSmallImgs={true}
          images={images2}
          name="notification_6"
          icon={<BoxBlue />}>
          <RemainingProduct />
        </NotificationContainer> */}

        <NotificationContainer
          desc="no hesitate"
          name="Your order is now in your hands 🥳!"
          icon={<BoxBlue />}
          hasSmallImgs={true}></NotificationContainer>

        <NotificationContainer>
          <div
            className={`p-[16px] rounded-[12px] grid grid-cols-3 gap-[16px] ${
              locale === "ar"
                ? "secondary-gradient_en"
                : "secondary-gradient_en"
            }`}>
            <div className="flex flex-col gap-[16px] col-span-2">
              <SamMarket />
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[14px] md:text-[16px] font-[700]">
                      {" "}
                      {t("Happy birthday")}
                    </div>
                    <div className="text-[12px] md:text-[14px] leading-[160%]">
                      {t("birthday wish")}
                    </div>
                  </div>
                </div>
                <div>
                  <button className="py-[8px] px-[16px] bg-primary rounded-full text-[14px] text-white font-[700] ">
                    {t("my gift")}
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-0 col-span-1">
              <div className="flex flex-col justify-center md:items-end">
                <Image
                  src="/assets/images/notifications/gift.png"
                  alt="gift"
                  width={40}
                  height={43}
                />
                <Image
                  src="/assets/images/notifications/heart.png"
                  alt="heart"
                  width={40}
                  height={43}
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/images/notifications/cake.png"
                  alt="gift"
                  width={70}
                  height={40}
                />
              </div>
            </div>
          </div>
        </NotificationContainer>

        <NotificationContainer
          className="md:hidden"
          hasImgInHeader={true}
          headerImg="/assets/images/product/product-1.png"
          name="best product"
          icon={<BoxBlue />}
          hasSmallImgs={true}>
          <div className="bg-cloud rounded-lg overflow-hidden p-[12px] flex flex-col gap-[12px]">
            <div className="w-full  grid grid-cols-2 gap-[8px]">
              <UserProductReviewCard
                text="منتج x حقق توقعاتي بشكل كامل. سهل الاستخدام، وفعّال للغاية،
                وقيمته تتجاوز السعر."
                name="Sara"
                img="/assets/images/product/product-1.png"
              />
              <UserProductReviewCard
                text="منتج x حقق توقعاتي بشكل كامل. سهل الاستخدام، وفعّال للغاية،
                وقيمته تتجاوز السعر."
                name="Wed24"
                img="/assets/images/product/product-1.png"
              />
            </div>
            <div className="pt-2 border-t border-b-cloud"></div>

            <div>
              <a href="#">
                <div className="flex items-center justify-center">
                  <span className="text-[12px] font-[700] mt-0.5 text-asphalt">
                    {t("more")}
                  </span>
                  <ProductArrowLeft classNames="w-[15px] h-[15px]" />
                </div>
              </a>
            </div>
          </div>
        </NotificationContainer>

        <NotificationContainer className="md:hidden">
          <div
            className={`p-[16px] rounded-[12px]  ${
              locale === "ar"
                ? "secondary-gradient_en"
                : "secondary-gradient_en"
            }`}>
            <div className="flex flex-col gap-[16px]">
              <div className="flex justify-between items-center">
                <SamvalleyLogo />
                <div className="text-primary text-[16px] font-[700]">
                  {t("today trend")}
                </div>
              </div>

              <div className="pt-2 border-t border-b-cloud"></div>

              <div>
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-[700] text-asphalt">
                    {t("Miracle exfoliating acids set")}
                  </span>
                  <span className="text-[14px] font-[700] text-asphalt">
                    {" "}
                    250 {t("SAR")}
                  </span>
                </div>
              </div>

              <div>
                <div className="w-1/2 h-[ 133px] w-[185px]  rounded-lg  mx-auto relative ">
                  <Image
                    alt="product"
                    src="/assets/images/product/product.png"
                    width={185}
                    height={133}
                    className="w-full h-full "
                  />

                  <div className="bg-primary p-[8px] flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 left-0 rounded-full">
                    <CartIconSvgWhite />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-[8px]">
                <button className="py-[8px] pr-[16px] pl-[12px] bg-primary rounded-full text-[14px] text-white font-[700] flex items-center gap-[4px] justify-center">
                  {t("view experiements")}
                  <ProductArrowLeft classNames="text-white" isWhite={true} />
                </button>
                <button className="py-[8px] pr-[16px] pl-[12px] bg-[#d9dce1b3] rounded-full text-[14px] text-asphalt font-[700] flex items-center gap-[4px] justify-center">
                  {t("details")}
                  <ProductArrowLeft />
                </button>
              </div>
            </div>
          </div>
        </NotificationContainer>

        <NotificationContainer>
          <div
            className={`p-[16px] rounded-[12px]  ${
              locale === "ar"
                ? "secondary-gradient_en"
                : "secondary-gradient_en"
            }`}>
            <div className="flex flex-col gap-[16px]">
              <div className="flex justify-between items-center">
                <SamvalleyLogo />
                <div
                  className={`text-primary text-[16px] font-[700] ${
                    locale == "en" ? "text-left" : "text-right"
                  }`}>
                  {t("ramadan kareem")}
                </div>
              </div>
              <div className="pt-2 border-t border-b-cloud"></div>

              <div>
                <div className="flex justify-between items-center">
                  <span className="text-[14px] md:text-[16px] font-[700] text-asphalt">
                    {t("fwanes")}
                  </span>

                  <Link href="/" className="flex items-center gap-[8px]">
                    <span className="text-[12px] md:text-[14px] mt-0.5 text-asphalt">
                      {t("show all")}
                    </span>
                    <ProductArrowLeft
                      classNames={`w-[16px] h-[16px] ${
                        locale == "en" ? "transform rotate-180" : ""
                      }`}
                    />
                  </Link>
                </div>
              </div>

              <div className="flex justify-between">
                <FanwsCard
                  img="/assets/images/product/fanous.png"
                  name="gloden fanous"
                  slogan="more sell"
                  price="35"
                />
                <FanwsCard
                  img="/assets/images/product/fanous.png"
                  name="gloden fanous"
                  slogan="more sell"
                  price="35"
                />
                <FanwsCard
                  img="/assets/images/product/fanous.png"
                  name="gloden fanous"
                  slogan="more sell"
                  price="35"
                />

                <FanwsCard
                  className="hidden md:flex"
                  img="/assets/images/product/fanous.png"
                  name="gloden fanous"
                  slogan="more sell"
                  price="35"
                />
              </div>
            </div>
          </div>
        </NotificationContainer>
      </div>
    </div>
  );
};

export default OlderNotifications;
