import React from "react";
import GeoSales from "./GeoSales";
import ProductSales from "./ProductSales";
import GenderChart from "./GenderChart";

interface Props {
  documentWidth: number;
}
const HorizontalBarGraphs: React.FC<Props> = ({ documentWidth }) => {
  return (
    <div className=" gap-[24px] flex flex-col-reverse xl:flex-row xl:flex-wrap">
      <GeoSales />
      <GenderChart />
      <ProductSales />
    </div>
  );
};

export default HorizontalBarGraphs;
