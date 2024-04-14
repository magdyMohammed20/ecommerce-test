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

const BillingInfoForm = () => {
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
            <h1 className=" font-bold text-20">{t("payment information")}</h1>

            <div className="grid grid-cols-1  gap-8 ">
              <div>
                <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                  <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                    {t("card number")}
                  </p>
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                    placeholder={t("Such as2") + " 0000 0000 0000 0000"}
                  />
                </div>
              </div>

              <div>
                <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                  <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                    {t("Name on the card")}
                  </p>
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                    placeholder={t("Such as2") + "Mohammed Ali"}
                  />
                </div>
              </div>

              <div>
                <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                  <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                    {t("Expiry date")}
                  </p>

                  <input
                    type="text"
                    className="bg-transparent focus:outline-none text-asphalt w-full"
                    placeholder={t("month") + " / " + t("year")}
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

export default BillingInfoForm;
