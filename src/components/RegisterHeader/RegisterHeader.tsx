"use client";

import { useRouter, usePathname } from "@/navigation";
import { useTranslations, useLocale } from "next-intl";

import Image from "next/image";
import { HelpIcon } from "../../../public/assets/svg/companyRegister";

const RegisterHeader = () => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations();
  const pathname = usePathname();

  const handleLocaleChange = () => {
    const lang = locale === "ar" ? "en" : "ar";
    router.push(pathname, { locale: lang });
  };

  return (
    <div className="bg-primary py-4">
      <div className="global-padding flex items-center justify-between">
        <Image
          alt="logo"
          src="/assets/svg/header-white-logo.svg"
          width={200}
          height={41}
        />

        <div className="flex items-center gap-6 text-white font-bold">
          <div className="flex items-center gap-2 border-asphalt rtl:pl-6 rtl:border-l ltr:pr-6 ltr:border-r">
            <HelpIcon />
            <p>{t("Help")}</p>
          </div>
          <p onClick={handleLocaleChange} className="cursor-pointer">
            {t("English2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterHeader;
