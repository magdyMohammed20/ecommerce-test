import { useTranslations } from "next-intl";

import Link from "next/link";

import { ProductArrowLeft } from "../../../../../../public/assets/svg/checkoutSvg";
import { UpSVG } from "../../../../../../public/assets/svg/influencer";

const GoBackLink = ({
  title,
  url,
  percentageExist,
  onChange,
}: {
  title: string;
  url?: string;
  percentageExist?: boolean;
  onChange?: () => void;
}) => {
  const t = useTranslations();
  return (
    <div className="bg-white lg:hidden py-4 px-4 md:px-8 border-b border-cloud flex justify-between items-center">
      <Link
        href={url ? url : "/profile"}
        onClick={onChange && onChange}
        className="flex items-center gap-2 w-fit">
        <span className="rtl:rotate-180">
          <ProductArrowLeft />
        </span>
        <p className="font-bold block transform translate-y-[2px]">
          {t(title)}
        </p>
      </Link>

      {percentageExist && (
        <div className="flex flex-col items-center  mt-1">
          <span className="text-[16px] lg:text-[20px] font-[700] mt-0.5">
            10M
          </span>

          {
            <span
              className="mt-0.5 
                 text-green-600
                 flex gap-[4px] md:gap-1 items-center">
              <UpSVG />
              <span className="text-[12px] lg:text-[14px]">26%</span>
            </span>
          }
        </div>
      )}
    </div>
  );
};

export default GoBackLink;
