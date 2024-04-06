import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import ReactApexChart from "react-apexcharts";

import { useLocale } from "next-intl";
import ChartDateFilter from "./ChartDateFilter";

interface OptionsTypes {
  responsive: Array<Object>;
  grid: {
    show: boolean;
    strokeDashArray: number;
    position: "front";
    xaxis: {
      lines: {
        show: boolean;
      };
    };
    yaxis: {
      lines: {
        show: boolean;
      };
    };
    row: {
      opacity: number;
    };
    column: {
      opacity: number;
    };
    padding: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
  };
  series: {
    name: string;
    data: number[];
    color: string;
  }[];
  chart: {
    height: number;
    toolbar: {
      show: boolean;
    };
    redrawOnParentResize: boolean;
    rtl: boolean;
  };
  yaxis: {
    opposite: boolean;
    labels: {
      style: {
        fontSize: string;
      };
      formatter: (value: number) => string;
    };
    min: number;
    max: number;
  };
  xaxis: {
    type: "category" | "datetime" | "numeric" | undefined;
    categories: string[];
    labels: {
      style: {
        fontSize: string;
        fontWeight: number;
        edgeColor: string;
      };
    };
  };
  dataLabels: {
    enabled: boolean;
  };
  stroke: {
    curve:
      | "smooth"
      | "straight"
      | "stepline"
      | "monotoneCubic"
      | ("smooth" | "straight" | "stepline" | "monotoneCubic")[]
      | undefined;
  };
  defaultLocale: string;
  locales: {
    name: string;
    options: {
      rtl: boolean;
      months: string[];
      shortMonths: string[];
      days: string[];
      shortDays: string[];
      direction: string;
    };
  }[];
}

const ProductEarnsChart = () => {
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
  var options: OptionsTypes = {
    grid: {
      show: true,
      strokeDashArray: 3,
      position: "front",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        opacity: 0.5,
      },
      column: {
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 30,
        bottom: 0,
        left: 25,
      },
    },
    series: [
      {
        name: "series1",
        data: [20, 38, 35, 15],
        color: "#00ff00",
      },
    ],
    chart: {
      height: 100,
      toolbar: { show: false },
      redrawOnParentResize: true,
      rtl: true, // Set to true for right-to-left direction
    },
    yaxis: {
      opposite: useLocale() === "en" ? false : true,
      labels: {
        style: {
          fontSize: "14px",
        },
        formatter: function (value) {
          return "$" + value;
        },
      },
      min: 15, // Set minimum value for y-axis range
      max: 50, // Set maximum value for y-axis range
    },
    xaxis: {
      type: "category",
      categories: ["31 ديسمبر", "21 ديسمبر", "14 ديسمبر", "7 ديسمبر"],
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 400,
          edgeColor: "#BCBCBC",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    defaultLocale: "ar",
    locales: [
      {
        name: "ar",
        options: {
          rtl: true,
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          shortMonths: [
            "يناير",
            "فبراير",
            "مارس",
            "إبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ],
          days: [
            "الأحد",
            "الإثنين",
            "الثلاثاء",
            "الأربعاء",
            "الخميس",
            "الجمعة",
            "السبت",
          ],
          shortDays: [
            "الأحد",
            "الإثنين",
            "الثلاثاء",
            "الأربعاء",
            "الخميس",
            "الجمعة",
            "السبت",
          ],
          direction: "right",
        },
      },
    ],
    responsive: [
      {
        breakpoint: 360,
        options: {
          chart: {
            height: 190,
            width: "112%",
          },
        },
      },
      {
        breakpoint: 435,
        options: {
          chart: {
            height: 250,
            width: "110%",
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250,
            width: "109%",
          },
        },
      },
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 250,
            width: "104%",
          },
        },
      },
      {
        breakpoint: 1536,
        options: {
          chart: {
            height: 250,
            width: "100%",
          },
        },
      },
      {
        breakpoint: 2000,
        options: {
          chart: {
            height: 400,
            width: "104%",
          },
        },
      },
    ],
  };
  return (
    <div className="bg-white rounded-md   overflow-hidden">
      <div className="p-[16px] md:p-[24px]  text-gray-700 flex flex-col gap-[16px] md:gap-[24px]">
        <div>
          <h1 className="text-[16px] font-[700] md:text-[20px] ">
            {t("product earn")}{" "}
          </h1>
        </div>
        <ChartDateFilter documentWidth={documentWidth} />
        <div
          className={`transform ${
            useLocale() == "ar"
              ? "translate-x-7 "
              : `${
                  useLocale() == "ar" && documentWidth <= 430
                    ? "-translate-x-6"
                    : "-translate-x-3"
                } ${useLocale() == "ar" && "md:translate-x-6"}`
          }  `}>
          <ReactApexChart
            options={options}
            series={options.series}
            type="area"
          />
        </div>

        <div className="bg-gray-100 p-[16px] rounded-[10px] flex items-center gap-1 mt-5">
          <h3 className="text-[12px] md:text-[16px]  text-gray-600">
            {" "}
            {t("earn")} :{" "}
          </h3>
          <span className="text-[18px] md:text-[20px]  font-[700]">$500</span>
        </div>
      </div>
    </div>
  );
};

export default ProductEarnsChart;
