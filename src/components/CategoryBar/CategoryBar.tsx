"use client";

import { useState } from "react";
import { usePathname } from "@/navigation";
import { useTranslations, useLocale } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import Link from "next/link";

import CategoryMenu from "./CategoryMenu";
import SliderBtn from "../SliderBtn/SliderBtn";
import CategoryMenuMobile from "./CategoryMenuMobile";

import {
  ArrowDownIconSvg,
  CategoryBarArrow,
} from "../../../public/assets/svg/categoryBarSvgs";

const categories = [
  {
    id: 1,
    name: "Men's",
    nameInArabic: "رجالية",
    link: "",
  },
  {
    id: 2,
    name: "Women's",
    nameInArabic: "نسائيه",
    link: "",
  },
  {
    id: 3,
    name: "Health and nutrition",
    nameInArabic: "الصحه والتغذيه",
    link: "",
  },
  {
    id: 4,
    name: "home",
    nameInArabic: "المنزل",
    link: "",
  },
  {
    id: 5,
    name: "games",
    nameInArabic: "الالعاب",
    link: "",
  },
  {
    id: 6,
    name: "Electronics",
    nameInArabic: "الإلكترونيات",
    link: "",
  },
  {
    id: 7,
    name: "Beauty and perfumes",
    nameInArabic: "الجمال والعطور",
    link: "",
  },
  {
    id: 8,
    name: "Health and nutrition",
    nameInArabic: "الصحه والتغذيه",
    link: "",
  },
  {
    id: 9,
    name: "Sports",
    nameInArabic: "الرياضه",
    link: "",
  },
  {
    id: 10,
    name: "Office and school accessories",
    nameInArabic: "إكسسوارات مكتبية ومدرسية",
    link: "",
  },
];

const CategoryBar = () => {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [status, setStatus] = useState<string>("");

  const handleNextSlide = () => {
    setStatus("next");
    setCounter(counter + 1);
  };

  const handlePrevSlide = () => {
    setStatus("prev");
    setCounter(counter + 1);
  };

  const openMenuHandler = (status: boolean) => {
    setOpenMenu(status);
  };

  const openMenuMobileHandler = () => {
    setOpenMenuMobile(!openMenuMobile);
  };

  return (
    <div
      className={`${
        (pathname === "/profile") &&
        "hidden"
      } bg-primary `}
    >
      <div
        className={`w-full global-padding-l-r global-slider-padding py-4 text-white text-sm leading-[14px] flex items-center justify-between gap-2 whitespace-nowrap relative
        ${openMenu && "z-50"}`}
        onMouseLeave={() => openMenuHandler(false)}
      >
        <div className="flex items-center gap-2 w-full overflow-hidden">
          <div
            className="md:flex items-center gap-2 md:gap-[1.111vw] cursor-pointer hover:text-secondary hidden"
            onMouseEnter={() => openMenuHandler(true)}
            onClick={openMenuMobileHandler}
          >
            <p>{t("All Categories")}</p>
            <ArrowDownIconSvg />
          </div>

          <Swiper
            slidesPerView={"auto"}
            mousewheel={true}
            loop={false}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel]}
            className="h-[23.62px]"
            onMouseEnter={() => openMenuHandler(false)}
          >
            <SliderBtn counter={counter} status={status} />
            {categories.map((item, index) => (
              <SwiperSlide key={item.id} className="!w-fit">
                <Link
                  href={item.link}
                  className={`px-2 md:px-[1.111vw] border-white/50 h-full flex items-center cursor-pointer hover:text-secondary duration-300 ease-in-out
            ${
              index !== categories.length - 1 &&
              (locale === "ar" ? "border-l" : "border-r")
            } ${index === 0 && "md:!border-x"}
            `}
                >
                  <p>{locale === "ar" ? item.nameInArabic : item.name}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lg:flex items-center gap-4 cursor-pointer hidden">
          <span className="ltr:rotate-180" onClick={handlePrevSlide}>
            <CategoryBarArrow />
          </span>
          <span className="rtl:rotate-180" onClick={handleNextSlide}>
            <CategoryBarArrow />
          </span>
        </div>

        {openMenu && <CategoryMenu />}
        <CategoryMenuMobile
          openMenuMobile={openMenuMobile}
          closeMenu={openMenuMobileHandler}
        />
      </div>
      {openMenu && (
        <div
          className="fixed top-0 left-0 w-full min-h-screen bg-primary/20 z-40 hidden lg:block"
          onMouseEnter={() => openMenuHandler(false)}
        ></div>
      )}
    </div>
  );
};

export default CategoryBar;
