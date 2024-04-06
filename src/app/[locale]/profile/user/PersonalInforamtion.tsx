"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";

import Image from "next/image";

import Checkbox from "@mui/material/Checkbox";

import {
  ArrowDown20,
  UploadImgIcon,
} from "../../../../../public/assets/svg/profile";
import {
  CheckboxIcon,
  UnCheckboxIcon,
} from "../../../../../public/assets/svg/checkoutSvg";
import Menu from "@/components/DropDown/Menu";
import PhoneExtension from "@/components/PhoneExtension/PhoneExtension";

const birthData = [
  {
    id: 1,
    name: "Day",
    example: 31,
    selectedDate: "",
    menuData: [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
      { id: 3, name: "3" },
      { id: 4, name: "4" },
      { id: 5, name: "5" },
      { id: 6, name: "6" },
      { id: 7, name: "7" },
      { id: 8, name: "8" },
      { id: 9, name: "9" },
      { id: 10, name: "10" },
      { id: 11, name: "11" },
      { id: 12, name: "12" },
      { id: 13, name: "13" },
      { id: 14, name: "14" },
      { id: 15, name: "15" },
      { id: 16, name: "16" },
      { id: 17, name: "17" },
      { id: 18, name: "18" },
      { id: 19, name: "19" },
      { id: 20, name: "20" },
      { id: 21, name: "21" },
      { id: 22, name: "22" },
      { id: 23, name: "23" },
      { id: 24, name: "24" },
      { id: 25, name: "25" },
      { id: 26, name: "26" },
      { id: 27, name: "27" },
      { id: 28, name: "28" },
      { id: 29, name: "29" },
      { id: 30, name: "30" },
      { id: 31, name: "31" },
    ],
  },
  {
    id: 2,
    name: "Month",
    example: 5,
    selectedDate: "",
    menuData: [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
      { id: 3, name: "3" },
      { id: 4, name: "4" },
      { id: 5, name: "5" },
      { id: 6, name: "6" },
      { id: 7, name: "7" },
      { id: 8, name: "8" },
      { id: 9, name: "9" },
      { id: 10, name: "10" },
      { id: 11, name: "11" },
      { id: 12, name: "12" },
    ],
  },
  {
    id: 3,
    name: "Year",
    example: 1998,
    selectedDate: "",
    menuData: [
      { id: 1, name: "1990" },
      { id: 2, name: "1991" },
      { id: 3, name: "1992" },
      { id: 4, name: "1993" },
      { id: 5, name: "1994" },
      { id: 6, name: "1995" },
      { id: 7, name: "1996" },
      { id: 8, name: "1997" },
      { id: 9, name: "1998" },
      { id: 10, name: "1999" },
      { id: 11, name: "2000" },
      { id: 12, name: "2001" },
      { id: 13, name: "2002" },
      { id: 14, name: "2003" },
      { id: 15, name: "2004" },
      { id: 16, name: "2005" },
      { id: 17, name: "2006" },
      { id: 18, name: "2007" },
      { id: 19, name: "2008" },
      { id: 20, name: "2009" },
      { id: 21, name: "2010" },
      { id: 22, name: "2011" },
      { id: 23, name: "2012" },
      { id: 24, name: "2013" },
      { id: 25, name: "2014" },
      { id: 26, name: "2015" },
      { id: 27, name: "2016" },
      { id: 28, name: "2017" },
      { id: 29, name: "2018" },
      { id: 30, name: "2019" },
      { id: 31, name: "2020" },
      { id: 32, name: "2021" },
      { id: 33, name: "2022" },
      { id: 34, name: "2023" },
      { id: 35, name: "2024" },
    ],
  },
];

const PersonalInforamtion = () => {
  const t = useTranslations();
  const [data, setData] = useState(birthData);
  const [gender, setGender] = useState<string>("female");
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);

  const handleGenderChange = (value: string) => {
    setGender(value);
  };

  const handleMenuChange = (value: number | null) => {
    setSelectedMenu(value);
  };

  const handleDateChange = (value: string) => {
    setData((prevState) =>
      prevState.map((item) => {
        if (item.id === selectedMenu) {
          handleMenuChange(null);
          return { ...item, selectedDate: value };
        }

        return item;
      })
    );
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-0 mt-6 md:mt-8">
      <div className="p-4 md:p-6 bg-white profile-width-70 rounded-xl flex flex-col gap-6">
        {/* upload image */}
        <div className="pb-[52px] border-b border-b-cloud flex justify-center">
          <div className="relative rounded-full border border-white w-[170px] h-[170px]">
            <Image
              src="/assets/images/profile/pro-info.png"
              alt="pro"
              width={170}
              height={170}
              className="w-[170px] h-[170px] rounded-full"
            />
            <label
              htmlFor="profile-image"
              className="cursor-pointer bg-primary rounded-full p-3 absolute left-0 right-0 mx-auto w-fit -bottom-5"
            >
              <input
                type="file"
                id="profile-image"
                className="w-full h-full hidden"
              />
              <UploadImgIcon />
            </label>
          </div>
        </div>

        {/* info data */}
        <div className="flex flex-col gap-5 md:gap-8 pb-6 border-b border-b-cloud">
          <div className="flex flex-col md:flex-row gap-5 md:gap-4 w-full">
            <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
              <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                {t("First Name")}
              </p>
              <input
                type="text"
                className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                placeholder={t("Ahlam")}
              />
            </div>
            <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
              <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                {t("Last Name")}
              </p>
              <input
                type="text"
                className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                placeholder={t("Muhammad")}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <PhoneExtension className="bg-cloud" />
            <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
              <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                {t("Phone Number")}
              </p>
              <input
                type="text"
                className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                placeholder="551222XXX"
              />
            </div>
          </div>

          <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
            <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
              {t("Email Address")}
            </p>
            <input
              type="text"
              className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
              placeholder="ahlam@gmail.com"
            />
          </div>
        </div>

        {/* birth */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-sm capitalize">{t("date of birth")}</p>
          <div className="flex items-center gap-2 md:gap-4">
            {data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleMenuChange(item.id)}
                className="cursor-pointer bg-cloud px-4 py-3 flex justify-between items-center rounded-xl text-asphalt w-full relative"
              >
                <div>
                  <p className="text-[10px] md:text-sm">{t(item.name)}</p>
                  <p className="text-sm md:text-base opacity-70">
                    {item.selectedDate
                      ? item.selectedDate
                      : t("Such as:") + " " + item.example}
                  </p>
                </div>
                <ArrowDown20 />

                {selectedMenu === item.id && (
                  <Menu
                    className="!min-w-full"
                    items={item.menuData}
                    onChange={(value) => handleDateChange(value)}
                    onClose={() => handleMenuChange(null)}
                    isRounded
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* gender */}
        <div className="text-sm flex flex-col gap-2">
          <p className="font-bold">{t("Gender")}</p>
          <div className="flex w-full gap-2 md:gap-4">
            <div
              className="w-full bg-cloud p-4 flex items-center justify-between rounded-xl text-asphalt cursor-pointer"
              onClick={() => handleGenderChange("female")}
            >
              <p
                className={`${gender === "female" && "text-primary font-bold"}`}
              >
                {t("Female")}
              </p>
              <Checkbox
                checked={gender === "female" ? true : false}
                className="!p-0"
                icon={<UnCheckboxIcon />}
                checkedIcon={<CheckboxIcon />}
              />
            </div>
            <div
              className="w-full bg-cloud p-4 flex items-center justify-between rounded-xl text-asphalt cursor-pointer"
              onClick={() => handleGenderChange("male")}
            >
              <p className={`${gender === "male" && "text-primary font-bold"}`}>
                {t("Male")}
              </p>
              <Checkbox
                checked={gender === "male" ? true : false}
                className="!p-0"
                icon={<UnCheckboxIcon />}
                checkedIcon={<CheckboxIcon />}
              />
            </div>
          </div>
        </div>

        {/* button */}
        <button className="p-4 bg-primary flex items-center justify-center rounded-full w-full text-white font-bold mt-2">
          {t("Update")}
        </button>
      </div>
    </div>
  );
};

export default PersonalInforamtion;
