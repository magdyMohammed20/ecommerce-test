"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import PhoneExtension from "@/components/PhoneExtension/PhoneExtension";
import {
  CheckboxIcon,
  UnCheckboxIcon,
} from "../../../../../public/assets/svg/checkoutSvg";
import { ArrowDown20 } from "../../../../../public/assets/svg/profile";
import Menu from "@/components/DropDown/Menu";

const menuData = [
  { id: 1, name: "saudi" },
  { id: 2, name: "egypt" },
];
const PersonalInforamtionForm = () => {
  const t = useTranslations();
  const [marketType, setMarketType] = useState<string>("commercial_market");
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [toggleNationMenu, setToggleNationMenu] = useState<boolean>(false);

  const [selectedBusinessLoc, setSelectedBusinessLoc] = useState<string>("");
  const [selectedNation, setSelectedNation] = useState<string>("");

  const handleMenuChange = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleNationMenuChange = () => {
    setToggleNationMenu(!toggleNationMenu);
  };

  const handleMarket = (value: string) => {
    setMarketType(value);
  };

  const handleBusinessChange = (value: string) => {
    setSelectedBusinessLoc(value);
  };

  const handleNationChange = (value: string) => {
    setSelectedNation(value);
  };
  return (
    <div className="  flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 pb-6 ">
        <div>
          <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
            <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
              {t("First Name")}
            </p>
            <input
              type="text"
              className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
              placeholder={t("Ahlam sample")}
            />
          </div>
        </div>
        <div>
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

        <div className="col-span-2">
          <div className="flex gap-2">
            <div className="flex items-center gap-4">
              <PhoneExtension className="bg-cloud" />
            </div>

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
        </div>

        <div className="col-span-2">
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
      </div>
    </div>
  );
};

export default PersonalInforamtionForm;
