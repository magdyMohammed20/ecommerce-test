import { useTranslations } from "next-intl";

import Image from "next/image";

import { ShareWhiteIcon } from "../../../../public/assets/svg/product";
import { MerchantPerson } from "../../../../public/assets/svg/headerSvgs";
import {
  MerchantCart,
  MerchantStar,
} from "../../../../public/assets/svg/searchMenu";

const MerchantHeader = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-14 bg-white pb-4 md:pb-8 relative">
      <div className="w-full bg-primary">
        <div className="h-[120px] md:h-[170px] global-padding pt-7 flex justify-end">
          <div className="p-3 bg-white/20 rounded-full cursor-pointer h-fit hidden md:block">
            <ShareWhiteIcon width="24" height="24" />
          </div>
        </div>
      </div>

      <div className="global-padding bg-white flex flex-col gap-4">
        <div className="flex flex-col gap-[10px] px-3">
          <p className="font-bold">{t("Maria's store")}</p>
          <p className="text-asphalt">{t("footer_1")}</p>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button className="btn-primary">{t("Follow")}</button>
          <div className="p-3 bg-primary rounded-full cursor-pointer">
            <ShareWhiteIcon width="24" height="24" />
          </div>
        </div>
      </div>

      <div className="absolute global-padding left-0 right-0 top-[90px] md:top-[130px] flex items-center gap-1 md:gap-4">
        <div className="rounded-full overflow-hidden w-full max-w-[55px] md:max-w-20 h-[55px] md:h-20 border-2 border-white">
          <Image
            src="/assets/images/product/store-img.png"
            alt="store"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full rounded-full bg-cloud py-2 px-4 md:p-3 flex items-center justify-between">
          <div className="flex items-center justify-between gap-2 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-silver/30">
                <span className="hidden md:block">
                  <MerchantPerson width="24" height="24" />
                </span>
                <span className="md:hidden">
                  <MerchantPerson width="16" height="16" />
                </span>
              </div>
              <div>
                <p className="text-asphalt text-[10px] md:text-sm">
                  {t("Followers")}
                </p>
                <p className="font-bold text-16">498</p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-2 md:px-4 border-x border-silver">
              <div className="p-2 rounded-full bg-silver/30">
                <span className="hidden md:block">
                  <MerchantCart width="25" height="24" />
                </span>
                <span className="md:hidden">
                  <MerchantCart width="16" height="16" />
                </span>
              </div>
              <div>
                <p className="text-asphalt text-[10px] md:text-sm">
                  {t("Products")}
                </p>
                <p className="font-bold text-16">29856</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-silver/30">
                <span className="hidden md:block">
                  <MerchantStar width="24" height="24" />
                </span>
                <span className="md:hidden">
                  <MerchantStar width="16" height="16" />
                </span>
              </div>
              <div>
                <p className="text-asphalt text-[10px] md:text-sm">
                  {t("Evaluation")}
                </p>
                <p className="font-bold text-16">4.5</p>
              </div>
            </div>
          </div>

          <button className="btn-primary !hidden md:!flex !max-w-[129px]">
            {t("Follow")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantHeader;
