"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import Checkbox from "@mui/material/Checkbox";

import {
  CheckboxIcon,
  UnCheckboxIcon,
} from "../../../../../public/assets/svg/checkoutSvg";
import FileUploader from "./FileUploader";

const Documents = () => {
  const t = useTranslations();
  const [haveLicense, setHaveLicense] = useState<string>("no");

  const handleMarket = (value: string) => {
    setHaveLicense(value);
  };

  return (
    <div className="  flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-5 md:gap-8  ">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 ">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[16px]">
                {t("Do you have a reliable license?")}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div
                    className="w-full bg-cloud p-4 flex items-center justify-between rounded-xl text-asphalt cursor-pointer"
                    onClick={() => handleMarket("yes")}>
                    <p
                      className={`${
                        haveLicense === "yes" && "text-primary font-bold"
                      }`}>
                      {t("Yes")}
                    </p>
                    <Checkbox
                      checked={haveLicense === "yes" ? true : false}
                      className="!p-0"
                      icon={<UnCheckboxIcon />}
                      checkedIcon={<CheckboxIcon />}
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="w-full bg-cloud p-4 flex items-center justify-between rounded-xl text-asphalt cursor-pointer"
                    onClick={() => handleMarket("no")}>
                    <p
                      className={`${
                        haveLicense === "no" && "text-primary font-bold"
                      }`}>
                      {t("No")}
                    </p>
                    <Checkbox
                      checked={haveLicense === "no" ? true : false}
                      className="!p-0"
                      icon={<UnCheckboxIcon />}
                      checkedIcon={<CheckboxIcon />}
                    />
                  </div>
                </div>
              </div>
            </div>

            {haveLicense == "no" && (
              <FileUploader title="Attach a reliable license" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
