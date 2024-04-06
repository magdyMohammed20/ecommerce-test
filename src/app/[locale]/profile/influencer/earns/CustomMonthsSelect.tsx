import React from "react";
import { CalenderSVG } from "../../../../../../public/assets/svg/influencer";
import { useState } from "react";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import DropDown from "@/components/DropDown/DropDown";

const CustomMonthsSelect = () => {
  const t = useTranslations();
  const [selectedOption, setSelectedOption] = useState(""); // State to manage selected option
  const lang = useLocale();
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const months = {
    label: "show",
    items: [
      {
        id: 1,
        name: "January",
      },
      {
        id: 2,
        name: "February",
      },
      {
        id: 3,
        name: "March",
      },
      {
        id: 4,
        name: "April",
      },
      {
        id: 5,
        name: "May",
      },
      {
        id: 6,
        name: "June",
      },
      {
        id: 7,
        name: "July",
      },
      {
        id: 8,
        name: "August",
      },
      {
        id: 9,
        name: "September",
      },
      {
        id: 10,
        name: "October",
      },
      {
        id: 11,
        name: "November",
      },
      {
        id: 12,
        name: "December",
      },
    ],
  };

  const Icon = () => {
    return (
      <div
        className={`pointer-events-none  ${
          lang == "ar" ? "right-2" : "left-0"
        } flex items-center px-2 text-gray-700`}>
        <CalenderSVG lang={lang} />
      </div>
    );
  };
  return (
    <DropDown data={months} different={false} isRounded={true} Icon={Icon} />

    /*     <div
      className={`relative cursor-pointer rounded-full flex h-10 lg:h-12  items-center  ${
        lang == "ar" ? "w-[135px]" : "w-[145px]"
      }   bg-gray-200 ${lang == "ar" ? "flex-row " : " flex-row-reverse"}`}>
      <div className="relative w-full">
        <select
          className={`block  cursor-pointer font-medium lg:font-extrabold appearance-none w-full bg-transparent  ${
            lang == "en" ? "pl-8" : "pr-10"
          }   py-2 px-4  focus:outline-none sm:text-sm`}
          value={selectedOption}
          onChange={handleSelectChange}>
          <option value="" disabled hidden>
            {t("select month")}
          </option>
          {months.map((item, index) => (
            <option className="bg-white font-medium" value={index} key={index}>
              {t(item)}
            </option>
          ))}
        </select>
        <div
          className={`pointer-events-none absolute inset-y-0  ${
            lang == "ar" ? "right-2" : "left-0"
          } flex items-center px-2 text-gray-700`}>
          <CalenderSVG lang={lang} />
        </div>
      </div>
    </div> */
  );
};

export default CustomMonthsSelect;
