import { useTranslations } from "next-intl";

import Image from "next/image";

const RemainingProduct = ({
  disableDiscount,
  removeRemain,
}: {
  disableDiscount?: Boolean;
  removeRemain?: Boolean;
}) => {
  const t = useTranslations();
  return (
    <div className="p-3 flex items-center gap-4 rounded-xl bg-cloud">
      <div className="w-full max-w-[54px] h-[66px] rounded-lg overflow-hidden">
        <Image
          alt="product"
          src="/assets/images/product/product-1.png"
          width={54}
          height={66}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        {!removeRemain && (
          <div className="px-2 py-[2px] rounded-full bg-[#FCEAEE] w-fit mb-1">
            <p className="font-bold text-[10px] text-[#E42E59]">
              {t("Remaining")} 2
            </p>
          </div>
        )}

        <p className="text-asphalt text-xs">
          {t("This text is an example that can be replaced")}
        </p>
        <div className="flex items-center gap-[10px]">
          <p className="price-text lg:!text-xs">
            {!disableDiscount && <del className="price-text-del">240.99</del>}
            <span>120.99 {t("SAR")}</span>
          </p>
          {!disableDiscount && (
            <div className="bg-secondary py-[2px] px-1 rounded-[2px]">
              <p className="text-primary text-[10px] lg:text-sm font-bold">
                50%
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RemainingProduct;
