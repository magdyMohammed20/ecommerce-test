import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import IconStats from "./IconStats";
import {
  BagSvg,
  ViewsSvg,
} from "../../../../../../../public/assets/svg/landingPageSvgs";
import {
  BookmarkSvg,
  DoubleCommentsSvg,
  HeartIconSvg,
} from "../../../../../../../public/assets/svg/influencer";
import DateTime from "./DateTime";

const ReelsStatsInfo = () => {
  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);
  const t = useTranslations();
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

  const iconSize = documentWidth <= 430 ? "16" : "24";
  const icons = [
    {
      id: 1,
      Icon: <BagSvg color="#455560" width={iconSize} height={iconSize} />,
      num: "245",
    },
    {
      id: 2,
      Icon: <ViewsSvg color="#455560" width={iconSize} height={iconSize} />,
      num: "245",
    },
    {
      id: 3,
      Icon: (
        <DoubleCommentsSvg color="#455560" width={iconSize} height={iconSize} />
      ),
      num: "245",
    },
    {
      id: 4,
      Icon: <BookmarkSvg color="#455560" width={iconSize} height={iconSize} />,
      num: "2K",
    },
    {
      id: 5,
      Icon: <HeartIconSvg color="#455560" width={iconSize} height={iconSize} />,
      num: "20K",
    },
  ];

  const mapIcons = icons.map((icon) => (
    <IconStats Icon={icon.Icon} num={icon.num} key={icon.id} />
  ));
  return (
    <div className="bg-white p-[16px] md:p-[24px] rounded-[12px]  ">
      <div className="flex justify-between mx-auto xl:w-[655px]">
        {mapIcons}
      </div>
      <div className=" border-t border-b-cloud my-[16px] xl:my-[24px]"></div>
      <div className="flex flex-col gap-[8px] md:gap-[16px]">
        <DateTime />

        <p className="text-center xl:w-[621px] mx-auto text-asphalt text-[12px] md:text-[16px] xl:font-[400] leading-[160%]">
          {t("dummy")}
        </p>
      </div>
    </div>
  );
};

export default ReelsStatsInfo;
