import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import HorizontalProgressBar from "./HorizontalChart";
const types = [
  {
    id: 1,
    name: "countries",
    value: "countries",
  },
  {
    id: 2,
    name: "cities",
    value: "cities",
  },
];

const BestLocationChart = () => {
  const t = useTranslations();
  const [selectedType, setSelectedType] = useState<string>("countries");
  const lang = useLocale();
  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };
  return (
    <div
      className="bg-white rounded-[12px]  self-stretch    overflow-hidden p-[16px] md:p-[24px] 
    ">
      <div className=" text-gray-700">
        <h1 className="text-[16px] font-[700] lg:text-lg font-extrabold ">
          {t("best location")}{" "}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-y-[16px] mt-[24px]">
        <div className="flex items-center gap-2">
          {types.map((type) => (
            <div
              key={type.id}
              className={`justify-center rounded-[99px] py-[8px] px-[24px]  w-[83px] ${
                lang == "en" && "w-[90px]"
              }  flex items-center cursor-pointer  ${
                selectedType === type.value ? "bg-primary" : "bg-cloud"
              }`}
              onClick={() => handleTypeChange(type.name)}>
              <p
                className={`mx-3 text-[14px]  font-[700] whitespace-nowrap flex items-center ${
                  selectedType !== type.name ? "text-asphalt" : "text-white"
                }`}>
                {t(type.name)}
              </p>
            </div>
          ))}
        </div>

        <div className="px-5 pt-[4px] grid grid-cols-1 gap-y-[16px] mt-[16px]">
          <HorizontalProgressBar percentage={2.5} city="الرياض" />
          <HorizontalProgressBar percentage={10} city="جدة" />
          <HorizontalProgressBar percentage={50} city="مكة" />
          <HorizontalProgressBar percentage={70} city="دبى" />
          <HorizontalProgressBar percentage={90} city="مسقط" />
        </div>
      </div>
    </div>
  );
};

export default BestLocationChart;
