import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";
import { useTranslations } from "next-intl";

import { VerticalLine } from "../../../../../../public/assets/svg/influencerNotifications";
const images = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
  "/assets/images/product/product-4.png",
];

const AdditionalInfo = () => {
  const t = useTranslations();
  return (
    <div className="p-3 flex justify-between items-center gap-4 rounded-xl bg-cloud">
      <div className="flex flex-col items-center flex-1">
        <span className="text-asphalt text-[12px] md:text-[14px]">
          {" "}
          {t("products")} :
        </span>
        <div className="mt-2">
          <GroupAvatars images={images} imageSize={26} />
        </div>
      </div>
      <VerticalLine />
      <div className="flex flex-col items-center flex-1">
        <span className="text-asphalt text-[12px] md:text-[14px]">
          {t("Commission")} :
        </span>
        <span className="font-bold text-asphalt mt-2 text-[12px]">
          {t("rate")}
          5%
        </span>
      </div>
      <VerticalLine />

      <div className="flex flex-col items-center flex-1">
        <span className="text-asphalt text-[12px] md:text-[14px]">
          {t("Motivation")} :
        </span>
        <span className="text-asphalt font-bold mt-2 text-[12px]">
          500 {t("SAR")}
        </span>
      </div>
    </div>
  );
};

export default AdditionalInfo;
