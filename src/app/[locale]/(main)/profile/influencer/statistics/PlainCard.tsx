import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
interface BasicCardProps {
  imageUrl: string;
  title: number;
}

const BasicCard: React.FC<BasicCardProps> = ({ imageUrl, title }) => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center gap-[16px] flex-1 flex-shrink-0 flex-basis-0">
      <div className="rounded-[8px] overflow-hidden w-full h-full ">
        <Image
          src={imageUrl}
          alt="Card"
          className="aspect-square w-full h-full "
          width={178}
          height={178}
        />
      </div>

      <div className="">
        <div className="font-[400] text-[12px] md:text-[16px]  text-center">
          {title} {t("buyer")}
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
