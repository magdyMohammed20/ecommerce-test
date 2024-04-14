"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import Checkbox from "@mui/material/Checkbox";

import {
  CheckboxIcon,
  UnCheckboxIcon,
} from "../../../../../public/assets/svg/checkoutSvg";

import { ArrowDown20 } from "../../../../../public/assets/svg/profile";
import Menu from "@/components/DropDown/Menu";

const menuData = [
  { id: 1, name: "accessories" },
  { id: 2, name: "sport shoes" },
];

const menuData2 = [
  { id: 1, name: "Less than 250 thousand dollars" },
  { id: 2, name: "Less than 150 thousand dollars" },
];

const menuData3 = [
  { id: 1, name: "less than 5%" },
  { id: 2, name: "less than 15%" },
];

const MarketInfoForm2 = () => {
  const t = useTranslations();
  const [haveReturns, setHaveReturns] = useState<string>("yes");
  const [toggleBusinessDomainMenu, setToggleBusinessDomainMenu] =
    useState<boolean>(false);

  const [toggleAvgRateMenu, setToggleAvgRateMenu] = useState<boolean>(false);

  const [toggleReturnMenu, setToggleReturnMenu] = useState<boolean>(false);
  const [selectedBusinessDom, setSelectedBusinessDom] = useState<string>("");
  const [selectedAvgRAte, setSelectedAvgRate] = useState<string>("");
  const [selectedReturn, setSelectedReturn] = useState<string>("");

  const handleBusinessDomainMenuChange = () => {
    setToggleBusinessDomainMenu(!toggleBusinessDomainMenu);
  };

  const handleAverageRateMenuChange = () => {
    setToggleAvgRateMenu(!toggleAvgRateMenu);
  };

  const handleReturnMenuChange = () => {
    setToggleReturnMenu(!toggleReturnMenu);
  };

  const handleMarket = (value: string) => {
    setHaveReturns(value);
  };

  const handleBusinessDomMenuChange = (value: string) => {
    setSelectedBusinessDom(value);
  };

  const handleAvgRateMenuChange = (value: string) => {
    setSelectedAvgRate(value);
  };

  const handleReturnChange = (value: string) => {
    setSelectedReturn(value);
  };

  return (
    <div className="  flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-5 md:gap-8 pb-6 ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className=" font-bold text-20">
              {t("Store and product information")}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div>
                <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                  <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                    {t("Brand name")}
                  </p>
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                    placeholder={t("sam_sample")}
                  />
                </div>
              </div>

              <div>
                <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                  <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                    {t("market_url")}
                  </p>
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                    placeholder={t("sam_com")}
                  />
                </div>
              </div>

              <div>
                <div
                  onClick={() => handleBusinessDomainMenuChange()}
                  className="cursor-pointer bg-cloud px-4 py-3 flex justify-between items-center rounded-xl text-asphalt w-full relative">
                  <div>
                    <p className="text-[10px] md:text-sm">
                      {t("Location of your business")}
                    </p>
                    <p className="text-sm md:text-base opacity-70">
                      {selectedBusinessDom
                        ? t(selectedBusinessDom)
                        : t("Such as2") + " " + t("accessories")}
                    </p>
                  </div>
                  <ArrowDown20 />

                  {toggleBusinessDomainMenu && (
                    <Menu
                      selectedValue={selectedBusinessDom}
                      isDiff
                      className="min-w-full"
                      items={menuData}
                      onChange={(value) => handleBusinessDomMenuChange(value)}
                      onClose={() => {
                        handleBusinessDomainMenuChange();
                      }}
                      isRounded
                    />
                  )}
                </div>
              </div>

              <div>
                <div
                  onClick={() => handleAverageRateMenuChange()}
                  className="cursor-pointer bg-cloud px-4 py-3 flex justify-between items-center rounded-xl text-asphalt w-full relative">
                  <div>
                    <p className="text-[10px] md:text-sm">
                      {t("Average annual sales")}
                    </p>
                    <p className="text-sm md:text-base opacity-70">
                      {selectedAvgRAte
                        ? t(selectedAvgRAte)
                        : t("Such as2") +
                          " " +
                          t("Less than 250 thousand dollars")}
                    </p>
                  </div>
                  <ArrowDown20 />

                  {toggleAvgRateMenu && (
                    <Menu
                      selectedValue={selectedAvgRAte}
                      isDiff
                      className="min-w-full"
                      items={menuData2}
                      onChange={(value) => handleAvgRateMenuChange(value)}
                      onClose={() => {
                        handleAverageRateMenuChange();
                      }}
                      isRounded
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cloud h-px"></div>
          <div className="grid grid-cols-1 gap-8 ">
            <div className="flex flex-col gap-2">
              <h2 className="text-[16px]">{t("Do you have returns?")}</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div
                    className="w-full bg-cloud p-4 flex items-center justify-between rounded-xl text-asphalt cursor-pointer"
                    onClick={() => handleMarket("yes")}>
                    <p
                      className={`${
                        haveReturns === "yes" && "text-primary font-bold"
                      }`}>
                      {t("Yes")}
                    </p>
                    <Checkbox
                      checked={haveReturns === "yes" ? true : false}
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
                        haveReturns === "no" && "text-primary font-bold"
                      }`}>
                      {t("No")}
                    </p>
                    <Checkbox
                      checked={haveReturns === "no" ? true : false}
                      className="!p-0"
                      icon={<UnCheckboxIcon />}
                      checkedIcon={<CheckboxIcon />}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 md:gap-4">
                  <div
                    onClick={() => handleReturnMenuChange()}
                    className="cursor-pointer bg-cloud px-4 py-3 flex justify-between items-center rounded-xl text-asphalt w-full relative">
                    <div>
                      <p className="text-[10px] md:text-sm">
                        {t("Product return rate")}
                      </p>
                      <p className="text-sm md:text-base opacity-70">
                        {selectedReturn
                          ? t(selectedReturn)
                          : t("Example: less than 5%")}
                      </p>
                    </div>
                    <ArrowDown20 />

                    {toggleReturnMenu && (
                      <Menu
                        selectedValue={selectedReturn}
                        isDiff
                        className="min-w-full"
                        items={menuData3}
                        onChange={(value) => handleReturnChange(value)}
                        onClose={() => {
                          handleReturnMenuChange();
                        }}
                        isRounded
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInfoForm2;
