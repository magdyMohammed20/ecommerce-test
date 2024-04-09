import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";
import Image from "next/image";

interface Props {
  name?: string;
  icon?: ReactNode;
  isNew?: boolean;
  desc?: string;
  children?: ReactNode;
  hasSmallImgs?: Boolean;
  images?: string[];
  hasImgInHeader?: boolean;
  headerImg?: string;
  className?: string;
  isChecked?: boolean;
  isPending?: boolean;
  isBlue?: boolean;
  hasImgInContent?: boolean;
  isReact?: boolean;
  onClose?: () => void;
  removeGap?: boolean;
}

const NotificationContainer = ({
  name,
  isNew,
  desc,
  children,
  icon,
  hasSmallImgs,
  hasImgInHeader,
  headerImg,
  images,
  className,
  isChecked,
  isPending,
  isBlue,
  hasImgInContent,
  isReact,
  onClose,
  removeGap,
}: Props) => {
  const t = useTranslations();

  const handleClick = () => {
    if (isReact && onClose) {
      onClose();
    }
  };
  return (
    <div
      className={`bg-white p-4 flex flex-col gap-3
       rounded-lg ${className} ${isReact && "cursor-pointer"}`}
      onClick={() => handleClick()}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {isNew && <p className="rounded-full w-[9px] h-[9px] bg-[#E42E59]" />}
          <p className="text-asphalt/70 text-xs mt-1">14 {t("May")} - 2023</p>
        </div>

        {hasImgInHeader && headerImg && (
          <div className="w-full max-w-[45px] h-[65px] rounded-lg  overflow-hidden">
            <Image
              alt="product"
              src={headerImg}
              width={54}
              height={66}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      {/* notification name */}

      <div
        className={` ${removeGap && "hidden"} ${
          hasSmallImgs && "flex items-center justify-between gap-2"
        }`}>
        <div
          className={`flex ${!desc ? "items-center gap-[8px]" : "gap-3"}  ${
            hasImgInContent && "justify-between"
          }`}>
          <div className="flex items-center  gap-[8px] md:gap-[12px]">
            {icon && (
              <p
                className={`rounded-full p-2 self-start  ${
                  isBlue
                    ? "bg-[#EEECFF]"
                    : isChecked
                    ? "bg-[#4d9a371f]"
                    : isPending
                    ? "bg-[#ed873f1f]"
                    : "bg-cloud"
                }`}>
                {icon}
              </p>
            )}

            <div className="flex flex-col gap-2 text-asphalt text-sm">
              {name && <p className="font-bold text-[14px]">{t(name)}</p>}
              {desc && <p className="text-[12px] md:text-[14px]">{t(desc)}</p>}
            </div>
          </div>

          {hasImgInContent && headerImg && (
            <div className="w-full max-w-[45px] h-[65px] md:max-w-[31px] md:h-[45px] rounded-lg  overflow-hidden">
              <Image
                alt="product"
                src={headerImg}
                width={52}
                height={52}
                className="w-full h-full "
              />
            </div>
          )}
        </div>

        {hasSmallImgs && (
          <div className="p-1 flex items-center gap-1 bg-white rounded-full">
            <GroupAvatars images={images} imageSize={26} isBlured={true} />
          </div>
        )}
      </div>
      {children && children}
    </div>
  );
};

export default NotificationContainer;
