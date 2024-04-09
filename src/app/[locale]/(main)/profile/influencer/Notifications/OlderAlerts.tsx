import { useLocale, useTranslations } from "next-intl";
import NotificationContainer from "./NotificationContainer";

import {
  BoxBlue,
  FlashBlue,
  PersonBlue,
  SamvalleyLogo,
} from "../../../../../../../public/assets/svg/notifications";
import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";
import Image from "next/image";
import { FireSvg } from "../../../../../../../public/assets/svg/influencerNotifications";
import SecondAdditionalInfo from "./SecondAdditionalInfo";
import {
  ProductArrowLeft,
  UserSearch,
} from "../../../../../../../public/assets/svg/checkoutSvg";
import CouponContainer from "./CouponContainer";
import RemainingProduct from "./RemainingProduct";
import UserProductReviewCard from "./UserProductReviewCard";
import { CartIconSvgWhite } from "../../../../../../../public/assets/svg/headerSvgs";

const images = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
];

const images1 = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
];
const OlderAlerts = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-2">
      <p className="text-16 font-bold">{t("older_2")}</p>

      <div className="flex flex-col gap-3">
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
              classNames={`${locale === "en" && "rotate-180"}`}
            />
          </button>
        </NotificationContainer>
        <NotificationContainer
          name="congsMsg"
          desc="note"
          isNew
          icon={<FireSvg />}
        />
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
          images={images}
          name="notification_6"
          icon={<BoxBlue />}>
          <RemainingProduct removeRemain={true} />
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
          hasImgInContent={true}
          headerImg="/assets/images/product/product-1.png"
          name="best product"
          icon={<BoxBlue />}>
          <div className="bg-cloud rounded-lg overflow-hidden p-[12px] flex flex-col gap-[12px]">
            <div className="w-full  grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[8px]">
              <UserProductReviewCard
                text={t("expect")}
                name="Sara"
                img="/assets/images/product/product-1.png"
              />
              <UserProductReviewCard
                text={t("expect")}
                name="Wed24"
                img="/assets/images/product/product-1.png"
              />
              <UserProductReviewCard
                className="hidden md:flex"
                text={t("expect")}
                name="Wed24"
                img="/assets/images/product/product-1.png"
              />
              <UserProductReviewCard
                className="hidden xl:flex"
                text={t("expect")}
                name="Wed24"
                img="/assets/images/product/product-1.png"
              />
            </div>
            <div className="pt-2 border-t border-b-cloud"></div>

            <div>
              <a href="#">
                <div className="flex items-center justify-center">
                  <span className="text-[12px] font-bold mt-0.5 text-asphalt">
                    {t("more")}
                  </span>
                  <ProductArrowLeft
                    classNames={` w-[15px] h-[15px] ${
                      useLocale() === "en" && "rotate-180"
                    }`}
                  />
                </div>
              </a>
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
                <div className="text-primary text-[16px] font-[700]">
                  {t("today trend")}
                </div>
              </div>

              <div className="pt-2 border-t border-b-cloud"></div>

              <div>
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-bold text-asphalt">
                    {t("Miracle exfoliating acids set")}
                  </span>
                  <span className="text-[14px] font-bold text-asphalt">
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
                  <ProductArrowLeft
                    isWhite={true}
                    classNames={` text-white ${
                      useLocale() === "en" && "rotate-180"
                    }`}
                  />
                </button>
                <button className="py-[8px] pr-[16px] pl-[12px] bg-[#d9dce1b3] rounded-full text-[14px] text-asphalt font-[700] flex items-center gap-[4px] justify-center">
                  {t("details")}
                  <ProductArrowLeft
                    classNames={`  ${useLocale() === "en" && "rotate-180"}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </NotificationContainer>
        <NotificationContainer
          name="sara invite"
          icon={<PersonBlue />}
          hasSmallImgs={true}></NotificationContainer>
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

export default OlderAlerts;
