"use client";

import { usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

import { Link } from "@/navigation";

import {
  CartBtn,
  CartBtnDark,
  CategoriesBtn,
  CategoriesBtnDark,
  HomeBtn,
  HomeBtnDark,
  ProfileBtn,
  ProfileBtnDark,
  ReelsBtn,
  ReelsBtnDark,
} from "../../../public/assets/svg/navigationBar";

const links = [
  {
    id: 1,
    name: "Home",
    icon: {
      dark: <HomeBtnDark />,
      light: <HomeBtn />,
    },
    link: "/",
  },
  {
    id: 2,
    name: "Cart",
    icon: {
      dark: <CartBtnDark />,
      light: <CartBtn />,
    },
    link: "/cart",
  },
  {
    id: 3,
    name: "Watch",
    icon: {
      dark: <ReelsBtnDark />,
      light: <ReelsBtn />,
    },
    link: "/reels",
  },
  {
    id: 4,
    name: "Sections",
    icon: {
      dark: <CategoriesBtnDark />,
      light: <CategoriesBtn />,
    },
    link: "/sections",
  },
  {
    id: 5,
    name: "Profile",
    icon: {
      dark: <ProfileBtnDark />,
      light: <ProfileBtn />,
    },
    link: "/profile",
  },
];

const data = ["/", "/cart", "/reels", "/sections", "/profile"];

const NavigationBar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const params = useSearchParams();
  const isShow = params.get("tab") ? false : data.includes(pathname);

  return ( isShow ? 
    <div className="pb-4 px-4 fixed bottom-0 inset-x-0 bg-white z-40 whitespace-nowrap md:hidden">
      <div className="grid grid-cols-5 justify-between">
        {links.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="px-2 flex flex-col gap-1 items-center text-[10px]"
          >
            <p
              className={`max-w-[66px] w-full h-[3px] rounded-b-[10px] mb-3 ${
                pathname === item.link ? "bg-primary" : "bg-transparent"
              }`}
            />
            <span>
              {pathname === item.link ? item.icon.dark : item.icon.light}
            </span>
            <p
              className={`${
                pathname === item.link ? "font-bold" : " text-asphalt"
              }`}
            >
              {t(item.name)}
            </p>
          </Link>
        ))}
      </div>
    </div> : null
  );
};

export default NavigationBar;
