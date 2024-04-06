import { useTranslations, useLocale } from "next-intl";

import { ArrowRightIconSvg } from "../../../public/assets/svg/categoryBarSvgs";

const ViewAllHeader = ({ title }: { title: string }) => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div className="flex items-center justify-between w-full font-bold global-padding">
      <p className="text-34">{t(title)}</p>
      <div className="flex items-center gap-1 cursor-pointer text-asphalt duration-500 hover:gap-4">
        <p className="text-16 hidden md:block">{t("View all")}</p>
        <ArrowRightIconSvg />
      </div>
    </div>
  );
};

export default ViewAllHeader;
