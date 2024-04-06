import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import ReactApexChart from "react-apexcharts";
import { useLocale } from "next-intl";

interface OptionsTypes {
  responsive?: Array<Object>;
  markers: {
    size: Array<number>;
  };
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
      months: string[];
      shortMonths: string[];
      days: string[];
      shortDays: string[];
      direction: string;
    };
  }[];
}

const ChartStats = () => {
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
    markers: {
      size: [6, 6],
    },
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
        right: 24,
        bottom: 0,
        left: 10,
      },
    },
    series: [
      {
        name: "إجمالي المتابعين",
        data: [20, 15, 10, 12, 18, 20],
        color: "#000",
      },
      {
        name: "المتابعات",
        data: [10, 15, 9, 8, 14, 20],
        color: "#5A46FA",
      },
      {
        name: "إلغاء المتابعات",
        data: [0, 8, 10, 18, 14, 10],
        color: "#9BF381        ",
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
        offsetX: -10,
        style: {
          fontSize: "14px",
        },
        formatter: function (value) {
          return "$" + value;
        },
      },
      min: 0, // Set minimum value for y-axis range
      max: 30, // Set maximum value for y-axis range
    },
    xaxis: {
      type: "category",
      categories:
        useLocale() == "en"
          ? [
              "saturday",
              "sunday",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
            ]
          : [
              "السبت",
              "الاحد",
              "الاثنين",
              "الثلاثاء",
              "الاربعاء",
              "الخميس",
              "الجمعة",
            ],
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
        breakpoint: 430,
        options: {
          chart: {
            height: 230,
            width: "108%",
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
            width: "106%",
          },
        },
      },
    ],
  };
  return (
    <div
      className="bg-white rounded-[12px]   self-stretch   overflow-hidden p-[16px] md:p-[24px]
    ">
      <div className=" text-gray-700">
        <h1 className="text-[16px] md:text-[20px] font-[700] lg:text-lg font-extrabold ">
          {t("growth")}{" "}
        </h1>

        <div>
          <div
            className={`transform ${
              useLocale() == "en" ? "" : "translate-x-[30px]"
            }  `}>
            <ReactApexChart
              className="custom-style-chart "
              options={options}
              series={options.series}
              type="line"
            />
          </div>

          <div
            className="bg-[#F2F5F8]  justify-around px-4 grid gap-[8px] grid-cols-3 rounded-[8px] pt-[12px] pr-[8px] pb-[12px] pl-[8px] 
">
            <div className=" text-[10] font-[700] flex flex-col items-center gap-y-[4px]">
              <span className="w-[10px] h-[10px] bg-[#01010C] rounded-full block"></span>
              <span className="text-[10px] md:text-[12px] font-[400]">
                {t("total followers")}
              </span>
              <span className="text-[10px] md:text-[14px] font-[700]">100</span>
            </div>

            <div className=" text-[10] font-[700] flex flex-col items-center gap-y-[4px]">
              <span className="w-[10px] h-[10px] bg-[#5A46FA] rounded-full block"></span>
              <span className="text-[10px] md:text-[12px] font-[400]">
                {t("follows")}
              </span>
              <span className="text-[10px] md:text-[14px] font-[700]">100</span>
            </div>

            <div className=" text-[10] font-[700] flex flex-col items-center gap-y-[4px]">
              <span className="w-[10px] h-[10px] bg-[#9BF381] rounded-full block"></span>
              <span className="text-[10px] md:text-[12px] font-[400]">
                {t("cancel follows")}
              </span>
              <span className="text-[10px] font-[700] md:text-[14px] ">
                100
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartStats;
