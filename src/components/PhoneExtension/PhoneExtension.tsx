import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";

import { ArrowDown20, SearchIcon14 } from "../../../public/assets/svg/profile";

const countries = [
  {
    id: 1,
    number: "+966",
    name: "Saudi",
    nameInArabic: "السعوديه",
    flag: "/assets/images/header/flag-1.png",
  },
  {
    id: 2,
    number: "+974",
    name: "Qatar",
    nameInArabic: "قطر",
    flag: "/assets/images/header/flag-2.png",
  },
  {
    id: 3,
    number: "+974",
    name: "UAE",
    nameInArabic: "الإمارات",
    flag: "/assets/images/header/flag-3.png",
  },
  {
    id: 4,
    number: "+974",
    name: "Kuwait",
    nameInArabic: "الكويت",
    flag: "/assets/images/header/flag-4.png",
  },
];

interface Props {
  className: string;
}

const PhoneExtension = ({ className }: Props) => {
  const locale = useLocale();
  const t = useTranslations();
  const menuRef = useRef<any>(null);
  const updownRef = useRef<any>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [openUpwards, setOpenUpwards] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current.contains(e.target) && showMenu) {
        handleMenuChange();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleCountryChange = (country: any) => {
    setSelectedCountry(country);
    handleMenuChange();
  };

  const handleMenuChange = () => {
    if (updownRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      setOpenUpwards(rect.top > screenHeight / 2);
    }
    setShowMenu((prevState) => !prevState);
  };

  return (
    <div
      ref={menuRef}
      className={`${className} py-3 px-4 relative rounded-lg h-[67px] md:h-[73px] cursor-pointer w-full max-w-fit`}
    >
      <div
        ref={updownRef}
        onClick={handleMenuChange}
        className="cursor-pointer flex items-center gap-2 w-full h-full"
      >
        <Image
          src={selectedCountry.flag}
          alt="flag"
          width={24}
          height={16}
          className="w-6 h-4 object-cover rounded-sm"
        />
        <p dir="ltr" className="text-asphalt font-bold text-16">
          {selectedCountry.number}
        </p>
        <ArrowDown20 />
      </div>

      {showMenu && (
        <div
          className={`absolute rtl:right-0 ltr:left-0 w-[217px] p-2 flex flex-col gap-3 rounded-lg shadow-xl bg-white z-40 border border-cloud
        ${openUpwards ? "bottom-[110%]" : "top-[110%]"}
        `}
        >
          <div className="w-full py-3 px-2 flex items-center gap-1 bg-cloud/50 border border-cloud rounded-lg">
            <SearchIcon14 />
            <input
              type="text"
              placeholder={t("Search")}
              className="bg-transparent border-none focus:outline-none w-full text-sm text-asphalt"
            />
          </div>

          <div className="flex flex-col gap-1">
            {countries.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCountryChange(item)}
                className={`cursor-pointer px-2 py-3 flex items-center justify-between rounded-lg text-sm text-asphalt hover:bg-cloud hover:font-bold
              ${selectedCountry.id === item.id && "font-bold bg-cloud"}`}
              >
                <div className="flex items-center gap-1">
                  <Image
                    src={item.flag}
                    alt="flag"
                    width={24}
                    height={16}
                    className="w-[21px] h-[14px] object-cover rounded-sm"
                  />
                  <p>{locale === "ar" ? item.nameInArabic : item.name}</p>
                </div>
                <p>{item.number}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneExtension;
