"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/navigation";

import Link from "next/link";
import Image from "next/image";

import MobileMenu from "./MobileMenu";

import {
  NotificationIcon,
  VideoIcon,
} from "../../../../public/assets/svg/profile";
import {
  ArrowSvg,
  CurrencySvg,
  FavReelsSvg,
  FavSvg,
  GlobalSvg,
  LangSvg,
  LocationSvg,
  LogOutSvg,
  OrdersSvg,
  PaySvg,
  ReturnsSvg,
  ReviewsSvg,
  SettingSvg,
} from "../../../../public/assets/svg/sidebar";
import {
  MyOrders,
  EarnsSVG,
  StatsSVG,
} from "../../../../public/assets/svg/influencer";

interface Props {
  name: string;
  icon: any;
  tab?: string;
  id?: number;
  isBorder?: boolean;
  img?: string;
}

const CustomContainer = ({ name, icon, tab, isBorder, img }: Props) => {
  const t = useTranslations();

  return (
    <Link
      href={`/profile?tab=${tab}`}
      className={`flex items-center justify-between w-full py-2 px-4 border-cloud text-asphalt ${
        isBorder && "border-b"
      }`}>
      <div className="flex items-center gap-4">
        <span className="p-3 rounded-full bg-cloud">{icon}</span>
        <p className="font-bold text-sm capitalize">{name}</p>
      </div>

      <div className="flex items-center">
        {name === t("language") && <p className="text-xs">{t("English")}</p>}
        {img && (
          <Image
            src={img}
            alt="flag"
            width={16}
            height={16}
            className="w-4 h-4 object-cover"
          />
        )}
        <span className="ltr:rotate-180">
          <ArrowSvg />
        </span>
      </div>
    </Link>
  );
};

const influencerLinks = [
  {
    id: 1,
    name: "my files and videos",
    tab: "my-files-and-videos",
    icon: <VideoIcon color="#455560" width="20" />,
  },
  {
    id: 2,
    name: "shopping orders",
    tab: "marketing_requests",
    icon: <MyOrders color="#455560" width="20" />,
  },
  {
    id: 3,
    name: "earns",
    tab: "earns",
    icon: <EarnsSVG color="#455560" width="20" />,
  },
  {
    id: 4,
    name: "statistics",
    tab: "statistics",
    icon: <StatsSVG color="#455560" width="20" />,
  },
];

const links = [
  {
    id: 1,
    name: "Orders",
    tab: "orders",
    icon: <OrdersSvg />,
  },
  {
    id: 2,
    name: "My Returns",
    tab: "returns",
    icon: <ReturnsSvg />,
  },
  {
    id: 3,
    name: "Reviews",
    tab: "reviews",
    icon: <ReviewsSvg />,
  },
  {
    id: 4,
    name: "Addresses",
    tab: "addresses",
    icon: <LocationSvg />,
  },
  {
    id: 5,
    name: "My WishList",
    tab: "favorites",
    icon: <FavSvg />,
  },
  {
    id: 6,
    name: "Fav Videos",
    tab: "videos",
    icon: <FavReelsSvg />,
  },
  {
    id: 7,
    name: "Payment Methods",
    tab: "payment_method",
    icon: <PaySvg />,
  },
];

const countries = {
  title: "Country",
  items: [
    {
      id: 1,
      name: "Saudi",
      nameInArabic: "السعوديه",
      flag: "/assets/images/header/flag-1.png",
    },
    {
      id: 2,
      name: "Qatar",
      nameInArabic: "قطر",
      flag: "/assets/images/header/flag-2.png",
    },
    {
      id: 3,
      name: "UAE",
      nameInArabic: "الإمارات",
      flag: "/assets/images/header/flag-3.png",
    },
    {
      id: 4,
      name: "Kuwait",
      nameInArabic: "الكويت",
      flag: "/assets/images/header/flag-4.png",
    },
  ],
};

const localeData = {
  title: "language",
  items: [
    {
      id: 1,
      name: "English",
      lang: "en",
    },
    {
      id: 2,
      name: "العربية",
      lang: "ar",
    },
  ],
};

const currencyData = {
  title: "Currency",
  items: [
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
  ],
};

const MobileSideBar = () => {
  const router = useRouter();
  const t = useTranslations();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openMenuCurrancy, setOpenMenuCurrancy] = useState<boolean>(false);
  const [openMenuCountries, setOpenMenuCountries] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("SAR / SR");

  const handleMenuChange = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const handleMenuCurrencyChange = () => {
    setOpenMenuCurrancy((prevState) => !prevState);
  };

  const handleMenuCountriesChange = () => {
    setOpenMenuCountries((prevState) => !prevState);
  };

  const handleLangChange = (item: any) => {
    router.push(pathname, { locale: item.lang });
  };

  return (
    <div className="w-full flex flex-col gap-4 lg:hidden px-[13px] pt-6">
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-start">
          <Image
            alt="profile"
            src="/assets/images/profile/profile.png"
            width={46}
            height={46}
            className="w-12 h-12 rounded-full border border-white object-cover"
          />
          <div className="text-asphalt">
            <p className="font-bold">{t("Ahlam Mohamed")}</p>
            <p className="text-[10px]" dir="ltr">
              +966 56 758 7854
            </p>
          </div>
        </div>

        <Link
          href="/profile?tab=notifications"
          className="relative cursor-pointer">
          <NotificationIcon />
          <div
            className="absolute w-4 h-4 rounded-full flex items-center justify-center rtl:left-[-2px]
              ltr:right-[-2px] top-[-4px] bg-[#FF527B] border border-white font-bold text-white text-[10px]">
            3
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-lg">
        <CustomContainer
          name={t("account settings")}
          tab="personal_information"
          icon={<SettingSvg />}
        />
      </div>

      <div className="bg-white rounded-lg flex flex-col">
        {influencerLinks.map((link, index) => (
          <CustomContainer
            id={link.id}
            name={t(link.name)}
            tab={link.tab}
            icon={link.icon}
            isBorder={index !== links.length - 1 ? true : false}
          />
        ))}
      </div>

      <div className="bg-white rounded-lg flex flex-col">
        {links.map((link, index) => (
          <CustomContainer
            id={link.id}
            name={t(link.name)}
            tab={link.tab}
            icon={link.icon}
            isBorder={index !== links.length - 1 ? true : false}
          />
        ))}
      </div>

      <div className="bg-white rounded-lg flex flex-col">
        <div
          onClick={handleMenuChange}
          className="cursor-pointer flex items-center justify-between w-full py-2 px-4 border-cloud text-asphalt border-b">
          <div className="flex items-center gap-4">
            <span className="p-3 rounded-full bg-cloud">
              <LangSvg />
            </span>
            <p className="font-bold text-sm capitalize">{t("language")}</p>
          </div>

          <div className="flex items-center cursor-pointer">
            <p className="text-xs">{t("English")}</p>
            <span className="ltr:rotate-180">
              <ArrowSvg />
            </span>
          </div>
        </div>

        <div
          onClick={handleMenuCurrencyChange}
          className="cursor-pointer flex items-center justify-between w-full py-2 px-4 border-cloud text-asphalt border-b">
          <div className="flex items-center gap-4">
            <span className="p-3 rounded-full bg-cloud">
              <CurrencySvg />
            </span>
            <p className="font-bold text-sm capitalize">{t("Currency")}</p>
          </div>

          <div className="flex items-center cursor-pointer">
            <p className="text-xs">{selectedCurrency}</p>
            <span className="ltr:rotate-180">
              <ArrowSvg />
            </span>
          </div>
        </div>

        <div
          onClick={handleMenuCountriesChange}
          className="cursor-pointer flex items-center justify-between w-full py-2 px-4 text-asphalt">
          <div className="flex items-center gap-4">
            <span className="p-3 rounded-full bg-cloud">
              <GlobalSvg />
            </span>
            <p className="font-bold text-sm capitalize">{t("Country")}</p>
          </div>

          <div className="flex items-center cursor-pointer">
            <p className="text-xs">{}</p>
            <span className="ltr:rotate-180">
              <ArrowSvg />
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg">
        <CustomContainer name={t("Log Out")} tab="" icon={<LogOutSvg />} />
      </div>

      {openMenu && (
        <MobileMenu
          onClose={handleMenuChange}
          data={localeData}
          onSave={handleLangChange}
        />
      )}
      {openMenuCurrancy && (
        <MobileMenu
          onClose={handleMenuCurrencyChange}
          data={currencyData}
          onSave={(item) => {
            setSelectedCurrency(item.name);
            handleMenuCurrencyChange();
          }}
        />
      )}
      {openMenuCountries && (
        <MobileMenu
          onClose={handleMenuCountriesChange}
          data={countries}
          onSave={handleMenuCountriesChange}
        />
      )}
    </div>
  );
};

export default MobileSideBar;
