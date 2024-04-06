import React from "react";
import { useTranslations } from "next-intl";
import Chart from "react-apexcharts";

interface Options {
  fill: { colors: Array<string> };
  plotOptions: {
    pie: {
      donut: {
        size: string;
      };
    };
  };
  stroke: {
    show: true;
    curve: "straight";
    lineCap: "butt";
    colors: undefined;
    width: number;
    dashArray: number;
  };
  series: Array<number>;
  dataLabels: {
    enabled: boolean;
  };
  chart: {
    type:
      | "donut"
      | "pie"
      | "line"
      | "area"
      | "bar"
      | "radialBar"
      | "scatter"
      | "bubble"
      | "heatmap"
      | "candlestick"
      | "boxPlot"
      | "radar"
      | "polarArea"
      | "rangeBar"
      | "rangeArea"
      | "treemap"
      | undefined;
  };
  responsive: Array<Object>;
}
const GenderChart = () => {
  const t = useTranslations();
  var options: Options = {
    fill: { colors: ["#9BF381", "#000"] },
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
        },
      },
    },
    stroke: {
      show: true,
      curve: "straight",
      lineCap: "butt",
      colors: undefined,
      width: 0,
      dashArray: 0,
    },
    dataLabels: {
      enabled: false,
    },
    series: [44, 55, 41, 17, 15],
    chart: {
      type: "radialBar",
    },
    responsive: [
      {
        breakpoint: 430,
        options: {
          chart: {
            height: 83,
            width: 83,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 193,
            width: 193,
          },
        },
      },
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 193,
            width: 193,
          },
        },
      },
      {
        breakpoint: 1536,
        options: {
          chart: {
            height: 193,
            width: 193,
          },
        },
      },
      {
        breakpoint: 2000,
        options: {
          chart: {
            height: 250,
            width: 250,
          },
        },
      },
    ],
  };

  const series = [30, 70];
  return (
    <div
      className="bg-white rounded-[12px] p-[16px] md:p-[24px] flex gap-[16px] md:gap-0 flex-col  row-start-1 xl:row-start-auto   self-stretch overflow-hidden   
    ">
      <div className=" text-gray-700">
        <h1 className="text-[16px] font-[700] lg:text-lg font-extrabold ">
          {t("gender")}
        </h1>
      </div>

      <div className="grid grid-cols-3 justify-between items-center flex-1">
        <div className="flex justify-center md:items-end lg:items-center flex-col items-center gap-y-[4px]">
          <span className="text-[16px] font-[700] h-6">65%</span>
          <div className=" text-[10] font-[700] flex items-center gap-[4px]">
            <span className="w-[10px] h-[10px] bg-[#9BF381] rounded-full block"></span>
            <span className="text-[10px] font-[400] text-asphalt">
              {t("women")}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <Chart options={options} series={series} type="donut" width="500" />
        </div>
        <div className="flex justify-center md:items-start lg:items-center flex-col items-center gap-y-[4px]">
          <span className="text-[16px] font-[700] h-6">65%</span>
          <div className=" text-[10] font-[700] flex items-center gap-[4px]">
            <span className="w-[10px] h-[10px] bg-[#01010C] rounded-full block"></span>
            <span className="text-[10px] font-[400] text-asphalt">
              {t("men")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderChart;
