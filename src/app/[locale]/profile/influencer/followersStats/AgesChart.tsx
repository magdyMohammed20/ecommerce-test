import React, { useState } from "react";
import { useTranslations } from "next-intl";
import VerticalProgressBar from "./VerticalChart";

const types = [
  {
    id: 1,
    name: "all",
    value: "all",
  },
  {
    id: 2,
    name: "women",
    value: "women",
  },
  {
    id: 3,
    name: "men",
    value: "men",
  },
];

const AgesChart = () => {
  const t = useTranslations();
  const [selectedType, setSelectedType] = useState<string>("all");

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };
  return (
    <div
      className="bg-white rounded-[12px] self-stretch   overflow-hidden p-[16px]  md:p-[24px] 
    ">
      <div className="  text-gray-700 ">
        <h1 className="text-[16px] md:text-[20px] font-[700] lg:text-lg font-extrabold ">
          {t("ages")}{" "}
        </h1>
      </div>

      <div className="flex flex-col gap-y-[16px] ">
        <div className="flex items-center gap-2 mt-[16px]">
          {types.map((type, index) => (
            <div
              key={type.id}
              className={`justify-center rounded-[99px] py-[8px] px-[24px]  w-[73px]  flex items-center cursor-pointer  ${
                selectedType === type.value ? "bg-primary" : "bg-cloud"
              }`}
              onClick={() => handleTypeChange(type.name)}>
              <p
                className={`mx-3 text-[14px] font-[700] whitespace-nowrap flex items-center ${
                  selectedType !== type.name ? "text-asphalt" : "text-white"
                }`}>
                {t(type.name)}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 px-5 pt-[16px]">
          <VerticalProgressBar percentage={90} range="17-13" />
          <VerticalProgressBar percentage={80} range="17-13" />
          <VerticalProgressBar percentage={50} range="17-13" />
          <VerticalProgressBar percentage={20} range="17-13" />
          <VerticalProgressBar percentage={15} range="17-13" />
          <VerticalProgressBar percentage={10} range="17-13" />
          <VerticalProgressBar percentage={2} range="17-13" />
        </div>
      </div>
    </div>
  );
};

export default AgesChart;
