import { useTranslations } from "next-intl";

import { Arrow16 } from "../../../../../../public/assets/svg/categoryBarSvgs";
import Image from "next/image";
import { CopySvg } from "../../../../../../public/assets/svg/marketingRequests";

interface Props {
  onSave: () => void;
}

const ShippingInfo = ({ onSave }: Props) => {
  const t = useTranslations();

  return (
    <div className="p-4 md:p-6 flex flex-col gap-6 rounded-12 bg-white">
      <div className="flex items-center justify-between">
        <p className="text-20 font-bold">{t("Shipping information")}</p>

        <div
          onClick={onSave}
          className="hidden lg:flex items-center gap-2 cursor-pointer"
        >
          <p className="text-sm">{t("Shipment follow-up")}</p>
          <span className="p-1 rounded-full bg-cloud ltr:rotate-180">
            <Arrow16 />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Image
          alt="aramex"
          src="/assets/images/profile/aramex.png"
          width={80}
          height={80}
          className="w-16 h-16 md:w-20 md:h-20 object-cover"
        />

        <div className="p-3 md:p-4 grid grid-cols-2 gap-4 md:gap-6 rounded-lg bg-cloud w-full text-asphalt text-sm">
          <div className="flex flex-col md:gap-1">
            <p className="opacity-70">{t("tracking number")}:</p>
            <div className="flex items-center gap-1">
              <p className="font-bold">69945083</p>
              <span className="cursor-pointer">
                <CopySvg />
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between rtl:pr-6 ltr:pl-6 border-silver/30 rtl:border-r ltr:border-l">
            <p className="opacity-70">{t("Charging status")}:</p>
            <p className="font-bold">{t("Delivery underway")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
