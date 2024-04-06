import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLeftSVG } from "../../../../../../public/assets/svg/influencer";
import { ProductArrowLeft } from "../../../../../../public/assets/svg/checkoutSvg";

interface Props {
  img: string;
  slogan: string;
  name: string;
  price: string;
  className?: string;
}
const FanwsCard: React.FC<Props> = ({
  img,
  slogan,
  name,
  price,
  className,
}) => {
  const t = useTranslations();
  const lang = useLocale();
  return (
    <div className={`flex flex-col gap-[12px] items-center ${className}`}>
      <div className="w-[55px] h-[110px]">
        <Image
          src={img}
          width={55}
          height={110}
          alt={name}
          className="h-full w-full"
        />
      </div>
      <div
        className="px-[8px] rounded-full text-[12px] text-asphalt"
        style={{
          background:
            "linear-gradient(90deg, rgba(90, 70, 250, 0.00) 16.42%, rgba(243, 232, 129, 0.30) 105.97%)",
        }}>
        {t(slogan)}
      </div>

      <div className="px-[8px] text-[14px] font-[700] text-asphalt">
        {t(name)}
      </div>

      <div className="px-[8px] text-[14px] font-[700] text-asphalt">
        {price} {lang == "ar" ? "ر.س" : "SAR"}
      </div>

      <div>
        <Link
          href={`/profile?tab=show-all`}
          className="flex items-center gap-[4px]  cursor-pointer font-[700] text-[#5A46FA] text-[14px] ">
          {t("buy now")}

          <ProductArrowLeft
            classNames={`w-[14px] h-[14px] ${lang == "en" && "rotate-180"}`}
            isBlue={true}
          />
        </Link>
      </div>
    </div>
  );
};

export default FanwsCard;
