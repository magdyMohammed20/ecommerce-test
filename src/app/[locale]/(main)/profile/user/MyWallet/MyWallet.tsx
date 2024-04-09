import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";

import {
  MoneyCard,
  ResendMoney,
} from "../../../../../../../public/assets/svg/profile";

const data = [1, 2, 3, 4, 5, 6];

const MyWallet = () => {
  const t = useTranslations();
  const lang = useLocale();
  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full mt-6 md:mt-8 lg:mt-0">
      <div className="w-full px-4 md:px-8 lg:px-0 flex flex-col gap-6 md:gap-8">
        <div className="py-[24px] px-[16px] md:px-[24px]  flex items-center justify-between rounded-12 bg-white">
          <div className="flex items-center gap-[8px] md:gap-[16px]">
            <div className="bg-cloud rounded-full p-[9px] md:p-[14px]">
              <Image
                alt="money"
                src="/assets/images/profile/money.png"
                width={46}
                height={46}
                className="w-[33px] md:w-[46px] h-[33px] md:h-[46px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-[2px] md:gap-[8px]">
              <p className="text-asphalt text-16">{t("My Wallet")}</p>
              <p className="font-bold text-24">100 {t("SAR")}</p>
            </div>
          </div>
          <button className="btn-primary !w-[180px] !hidden lg:!flex">
            {t("Add balance")}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="hidden md:block">
              <MoneyCard width="24" height="24" />
            </span>
            <span className="md:hidden">
              <MoneyCard width="20" height="20" />
            </span>
            <p className="font-bold text-20 mt-1">{t("Transactions")}</p>
          </div>

          <div className="grid xl:grid-cols-2 gap-2 md:gap-4">
            {data.map((item, index) => (
              <div
                key={item}
                className="bg-white flex flex-col gap-4 p-4 md:p-6 rounded-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ResendMoney />
                    <p className="  text-asphalt font-bold mt-1">
                      {t("Refund")}
                    </p>
                  </div>

                  <p className="font-bold">100 {t("SAR")}</p>
                </div>

                <div
                  className={`p-3 grid ${
                    index < 2 ? "grid-cols-3" : "grid-cols-2"
                  } items-center rounded-12 bg-cloud text-xs md:text-sm text-asphalt text-center`}>
                  {index < 2 && (
                    <div className="flex flex-col gap-2">
                      <p className="opacity-70  text-[12px]">
                        {t("Order number")}:
                      </p>
                      <p className="font-[700] text-[12px] md:text-[14px]">
                        0393939
                      </p>
                    </div>
                  )}

                  <div
                    className={`flex flex-col gap-2 ${
                      index >= 2
                        ? lang == "ar"
                          ? "border-l"
                          : "border-r"
                        : "border-x"
                    } border-silver/50`}>
                    <p className="opacity-70">{t("Date")}:</p>
                    <p className="font-[700] text-[12px] md:text-[14px]">
                      {t("May 31, 2023")}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="opacity-70">{t("Status")}:</p>
                    <p className="font-[700] text-[12px] md:text-[14px] ">
                      {t("Cancelling order")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 w-full bg-white py-6 px-4 border-t border-silver/50 lg:hidden">
        <button className="btn-primary">{t("Add balance")}</button>
      </div>
    </div>
  );
};

export default MyWallet;
