"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Checkbox from "@mui/material/Checkbox";
import { CustomSwitch } from "@/utils/CustomSwitch";

import AddressMenu from "@/components/AddressMenu/AddressMenu";

import {
  AExpressIcon,
  AddressEditIcon,
  ApplePayIcon,
  CashIcon,
  CheckboxIcon,
  MadaIcon,
  MasterIcon,
  StcPayIcon,
  TamaraIcon,
  UnCheckboxIcon,
  VisaIcon,
} from "../../../../public/assets/svg/checkoutSvg";
import { WalletIcon } from "../../../../public/assets/svg/profile";

const paymentMethods = [
  {
    id: 1,
    name: "Apple Pay",
    icons: [<ApplePayIcon />],
  },
  {
    id: 2,
    name: "Credit Card",
    icons: [<VisaIcon />, <MasterIcon />, <AExpressIcon />, <MadaIcon />],
  },
  {
    id: 3,
    name: "Tamara",
    icons: [<TamaraIcon />],
  },
  {
    id: 4,
    name: "STC Pay",
    icons: [<StcPayIcon />],
  },
  {
    id: 5,
    name: "Cash on delivery",
    icons: [<CashIcon />],
  },
];

const addresses = [
  {
    id: 1,
    name: "Home",
    address: "Riyadh - King Fahd Road - Olaya",
  },
  {
    id: 2,
    name: "Work",
    address: "Riyadh - King Fahd Road - Olaya",
  },
];

const AddressPayment = () => {
  const t = useTranslations();
  const [openAddressMenu, setOpenAddressMenu] = useState<boolean>(false);
  const [selectedPayment, setSelectedPayment] = useState<number>(1);

  const handlePaymentChange = (id: number) => {
    setSelectedPayment(id);
  };

  const handleAddressMenu = () => {
    setOpenAddressMenu(!openAddressMenu);
  };

  return (
    <div className="w-full flex flex-col gap-6 text-primary">
      {/* address */}
      <div className="bg-white flex flex-col gap-4 lg:gap-6 p-4 lg:p-6 rounded-xl">
        <p className="text-20">{t("Delivery Address")}</p>

        {addresses.map((item) => (
          <div
            key={item.name}
            className="bg-cloud p-3 lg:p-4 flex justify-between rounded-xl"
          >
            <div className="flex gap-3 lg:gap-4 items-start">
              <Checkbox
                checked={true}
                className="!p-0"
                icon={<UnCheckboxIcon />}
                checkedIcon={<CheckboxIcon />}
              />
              <div className="flex flex-col text-sm gap-1">
                <p className="font-bold">{t(item.name)}</p>
                <p className="text-asphalt">{t(item.address)}</p>
              </div>
            </div>
            <div className="cursor-pointer" onClick={handleAddressMenu}>
              <AddressEditIcon />
            </div>
          </div>
        ))}

        <button
          onClick={handleAddressMenu}
          className={`p-4 w-full rounded-full text-center font-bold ${
            addresses.length > 0
              ? "bg-primary text-white"
              : "bg-silver/70 text-asphalt"
          }`}
        >
          {addresses.length > 0 ? t("Add New Address") : t("Add Address")}
        </button>
      </div>

      {/* payment */}
      <div className="bg-white flex flex-col gap-4 lg:gap-6 p-4 lg:p-6 rounded-xl">
        <div className="flex flex-col gap-2">
          <p className="font-bold lg:text-[20px]">
            {t("Choose a payment method")}
          </p>
          <p className="text-asphalt text-xs lg:text-sm">
            {t("Choose your preferred payment method")}
          </p>
        </div>

        <div className="flex flex-col">
          {paymentMethods.map((method, index) => (
            <div
              key={method.id}
              className={`py-4 flex flex-col w-full gap-6 border-b-silver/30 ${
                index !== paymentMethods.length - 1 && "border-b"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => handlePaymentChange(method.id)}
                >
                  <Checkbox
                    checked={method.id === selectedPayment ? true : false}
                    className="!p-0"
                    icon={<UnCheckboxIcon />}
                    checkedIcon={<CheckboxIcon />}
                  />
                  <p
                    className={`text-sm lg:text-base ${
                      method.id === selectedPayment
                        ? "font-bold"
                        : "text-asphalt"
                    }`}
                  >
                    {t(method.name)}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {method.icons.map((icon, index) => (
                    <div key={index}>{icon}</div>
                  ))}
                </div>
              </div>
              {selectedPayment === 2 && method.id === 2 && (
                <div className="p-3 lg:p-6 flex flex-col gap-4 bg-cloud rounded-xl">
                  <div className="bg-white py-3 px-4 flex flex-col gap-1 rounded-lg">
                    <p className="capitalize text-asphalt text-[10px]">
                      {t("card number")}
                    </p>
                    <input
                      type="text"
                      className="bg-transparent focus:outline-none text-asphalt"
                      placeholder={t("Such as:") + " 0000 0000 0000 0000"}
                    />
                  </div>
                  <div className="bg-white py-3 px-4 flex flex-col gap-1 rounded-lg">
                    <p className="capitalize text-asphalt text-[10px]">
                      {t("Name on the card")}
                    </p>
                    <input
                      type="text"
                      className="bg-transparent focus:outline-none text-asphalt"
                      placeholder={t("Such as:") + " Mohammed Ali"}
                    />
                  </div>
                  <div className="flex items-center gap-3 w-full">
                    <div className="bg-white py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                      <p className="capitalize text-asphalt text-[10px]">
                        {t("Expiry date")}
                      </p>
                      <input
                        type="text"
                        className="bg-transparent focus:outline-none text-asphalt w-full"
                        placeholder={t("month") + " / " + t("year")}
                      />
                    </div>
                    <div className="bg-white py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
                      <p className="capitalize text-asphalt text-[10px]">
                        {t("CVV")}
                      </p>
                      <input
                        type="text"
                        className="bg-transparent focus:outline-none text-asphalt w-full"
                        placeholder={t("Such as:") + " 000"}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* wallet balance */}
      <div className="p-4 md:p-6 flex items-center justify-between rounded-12 bg-white">
        <div className="flex items-center gap-4">
          <span className="p-3 rounded-full bg-cloud">
            <WalletIcon color="#455560" />
          </span>

          <div className="flex flex-col">
            <p className="font-bold">{t("Use wallet balance")}</p>
            <p className="text-sm text-asphalt">100 {t("SAR")}</p>
          </div>
        </div>
        <CustomSwitch />
      </div>

      {openAddressMenu && <AddressMenu onClose={handleAddressMenu} />}
    </div>
  );
};

export default AddressPayment;
