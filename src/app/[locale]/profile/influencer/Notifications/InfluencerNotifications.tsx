"use client";
import { useTranslations } from "next-intl";
import NewNotifications from "./NewNotifications";
import OlderNotifications from "./OlderNotifications";
import { Fragment, useEffect, useState } from "react";

import {
  NotificationInTabsSvg,
  NotificationInTabsSvg2,
  VerticalLine,
} from "../../../../../../public/assets/svg/influencerNotifications";
import { HeartIconSvg } from "../../../../../../public/assets/svg/influencer";
import Alerts from "./Alerts";
import OlderAlerts from "./OlderAlerts";
import Activities from "./Activities";

const types = [
  {
    id: 1,
    name: "all",
    value: "all",
    number: 10,
    icon: {
      light: <NotificationInTabsSvg color="white" />,
      dark: <NotificationInTabsSvg color="#455560" />,
    },
  },
  {
    id: 2,
    name: "notifications",
    value: "notifications",
    number: 10,
    icon: {
      light: <NotificationInTabsSvg2 color="#FFF" />,
      dark: <NotificationInTabsSvg2 color="#455560" />,
    },
  },
  {
    id: 3,
    name: "activities",
    value: "activities",
    number: 10,
    icon: {
      light: <HeartIconSvg color="white" />,
      dark: <HeartIconSvg color="#455560" />,
    },
  },
];

const InfluencerNotifications = () => {
  const t = useTranslations();
  const [selectedType, setSelectedType] = useState<string>("all");
  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);
  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

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
    <div className="w-full">
      <div className=" lg:hidden bg-white py-3 lg:py-4 px-4 md:px-8 lg:px-6 lg:rounded-lg overflow-scroll hide-scrollbar">
        <div className="flex items-center gap-[24px] md:gap-[32px]">
          {types.map((type) => (
            <div
              key={type.id}
              className={`gap-[8px] flex items-center cursor-pointer p-[4px]  rounded-full ${
                selectedType === type.value && "bg-cloud pl-[16px]"
              }`}
              onClick={() => handleTypeChange(type.value)}>
              <div
                className={`p-2 rounded-full ${
                  selectedType === type.value ? "bg-primary" : "bg-cloud"
                }`}>
                {selectedType === type.value ? type.icon.light : type.icon.dark}
              </div>
              <p
                className={` ${
                  selectedType == type.value && "font-bold"
                }  whitespace-nowrap text-[14px] flex items-center ${
                  selectedType !== type.value && "text-asphalt "
                }`}>
                {t(type.name)} {type.number && `(${type.number})`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 w-full p-[24px] md:p-[32px] lg:p-0">
        <div className=" profile-width-70 flex flex-col gap-[8px] md:gap-[16px] lg:gap-[32px] ">
          <div className="hidden lg:flex bg-white py-3 lg:py-4 px-4 md:px-8 lg:px-6 lg:rounded-lg overflow-scroll hide-scrollbar">
            <div className="flex items-center gap-[32px] lg:w-full lg:justify-between xl:justify-around">
              {types.map((type, index) => (
                <Fragment key={type.id}>
                  <div
                    className={`gap-[8px] flex items-center cursor-pointer p-[4px]  rounded-full ${
                      selectedType === type.value && "bg-cloud pl-[16px]"
                    }`}
                    onClick={() => handleTypeChange(type.value)}>
                    <div
                      className={`p-2 rounded-full ${
                        selectedType === type.value ? "bg-primary" : "bg-cloud"
                      }`}>
                      {selectedType === type.value
                        ? type.icon.light
                        : type.icon.dark}
                    </div>
                    <p
                      className={` ${
                        selectedType == type.value && "font-bold"
                      }  whitespace-nowrap text-[14px] flex items-center ${
                        selectedType !== type.value && "text-asphalt "
                      }`}>
                      {t(type.name)} {type.number && `(${type.number})`}
                    </p>
                  </div>
                  {index != 2 && <VerticalLine />}
                </Fragment>
              ))}
            </div>
          </div>

          {selectedType == "all" && (
            <div className="flex flex-col gap-6 md:gap-4 xl:gap-8">
              <NewNotifications />
              <OlderNotifications />
            </div>
          )}

          {selectedType == "notifications" && (
            <>
              <Alerts />
              <OlderAlerts />
            </>
          )}

          {selectedType == "activities" && (
            <>
              <Activities />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfluencerNotifications;
