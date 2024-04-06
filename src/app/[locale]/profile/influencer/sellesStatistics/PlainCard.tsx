import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
interface BasicCardProps {
  hideDetails?: Boolean;
  imageUrl: string;
  title: number;
  hasOverlay?: boolean;
  onClick?: () => void;
}

const BasicCard: React.FC<BasicCardProps> = ({
  imageUrl,
  title,
  onClick,
  hideDetails,
  hasOverlay,
}) => {
  const t = useTranslations();
  return (
    <div
      className="flex flex-col items-center gap-[16px] flex-1 flex-shrink-0 flex-basis-0"
      onClick={onClick}>
      <div className="relative rounded-[8px] overflow-hidden w-full h-full ">
        {hasOverlay && (
          <div className="bg-black absolute w-full h-full left-0 top-0 opacity-40"></div>
        )}
        <Image
          src={imageUrl}
          alt="Card"
          className="aspect-square w-full h-full "
          width={178}
          height={178}
        />
      </div>

      {!hideDetails && (
        <div>
          <div className="font-[400] text-[12px] md:text-[16px]  text-center">
            {title} {t("buyer")}
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicCard;
