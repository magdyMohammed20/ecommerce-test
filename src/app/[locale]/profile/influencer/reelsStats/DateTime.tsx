import { useTranslations } from "next-intl";
import {
  ClockSVG,
  SecondCalenderSVG,
  SeparatorSVG,
} from "../../../../../../public/assets/svg/influencer";
import { useEffect, useState } from "react";

const DateTime = () => {
  const t = useTranslations();
  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setDocumentWidth(window.innerWidth);
      }, 200); // Adjust debounce delay as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-gray-400 flex gap-[8px] xl:gap-[16px] items-center justify-center">
      <div className="flex items-center gap-[4px]">
        <SecondCalenderSVG
          width={documentWidth <= 430 ? "12" : "18"}
          height={documentWidth <= 430 ? "12" : "18"}
          color="#455560"
        />
        <p className="text-[10px] lg:text-[14px] flex items-center py-0 text-asphalt leading-[160%] ">
          14 {t("may")}، 2023
        </p>
      </div>
      <div>
        <SeparatorSVG />
      </div>
      <div className="flex items-center gap-1">
        <ClockSVG
          width={documentWidth <= 430 ? "12" : "18"}
          height={documentWidth <= 430 ? "12" : "18"}
          color="#455560"
        />
        <span className="text-[10px] lg:text-[14px] flex items-center gap-2 mt-[4px] text-asphalt">
          2:00pm
        </span>
      </div>
    </div>
  );
};

export default DateTime;
