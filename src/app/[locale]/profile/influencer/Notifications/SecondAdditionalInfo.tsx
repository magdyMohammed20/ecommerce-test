import { useTranslations } from "next-intl";
import { VerticalLine } from "../../../../../../public/assets/svg/influencerNotifications";

const SecondAdditionalInfo = () => {
  const t = useTranslations();
  return (
    <div className="p-3 flex justify-between items-center gap-4 rounded-xl bg-cloud">
      <div className="flex flex-col items-center flex-1">
        <span className="text-asphalt text-[12px]"> {t("Commission")} :</span>
        <span className="font-bold text-asphalt mt-2 text-[12px]">
          {t("rate")}
          5%
        </span>
      </div>
      <VerticalLine />
      <div className="flex flex-col items-center flex-1">
        <span className="text-asphalt text-[12px]">{t("Motivation")} :</span>
        <span className="text-asphalt font-bold mt-2 text-[12px]">
          500 {t("SAR")}
        </span>
      </div>
      <VerticalLine />

      <div className="flex flex-col items-center flex-1">
        <span className="text-asphalt text-[12px]">{t("remaining")} :</span>
        <span className="text-[12px] text-asphalt font-bold mt-2">
          {" "}
          {t("2 days")}
        </span>
      </div>
    </div>
  );
};

export default SecondAdditionalInfo;
