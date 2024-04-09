import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import HorizontalProgressBar from "../followersStats/HorizontalChart";

const ProductSales = () => {
  const t = useTranslations();

  return (
    <div className="bg-white rounded-xl p-[16px] md:p-[24px]  flex flex-col  xl:flex-1 xl:order-2">
      <div className="flex flex-col gap-[16px] xl:gap-y-[24px] h-full">
        <p className="text-[16px] md:text-[20px] font-[700] transform translate-y-[2px]">
          {" "}
          {t("Sales rate for each product category")}
        </p>

        <div className="   flex flex-col flex-grow justify-between  gap-[16px]">
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

export default ProductSales;
