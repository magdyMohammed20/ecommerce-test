import { useTranslations } from "next-intl";

import Image from "next/image";

import {
  StoreCartSvg,
  StorePersonSvg,
  StoreStarSvg,
} from "../../../../../../public/assets/svg/product";
import { ShopIcon } from "../../../../../../public/assets/svg/marketingRequests";
import { ArrowSvg } from "../../../../../../public/assets/svg/sidebar";

interface Props {
  openAddress?: () => void;
}

const RequestStore = ({ openAddress }: Props) => {
  const t = useTranslations();

  return (
    <div className="p-4 md:p-6 flex flex-col gap-4 rounded-12 bg-white">
      <div className="flex items-center gap-1 pb-4 border-b border-cloud">
        <ShopIcon />
        <p className="text-20 font-bold">{t("Store")}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="rounded-full border border-cloud overflow-hidden">
            <Image
              src={"/assets/images/product/store-img.png"}
              alt="store-image"
              width={44}
              height={44}
              className="object-cover h-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-primary font-bold">{t("Maria's store")}</p>
            <div className="flex items-center gap-1 sm:gap-2 text-asphalt text-xs">
              <div className="flex items-center gap-[2px]">
                <StorePersonSvg />
                <p>1M</p>
              </div>
              <div className="flex items-center gap-[2px]">
                <StoreCartSvg />
                <p>2K</p>
              </div>
              <div className="flex items-center gap-[2px]">
                <StoreStarSvg />
                <p>4.5</p>
              </div>
            </div>
          </div>
        </div>

        <span onClick={openAddress} className="cursor-pointer ltr:rotate-180">
          <ArrowSvg />
        </span>
      </div>
    </div>
  );
};

export default RequestStore;
