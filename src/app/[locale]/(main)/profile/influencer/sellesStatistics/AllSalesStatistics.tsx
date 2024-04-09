"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import ProductDetails from "./ProductDetails";
import ProductReactsChart from "./ProductReacts";
import ProductEarnsChart from "./ProductEarns";
import ProductsSlider from "./ProductsSlider";

const AllSalesStatistics: React.FC = () => {
  const t = useTranslations();

  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);
  const [currentProduct, setCurrentProduct] = useState({
    id: 0,
    imageUrl: "",
    title: 0,
    category: "",
    name: "",
    rate: 0,
    visits: { number: "", percentage: "" },
    buy: { number: "", percentage: "" },
  });
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
    <div>
      <div className="grid grid-cols-1 w-full gap-[24px] md:gap-[32px]  mt-6 lg:mt-0 md:mb-8 px-4 md:px-8 lg:px-0">
        <div className=" hidden  bg-white rounded-[12px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] lg:flex items-center">
          <div className="flex items-center gap-x-[8px]  h-[56px] ">
            <span className="font-[700] text-[20px]">{t("statistic")}</span>
          </div>
        </div>
        <ProductsSlider setCurrentProduct={setCurrentProduct} />
        <ProductDetails currentProduct={currentProduct} />
        <ProductReactsChart />
        <ProductEarnsChart />
      </div>
    </div>
  );
};

export default AllSalesStatistics;
