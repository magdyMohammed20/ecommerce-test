"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/navigation";

import {
  FavIcon,
  FollowersIcon,
  InfoIcon,
  LocationIcon,
  LogoutIcon,
  NotificationIcon,
  OrdersIcon,
  PaymentIcon,
  ReturnsIcon,
  ReviewsIcon,
  VideoIcon,
  WalletIcon,
} from "../../../../../public/assets/svg/profile";
import {
  EarnsSVG,
  MyOrders,
  StatsSVG,
} from "../../../../../public/assets/svg/influencer";

interface Props {
  name: string;
  link: string;
  tab: string;
  icon: any;
}

const CustomNavLink = ({ name, icon, link, tab }: Props) => {
  const locale = useLocale();

  return (
    <Link
      href={`/profile?tab=${link}`}
      className={`p-2 flex items-center gap-4 font-bold rounded-full cursor-pointer relative ${
        tab === link ? "bg-cloud" : "text-asphalt"
      }`}>
      <div
        className={`rounded-full p-3  ${
          tab === link ? "bg-primary" : "bg-cloud"
        }`}>
        {icon}
      </div>
      <p>{name}</p>

      {tab === link && (
        <div
          className={`absolute bg-primary rounded-e-[9px] h-10 w-1 top-3 ${
            locale === "ar" ? "-right-4" : "-left-4"
          }`}></div>
      )}
    </Link>
  );
};

const SideBar = ({ tab }: { tab: string }) => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div className="bg-white rounded-lg w-full max-w-[318px] p-4 hidden lg:flex flex-col gap-2">
      {/* account coontainer */}
      <div className="pb-2 border-b border-b-cloud">
        <div className="px-2 py-4 flex justify-between items-start">
          <div className="flex gap-3 items-start">
            <Image
              alt="profile"
              src="/assets/images/profile/profile.png"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full border border-white object-cover"
            />
            <div>
              <p className="font-bold">{t("Ahlam Mohamed")}</p>
              <p className="text-asphalt" dir="ltr">
                +966 56 758 7854
              </p>
            </div>
          </div>

          <Link
            href="/profile?tab=notifications"
            className=" cursor-pointer p-3 rounded-full bg-cloud">
            <p className="relative">
              <NotificationIcon />
              <span
                className="absolute w-4 h-4 rounded-full flex items-center justify-center rtl:left-[-2px]
              ltr:right-[-2px] top-[-4px] bg-[#FF527B] border border-white font-bold text-white text-[10px]">
                3
              </span>
            </p>
          </Link>
        </div>
      </div>

      {/* personal info */}
      <div className="pb-2 border-b border-b-cloud">
        <Link
          href="/profile?tab=personal_information"
          className={`p-2 flex items-center gap-4 font-bold rounded-full cursor-pointer relative ${
            tab === "personal_information" ? "bg-cloud" : "text-asphalt"
          }`}>
          <div
            className={`rounded-full p-3  ${
              tab === "personal_information" ? "bg-primary" : "bg-cloud"
            }`}>
            <InfoIcon
              color={tab === "personal_information" ? "white" : "#455560"}
            />
          </div>
          <p>{t("Personal Information")}</p>

          {tab === "personal_information" && (
            <div
              className={`absolute bg-primary rounded-e-[9px] h-10 w-1 top-3 ${
                locale === "ar" ? "-right-4" : "-left-4"
              }`}></div>
          )}
        </Link>
      </div>

      {/* navlinks */}
      <div className="flex flex-col gap-4 py-4">
        <CustomNavLink
          name={t("my files and videos")}
          link="my-files-and-videos"
          tab={tab}
          icon={
            <VideoIcon
              color={tab === "my-files-and-videos" ? "white" : "#455560"}
            />
          }
        />

        <CustomNavLink
          name={t("shopping orders")}
          link="marketing_requests"
          tab={tab}
          icon={
            <MyOrders
              color={tab === "marketing_requests" ? "white" : "#455560"}
            />
          }
        />
        <CustomNavLink
          name={t("earns")}
          link="earns"
          tab={tab}
          icon={<EarnsSVG color={tab === "earns" ? "white" : "#455560"} />}
        />

        <CustomNavLink
          name={t("statistics")}
          link="statistics"
          tab={tab}
          icon={<StatsSVG color={tab === "statistics" ? "white" : "#455560"} />}
        />
        <div className="pt-2 border-t border-b-cloud"></div>

        <CustomNavLink
          name={t("Orders")}
          link="orders"
          tab={tab}
          icon={<OrdersIcon color={tab === "orders" ? "white" : "#455560"} />}
        />
        <CustomNavLink
          name={t("My Returns")}
          link="returns"
          tab={tab}
          icon={<ReturnsIcon color={tab === "returns" ? "white" : "#455560"} />}
        />
        <CustomNavLink
          name={t("Reviews")}
          link="reviews"
          tab={tab}
          icon={<ReviewsIcon color={tab === "reviews" ? "white" : "#455560"} />}
        />
        <CustomNavLink
          name={t("Addresses")}
          link="addresses"
          tab={tab}
          icon={
            <LocationIcon color={tab === "addresses" ? "white" : "#455560"} />
          }
        />
        <CustomNavLink
          name={t("My Wallet")}
          link="my_wallet"
          tab={tab}
          icon={
            <WalletIcon color={tab === "my_wallet" ? "white" : "#455560"} />
          }
        />
        <CustomNavLink
          name={t("Payment Methods")}
          link="payment_method"
          tab={tab}
          icon={
            <PaymentIcon
              color={tab === "payment_method" ? "white" : "#455560"}
            />
          }
        />
        <CustomNavLink
          name={t("My WishList")}
          link="favorites"
          tab={tab}
          icon={<FavIcon color={tab === "favorites" ? "white" : "#455560"} />}
        />
        <CustomNavLink
          name={t("Followers")}
          link="followers"
          tab={tab}
          icon={
            <FollowersIcon color={tab === "followers" ? "white" : "#455560"} />
          }
        />
      </div>

      {/* logout */}
      <div className="pt-2 border-t border-b-cloud">
        <div className="px-2 py-6 flex items-center gap-4 font-bold cursor-pointer text-asphalt">
          <div className="rounded-full p-3 bg-cloud">
            <LogoutIcon />
          </div>
          <p>{t("Log Out")}</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
