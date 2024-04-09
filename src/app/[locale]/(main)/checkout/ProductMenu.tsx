import { useTranslations } from "next-intl";

import Image from "next/image";

import { ProductClose } from "../../../../../public/assets/svg/checkoutSvg";

interface Props {
  onClose: () => void;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ProductMenu = ({ onClose }: Props) => {
  const t = useTranslations();

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-40">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[92%] rounded-t-2xl max-h-[668px] md:rounded-[20px] p-5 md:p-8 w-full max-w-[660px] flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("Review Products")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>

        {data.map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-3 items-start justify-between text-asphalt text-sm">
            <div className="flex gap-4">
              <Image
                alt="product"
                src="/assets/images/product/product-1.png"
                width={84}
                height={86}
                className="rounded-lg w-[52px] md:w-[84px] h-[52px] md:h-[86px] object-cover"
              />
              <div className="flex flex-col gap-2">
                <p>{t("address-3")}</p>
                <div className="hidden md:flex items-center gap-4">
                  <div className="rounded-full bg-cloud flex items-center gap-1 p-1 pr-2 text-xs">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#8F7D7A]"></div>
                    <p>{t("brown")}</p>
                    <p className="text-silver">/</p>
                    <p>xs</p>
                  </div>
                  <p className="text-xs">1x</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="price-text">
                    <del className="price-text-del">240.99</del>
                    <span>120.99 {t("SAR")}</span>
                  </p>
                  <div className="bg-secondary rounded py-[2px] px-1 md:px-2">
                    <p className="text-primary font-bold">50%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-cloud py-2 px-4 cursor-pointer w-full md:w-fit text-center">
              <p className="font-bold">{t("Save for later")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMenu;
