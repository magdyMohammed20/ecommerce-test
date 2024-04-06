"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { CustomSwitch } from "@/utils/CustomSwitch";
import {
  FrinedIcon,
  HomeIcon,
  MapIcon,
  ProductClose,
  PublicIcon,
  WorkIcon,
} from "../../../public/assets/svg/checkoutSvg";

interface Props {
  onClose: () => void;
  onSave?: () => void;
}

const addressType = [
  {
    id: 1,
    name: "Home",
    icon: {
      light: <HomeIcon color="white" />,
      dark: <HomeIcon color="#455560" />,
    },
  },
  {
    id: 2,
    name: "Work",
    icon: {
      light: <WorkIcon color="white" />,
      dark: <WorkIcon color="#455560" />,
    },
  },
  {
    id: 3,
    name: "Friend",
    icon: {
      light: <FrinedIcon color="white" />,
      dark: <FrinedIcon color="#455560" />,
    },
  },
  {
    id: 4,
    name: "Public",
    icon: {
      light: <PublicIcon color="white" />,
      dark: <PublicIcon color="#455560" />,
    },
  },
];

const AddressMenu = ({ onClose, onSave }: Props) => {
  const t = useTranslations();
  const [selectedType, setSelectedType] = useState<number>(1);

  const handleTypeChange = (id: number) => {
    setSelectedType(id);
  };

  const handleSubmit = () => {
    onSave && onSave();
    onClose();
  };

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-40">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[92%] rounded-t-2xl md:rounded-[20px] p-5 md:p-8 w-full max-w-[660px] flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("Delivery Address")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 flex flex-col gap-4 rounded-xl">
          <p className="font-bold text-sm md:text-base">
            {t("Your location on the map")}
          </p>
          <div className="flex flex-col gap-2">
            <iframe
              src="https://maps.google.com/maps?q=0,0&z=15&output=embed"
              className="w-full h-[145px] rounded-2xl border-none"
            ></iframe>
            <div className="flex items-center gap-1">
              <MapIcon />
              <p className="text-asphalt text-[10px] md:text-sm">
                {t("You can edit your location by clicking on the map")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 flex flex-col gap-4 rounded-xl">
          <p className="font-bold text-sm md:text-base">
            {t("Address details")}
          </p>

          <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg">
            <p className="capitalize text-asphalt text-[10px]">
              {t("The recipient's name")}
            </p>
            <input
              type="text"
              className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold"
              placeholder={t("Such as:") + " " + t("Muhammad Yahya")}
            />
          </div>

          <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg">
            <p className="capitalize text-asphalt text-[10px]">{t("City")}</p>
            <input
              type="text"
              className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold"
              placeholder={t("Riyadh")}
            />
          </div>

          <div className="flex gap-2">
            <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
              <p className="capitalize text-asphalt text-[10px]">
                {t("Street")}
              </p>
              <input
                type="text"
                className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full  "
                placeholder={t("King Fahd Road")}
              />
            </div>
            <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
              <p className="capitalize text-asphalt text-[10px]">
                {t("District")}
              </p>
              <input
                type="text"
                className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                placeholder={t("Supreme")}
              />
            </div>
          </div>

          <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg">
            <p className="capitalize text-asphalt text-[10px]">
              {t("Additional details")}{" "}
              <span className="opacity-60">({t("Optional")})</span>
            </p>
            <input
              type="text"
              className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold"
              placeholder={t("Such as:") + " " + t("address-2")}
            />
          </div>
        </div>

        <div className="bg-white p-3 md:p-6 flex flex-col gap-4 rounded-xl">
          <p className="font-bold text-sm md:text-base">
            {t("Title label")}{" "}
            <span className="opacity-60 font-normal text-[10px] md:text-xs">
              ({t("Optional")})
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-1 md:gap-2">
            {addressType.map((type) => (
              <div
                key={type.id}
                onClick={() => handleTypeChange(type.id)}
                className={`cursor-pointer flex items-center p-2 rounded-full
                ${
                  selectedType === type.id
                    ? "bg-primary text-white"
                    : "bg-cloud text-asphalt"
                }
                `}
              >
                <p>
                  {selectedType === type.id ? type.icon.light : type.icon.dark}
                </p>
                <p className="text-16 mx-2">{t(type.name)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-3 md:p-6 flex justify-between rounded-xl">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-sm md:text-base">
              {t("Default address")}
            </p>
            <p className="text-asphalt text-xs md:text-sm">{t("address-1")}</p>
          </div>
          <CustomSwitch />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-primary rounded-full w-full p-4 text-center text-white font-bold"
        >
          {t("Save")}
        </button>
      </div>
    </div>
  );
};

export default AddressMenu;
