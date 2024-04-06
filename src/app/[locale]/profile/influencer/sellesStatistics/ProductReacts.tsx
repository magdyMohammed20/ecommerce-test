import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import ReactApexChart from "react-apexcharts";
import { useLocale } from "next-intl";
import ChartDateFilter from "./ChartDateFilter";

interface OptionsTypes {
  plotOptions: {
    bar: {
      horizontal: boolean;
      columnWidth: string; // Adjust the bar width here (e.g., '50%' or 50)
      endingShape: string;
      borderRadius: number; // Adjust the border radius here
    };
  };
  responsive?: Array<Object>;
  markers: {
    size: Array<number>;
  };
  grid: {
    show: boolean;
    strokeDashArray: number;
    position: "front" | "back";
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
      offsetX: number;
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
    //enabled: boolean;
    //enabledOnSeries: Array<number>;
  };
  stroke: {
    /*    curve:
      | "smooth"
      | "straight"
      | "stepline"
      | "monotoneCubic"
      | ("smooth" | "straight" | "stepline" | "monotoneCubic")[]
      | undefined; */
  };
  defaultLocale: string;
  locales: {
    name: string;
    options: {
      rtl: boolean;
      direction: string;
    };
  }[];
}

const ProductReactsChart = () => {
  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);
  const t = useTranslations();

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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%", // Adjust the bar width here (e.g., '50%' or 50)
        endingShape: "rounded",
        borderRadius: 2, // Adjust the border radius here
      },
    },
    markers: {
      size: [6, 6],
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      position: "back",
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
        right: 24,
        bottom: 0,
        left: 10,
      },
    },
    series: [
      {
        name: "Column A",
        data: [40, 50, 70, 60, 55, 40, 700],
        color: "#9BF381",
      },
      {
        name: "Column B",
        data: [30, 60, 30, 65, 44, 30, 20],
        color: "#01010C",
      },
    ],
    chart: {
      height: 300,
      toolbar: { show: false },
      redrawOnParentResize: true,
      rtl: true, // Set to true for right-to-left direction
    },
    yaxis: {
      opposite: useLocale() === "en" ? false : true,
      labels: {
        offsetX: -10,
        style: {
          fontSize: "14px",
        },
        formatter: function (value) {
          return `${value}`;
        },
      },
      min: 0, // Set minimum value for y-axis range
      max: 70, // Set maximum value for y-axis range
    },
    xaxis: {
      type: "category",
      categories:
        useLocale() == "en"
          ? [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ]
          : [
              "الأحد",
              "الاثنين",
              "الثلاثاء",
              "الأربعاء",
              "الخميس",
              "الجمعة",
              "السبت",
            ],
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 400,
          edgeColor: "#000",
        },
      },
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1],
    },
    stroke: {
      //curve: "smooth",
    },

    defaultLocale: "ar",
    locales: [
      {
        name: "ar",
        options: {
          rtl: true,

          direction: "right",
        },
      },
    ],
    responsive: [
      {
        breakpoint: 365,
        options: {
          chart: {
            height: 450,
            width: "100%",
          },
        },
      },
      {
        breakpoint: 435,
        options: {
          chart: {
            height: 250,
            width: "105%",
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 300,
            width: "104%",
          },
        },
      },
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 250,
            width: "103%",
          },
        },
      },
      {
        breakpoint: 2000,
        options: {
          chart: {
            height: 250,
            width: "102%",
          },
        },
      },
    ],
  };
  return (
    <div
      className="bg-white rounded-[12px] xl:flex-b  xl:basis-full  self-stretch   overflow-hidden p-[16px] md:p-[24px] 
    ">
      <div className="grid grid-cols-1 gap-[16px] md:gap-[24px]">
        <h1 className="text-[16px] md:text-[20px] font-[700]  ">
          {t("product reacts")}{" "}
        </h1>

        <ChartDateFilter documentWidth={documentWidth} />
        <div className="grid grid-cols-1 gap-[16px] md:gap-[24px]">
          <div
            className={`transform ${
              useLocale() == "en" ? "" : "translate-x-[10px]"
            }  `}>
            <ReactApexChart
              className="custom-style-chart "
              options={options}
              series={options.series}
              type="bar"
            />
          </div>

          <div
            className="bg-[#F2F5F8]  justify-around px-4 grid gap-[8px] grid-cols-2 rounded-[8px] pt-[12px] pr-[8px] pb-[12px] pl-[8px] 
">
            <div className=" text-[10px] font-[700] flex flex-col items-center gap-y-[10px]">
              <div className="flex flex-col gap-[4px] items-center">
                <span className="w-[10px] h-[10px] bg-primary rounded-full "></span>
                <span className="text-[10px] md:text-[12px] font-[400]">
                  {t("Number of visits to the product page")}
                </span>
              </div>
              <div>
                <span className="text-[10px] md:text-[14px] font-[700]">
                  100
                </span>
              </div>
            </div>

            <div className=" text-[10px] font-[700] flex flex-col items-center gap-y-[10px]">
              <div className="flex flex-col gap-[4px] items-center">
                <span className="w-[10px] h-[10px] bg-secondary rounded-full block"></span>
                <span className="text-[10px] md:text-[12px] font-[400]">
                  {t("Number of purchases")}
                </span>
              </div>

              <span className="text-[10px] md:text-[14px] font-[700]">100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReactsChart;
