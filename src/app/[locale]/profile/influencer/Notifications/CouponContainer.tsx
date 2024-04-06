import { useTranslations } from "next-intl";
import {
  CloudSvg,
  DoubleStarsSvg,
} from "../../../../../../public/assets/svg/notifications";
import { CopySvg } from "../../../../../../public/assets/svg/marketingRequests";
import { ArrowLeftIconSvg } from "../../../../../../public/assets/svg/footerSvgs";
import { ArrowLeftSVG } from "../../../../../../public/assets/svg/influencer";
import Image from "next/image";
import { ProductArrowLeft } from "../../../../../../public/assets/svg/checkoutSvg";

const CouponContainer = () => {
  const t = useTranslations();
  return (
    <div
      className="w-full  bg-contain bg-center bg-no-repeat"
      style={
        {
          /* backgroundImage: `url('/assets/svg/coupon-bg.svg')` */
        }
      }>
      <div className="grid grid-cols-3  relative h-[88px]">
        <Image
          src={"/assets/svg/coupon-bg1.png"}
          width={100}
          height={100}
          alt="bg"
          className="w-full absolute top-0 left-0 right-0 bottom-0 h-[88px] z-0"
        />

        <div className="flex items-center justify-between md:justify-around px-5  col-span-2 z-[999] h-full overflow-hidden">
          <div>
            <DoubleStarsSvg />
          </div>
          <div className="relative">
            <div className="flex absolute top-0.5 right-[5px]">
              <CloudSvg />
            </div>
            <div className="text-center flex flex-col gap-[8px]">
              <div className="flex flex-col gap-[4px]">
                <div className="text-16 font-[700]">
                  {t("Winter is Coming")}
                </div>
                <div className="text-14">
                  {" "}
                  {t("Enjoy discounts on winter clothes")} 🌂{" "}
                </div>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-16 font-[700]">{t("winter")}</span>
                <CopySvg classNames="w-[14px] h-[14px] md:w-[20px] md:h-[20px]" />
              </div>
            </div>
            <div className="flex left-[5px] absolute bottom-0 ">
              <CloudSvg />
            </div>
          </div>

          <div>
            <DoubleStarsSvg />
          </div>
        </div>
        <div className="flex items-center justify-center  col-span-1 z-[999] h-full overflow-hidden">
          <div className="text-center flex flex-col gap-[8px]">
            <div className="flex flex-col gap-[2px]">
              <div className="text-14 font-[700] text-[#455560]">20%</div>
              <div className="text-14 text-[#455560]">{t("only 7 days")}</div>
            </div>
            <div>
              <button className="px-[6px] py-[4px] md:px-[16px] md:py-[8px] text-[10px] md:text-[12px]  w-full flex items-center rounded-[16px] text-center bg-primary text-white">
                {t("shop now")}
                <ProductArrowLeft
                  isWhite={true}
                  classNames="md:hidden w-[12px] h-[12px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponContainer;
