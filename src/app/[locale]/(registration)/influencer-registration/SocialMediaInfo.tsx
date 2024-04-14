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
import { AddIconCircleSvg } from "../../../../../public/assets/svg/influencer";

const menuData = [
  { id: 1, name: "accessories" },
  { id: 2, name: "sport shoes" },
];

const menuData2 = [
  { id: 1, name: "Less than 250 thousand dollars" },
  { id: 2, name: "Less than 150 thousand dollars" },
];

const menuData3 = [
  { id: 1, name: "clothes" },
  { id: 2, name: "shoes" },
];

const SocialMediaInfo = () => {
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
            <div className="flex flex-col gap-2">
              <h1 className=" font-bold text-[16px]">
                {t("Information of the contact person")}
              </h1>

              <div className="text-[14px]">
                {t("have an account on other platforms")}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
              <div>
                <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                  <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                    {t("x")}
                  </p>
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                    placeholder={t("Such as2") + " " + "@SamValley"}
                  />
                </div>
              </div>

              <div>
                <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                  <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                    {t("insta")}
                  </p>
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                    placeholder={t("sam_com")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 col-span-2">
                <div className="grid grid-cols-2 w-full gap-4 flex-1">
                  <div>
                    <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                      <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                        {t("snap")}
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
                        {t("tiktok")}
                      </p>
                      <input
                        type="text"
                        className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                        placeholder={t("sam_com")}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="flex gap-2 items-center">
                    <AddIconCircleSvg />
                    <span className="text-[14px] font-bold text-[#5A46FA] mt-1">
                      {t("Add Another Account")}
                    </span>
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
                        {t("Area of ​​interests")}
                      </p>
                      <p className="text-sm md:text-base opacity-70">
                        {selectedReturn
                          ? t(selectedReturn)
                          : t("Such as2") + "" + t("clothes")}
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

          <div className="bg-cloud h-px"></div>
          <div className="grid grid-cols-1 gap-8 ">
            <div className="flex flex-col gap-2">
              <h2 className="text-[16px]">{t("Do you have brand?")}</h2>
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
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className=" font-bold text-[16px]">
                {t("Enter your store link")}
              </h1>

              <div className="text-[14px]">
                {t("have an account on other platforms")}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
              <div className="col-span-2">
                <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                  <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                    {t("market_url")}{" "}
                    <span className="text-[10px] font-[400]">
                      ({t("optional")})
                    </span>
                  </p>
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                    placeholder={t("Such as2") + " " + "@SamValley"}
                  />
                </div>
              </div>

              <div>
                <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                  <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                    {t("x")}
                  </p>
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                    placeholder={t("Such as2") + " " + "@SamValley"}
                  />
                </div>
              </div>

              <div>
                <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                  <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                    {t("insta")}
                  </p>
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                    placeholder={t("sam_com")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 col-span-2">
                <div className="grid grid-cols-2 w-full gap-4 flex-1">
                  <div>
                    <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                      <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                        {t("snap")}
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
                        {t("tiktok")}
                      </p>
                      <input
                        type="text"
                        className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                        placeholder={t("sam_com")}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="flex gap-2 items-center">
                    <AddIconCircleSvg />
                    <span className="text-[14px] font-bold text-[#5A46FA] mt-1">
                      {t("Add Another Account")}
                    </span>
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

export default SocialMediaInfo;
