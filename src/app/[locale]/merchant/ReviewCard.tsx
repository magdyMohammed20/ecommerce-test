import { useTranslations } from "next-intl";

import Image from "next/image";

import StarRate from "@/components/StarRate/StarRate";

import {
  MerchantCart,
  MerchantWatch,
} from "../../../../public/assets/svg/footerSvgs";

const images = [1, 2, 3];

const ReviewCard = () => {
  const t = useTranslations();

  return (
    <div className="bg-white p-4 md:p-6 flex flex-col gap-4 rounded-xl">
      <div className="flex flex-col gap-2">
        <StarRate rate={5} starSize={18} />
        <div className="flex items-center gap-2 text-asphalt text-xs md:text-sm">
          <p className="ltr:pr-2 rtl:pl-2 ltr:border-r rtl:border-l border-r-asphalt/20">
            {t("Ahlam Mohamed")}
          </p>
          <p>{t("May 31, 2023")}</p>
        </div>
      </div>

      <p className="text-sm">{t("merchant_1")}</p>

      <div className="flex items-center gap-2">
        {images.map((image) => (
          <div
            key={image}
            className="w-[83px] md:w-[138px] h-[83px] md:h-[138px] rounded-lg overflow-hidden"
          >
            <Image
              alt="product"
              src="/assets/images/product/product-1.png"
              width={138}
              height={138}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 md:gap-4 text-asphalt text-sm pb-2 md:pb-4 border-b border-silver/70">
        <p>
          {t("Size")}:{" "}
          <span className="font-bold text-primary">{t("suitable")}</span>
        </p>
        <p className="px-2 md:px-4 border-silver border-x">
          {t("Weight")}: <span className="font-bold text-primary">45kg</span>
        </p>
        <p>
          {t("Length")}: <span className="font-bold text-primary">170cm</span>
        </p>
      </div>

      <div className="rounded-lg p-2 md:p-3 bg-cloud/50 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <Image
            src="/assets/images/product/product-1.png"
            alt="product"
            width={46}
            height={60}
            className="w-[46px] h-[60px] object-cover rounded"
          />

          <div className="flex flex-col gap-2">
            <p className="text-asphalt text-sm line-clamp-1">
              {t("sports shoes")} Carina Street Blossom..
            </p>
            <p className="text-18 font-bold">
              {120.99} {t("SAR")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-2 md:p-3 bg-silver/70 rounded-full cursor-pointer">
            <span className="hidden md:block"><MerchantWatch width="24" height="24" /></span>
            <span className="md:hidden"><MerchantWatch width="16" height="16" /></span>
          </div>
          <div className="p-2 md:p-3 bg-primary rounded-full cursor-pointer">
            <span className="hidden md:block"><MerchantCart width="24" height="24" /></span>
            <span className="md:hidden"><MerchantCart width="16" height="16" /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
