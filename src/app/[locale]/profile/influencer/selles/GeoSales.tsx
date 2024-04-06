import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import HorizontalProgressBar from "../followersStats/HorizontalChart";
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
const GeoSales = () => {
  const t = useTranslations();
  const [selectedType, setSelectedType] = useState<string>("countries");
  const lang = useLocale();
  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };
  return (
    <div className="bg-white rounded-xl p-[16px] md:p-[24px]  flex flex-col  md:order-1 xl:flex-1">
      <div className="grid grid-cols-1 gap-y-[16px] md:gap-y-[24px] ">
        <p className="text-[16px] md:text-[20px] font-[700] transform translate-y-[2px]">
          {" "}
          {t("Sales by geographical location")}
        </p>
        <div className="flex items-center gap-[8px]">
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

        <div className="  grid grid-cols-1 gap-y-[16px] ">
          <HorizontalProgressBar percentage={2.5} city="الرياض" />
          <HorizontalProgressBar percentage={75} city="جدة" />
          <HorizontalProgressBar percentage={35} city="مكة" />
          <HorizontalProgressBar percentage={2.5} city="دبى" />
          <HorizontalProgressBar percentage={45} city="مسقط" />
        </div>
      </div>
    </div>
  );
};

export default GeoSales;
