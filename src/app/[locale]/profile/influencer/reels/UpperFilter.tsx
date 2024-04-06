import DropDown from "@/components/DropDown/DropDown";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
const dates = {
  label: "show",
  items: [
    {
      id: 1,
      name: "last 7 days",
    },
    {
      id: 2,
      name: "last 1 month",
    },
  ],
};

const sortBy = {
  label: "sort by",
  items: [
    {
      id: 1,
      name: "newest",
    },
    {
      id: 2,
      name: "views number",
    },
    {
      id: 3,
      name: "buy number",
    },
    {
      id: 2,
      name: "likes record",
    },
    {
      id: 2,
      name: "save process",
    },
    {
      id: 2,
      name: "comments",
    },
  ],
};
const UpperFilter = () => {
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
    <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-[8px]">
      <h2 className="text-[16px] font-[700]">
        13 {t("December")} - 19 {t("December")}
      </h2>
      <div className="grid grid-cols-2  gap-[8px] items-center">
        <DropDown
          data={dates}
          different={true}
          showSelected={documentWidth < 768}
        />
        <DropDown
          data={sortBy}
          different={true}
          showSelected={documentWidth < 768}
        />
      </div>
    </div>
  );
};

export default UpperFilter;
