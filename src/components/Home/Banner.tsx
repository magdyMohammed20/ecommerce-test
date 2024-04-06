import { useTranslations } from "next-intl";

import { BannerFireSvg } from "../../../public/assets/svg/landingPageSvgs";

const Banner = () => {
  const t = useTranslations();
  return (
    <div className="global-padding">
      <div className="px-4 py-[28px] md:py-[34px] lg:py-20 text-center flex flex-col items-center gap-1 lg:gap-4 justify-center bg-black text-white landing-page-banner rounded-xl">
        <p className="text-48 font-extrabold lg:leading-[70px]">
          {t("banner-1")}
        </p>
        <p className="text-xs lg:text-base">
          {t("Join us at Sam Valley, and be part of our success")}
        </p>
        <div className="flex items-center gap-2 mt-3">
          <button className="bg-transparent py-4 px-5 text-base font-bold whitespace-nowrap hidden lg:block">
            {t("know more")}
          </button>
          <button className="rounded-full bg-secondary py-2 px-4 lg:p-4 text-primary text-xs lg:text-base font-bold flex items-center gap-1">
            <BannerFireSvg color="#2F384C" />
            <p>{t("Be influential")}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
