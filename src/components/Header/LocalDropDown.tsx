"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/navigation";

import {
  CountrySvg,
  CurrencySvg,
  GlobalArrowSvg,
  LocaleIconSvg,
  LocaleRightMark,
} from "../../../public/assets/svg/headerSvgs";

import Image from "next/image";

const localeData = [
  {
    id: 1,
    title: "English",
    lng: "en",
  },
  {
    id: 2,
    title: "العربية",
    lng: "ar",
  },
];

const currencyData = [
  {
    id: 1,
    name: "SAR / SR",
  },
  {
    id: 2,
    name: "USD / $",
  },
  {
    id: 3,
    name: "KWD / KWD",
  },
  {
    id: 4,
    name: "AED / AED",
  },
];

interface Country {
  id: number;
  name: string;
  nameInArabic: string;
  flag: any;
}
interface Props {
  countries: Country[];
  selectedCountry: Country;
  onChange: (country: Country) => void;
}

const LocalDropDown = ({ countries, selectedCountry, onChange }: Props) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currency, setCurrency] = useState<string>(currencyData[0].name);
  const [showLocalMenu, setLocalMenu] = useState<boolean>(false);
  const [showCountryMenu, setCountryMenu] = useState<boolean>(false);
  const [showCurrencyMenu, setCurrencyMenu] = useState<boolean>(false);

  const handleMenuChange = () => {
    setLocalMenu(!showLocalMenu);
    setCountryMenu(false);
    setCurrencyMenu(false);
  };

  const handleCurrencyMenuChange = () => {
    setCurrencyMenu(!showCurrencyMenu);
    setCountryMenu(false);
  };

  const handleCountryMenuChange = () => {
    setCountryMenu(!showCountryMenu);
  };

  const handleLocaleChange = (locale: string) => {
    let route = searchParams.get("tab")
      ? pathname +
        "?tab=" +
        searchParams.get("tab")
      : pathname;
    router.push(route, { locale });
  };

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
  };

  return (
    <div className="absolute top-[190%] z-[999] -left-[100px] w-[280px] bg-white p-4 flex flex-col gap-4 rounded-xl  shadow-lg border border-cloud">
      <div
        onClick={handleMenuChange}
        className="py-3 px-2 bg-cloud w-full flex flex-col gap-4 text-asphalt rounded-lg cursor-pointer relative">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <LocaleIconSvg />
            <p className="capitalize font-bold text-sm">{t("language")}</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="capitalize font-normal text-xs">{t("English")}</p>
            <motion.span
              animate={{ rotate: showLocalMenu ? 180 : 0 }}
              transition={{ duration: 0.3 }}>
              <GlobalArrowSvg />
            </motion.span>
          </div>
        </div>

        {showLocalMenu && (
          <div className="flex flex-col gap-1 absolute bg-white p-2 rounded-lg border border-cloud w-full left-0 top-[110%] z-10 text-sm text-asphalt">
            {localeData.map((item) => (
              <div
                key={item.id}
                className="px-2 py-3 flex items-center justify-between rounded-lg hover:bg-cloud group cursor-pointer border-b border-b-cloud"
                onClick={() => handleLocaleChange(item.lng)}>
                <p className="group-hover:font-bold">{item.title}</p>
                <span className="hidden group-hover:block">
                  <LocaleRightMark />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        onClick={handleCurrencyMenuChange}
        className="py-3 px-2 bg-cloud w-full flex flex-col gap-4 text-asphalt rounded-lg cursor-pointer relative">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <CurrencySvg />
            <p className="capitalize font-bold text-sm">{t("Currency")}</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="capitalize font-normal text-xs">{currency}</p>
            <motion.span
              animate={{ rotate: showCurrencyMenu ? 180 : 0 }}
              transition={{ duration: 0.3 }}>
              <GlobalArrowSvg />
            </motion.span>
          </div>
        </div>

        {showCurrencyMenu && (
          <div className="flex flex-col gap-1 absolute bg-white p-2 rounded-lg border border-cloud w-full left-0 top-[110%] z-10 text-sm text-asphalt">
            {currencyData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCurrencyChange(item.name)}
                className="px-2 py-3 flex items-center justify-between rounded-lg hover:bg-cloud group cursor-pointer border-b border-b-cloud">
                <p className="group-hover:font-bold">{item.name}</p>
                <span className="hidden group-hover:block">
                  <LocaleRightMark />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="py-3 px-2 bg-cloud w-full flex flex-col gap-4 text-asphalt rounded-lg cursor-pointer relative">
        <div
          className="flex items-center justify-between w-full"
          onClick={handleCountryMenuChange}>
          <div className="flex items-center gap-2">
            <CountrySvg />
            <p className="capitalize font-bold text-sm">{t("Country")}</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="capitalize font-normal text-xs">
              {locale === "ar"
                ? selectedCountry.nameInArabic
                : selectedCountry.name}
            </p>
            <motion.span
              animate={{ rotate: showCountryMenu ? 180 : 0 }}
              transition={{ duration: 0.3 }}>
              <GlobalArrowSvg />
            </motion.span>
          </div>
        </div>

        {showCountryMenu && (
          <div className="flex flex-col gap-1 absolute bg-white p-2 rounded-lg border border-cloud w-full left-0 top-[110%] z-10 text-sm text-asphalt">
            {countries.map((item) => (
              <div
                key={item.id}
                onClick={() => onChange(item)}
                className="px-2 py-3 flex items-center justify-between rounded-lg hover:bg-cloud group cursor-pointer border-b border-b-cloud">
                <div className="flex items-center gap-1">
                  <Image
                    src={item.flag}
                    alt="flag"
                    width={21}
                    height={14}
                    className="w-[21px] h-[14px] rounded-sm"
                  />
                  <p className="group-hover:font-bold">
                    {locale === "ar" ? item.nameInArabic : item.name}
                  </p>
                </div>
                <span className="hidden group-hover:block">
                  <LocaleRightMark />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalDropDown;
