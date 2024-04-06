"use client";

import { usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowLeftIconSvg,
  FacebookIconSvg,
  InstagramIconSvg,
  LinkedInIconSvg,
  MadaIconSvg,
  MasterIconSvg,
  SnapchatIconSvg,
  TwitterIconSvg,
  VisaIconSvg,
} from "../../../public/assets/svg/footerSvgs";

const socialMedia = [
  {
    id: 1,
    icon: <FacebookIconSvg />,
    link: "",
  },
  {
    id: 2,
    icon: <TwitterIconSvg />,
    link: "",
  },
  {
    id: 3,
    icon: <InstagramIconSvg />,
    link: "",
  },
  {
    id: 4,
    icon: <SnapchatIconSvg />,
    link: "",
  },
  {
    id: 5,
    icon: <LinkedInIconSvg />,
    link: "",
  },
];

const infoPages = [
  {
    id: 1,
    name: "Learn more about us",
    pages: [
      {
        id: 1,
        name: "who are we",
        link: "",
      },
      {
        id: 2,
        name: "Contact us",
        link: "",
      },
      {
        id: 3,
        name: "Start selling",
        link: "",
      },
      {
        id: 4,
        name: "Be influential",
        link: "",
      },
      {
        id: 5,
        name: "Traders portal",
        link: "",
      },
    ],
  },
  {
    id: 2,
    name: "Center & Help",
    pages: [
      {
        id: 1,
        name: "How to order",
        link: "",
      },
      {
        id: 2,
        name: "Shipping information",
        link: "",
      },
      {
        id: 3,
        name: "Frequently asked questions",
        link: "",
      },
      {
        id: 4,
        name: "privacy policy",
        link: "",
      },
      {
        id: 5,
        name: "terms of use",
        link: "",
      },
    ],
  },
];

const Footer = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const isCheck = pathname === "/profile";
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <div className="w-full bg-primary">
      <div
        className={`w-full px-4 sm:px-8 global-slider-padding pt-[40px] lg:pt-[100px] ${
          tab == "earns" && "hidden lg:block"
        }
    ${isCheck && "hidden lg:block"}
    `}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-1 mb-[64px] w-full">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-[10px] text-center lg:text-start items-center lg:items-start">
              <Image
                alt="logo"
                src="/assets/svg/white-logo.svg"
                width={250}
                height={30}
                className="w-full h-full max-w-[196px] max-h-[22px] md:max-w-[248px] md:max-h-[28px] mb-[13px] mt-[9px]"
                loading="lazy"
              />
              <p className="w-full max-w-[345px] text-silver text-sm leading-[22.5px]">
                {t("footer_1")}
              </p>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start mb-8">
              {socialMedia.map((item) => (
                <Link
                  href={item.link}
                  target="_blank"
                  key={item.id}
                  className="flex items-center justify-center p-2 md:p-3 rounded-full bg-white/20 hover:bg-secondary duration-500">
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {infoPages.map((item) => (
            <div
              key={item.id}
              className="hidden lg:flex flex-col gap-4 capitalize">
              <h1 className="text-white font-bold leading-5">{t(item.name)}</h1>
              {item.pages.map((page) => (
                <Link
                  href={page.link}
                  key={page.id}
                  className="flex items-center gap-1 text-silver hover:text-secondary duration-300 ease-in-out">
                  <ArrowLeftIconSvg />
                  <p className="text-sm">{t(page.name)}</p>
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-10 text-white font-bold leading-5">
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <p>{t("Subscribe with us to receive fashion news and offers")}</p>

              <div className="w-full max-w-[330px] h-[56px] flex items-center gap-3 justify-between px-4 rounded-full bg-white">
                <input
                  type="text"
                  placeholder={t("Enter your email address")}
                  className="bg-transparent border-0 focus:outline-none text-asphalt text-sm w-full"
                />
                <button className="font-medium bg-primary flex items-center justify-center py-2 px-3 rounded-full">
                  {t("Subscribe")}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p>{t("Shop wherever you are")}</p>

              <div className="flex items-center gap-3">
                <Link href={""}>
                  <Image
                    alt="logo"
                    src="/assets/images/footer/google-play.png"
                    width={102}
                    height={34}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <Link href={""}>
                  <Image
                    alt="logo"
                    src="/assets/images/footer/app-store.png"
                    width={102}
                    height={34}
                    className="w-full h-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-t-silver/30 flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-start gap-[10px] md:justify-between py-4">
          <div className="text-silver text-xs leading-5">
            <p>
              {t("All Rights Reserved")} &copy; Sam valley{" "}
              {new Date().getFullYear()}
            </p>
            <p>
              {t("Commercial Registry")} 1068783009 {t("Tax number")}{" "}
              38884655292903
            </p>
          </div>

          <div className="flex items-center gap-5">
            <MadaIconSvg />
            <MasterIconSvg />
            <VisaIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
