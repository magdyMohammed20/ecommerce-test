import { useLocale } from "next-intl";

import { ArrowRightIconSvg } from "../../../public/assets/svg/categoryBarSvgs";

const HomeSliderBtns = ({
  onNext,
  onPrev,
  hasLargeIndex,
  isDark,
  className,
}: {
  onNext: () => void;
  onPrev: () => void;
  hasLargeIndex?: boolean;
  isDark?: boolean;
  className?:string;
}) => {
  const locale = useLocale();

  return (
    <div className="hidden lg:block">
      <div
        className={`p-3 ${hasLargeIndex && "z-[999]"}  ${
          isDark ? "lg:bg-[#51504e]" : "xl:bg-silver/70"
        } rounded-full absolute top-[46%] cursor-pointer ${className}
  ${locale === "en" ? "right-1 xl:right-5" : "left-1 xl:left-5"}`}
        onClick={onNext}>
        <ArrowRightIconSvg isDark={isDark} />
      </div>
      <div
        className={`p-3 ${hasLargeIndex && "z-[999]"} ${
          isDark ? "lg:bg-[#51504e]" : "xl:bg-silver/70"
        } rounded-full absolute top-[46%] cursor-pointer rotate-180 ${className}
  ${locale === "en" ? "left-1 xl:left-5" : "right-1 xl:right-5"}`}
        onClick={onPrev}>
        <ArrowRightIconSvg isDark={isDark} />
      </div>
    </div>
  );
};

export default HomeSliderBtns;
