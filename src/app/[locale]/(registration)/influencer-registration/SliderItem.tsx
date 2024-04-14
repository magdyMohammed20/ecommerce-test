import { useTranslations } from "next-intl";
import Image from "next/image";

const SliderItem = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-end gap-8">
      <Image
        src="/assets/images/influencer/hotSeal.png"
        width={50}
        height={50}
        alt="img"
      />
      <div className="flex flex-col gap-6">
        <h1 className="lg:text-[20px] xl:text-[24px] font-bold text-right">
          : وصول إلى جمهور واسع:
        </h1>
        <p className="lg:text-[16px] xl:text-[18px] text-right">{t("wafr")}</p>
      </div>
    </div>
  );
};

export default SliderItem;
