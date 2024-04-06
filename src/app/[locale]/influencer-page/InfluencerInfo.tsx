import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";

import {
  CupIconSvg,
  ShareWhiteIcon,
} from "../../../../public/assets/svg/product";
import { MerchantPerson } from "../../../../public/assets/svg/headerSvgs";
import {
  MerchantEye,
  MerchantHeart,
} from "../../../../public/assets/svg/searchMenu";

const InfluencerInfo = () => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 p-4 md:p-6 bg-white rounded-xl">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center md:gap-4 w-full">
          <div className="max-w-16 md:max-w-20 h-16 md:h-20 w-full rounded-full overflow-hidden border-2 border-white">
            <Image
              alt="profile"
              src="/assets/images/hero/icon-1.png"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 md:flex w-full md:justify-start md:gap-4 lg:gap-10">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="md:p-2 rounded-full md:bg-silver/30">
                <span className="hidden md:block">
                  <MerchantPerson width="24" height="24" />
                </span>
                <span className="md:hidden">
                  <MerchantPerson width="16" height="16" />
                </span>
              </div>
              <div>
                <p className="text-asphalt text-[10px] md:text-sm capitalize">
                  {t("followers")}
                </p>
                <p className="font-bold text-16">4M</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 px-4 lg:px-6 border-x border-asphalt/10">
              <div className="md:p-2 rounded-full md:bg-silver/30">
                <span className="hidden md:block">
                  <MerchantEye width="24" height="24" color="#455560" />
                </span>
                <span className="md:hidden">
                  <MerchantEye width="16" height="16" color="#455560" />
                </span>
              </div>
              <div>
                <p className="text-asphalt text-[10px] md:text-sm">
                  {t("Views")}
                </p>
                <p className="font-bold text-16">20M</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="md:p-2 rounded-full md:bg-silver/30">
                <span className="hidden md:block">
                  <MerchantHeart width="25" height="24" />
                </span>
                <span className="md:hidden">
                  <MerchantHeart width="16" height="16" />
                </span>
              </div>
              <div>
                <p className="text-asphalt text-[10px] md:text-sm">
                  {t("Likes")}
                </p>
                <p className="font-bold text-16">40K</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p dir="ltr" className="text-16 font-bold w-fit">
            Ghaith Marwan 🍉 غيث مروان
          </p>
          <p
            dir="ltr"
            className="bg-cloud px-2 py-[2px] rounded-full text-primary/70 text-[10px] md:text-xs font-bold w-fit"
          >
            @ghaith_marwan
          </p>
          <div className="text-asphalt text-sm">
            <p>{t("merchant_2")}</p>
            <p>{t("merchant_3")}</p>
          </div>
          <div
            className={`px-2 py-[2px] flex items-center gap-[2px] text-primary text-[10px] lg:text-xs rounded-full w-fit
            ${locale === "ar" ? "trend-bg-ar" : "trend-bg"}
            `}
          >
            <CupIconSvg />
            <p className="font-bold">{t("#2 bestseller")}</p>
            <p>{t("this week")}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full md:w-fit">
        <button className="btn-primary md:min-w-[150px]">{t("Follow")}</button>
        <div className="p-3 rounded-full bg-primary cursor-pointer">
          <ShareWhiteIcon width="24" height="24" />
        </div>
      </div>
    </div>
  );
};

export default InfluencerInfo;
