import { useTranslations } from "next-intl";

import Link from "next/link";

import {
  AccountMenu1,
  AccountMenu2,
  AccountMenu3,
  AccountMenu4,
  AccountMenu5,
  AccountMenu6,
} from "../../../public/assets/svg/headerSvgs";

interface Props {
  name: string;
  link: string;
  icon: any;
}

const CustomNavLink = ({ name, icon, link }: Props) => {
  return (
    <Link
      href={`/profile?tab=${link}`}
      className="py-3 px-2 flex items-center gap-4 rounded-lg hover:bg-cloud cursor-pointer text-asphalt hover:font-bold">
      {icon}
      <p>{name}</p>
    </Link>
  );
};

const AccountMenu = () => {
  const t = useTranslations();

  return (
    <div className="absolute top-[110%] ltr:-right-5 rtl:-left-5 w-[280px] bg-white p-4 flex flex-col gap-1 rounded-xl z-20 shadow-lg border border-cloud">
      <div className="pb-1 border-b border-b-cloud">
        <Link
          href="/profile?tab=personal_information"
          className="py-3 px-2 flex items-center gap-4 rounded-lg hover:bg-cloud cursor-pointer text-asphalt hover:font-bold">
          <AccountMenu1 />
          <p>{t("Personal Information")}</p>
        </Link>
      </div>
      <CustomNavLink name={t("Orders")} link="orders" icon={<AccountMenu2 />} />

      <CustomNavLink
        name={t("Addresses")}
        link="addresses"
        icon={<AccountMenu3 />}
      />
      <CustomNavLink
        name={t("My WishList")}
        link="favorites"
        icon={<AccountMenu4 />}
      />
      <CustomNavLink
        name={t("Fav Videos")}
        link="videos"
        icon={<AccountMenu5 />}
      />
      <div className="pt-1 border-t border-t-cloud">
        <div className="py-3 px-2 flex items-center gap-4 rounded-lg hover:bg-cloud cursor-pointer text-asphalt hover:font-bold">
          <AccountMenu6 />
          <p>{t("Log Out")}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
