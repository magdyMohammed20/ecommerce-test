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
}: Props) => {
  const t = useTranslations();

  return (
    <div className={`bg-white p-4 flex flex-col gap-3 rounded-lg ${className}`}>
      {/* date and new button */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {isNew && <p className="rounded-full w-[9px] h-[9px] bg-[#E42E59]" />}
          <p className="text-asphalt/70 text-xs mt-1">14 {t("May")} - 2023</p>
        </div>
        {hasImgInHeader && headerImg && (
          <div className="w-full max-w-[32px] h-[40px] rounded-lg overflow-hidden">
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
      {/* notification name */}

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          {icon && <p className="rounded-full p-2 bg-[#EEECFF]">{icon}</p>}

          <div className="flex flex-col gap-2 text-asphalt text-sm">
            {name && <p className="font-[700] text-[14px]">{t(name)}</p>}
            {desc && <p>{t(desc)}</p>}
          </div>
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
