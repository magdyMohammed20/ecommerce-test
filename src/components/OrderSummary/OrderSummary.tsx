import { useTranslations } from "next-intl";

const OrderSummary = () => {
  const t = useTranslations();

  return (
    <div className="bg-white rounded-xl p-4 lg:p-6 flex flex-col gap-4 lg:gap-6">
      <p className="lg:text-[20px] font-bold">{t("Order summary")}</p>
      <div className="flex items-center justify-between py-3 px-4 bg-cloud rounded-lg shadow-sm gap-4">
        <div className="flex flex-col gap-1 text-asphalt text-sm w-full">
          <p>{t("Discount code")}</p>
          <input
            type="text"
            placeholder={t("Such as:") + " JUSTAPP50"}
            className="w-full bg-transparent focus:outline-none text-base"
          />
        </div>
        <button className="bg-primary py-3 px-4 rounded-lg text-white font-bold text-sm">
          {t("Apply")}
        </button>
      </div>
      <div className="pt-6 border-t border-t-cloud flex flex-col gap-4">
        <div className="flex items-center justify-between text-sm">
          <p className="text-asphalt">{t("Subtotal")}</p>
          <p>302 {t("SAR")}</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <p className="text-asphalt">{t("Shipping fees")}</p>
          <p>19.57 {t("SAR")}</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <p className="text-asphalt">{t("Wallet balance")}</p>
          <p className="font-bold text-[#FA285A]">-100 {t("SAR")}</p>
        </div>
        <div className="flex items-center justify-between text-sm pb-4 border-b border-b-cloud">
          <p className="text-asphalt">{t("Discount")} 50%</p>
          <p className="font-bold text-[#FA285A]">-160.78 {t("SAR")}</p>
        </div>
        <div className="flex items-center justify-between lg:text-lg font-bold">
          <p>
            {t("Total")}{" "}
            <span className="text-asphalt text-xs">({t("VAT included")})</span>
          </p>
          <p>160.78 {t("SAR")}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
