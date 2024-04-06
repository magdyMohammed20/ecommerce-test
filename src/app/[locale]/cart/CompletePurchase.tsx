import { useTranslations } from "next-intl";

import Link from "next/link";

import OrderSummary from "@/components/OrderSummary/OrderSummary";

const CompletePurchase = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-6 w-full lg:max-w-[536px]">
      <OrderSummary />

      <Link
        href="/checkout"
        className="bg-primary w-full h-14 hidden lg:flex items-center justify-center rounded-full text-white font-bold"
      >
        {t("Complete Purchase")} (4590 {t("SAR")})
      </Link>

      <div className="bg-white fixed bottom-0 w-full px-[21px] md:px-6 py-6 pb-2 left-0 right-0 lg:hidden z-[9] flex flex-col gap-[21px] items-center">
        <Link
          href="/checkout"
          className="bg-primary w-full p-4 flex items-center justify-center rounded-full text-white font-bold text-base"
        >
          {t("Complete Purchase")} (4590 {t("SAR")})
        </Link>
        <div className="h-[5px] w-[134px] bg-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default CompletePurchase;
