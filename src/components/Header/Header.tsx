"use client";

import { usePathname } from "@/navigation";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";

import Link from "next/link";
import Image from "next/image";
import { getCookie } from "@/app/actions";

import SearchMenu from "./SearchMenu";
import AccountMenu from "./AccountMenu";
import LocalDropDown from "./LocalDropDown";
import LoginRegister from "./LoginRegister";
import CartToolTip from "../CartToolTip/CartToolTip";
import CategoryMenuMobile from "../CategoryBar/CategoryMenuMobile";

import {
  SearchIconSvg,
  WishListIconSvg,
  CartIconSvg,
  MenuIconSvg,
  SearchExitIconSvg,
  ProfileArrowDown,
  WishListIconSvgWhite,
  CartIconSvgWhite,
  ProfileArrowDownWhite,
  MenuIconSvgWhite,
  SearchIconSvgWhite,
  PersonIconSvg,
} from "../../../public/assets/svg/headerSvgs";
import { Arrow24 } from "../../../public/assets/svg/categoryBarSvgs";

const countries = [
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
];

const data = ["/", "/cart", "/reels", "/sections", "/profile"];

const Header = () => {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();
  const isCheck = pathname === "/profile";
  const params = useSearchParams();
  const isShow = params.get("tab") ? false : data.includes(pathname);
  const localeRef = useRef<any>(null);
  const accountRef = useRef<any>(null);
  const accountMobileRef = useRef<any>(null);
  const [showCart, setShowCart] = useState<string>("");
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<boolean>(false);
  const [openLangMenu, setOpenLangMenu] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  const [openAccountMenu, setOpenAccountMenu] = useState<boolean>(false);
  const [openAccountMenuMobile, setOpenAccountMenuMobile] =
    useState<boolean>(false);

  useEffect(() => {
    let handler = (e: any) => {
      if (!localeRef.current?.contains(e.target) && openLangMenu) {
        openLangMenuHandler();
      } else if (!accountRef.current?.contains(e.target) && openAccountMenu) {
        openAccountMenuHandler();
      } else if (
        !accountMobileRef.current?.contains(e.target) &&
        openAccountMenuMobile
      ) {
        openAccountMenuHandlerMobile();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    const getCart = async () => {
      const showCart = await getCookie("cart");
      setShowCart(showCart);
    };

    getCart();
  }, []);

  const openLangMenuHandler = () => {
    setOpenLangMenu(!openLangMenu);
  };

  const openAccountMenuHandler = () => {
    setOpenAccountMenu(!openAccountMenu);
  };

  const openAccountMenuHandlerMobile = () => {
    setOpenAccountMenuMobile(!openAccountMenuMobile);
  };

  const openSearchHandler = () => {
    setOpenSearch(!openSearch);
  };

  const handleCountryChange = (country: any) => {
    openLangMenuHandler();
    setSelectedCountry(country);
  };

  const openLoginHandler = () => {
    setOpenLogin(!openLogin);
  };

  const openMenuMobileHandler = () => {
    setOpenMenuMobile(!openMenuMobile);
  };

  return (
    <header
      className={`w-full ${
        isCheck ? "bg-white md:bg-primary" : "bg-primary md:bg-white"
      }`}
    >
      <div className="py-4 global-slider-padding hidden lg:flex justify-between items-center w-full text-asphalt relative">
        <Link href="/">
          <Image
            alt="logo"
            src={
              isCheck
                ? "/assets/svg/header-white-logo.svg"
                : "/assets/svg/logo.svg"
            }
            width={200}
            height={41}
            className="w-full h-full"
            loading="lazy"
          />
        </Link>

        <div className="flex items-center gap-7">
          <div
            className={`flex items-center justify-between gap-2 rounded-full py-3 px-6  w-[29vw] relative  
          ${searchInput ? "bg-white z-20" : isCheck ? "bg-white" : "bg-cloud"}`}
          >
            <div className="flex items-center gap-2 w-full">
              <SearchIconSvg />
              <input
                type="text"
                placeholder={t("what did you search for?")}
                onFocus={() => setSearchInput(true)}
                onBlur={() => setSearchInput(false)}
                className="bg-transparent w-full border-0 focus:outline-none text-sm text-opacity-70 max-w-[477px]"
              />
              {searchInput && <SearchMenu />}
            </div>
            {searchInput && (
              <div
                className="cursor-pointer opacity-50"
                onClick={() => setSearchInput(false)}
              >
                <SearchExitIconSvg />
              </div>
            )}
          </div>

          <div
            ref={localeRef}
            className="flex items-center gap-1 cursor-pointer relative border-silver/70 h-6 rtl:pr-7 rtl:border-r ltr:pl-7 ltr:border-l"
          >
            <div
              className="flex items-center gap-1"
              onClick={openLangMenuHandler}
            >
              <Image
                src={selectedCountry.flag}
                alt="flag"
                width={21}
                height={14}
                className="w-[21px] h-[14px] rounded-sm object-cover"
              />
              <p
                className={`capitalize font-bold text-xs ${
                  isCheck && "text-white"
                }`}
              >
                {locale === "ar"
                  ? selectedCountry.nameInArabic
                  : selectedCountry.name}
              </p>
            </div>
            {openLangMenu && (
              <LocalDropDown
                countries={countries}
                onChange={handleCountryChange}
                selectedCountry={selectedCountry}
              />
            )}
          </div>

          <div className="flex items-center gap-4 px-7 border border-silver/70 h-6 border-t-transparent border-b-transparent">
            <Link href="/search-experience" className="cursor-pointer">
              {isCheck ? <WishListIconSvgWhite /> : <WishListIconSvg />}
            </Link>
            <Link href="/cart" className="cursor-pointer relative">
              {isCheck ? <CartIconSvgWhite /> : <CartIconSvg />}

              <div className="absolute w-4 h-4 rounded-full flex items-center justify-center left-[-4px] top-[-8px] bg-[#FF527B] border border-white font-bold text-white text-[10px]">
                5
              </div>
              {showCart && <CartToolTip />}
            </Link>
          </div>

          {/* <button
            onClick={openLoginHandler}
            className={`${
              isCheck ? "bg-secondary text-primary" : "bg-primary text-white"
            } flex items-center gap-1 rounded-full font-bold py-3 px-4 whitespace-nowrap`}
          >
            <PersonIconSvg color="#01010C" />
            <p>{t("Register")}</p>
          </button> */}

          <div
            ref={accountRef}
            className={`p-1 flex items-center gap-2 rounded-full h-full cursor-pointer relative ltr:pr-2 rtl:pl-2 ${
              isCheck ? "bg-white/20" : "bg-cloud"
            }`}
            onClick={openAccountMenuHandler}
          >
            <Image
              alt="profile"
              src="/assets/images/header/profile.png"
              width={40}
              height={40}
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="text-center">
              <p
                className={`text-[10px] ${
                  isCheck ? "text-silver" : "text-asphalt"
                }`}
              >
                {t("Hello")} {t("Haneen Al Bishri!")}
              </p>
              <p
                className={`text-sm font-bold capitalize ${
                  isCheck ? "text-white" : "text-primary"
                }`}
              >
                {t("account")}
              </p>
            </div>
            <div
              className={`w-6 h-6 ${
                isCheck ? "bg-white/20" : "bg-silver/70"
              } rounded-full flex items-center justify-center`}
            >
              {isCheck ? <ProfileArrowDownWhite /> : <ProfileArrowDown />}
            </div>

            {openAccountMenu && <AccountMenu />}
          </div>
        </div>
      </div>

      {openSearch ? (
        <div className="py-4 md:p-6 lg:hidden">
          <div
            className={`flex items-center justify-between gap-2 rounded-full bg-cloud py-3 px-6 w-full relative z-20
          ${openSearch ? "md:bg-white" : "bg-cloud"}`}
          >
            <div className="flex items-center gap-2">
              <SearchIconSvg />
              <input
                type="text"
                placeholder={t("what did you search for?")}
                className="bg-transparent border-0 focus:outline-none text-sm text-opacity-70"
              />
            </div>
            <div
              className="cursor-pointer opacity-50"
              onClick={openSearchHandler}
            >
              <SearchExitIconSvg />
            </div>
            <SearchMenu />
          </div>
        </div>
      ) : (
        <div
          className={`${
            isCheck ? "bg-primary" : "bg-white"
          } p-4 md:py-6 md:px-8 flex justify-between items-center lg:hidden rounded-b-lg md:rounded-none`}
        >
          <div className="flex items-center gap-[10px]">
            {isShow ? (
              <div onClick={openMenuMobileHandler} className="cursor-pointer">
                {isCheck ? <MenuIconSvgWhite /> : <MenuIconSvg />}
              </div>
            ) : (
              <Link href={"/"}>
                <span className="ltr:rotate-180">
                  <Arrow24 color={isCheck ? "white" : "#455560"} />
                </span>
              </Link>
            )}
            <Link href="/search-experience" className="hidden md:block">
              {isCheck ? <WishListIconSvgWhite /> : <WishListIconSvg />}
            </Link>
          </div>

          <Link href="/">
            <Image
              alt="logo"
              src={
                isCheck
                  ? "/assets/svg/header-white-logo.svg"
                  : "/assets/svg/logo.svg"
              }
              width={155}
              height={32}
              className="w-[112px] h-[23px] md:w-[155px] md:h-[32px]"
              loading="lazy"
            />
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            {!isShow && (
              <Link
                href="/cart"
                className="cursor-pointer px-2 border-silver rtl:border-l ltr:border-l md:hidden"
              >
                {isCheck ? <CartIconSvgWhite /> : <CartIconSvg />}
              </Link>
            )}
            <div className="cursor-pointer" onClick={openSearchHandler}>
              {isCheck ? <SearchIconSvgWhite /> : <SearchIconSvg />}
            </div>
            <Link
              href="/cart"
              className="cursor-pointer px-4 border border-silver/30 border-t-transparent border-b-transparent hidden md:block"
            >
              <div className="relative">
                {isCheck ? <CartIconSvgWhite /> : <CartIconSvg />}

                <div className="absolute w-4 h-4 rounded-full flex items-center justify-center left-[-4px] top-[-8px] bg-[#FF527B] border border-white font-bold text-white text-[10px]">
                  5
                </div>
              </div>
            </Link>
            <div
              ref={accountMobileRef}
              className="hidden md:block relative"
              onClick={openAccountMenuHandlerMobile}
            >
              {/* <MobilePersonIconSvg /> */}
              <Image
                alt="profile"
                src="/assets/images/header/profile.png"
                width={32}
                height={32}
                className="w-8 h-8 object-cover rounded-full"
              />
              {openAccountMenuMobile && <AccountMenu />}
            </div>
          </div>
        </div>
      )}

      {(searchInput || openSearch) && (
        <div className="bg-primary/20 fixed top-0 bottom-0 w-full min-h-screen z-10 hidden md:block"></div>
      )}

      {openLogin && <LoginRegister onClose={openLoginHandler} />}

      <CategoryMenuMobile
        openMenuMobile={openMenuMobile}
        closeMenu={openMenuMobileHandler}
      />
    </header>
  );
};

export default Header;
