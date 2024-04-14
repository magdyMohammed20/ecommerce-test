"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import Checkbox from "@mui/material/Checkbox";

import {
  CheckboxIcon,
  UnCheckboxIcon,
} from "../../../../../public/assets/svg/checkoutSvg";
import {
  OutlinedCompSvg,
  OutlinedElecSvg,
  OutlinedStartSvg,
} from "../../../../../public/assets/svg/influencer";

const MarketInfoForm = () => {
  const t = useTranslations();
  const [marketType, setMarketType] = useState<string>("commercial_market");
  const [activityType, setActivityType] = useState<string>(
    "My_work_activity_is_still_recent"
  );

  const handleMarket = (value: string) => {
    setMarketType(value);
  };

  const handleActivity = (value: string) => {
    setActivityType(value);
  };

  return (
    <div className="  flex flex-col gap-6">
      {/* info data */}
      <div className="grid grid-cols-1 gap-5 md:gap-8 pb-6 ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className=" font-bold">{t("Your business")}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              <div
                className="w-full bg-cloud p-4 flex gap-2 flex-col rounded-xl text-asphalt cursor-pointer"
                onClick={() =>
                  handleActivity("My_work_activity_is_still_recent")
                }>
                <div className="flex justify-end">
                  <Checkbox
                    checked={
                      activityType === "My_work_activity_is_still_recent"
                        ? true
                        : false
                    }
                    className="!p-0"
                    icon={<UnCheckboxIcon />}
                    checkedIcon={<CheckboxIcon />}
                  />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <OutlinedStartSvg />
                  <p
                    className={` text-center text-[14px] ${
                      activityType === "My_work_activity_is_still_recent" &&
                      "text-primary font-bold"
                    }`}>
                    {t("My work activity is still recent")}
                  </p>
                </div>
              </div>

              <div
                className="w-full bg-cloud p-4 gap-2 flex flex-col rounded-xl text-asphalt cursor-pointer"
                onClick={() =>
                  handleActivity(
                    "I have been active for a while, but this is my first time selling online"
                  )
                }>
                <div className="flex justify-end">
                  <Checkbox
                    checked={
                      activityType ===
                      "I have been active for a while, but this is my first time selling online"
                        ? true
                        : false
                    }
                    className="!p-0"
                    icon={<UnCheckboxIcon />}
                    checkedIcon={<CheckboxIcon />}
                  />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <OutlinedCompSvg />
                  <p
                    className={` text-center text-[14px] ${
                      activityType ===
                        "I have been active for a while, but this is my first time selling online" &&
                      "text-primary font-bold"
                    }`}>
                    {t(
                      "I have been active for a while, but this is my first time selling online"
                    )}
                  </p>
                </div>
              </div>

              <div
                className="w-full bg-cloud p-4 gap-2 flex flex-col rounded-xl text-asphalt cursor-pointer"
                onClick={() =>
                  handleActivity("I want to expand my business online")
                }>
                <div className="flex justify-end">
                  <Checkbox
                    checked={
                      activityType === "I want to expand my business online"
                        ? true
                        : false
                    }
                    className="!p-0"
                    icon={<UnCheckboxIcon />}
                    checkedIcon={<CheckboxIcon />}
                  />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <OutlinedElecSvg />
                  <p
                    className={` text-center text-[14px] ${
                      activityType === "I want to expand my business online" &&
                      "text-primary font-bold"
                    }`}>
                    {t("I want to expand my business online")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cloud h-px"></div>
          <div className="grid grid-cols-1 gap-2 ">
            <h2 className=" font-bold">{t("Confirm")}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div
                  className="w-full bg-cloud p-4 flex items-center justify-between rounded-xl text-asphalt cursor-pointer"
                  onClick={() => handleMarket("commercial_market")}>
                  <p
                    className={`${
                      marketType === "commercial_market" &&
                      "text-primary font-bold"
                    }`}>
                    {t("commercial_market")}
                  </p>
                  <Checkbox
                    checked={marketType === "commercial_market" ? true : false}
                    className="!p-0"
                    icon={<UnCheckboxIcon />}
                    checkedIcon={<CheckboxIcon />}
                  />
                </div>
              </div>
              <div>
                <div
                  className="w-full bg-cloud p-4 flex items-center justify-between rounded-xl text-asphalt cursor-pointer"
                  onClick={() => handleMarket("personal_market")}>
                  <p
                    className={`${
                      marketType === "personal_market" &&
                      "text-primary font-bold"
                    }`}>
                    {t("personal_market")}
                  </p>
                  <Checkbox
                    checked={marketType === "personal_market" ? true : false}
                    className="!p-0"
                    icon={<UnCheckboxIcon />}
                    checkedIcon={<CheckboxIcon />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInfoForm;
